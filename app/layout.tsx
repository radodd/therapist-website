import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Copyright from "@/sections/Copyright";

export const metadata: Metadata = {
  title: {
    default: "Gen Fulton | Psychotherapist & Performance Coach",
    template: "%s | Gen Fulton Consultancy",
  },
  description:
    "Gen Fulton offers psychotherapy and performance coaching for stress, burnout, perfectionism, and sports performance. Specializing in Somatic Experiencing, CBT, and Emotionally Focused Therapy.",
  metadataBase: new URL("https://genfulton.com"),
  openGraph: {
    siteName: "Gen Fulton Consultancy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen Fulton | Psychotherapist & Performance Coach",
    description:
      "Gen Fulton offers psychotherapy and performance coaching for stress, burnout, perfectionism, and sports performance.",
    images: ["/opengraph-image.png"],
  },
};

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<body className={openSans.className}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          <Analytics />
        </main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
