import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Connor Bell – Weather",
  alternates: {
    canonical: "/weather",
  },
};

export default function Weather() {
  return (
    <main data-page="weather" className="flex h-dvh flex-col overflow-hidden bg-white">
      <Navbar />
    </main>
  );
}
