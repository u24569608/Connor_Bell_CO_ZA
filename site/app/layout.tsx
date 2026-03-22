import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connor Bell | Final-Year Computer Science Student at University of Pretoria | Software Developer Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ueo6vil.css"></link>
      </head>
      <body className="antialiased">
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
