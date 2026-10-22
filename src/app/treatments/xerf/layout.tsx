import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XERF Skin Tightening",
  description:
    "XERF (Extended Energy Radio Frequency) is a non-invasive, medical-grade skin-tightening and lifting treatment. Dual-frequency monopolar radiofrequency is customised to your skin thickness at The Jaishree Sharad Clinic, Mumbai.",
  alternates: {
    canonical: "/treatments/xerf",
  },
  openGraph: {
    title: "XERF Skin Tightening | The Jaishree Sharad Clinic",
    description:
      "Non-invasive skin tightening and lifting with dual-frequency monopolar radiofrequency. Settings are adjusted to your skin, not a fixed protocol.",
    url: "/treatments/xerf",
  },
};

export default function XerfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
