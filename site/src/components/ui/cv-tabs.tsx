"use client";

import Banner from "@/components/ui/banner";
import AwardItem from "@/components/ui/award-item";
import EducationItem from "@/components/ui/education-item";
import ExperienceItem from "@/components/ui/experience-item";
import SocialLinks from "@/components/ui/social-links";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const tabLabels = {
  experience: "Experience",
  education: "Education",
  awards: "Awards",
};

function CVTabs() {
  function handleTabChange(value: unknown) {
    if (value !== "experience" && value !== "education" && value !== "awards") {
      return;
    }

    document.title = `Connor Bell – Curriculum Vitae (${tabLabels[value]})`;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  return (
    <Tabs
      defaultValue="experience"
      onValueChange={handleTabChange}
      className="gap-0"
    >
      <Banner heading="Curriculum Vitae">
        <TabsList
          aria-label="Curriculum vitae sections"
          activateOnFocus
          className="grid w-max max-w-full shrink-0 grid-cols-3 p-1.5 group-data-horizontal/tabs:h-auto"
        >
          <TabsTrigger
            value="experience"
            className="fade-underline h-auto min-w-0 underline-offset-4 cursor-pointer px-0 py-2 text-sm duration-500 ease-in-out data-active:font-medium min-[360px]:px-1.5 sm:px-5 sm:text-base motion-reduce:transition-none"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="fade-underline h-auto min-w-0 underline-offset-4 cursor-pointer px-0 py-2 text-sm duration-500 ease-in-out data-active:font-medium min-[360px]:px-1.5 sm:px-5 sm:text-base motion-reduce:transition-none"
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="awards"
            className="fade-underline h-auto min-w-0 underline-offset-4 cursor-pointer px-0 py-2 text-sm duration-500 ease-in-out data-active:font-medium min-[360px]:px-1.5 sm:px-5 sm:text-base motion-reduce:transition-none"
          >
            Awards
          </TabsTrigger>
        </TabsList>
      </Banner>

      <section className="w-full max-w-4xl px-8 pt-6 pb-32 md:px-24 md:pb-24">
        <div className="mt-12 grid">
          <TabsContent
            value="experience"
            className="col-start-1 row-start-1 space-y-10 transition-opacity duration-[900ms] ease-in-out data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <ExperienceItem
              title="Teaching Assistant"
              company="University of Pretoria"
              companyUrl="https://www.up.ac.za/"
              startDate="February 2026"
              endDate="November 2026"
              descriptions={[
                "COS 221 (Introduction to Database Systems)",
                "COS 216 (Netcentric Computer Systems)",
                "COS 226 (Concurrent Systems)",
                "COS 214 (Software Modelling)"
              ]}
            />
            <ExperienceItem
              title="Student Vacation Worker"
              company="Gendac"
              companyUrl="https://www.gendac.co.za/"
              startDate="January 2026"
              endDate="February 2026"
              descriptions={["Software Engineering"]}
            />
            <ExperienceItem
              title="Teaching Assistant"
              company="University of Pretoria"
              companyUrl="https://www.up.ac.za/"
              startDate="February 2025"
              endDate="November 2025"
              descriptions={[
                "COS 132 (Imperative Programming)",
                "COS 110 (Introduction to Program Design)",
              ]}
            />
            <SocialLinks className="flex-col items-start text-black" />
          </TabsContent>
          <TabsContent
            value="awards"
            className="col-start-1 row-start-1 space-y-10 transition-opacity duration-[900ms] ease-in-out data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <AwardItem
              title="Dean’s Merit Award"
              issuer="University of Pretoria"
              issuerUrl="https://www.up.ac.za/"
              date="May 2025"
              descriptions={[
                "Received an award from the Dean of the Faculty of Engineering, Built Environment, and Information Technology (EBIT) for having achieved an average of above 75% in my first year of Computer Science (2024).",
              ]}
            />
            <AwardItem
              title="Johannesburg East (D9) District Awards"
              issuer="Gauteng Department of Education"
              issuerUrl="https://education.gauteng.gov.za/"
              date="February 2024"
              descriptions={[
                "Received an award from the Gauteng Department of Education (GDE) for having achieved the highest average of 97% in the Johannesburg East (D9) district for Information Technology in Grade 12.",
              ]}
            />
            <SocialLinks className="flex-col items-start text-black" />
          </TabsContent>

          <TabsContent
            value="education"
            className="col-start-1 row-start-1 space-y-10 transition-opacity duration-[900ms] ease-in-out data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <EducationItem
              school="University of Pretoria"
              schoolUrl="https://www.up.ac.za/"
              certification="BSc Computer Science"
              startDate="February 2024"
              endDate="November 2026"
              descriptions={[]}
            />
            <EducationItem
              school="Jeppe High School for Boys"
              schoolUrl="https://www.jeppeboys.co.za/"
              certification="National Senior Certificate"
              startDate="January 2019"
              endDate="November 2023"
              descriptions={["Achieved distinctions in all seven subjects, earned full academic colours, and attained the second-highest overall average. Received awards for the highest achievement in Physical Sciences, Mathematics, Information Technology, and Geography."]}
            />
            <SocialLinks className="flex-col items-start text-black" />
          </TabsContent>
        </div>
      </section>
    </Tabs>
  );
}

export default CVTabs;
