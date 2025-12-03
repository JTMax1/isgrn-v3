import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "ISGRN - Intelligent Solutions Global Resources Nigeria",
  description: "Intelligent Solutions Global Resources Nigeria - Your trusted partner for intelligent business solutions",
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
      <body>{children}</body>
    </html>
  );
}
