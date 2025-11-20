import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { ThemeProvider } from "@/components/site/theme-provider";
import { LanguageProvider } from "@/components/site/language-provider";
import { FloatingCTA } from "@/components/site/floating-cta";
import { Analytics } from "@vercel/analytics/react";
import { siteMetadata } from "@/config/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Use comprehensive SEO metadata
export const metadata: Metadata = {
  ...siteMetadata,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sanusi-abdulfatai.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        <LanguageProvider>
          <ThemeProvider defaultTheme="dark">
            <Navbar />
            {children}
            <FloatingCTA />
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
