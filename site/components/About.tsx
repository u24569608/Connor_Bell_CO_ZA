"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-white dark:bg-black">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 pt-8 pb-16 md:py-16">

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 lg:gap-20">

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-medium tracking-wide text-black dark:text-white opacity-80">
            About
          </h2>

          {/* Content */}
          <div className="flex flex-col sm:flex-row items-start gap-8 max-w-[800px]">

            {/* Headshot */}
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0 dark:opacity-80 opacity-100">
              <Image
                src="/Headshot.webp"
                alt="Headshot of Connor Bell"
                width={2000}
                height={2000}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text + Button */}
            <div>
              <p className="text-[18px] md:text-[20px] text-black dark:text-white opacity-80 max-w-[600px] text-justify">
                I'm a final-year Computer Science student at Tuks, originally from Jozi. I enjoy crafting software that is clean, functional, and visually refined. I'm interested in full-stack development, where I combine technical problem-solving with thoughtful, careful design. I care about building applications that feel intuitive, well-made, and enjoyable to use.
              </p>

              <div className="mt-6">
                <a
                  href="#life"
                  className="
                  border border-black text-black bg-white
                  px-12 py-2
                  text-[16px] md:text-[18px]
                  font-normal
                  tracking-wider
                  transition-all
                  hover:bg-black hover:text-white
                  inline-block
                  dark:bg-black
                  dark:border-white
                  dark:text-white
                  dark:hover:opacity-80
                ">
                  More
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}