import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import CVPage from "../pages/cv";

export const metadata: Metadata = {
  title: "Connor Bell – Curriculum Vitae (Experience)",
  alternates: {
    canonical: "/cv/experience",
  },
};

export default function CV() {
  return (
    <main data-page="cv" className="h-dvh overflow-hidden bg-black">
      <Navbar />
      <CVPage />
    </main>
  );
}
