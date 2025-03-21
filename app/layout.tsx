import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gauntlet of SOLiders | NFT Duel Game on Solana",
  description: "A medieval NFT duel game on Solana where 8,192 pixel-art warriors battle for a 5,000 SOL grand prize.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
