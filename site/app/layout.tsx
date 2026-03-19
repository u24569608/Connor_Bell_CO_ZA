import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connor Bell | Under Construction",
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
      </body>
    </html>
  );
}
