import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css"
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "ISGRN - Intelligent Solutions Global Resources Nigeria",
  description:
    "Intelligent Solutions Global Resources Nigeria - Your trusted partner for intelligent business solutions",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
