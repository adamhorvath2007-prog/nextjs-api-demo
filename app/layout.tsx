import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js API Demo",
  description: "Client fetch, server fetch (ISR), and Next/Image demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav
          style={{
            padding: 16,
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            gap: 12,
            fontFamily: "system-ui",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
          <Link href="/client-demo" style={{ textDecoration: "none", color: "inherit" }}>
            Client demo
          </Link>
          <Link href="/posts" style={{ textDecoration: "none", color: "inherit" }}>
            Posts
          </Link>
          <Link href="/image-demo" style={{ textDecoration: "none", color: "inherit" }}>
            Image demo
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}