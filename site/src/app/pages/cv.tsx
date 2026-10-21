import Banner from "@/components/ui/banner";
import CVTabs from "@/components/ui/cv-tabs";

function CVPage() {
  return (
    <section className="min-h-svh bg-white">
      <Banner heading="Curriculum Vitae" />
      <CVTabs />
    </section>
  );
}

export default CVPage;
