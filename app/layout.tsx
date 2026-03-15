import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Aura Wellness — Tampa Bay's Health & Wellness Destination",
  description:
    "Aura Wellness in Tampa, FL offers Medical Weight Loss, CoolSculpting®, Telehealth, and Hormone Replacement Therapy. Serving Tampa Bay and surrounding areas. Call (813) 755-4461.",
  keywords: [
    "aura wellness",
    "medical weight loss Tampa",
    "CoolSculpting Tampa Bay",
    "telehealth wellness",
    "hormone therapy Tampa FL",
    "weight loss clinic Tampa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Analytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
