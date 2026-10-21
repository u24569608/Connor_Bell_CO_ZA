import EducationItem from "@/components/ui/education-item";
import ExperienceItem from "@/components/ui/experience-item";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function CVTabs() {
  return (
    <section className="w-full max-w-4xl px-24 py-12 sm:py-12">
      <Tabs defaultValue="experience" className="gap-0">
        <TabsList
          aria-label="Curriculum vitae sections"
          activateOnFocus
          className="bg-neutral-100 p-1.5 group-data-horizontal/tabs:h-auto"
        >
          <TabsTrigger
            value="experience"
            className="cursor-pointer px-4 py-2 text-sm transition-all duration-900 data-active:bg-white data-active:text-black data-active:font-medium sm:px-5 sm:text-base"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="cursor-pointer px-4 py-2 text-sm transition-all duration-900 data-active:bg-white data-active:text-black data-active:font-medium sm:px-5 sm:text-base"
          >
            Education
          </TabsTrigger>
        </TabsList>

        <div className="mt-12 grid">
          <TabsContent
            value="experience"
            className="col-start-1 row-start-1 space-y-10 transition-opacity duration-[900ms] ease-in-out data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <ExperienceItem
              title="Teaching Assistant"
              company="University of Pretoria"
              companyUrl="https://www.up.ac.za/"
              startDate="Feb 2026"
              endDate="Present"
              descriptions={[
                "S1—COS 221 (Introduction to Database Systems)",
                "S1—COS 216 (Netcentric Computer Systems)",
                "S2—COS 226 (Concurrent Systems)",
                "S2—COS 214 (Software Modelling)"
              ]}
            />
            <ExperienceItem
              title="Student Vacation Worker"
              company="Gendac"
              companyUrl="https://www.gendac.co.za/"
              startDate="Jan 2026"
              endDate="Feb 2026"
            />
            <ExperienceItem
              title="Teaching Assistant"
              company="University of Pretoria"
              companyUrl="https://www.up.ac.za/"
              startDate="February 2025"
              endDate="November 2025"
              descriptions={[
                "S1—COS 132 (Imperative Programming)",
                "S2—COS 110 (Introduction to Program Design)",
              ]}
            />
          </TabsContent>

          <TabsContent
            value="education"
            className="col-start-1 row-start-1 space-y-10 transition-opacity duration-[900ms] ease-in-out data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <EducationItem
              school="University of Pretoria"
              certification="BSc Computer Science"
              startDate="February 2024"
              endDate="November 2026"
            />
            <EducationItem
              school="Jeppe High School for Boys"
              certification="National Senior Certificate"
              startDate="January 2019"
              endDate="November 2023"
            />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}

export default CVTabs;
