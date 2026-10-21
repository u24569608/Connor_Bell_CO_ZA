import Navbar from "@/components/ui/navbar";
import CVPage from "../pages/cv";

export default function CV() {
  return (
    <main data-page="cv" className="min-h-svh bg-black">
      <Navbar />
      <CVPage />
    </main>
  );
}
