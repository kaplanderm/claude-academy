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
  title: "Claude Academy - הפלטפורמה המקיפה ללימוד Claude AI",
  description: "למדו להשתמש ב-Claude ו-Claude Code מההתחלה ועד לרמת מומחה. קורס מקיף בעברית ובאנגלית. Master Claude AI from beginner to expert.",
  keywords: ["Claude", "Claude Code", "AI", "Anthropic", "MCP", "training", "course", "Hebrew", "קורס", "הכשרה"],
  openGraph: {
    title: "Claude Academy",
    description: "The comprehensive Claude AI training platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
