import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import CVPage from "../pages/cv";

export const metadata: Metadata = {
  title: "Connor Bell – Curriculum Vitae (Experience)",
};

export default function CV() {
  return (
    <main data-page="cv" className="min-h-svh bg-black">
      <Navbar />
      <CVPage />
    </main>
  );
}
