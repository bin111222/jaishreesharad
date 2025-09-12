import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LightModeEnforcer from "@/components/LightModeEnforcer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Skinfinitii - Aesthetic Skin & Laser Clinic | Dr. Jaishree Sharad",
    template: "%s | Skinfinitii"
  },
  description: "Skinfinitii - Leading aesthetic skin & laser clinic in Mumbai. Expert in injectables, skin treatments, and non-surgical procedures. Book your consultation today.",
  keywords: [
    "dermatologist",
    "aesthetic physician", 
    "injectables",
    "botox",
    "fillers",
    "skin treatments",
    "Mumbai",
    "celebrity dermatologist",
    "Dr. Jaishree Sharad"
  ],
  authors: [{ name: "Dr. Jaishree Sharad" }],
  creator: "Dr. Jaishree Sharad",
  publisher: "Dr. Jaishree Sharad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://drjaishreesharad.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Skinfinitii - Aesthetic Skin & Laser Clinic | Dr. Jaishree Sharad",
    description: "Skinfinitii - Leading aesthetic skin & laser clinic in Mumbai. Expert in injectables, skin treatments, and non-surgical procedures.",
    siteName: "Skinfinitii",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Jaishree Sharad - Celebrity Dermatologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skinfinitii - Aesthetic Skin & Laser Clinic | Dr. Jaishree Sharad",
    description: "Skinfinitii - Leading aesthetic skin & laser clinic in Mumbai. Expert in injectables, skin treatments, and non-surgical procedures.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Translogo.png" type="image/png" />
        <link rel="icon" href="/Users/varilshah/Desktop/Clients x 1942/Jaishree Sharad/jaishreesharad/website/public/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body className="min-h-screen bg-white font-body text-gray-800 antialiased">
        <LightModeEnforcer />
        {children}
      </body>
    </html>
  );
}
