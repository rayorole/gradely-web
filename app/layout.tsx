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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
