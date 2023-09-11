import { i18nConfig, Locale } from "@/i18n.config";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gradely",
  description: "Use Gradely to view your school grades and assignments.",
  icons: [
    {
      rel: "icon",
      href: "/assets/gradely.png",
      url: "/assets/gradely.png",
    },
    {
      rel: "icon",
      href: "/assets/gradely-white.png",
      url: "/assets/gradely-white.png",
    },
  ],
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
