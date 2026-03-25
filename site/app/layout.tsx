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
              try {
                const theme = localStorage.getItem("theme") || "light";
                const root = document.documentElement;

                // Always reset first
                root.classList.remove("dark", "red");

                if (theme === "dark") {
                  root.classList.add("dark");
                } else if (theme === "red") {
                  root.classList.add("red");
                } else {
                  // explicitly ensure light mode
                  root.classList.remove("dark", "red");
                }
              } catch (e) {
                // fallback to light if anything breaks
                document.documentElement.classList.remove("dark", "red");
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
