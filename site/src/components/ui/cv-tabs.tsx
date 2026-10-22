"use client";

import Banner from "@/components/ui/banner";
import EducationItem from "@/components/ui/education-item";
import ExperienceItem from "@/components/ui/experience-item";
import SocialLinks from "@/components/ui/social-links";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function CVTabs() {
  return (
    <Tabs defaultValue="experience" className="gap-0">
      <Banner heading="Curriculum Vitae">
        <TabsList
          aria-label="Curriculum vitae sections"
          activateOnFocus
          className="p-1.5 group-data-horizontal/tabs:h-auto"
        >
          <TabsTrigger
            value="experience"
            className="cursor-pointer px-4 py-2 text-sm duration-900 data-active:font-medium sm:px-5 sm:text-base"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="cursor-pointer px-4 py-2 text-sm duration-900 data-active:font-medium sm:px-5 sm:text-base"
          >
            Education
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
              descriptions={[]}
            />
            <SocialLinks className="flex-col items-start text-black" />
          </TabsContent>
        </div>
      </section>
    </Tabs>
  );
}

export default CVTabs;
