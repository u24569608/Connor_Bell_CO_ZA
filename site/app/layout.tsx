import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connor Bell | Final-Year Computer Science Student at the University of Pretoria | Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ueo6vil.css"></link>

        <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              const theme = localStorage.getItem("theme");

              if (theme === "dark") {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            })();
          `,
        }}
      />
      </head>
      <body className="antialiased">
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
