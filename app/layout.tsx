import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calebstephen.com"),
  title: "Caleb Stephen — Senior AI/ML Engineer",
  description:
    "Senior AI/ML Engineer building agentic AI systems in production. Leading kAInet at Express Analytics. LangGraph, multi-agent orchestration, and writing about what actually works.",
  openGraph: {
    title: "Caleb Stephen — Senior AI/ML Engineer",
    description:
      "Senior AI/ML Engineer building agentic AI systems in production. Leading kAInet at Express Analytics.",
    url: "https://www.calebstephen.com",
    siteName: "Caleb Stephen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
