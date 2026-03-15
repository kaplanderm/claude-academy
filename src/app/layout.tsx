import type { Metadata } from "next";
import { Geist, Geist_Mono, Heebo } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LayoutShell from "@/components/LayoutShell";

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
  title: "Claude AI for Physicians | Medical AI Training | DermUnbound",
  description: "Claude AI in Medical Practice — practical guide for physicians. Diagnosis, documentation, research, patient communication, practice management, and privacy. תוכנית הכשרה מקיפה לרופאים לשימוש ב-Claude AI. By kaplanclinic.co.il",
  keywords: ["Claude", "Claude AI", "AI for doctors", "medical AI", "Claude for physicians", "AI in dermatology", "DermUnbound", "AI in medicine", "physician AI training", "HIPAA", "medical documentation", "קורס", "הכשרה", "רופאים"],
  alternates: {
    canonical: "https://kaplanclinic.co.il/he/derm-ai",
  },
  openGraph: {
    title: "Claude AI for Physicians | DermUnbound Research Project",
    description: "Practical guide for using Claude AI in medical practice. Diagnosis, documentation, research, patient communication, and privacy guidelines.",
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
        <Providers>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
