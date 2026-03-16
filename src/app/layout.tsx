import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Společná advokátní kancelář | Právní služby efektivně a srozumitelně",
    template: "%s | SAK Brno",
  },
  description:
    "Společná advokátní kancelář v Brně. Poskytujeme právní služby efektivně a srozumitelně — občanské, obchodní, trestní, rodinné právo a další.",
  keywords: [
    "advokátní kancelář",
    "advokát Brno",
    "právní služby",
    "občanské právo",
    "obchodní právo",
    "trestní právo",
    "rodinné právo",
    "pracovní právo",
    "Brno",
  ],
  authors: [
    { name: "Mgr. Martin Nehyba" },
    { name: "JUDr. Mgr. Lucie Semelová" },
  ],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Společná advokátní kancelář — SAK Brno",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-[#0A0A0A]`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
