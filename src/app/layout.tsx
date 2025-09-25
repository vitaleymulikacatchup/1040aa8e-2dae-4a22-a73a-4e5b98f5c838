import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrainRoot Memecoin — Meme Brain Power for the People",
  description: "BrainRoot Memecoin blends meme energy with brainy tokenomics. Easy steps to buy, a playful vibe, and a community-driven roadmap.",
  keywords: ["memecoin","brainroot","brain meme","crypto meme","tokenomics","how to buy","community","meme coin","brain-based","humor in crypto"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BrainRoot Memecoin — Meme Brain Power for the People",
    description: "BrainRoot Memecoin blends meme energy with brainy tokenomics. Easy steps to buy, a playful vibe, and a community-driven roadmap.",
    type: "website",
    url: "/",
    siteName: "BrainRoot Memecoin",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "BrainRoot Memecoin — Meme Brain Power for the People"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRoot Memecoin — Meme Brain Power for the People",
    description: "BrainRoot Memecoin blends meme energy with brainy tokenomics. Easy steps to buy, a playful vibe, and a community-driven roadmap.",
    images: [ "/images/logo.svg" ],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
