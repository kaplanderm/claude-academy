import type { Metadata } from "next";
import { Geist, Geist_Mono, Heebo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Claude Academy for Physicians | AI Training for Doctors | DermUnbound",
  description: "Claude Academy for Physicians — comprehensive medical AI training program. Learn to use Claude AI in patient care, documentation, research, and practice management. תוכנית הכשרה מקיפה לרופאים לשימוש ב-Claude AI. By kaplanclinic.co.il",
  keywords: ["Claude", "Claude Code", "AI", "Anthropic", "MCP", "training", "course", "Hebrew", "קורס", "הכשרה", "medical AI", "Claude for doctors", "AI in dermatology", "DermUnbound", "AI in medicine", "physician AI training"],
  alternates: {
    canonical: "https://kaplanclinic.co.il/he/derm-ai",
  },
  openGraph: {
    title: "Claude Academy for Physicians | DermUnbound Research Project",
    description: "Comprehensive medical AI training program for physicians. Learn to use Claude AI in clinical practice, documentation, research, and patient communication.",
    type: "website",
    url: "https://kaplanclinic.co.il/he/derm-ai",
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
        className={`${heebo.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
