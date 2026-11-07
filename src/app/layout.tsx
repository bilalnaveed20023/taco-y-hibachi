import type { Metadata, Viewport } from "next";
import { Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/content";

const display = Archivo({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["wdth"] });
const mono = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Taco Y Hibachi · Tacos & Hibachi in Southwest Detroit";
const description =
  "Steak tacos, hibachi plates and street quesadillas from a food truck on Vernor Hwy in Detroit. Open daily 11 AM to 11 PM. 4.9 stars on Google.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3080"),
  title,
  description,
  applicationName: "Taco Y Hibachi",
  keywords: ["Detroit food truck", "tacos Detroit", "hibachi Detroit", "Southwest Detroit tacos", "Vernor Hwy tacos"],
  openGraph: {
    type: "website",
    siteName: "Taco Y Hibachi",
    title,
    description,
    locale: "en_US",
    images: [{ url: asset("/img/og.jpg"), width: 1200, height: 630, alt: "The Taco Y Hibachi truck and chef logo" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1d1713",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
