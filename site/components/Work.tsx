"use client";

type WorkItem = {
  title: string;
  company: string;
  location: string;
  date: string;
};

type EducationItem = {
  title: string;
  institution: string;
  location: string;
  date: string;
};

const workData: WorkItem[] = [
  {
    title: "Student Vacation Work",
    company: "Gendac | Software, Innovations & IoT",
    location: "Pretoria, Gauteng, South Africa",
    date: "Early 2026",
  },
  {
    title: "Computer Science TA",
    company: "University of Pretoria",
    location: "Pretoria, Gauteng, South Africa",
    date: "Early 2025—Present",
  },
];

const educationData: EducationItem[] = [
  {
    title: "BSc Computer Science",
    institution: "University of Pretoria",
    location: "Pretoria, Gauteng, South Africa",
    date: "Early 2024—Present",
  },
  {
    title: "National Senior Certificate",
    institution: "Jeppe High School for Boys",
    location: "Johannesburg, Gauteng, South Africa",
    date: "Early 2019—Late 2023",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="w-full bg-[rgb(250,227,65)]"
    >
      {/* container aligned with site */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 py-12 md:py-18">

        {/* grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* WORK */}
          <div>
            <h2 className="text-[40px] md:text-[48px] font-medium mb-10 opacity-80">
              Work
            </h2>

            <div className="space-y-6">
              {workData.map((item, index) => (
                <div key={index}>
                  <h3 className="text-[28px] font-normal">
                    {item.title}
                  </h3>

                  <p className="text-[20px] font-medium">
                    {item.company}
                  </p>

                  <p className="text-[18px] italic opacity-80">
                    {item.location}
                  </p>

                  <p className="text-[16px] opacity-80">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>

            {/* buttons */}
            <div className="mt-12 flex flex-col gap-4 max-w-[190px]">
              <a
                href="/Connor_Bell_CV.pdf"
                target="_blank"
                className="bg-black text-white text-[18px] px-2 py-2 text-center tracking-wider hover:bg-white hover:text-black transition opacity-80 hover:opacity-80"
              >
                View Full CV
              </a>

              <a
                href="https://github.com/u24569608/"
                target="_blank"
                className="bg-black text-white text-[18px] px-4 py-2 text-center tracking-wider hover:bg-white hover:text-black transition opacity-80 hover:opacity-80"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-[40px] md:text-[48px] font-medium mb-10 opacity-80">
              Education
            </h2>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div key={index}>
                  <h3 className="text-[28px] font-normal">
                    {item.title}
                  </h3>

                  <p className="text-[20px] font-medium">
                    {item.institution}
                  </p>

                  <p className="text-[18px] italic opacity-80">
                    {item.location}
                  </p>

                  <p className="text-[16px] opacity-80">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}