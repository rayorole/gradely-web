import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
