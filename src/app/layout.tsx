// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFES Educational Institute",
  description: "AFES runs two schools and two coaching centers providing quality education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#001F3F] text-white font-sans pt-16`} // Added pt-16 for padding-top
      >
        <Header />
        <main className="min-h-screen px-4 md:px-12 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
