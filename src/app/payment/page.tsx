"use client";

import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Copy, ExternalLink, Link as LinkIcon, MessageCircle } from "lucide-react";

type FormState = {
  amount: string;
  currency: string;
  paymentFor: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  referenceId: string;
  expiryDateTime: string;
  notesTitle: string;
  notesDescription: string;
  paymentLinkUrl: string;
};

type PaymentLinkItem = {
  id: string;
  short_url: string;
  status: string;
  amount: number;
  amount_paid?: number;
  currency: string;
  customer?: { name?: string; contact?: string; email?: string };
  reference_id?: string;
  created_at?: number;
};

const initialState: FormState = {
  amount: "",
  currency: "INR",
  paymentFor: "",
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  referenceId: "",
  expiryDateTime: "",
  notesTitle: "",
  notesDescription: "",
  paymentLinkUrl: "",
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function normalizePhone(value: string) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  return digits.length <= 10 ? `91${digits}` : digits;
}

export default function PaymentPage() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [copied, setCopied] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const [showLogs, setShowLogs] = useState(false);
  const [paymentLinks, setPaymentLinks] = useState<PaymentLinkItem[]>([]);
  const [isLoadingLinks, setIsLoadingLinks] = useState(false);
  const [linksError, setLinksError] = useState("");

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await fetch("/api/payment/access", { cache: "no-store" });
        const data = await response.json();
        setIsAuthorized(Boolean(data?.authorized));
      } catch {
        setAuthError("Unable to verify access. Please refresh and try again.");
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAccess();
  }, []);

  const payload = useMemo(() => {
    const amountInPaise = Math.round(Number(form.amount || 0) * 100);
    return {
      amount: Number.isFinite(amountInPaise) ? amountInPaise : 0,
      currency: form.currency,
      description: form.paymentFor || undefined,
      customer: {
        name: form.customerName || undefined,
        email: form.customerEmail || undefined,
        contact: digitsOnly(form.customerPhone) || undefined,
      },
      notify: {
        sms: Boolean(form.customerPhone),
        email: Boolean(form.customerEmail),
      },
      reference_id: form.referenceId || undefined,
      expire_by: form.expiryDateTime
        ? Math.floor(new Date(form.expiryDateTime).getTime() / 1000)
        : undefined,
      notes: {
        title: form.notesTitle || undefined,
        description: form.notesDescription || undefined,
      },
    };
  }, [form]);

  const whatsappMessage = useMemo(() => {
    const lines = [
      `Hello ${form.customerName || "Patient"},`,
      "",
      "Your payment link details:",
      `Amount: ${form.currency} ${form.amount || "-"}`,
      `Payment for: ${form.paymentFor || "-"}`,
      `Reference ID: ${form.referenceId || "-"}`,
      form.paymentLinkUrl ? `Payment Link: ${form.paymentLinkUrl}` : "Payment Link: [add generated Razorpay link]",
      "",
      "Please complete the payment at your earliest convenience.",
      "Thank you.",
    ];
    return lines.join("\n");
  }, [form]);

  const waMeLink = useMemo(() => {
    const phone = normalizePhone(form.customerPhone);
    if (!phone) return "";
    return `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
  }, [form.customerPhone, whatsappMessage]);

  const copyText = async (value: string, key: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(""), 1400);
  };

  const handleCreatePaymentLink = async () => {
    setServerMessage("");
    const amountInPaise = Math.round(Number(form.amount || 0) * 100);

    if (!amountInPaise || amountInPaise < 100) {
      setServerMessage("Please enter a valid amount (minimum INR 1).");
      return;
    }

    setIsCreating(true);
    try {
      const payloadToSend = {
        ...payload,
        // Razorpay requires notes values to be strings.
        notes: {
          title: form.notesTitle || "",
          description: form.notesDescription || "",
        },
      };

      const response = await fetch("/api/razorpay/payment-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadToSend),
      });

      const data = await response.json();

      if (!response.ok) {
        setServerMessage(data?.error || "Unable to create payment link. Try again later.");
        return;
      }

      setForm((prev) => ({ ...prev, paymentLinkUrl: data.short_url || "" }));
      if (data.short_url) {
        await copyText(data.short_url, "payment-link");
      }
      await fetchPaymentLinks();
      setServerMessage("Payment link created successfully.");
    } catch {
      setServerMessage("Unable to create payment link right now.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleUnlock = async () => {
    setAuthError("");
    if (!password.trim()) {
      setAuthError("Please enter the password.");
      return;
    }

    setIsUnlocking(true);
    try {
      const response = await fetch("/api/payment/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }),
      });
      const data = await response.json();
      if (!response.ok || !data?.authorized) {
        setAuthError(data?.error || "Incorrect password.");
        return;
      }
      setIsAuthorized(true);
      setPassword("");
    } catch {
      setAuthError("Unable to unlock right now. Please try again.");
    } finally {
      setIsUnlocking(false);
    }
  };

  const fetchPaymentLinks = async () => {
    setLinksError("");
    setIsLoadingLinks(true);
    try {
      const response = await fetch("/api/razorpay/payment-link", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) {
        setLinksError(data?.error || "Unable to fetch payment links.");
        return;
      }
      setPaymentLinks(Array.isArray(data?.items) ? data.items : []);
    } catch {
      setLinksError("Unable to fetch payment links.");
    } finally {
      setIsLoadingLinks(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchPaymentLinks();
    }
  }, [isAuthorized]);

  const formatMoney = (amountInPaise: number, currencyCode: string) => {
    const safeAmount = Number.isFinite(amountInPaise) ? amountInPaise : 0;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currencyCode || "INR",
      maximumFractionDigits: 2,
    }).format(safeAmount / 100);
  };

  const formatDate = (unix?: number) => {
    if (!unix) return "-";
    return new Date(unix * 1000).toLocaleString("en-IN");
  };

  const getStatusTone = (status: string) => {
    const normalized = status.toLowerCase();
    if (normalized === "paid") return "bg-green-100 text-green-700";
    if (normalized === "cancelled" || normalized === "expired") return "bg-red-100 text-red-700";
    if (normalized === "partially_paid") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-pastel-pink/10 via-white to-pastel-green/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {isCheckingAuth ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-gray-700">Checking access...</p>
            </div>
          ) : !isAuthorized ? (
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h1 className="font-display text-2xl font-bold text-gray-800">Internal Payment Access</h1>
              <p className="text-sm text-gray-600 mt-2">Enter password to view the payment page.</p>
              <div className="mt-6 space-y-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                />
                <button
                  type="button"
                  onClick={handleUnlock}
                  disabled={isUnlocking}
                  className="w-full rounded-lg bg-pastel-pink text-white px-4 py-2 text-sm font-medium hover:bg-pastel-pink/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isUnlocking ? "Unlocking..." : "Unlock"}
                </button>
                {authError ? <p className="text-sm text-red-600">{authError}</p> : null}
              </div>
            </div>
          ) : (
          <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100">
              <h1 className="font-display text-3xl font-bold text-gray-800">Internal Payment Link Builder</h1>
              <p className="mt-2 text-gray-600">
                Create Razorpay payment-link input details and instantly generate a WhatsApp (`wa.me`) link.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                {[
                  ["amount", "Amount", "e.g. 2500"],
                  ["currency", "Currency", "INR"],
                  ["paymentFor", "Payment For", "Treatment advance"],
                  ["customerName", "Customer Name", "Patient name"],
                  ["customerEmail", "Customer Email", "name@email.com"],
                  ["customerPhone", "Customer Phone (use +91 prefix)", "e.g. +919769691957"],
                  ["referenceId", "Reference ID", "Internal booking id"],
                  ["expiryDateTime", "Link Expiry (Leave blank for no expiry)", ""],
                  ["notesTitle", "Notes Title", "Branch / doctor"],
                  ["notesDescription", "Notes Description", "Any internal context"],
                ].map(([key, label, placeholder]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input
                      type={key === "customerEmail" ? "email" : key === "expiryDateTime" ? "datetime-local" : "text"}
                      value={form[key as keyof FormState]}
                      onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleCreatePaymentLink}
                  disabled={isCreating}
                  className="w-full rounded-lg bg-pastel-pink text-white px-4 py-2 text-sm font-medium hover:bg-pastel-pink/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isCreating ? "Creating Payment Link..." : "Create Razorpay Payment Link"}
                </button>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Generated Razorpay Payment Link URL</label>
                  <input
                    type="text"
                    value={form.paymentLinkUrl}
                    readOnly
                    placeholder="https://rzp.io/..."
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-50"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={form.paymentLinkUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      form.paymentLinkUrl
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-gray-100 text-gray-400 pointer-events-none"
                    }`}
                  >
                    Open Link <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(form.paymentLinkUrl, "payment-link")}
                    disabled={!form.paymentLinkUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {copied === "payment-link" ? "Copied" : "Copy"} <Copy className="w-4 h-4" />
                  </button>
                  <a
                    href={waMeLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      waMeLink
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-100 text-gray-400 pointer-events-none"
                    }`}
                  >
                    WhatsApp <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
                {serverMessage ? <p className="text-sm text-gray-700">{serverMessage}</p> : null}
              </div>

              <div className="space-y-6">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowLogs((prev) => !prev)}
                    className="text-xs px-3 py-1.5 rounded border border-gray-200 bg-white hover:bg-gray-50"
                  >
                    {showLogs ? "Hide Logs" : "Show Logs"}
                  </button>
                </div>

                {showLogs ? (
                  <>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" /> Razorpay Payload Preview
                    </h2>
                    <button
                      onClick={() => copyText(JSON.stringify(payload, null, 2), "payload")}
                      className="text-xs px-2 py-1 rounded bg-white border border-gray-200 hover:bg-gray-100"
                      type="button"
                    >
                      <Copy className="w-3 h-3 inline mr-1" />
                      {copied === "payload" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <pre className="text-xs text-gray-700 overflow-auto max-h-64 whitespace-pre-wrap">
                    {JSON.stringify(payload, null, 2)}
                  </pre>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Link
                    </h2>
                    <button
                      onClick={() => copyText(waMeLink, "wa")}
                      className="text-xs px-2 py-1 rounded bg-white border border-gray-200 hover:bg-gray-100"
                      type="button"
                    >
                      <Copy className="w-3 h-3 inline mr-1" />
                      {copied === "wa" ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 break-all">{waMeLink || "Enter a phone number to generate link"}</p>
                  {waMeLink ? (
                    <a
                      href={waMeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      Open wa.me Link <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-gray-800">Recent Payments</h2>
              <button
                type="button"
                onClick={fetchPaymentLinks}
                disabled={isLoadingLinks}
                className="text-sm px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                {isLoadingLinks ? "Refreshing..." : "Refresh"}
              </button>
            </div>
            <div className="p-6">
              {linksError ? <p className="text-sm text-red-600 mb-4">{linksError}</p> : null}
              {isLoadingLinks && paymentLinks.length === 0 ? (
                <p className="text-sm text-gray-600">Loading payment links...</p>
              ) : paymentLinks.length === 0 ? (
                <p className="text-sm text-gray-600">No payment links found yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-100">
                        <th className="py-2 pr-4">Date</th>
                        <th className="py-2 pr-4">Customer</th>
                        <th className="py-2 pr-4">Amount</th>
                        <th className="py-2 pr-4">Paid</th>
                        <th className="py-2 pr-4">Status</th>
                        <th className="py-2 pr-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentLinks.map((item) => (
                        <tr key={item.id} className="border-b border-gray-50">
                          <td className="py-3 pr-4 whitespace-nowrap">{formatDate(item.created_at)}</td>
                          <td className="py-3 pr-4">
                            <div className="font-medium text-gray-800">{item.customer?.name || "-"}</div>
                            <div className="text-xs text-gray-500">{item.customer?.contact || item.customer?.email || "-"}</div>
                          </td>
                          <td className="py-3 pr-4 whitespace-nowrap">{formatMoney(item.amount, item.currency)}</td>
                          <td className="py-3 pr-4 whitespace-nowrap">
                            {formatMoney(item.amount_paid || 0, item.currency)}
                          </td>
                          <td className="py-3 pr-4">
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusTone(item.status)}`}>
                              {item.status || "pending"}
                            </span>
                          </td>
                          <td className="py-3 pr-4">
                            <div className="flex gap-2">
                              <a
                                href={item.short_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700"
                              >
                                Open <ExternalLink className="w-3 h-3" />
                              </a>
                              <button
                                type="button"
                                onClick={() => copyText(item.short_url, item.id)}
                                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
                              >
                                {copied === item.id ? "Copied" : "Copy"} <Copy className="w-3 h-3" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
