import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-VERCEL-DOMAIN.vercel.app"),

  title: {
    default: "Moving Packer",
    template: "%s | Moving Packer",
  },

  description:
    "Moving Packer provides professional Home Shifting, Office Relocation, Bike Transport, Car Transport, Packing & Unpacking, Local Shifting and Intercity Relocation services across India.",

  keywords: [
    "packers and movers",
    "moving company",
    "home shifting",
    "office relocation",
    "bike transport",
    "car transport",
    "local shifting",
    "intercity relocation",
    "packing services",
    "loading and unloading",
    "packers movers India",
  ],

  authors: [
    {
      name: "Moving Packer",
    },
  ],

  creator: "Moving Packer",

  publisher: "Moving Packer",

  openGraph: {
    title: "Moving Packer",
    description:
      "Professional Packers & Movers across India with safe, reliable and affordable relocation services.",

    url: "https://YOUR-VERCEL-DOMAIN.vercel.app",

    siteName: "Moving Packer",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Moving Packer",

    description:
      "Professional Packers & Movers across India.",

    creator: "@movingpacker",
  },

  robots: {
    index: true,
    follow: true,
  },
};


import Header from "@/components/SelfComponent/Header";
import Footer from "@/components/SelfComponent/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
