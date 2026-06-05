import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono, Heebo } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LayoutShell from "@/components/LayoutShell";
import type { Lang } from "@/lib/i18n";

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

const SITE_URL = "https://academy.dermunbound.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Claude לרופאי עור | מדריך מעשי ללא ידע טכני | DermUnbound",
    template: "%s | Claude לרופאי עור",
  },
  description:
    "מדריך מעשי לשימוש ב-Claude AI ברפואת עור, לרופאים ללא רקע טכני. הדגש על Claude Desktop ושימוש ב-Claude Code דרך ממשק גרפי. אבחון, תיעוד, מחקר, תקשורת עם מטופלים ופרטיות. By DermUnbound.",
  keywords: [
    "Claude", "Claude AI", "Claude Desktop", "Claude Code", "Cowork",
    "AI for doctors", "AI in dermatology", "DermUnbound", "Opus 4.8",
    "רופאי עור", "בינה מלאכותית לרופאים", "תיעוד רפואי", "פרטיות",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Claude לרופאי עור | DermUnbound",
    description:
      "מדריך מעשי לשימוש ב-Claude AI ברפואת עור, ללא ידע טכני. הדגש על Claude Desktop ו-Claude Code דרך ממשק גרפי.",
    type: "website",
    url: SITE_URL,
    siteName: "Claude Academy for Physicians",
    locale: "he_IL",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Claude Academy for Physicians",
  alternateName: "DermUnbound",
  url: SITE_URL,
  description:
    "Practical training for dermatologists using Claude AI, with no technical background required.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang: Lang = cookieStore.get("lang")?.value === "en" ? "en" : "he";
  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body
        className={`${heebo.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Providers initialLang={lang}>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
