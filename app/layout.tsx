import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Gen Fulton Consultancy",
  description: "Psychotherapy & Coaching",
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
      <head>
        {/* Add Open Graph meta tags */}
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:title" content="Gen Fulton Consultancy" />
        <meta
          property="og:description"
          content="Gen's therapeutic approach focuses on conjointly developing goals that suit your needs to reduce stress and burnout"
        />
        {/* Add more Open Graph meta tags as needed */}
      </head>
      <body className={openSans.className}>
        <main className="relative overflow-hidden">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
