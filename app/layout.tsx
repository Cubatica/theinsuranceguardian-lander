import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Insurance Guardian.com - Reliable Commercial Insurance Quotes",
  description: "Get reliable commercial insurance. Compare quotes, find affordable business coverage, and protect your company with The Insurance Guardian.com",
  keywords: "commercial insurance, business insurance, insurance quotes, affordable insurance, compare insurance rates",
  icons: {
    icon: [
      { url: "/theinsuranceguardian-favicon.png", type: "image/png" },
    ],
    shortcut: "/theinsuranceguardian-favicon.png",
    apple: "/theinsuranceguardian-favicon.png",
  },
  other: {
    "facebook-domain-verification": "tducol44o8ag8jz9l2i9f9im34qo4q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

