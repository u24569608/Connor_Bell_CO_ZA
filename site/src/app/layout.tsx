import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import PageTransition from "@/components/ui/page-transition";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Connor Bell",
  description: "Connor Bell's Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
