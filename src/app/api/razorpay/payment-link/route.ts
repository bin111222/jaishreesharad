import { NextResponse } from "next/server";

type PaymentLinkPayload = {
  amount: number;
  currency: string;
  description?: string;
  customer?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notify?: {
    sms?: boolean;
    email?: boolean;
  };
  reference_id?: string;
  expire_by?: number;
  notes?: Record<string, string | undefined>;
};

function getAuthHeader() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return null;
  }

  return Buffer.from(`${keyId}:${keySecret}`).toString("base64");
}

export async function GET() {
  try {
    const authHeader = getAuthHeader();
    if (!authHeader) {
      return NextResponse.json(
        { error: "Razorpay credentials are not configured on the server." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.razorpay.com/v1/payment_links?count=20&skip=0", {
      method: "GET",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.description || "Failed to fetch payment links.", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({
      items: Array.isArray(data?.items) ? data.items : [],
    });
  } catch (error) {
    console.error("Razorpay payment links fetch error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = getAuthHeader();
    if (!authHeader) {
      return NextResponse.json(
        { error: "Razorpay credentials are not configured on the server." },
        { status: 500 }
      );
    }

    const body: PaymentLinkPayload = await request.json();

    if (!body.amount || body.amount <= 0 || !body.currency) {
      return NextResponse.json(
        { error: "Amount and currency are required." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.razorpay.com/v1/payment_links", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.description || "Failed to create payment link.", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({
      id: data.id,
      short_url: data.short_url,
      status: data.status,
      amount: data.amount,
      currency: data.currency,
      expire_by: data.expire_by,
    });
  } catch (error) {
    console.error("Razorpay payment link error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
