import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { ThemeProvider } from "@/components/site/theme-provider";
import { LanguageProvider } from "@/components/site/language-provider";
import { FloatingCTA } from "@/components/site/floating-cta";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdulfatai Sanusi — Geospatial & GeoAI Portfolio",
  description:
    "Geospatial & Remote Sensing Specialist | GeoAI Innovator | GIS for Defense | Esri YSA ’25 (3rd Place) | Esri Enterprise Certified | Utility Network & Web Mapping Expert | Arcpy | DBMS | Full-Stack Web GIS Developer",
  metadataBase: new URL("https://localhost"),
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
