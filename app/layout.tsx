import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Insurance Guardian.com - Reliable Auto Insurance Quotes",
  description: "Get reliable auto insurance. Compare quotes, find affordable coverage, and protect your vehicle with The Insurance Guardian.com",
  keywords: "auto insurance, car insurance, insurance quotes, affordable insurance, compare insurance rates",
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

