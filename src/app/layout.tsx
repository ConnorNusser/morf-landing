import type { Metadata } from "next";
import { SUSE, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from '@vercel/analytics/react';

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morf - AI-Powered Fitness That Adapts to You",
  description: "Transform your fitness journey with AI-generated workouts that evolve with your progress. Adaptive themes from beginner warmth to elite mastery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suse.variable} ${manrope.variable} antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
