"use client";

import Image from "next/image";

export default function Life() {
  return (
    <section id="life" className="w-full bg-white">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 pt-8 pb-16 md:py-16">

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 lg:gap-20">

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-medium tracking-wide text-black opacity-80">
            Life
          </h2>

          {/* Content */}
          <div className="flex flex-col sm:flex-row items-start gap-8 max-w-[800px]">

            {/* Headshot */}
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0 opacity-100">
              <Image
                src="/Cycling.webp"
                alt="Cycling Photo of Connor Bell"
                width={2000}
                height={2000}
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <p className="text-[18px] md:text-[20px] text-black opacity-80 max-w-[600px] text-justify">
                I'm a final-year Computer Science student at Tuks, originally from Jozi. I enjoy crafting software that is clean, functional, and visually refined. I'm interested in full-stack development, where I combine technical problem-solving with thoughtful, careful design. I care about building applications that feel intuitive, well-made, and enjoyable to use.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}