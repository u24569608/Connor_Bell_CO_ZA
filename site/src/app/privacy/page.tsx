import type { Metadata } from "next";
import Banner from "@/components/ui/banner";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Connor Bell – Privacy",
};

export default function Privacy() {
  return (
    <main data-page="privacy" className="min-h-svh bg-white">
      <Navbar />
      <Banner heading="Privacy" />
    </main>
  );
}
