import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageTransition from "@/components/ui/page-transition";
import TapUnderline from "@/components/ui/tap-underline";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Connor Bell's Personal Website",
  description: "I'm Connor Bell, a final-year BSc Computer Science student at the University of Pretoria. I enjoy engineering software and riding my bicycles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <TapUnderline />
        <PageTransition>{children}</PageTransition>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
