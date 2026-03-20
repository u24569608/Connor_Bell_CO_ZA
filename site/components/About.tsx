"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 py-16">

        <div className="flex flex-col md:flex-row items-start gap-8">

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-medium text-black">
            About
          </h2>

          {/* Content */}
          <div className="flex flex-col sm:flex-row items-start gap-6 max-w-[800px]">

            {/* Headshot */}
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/Headshot.webp"
                alt="Connor Bell"
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text + Button */}
            <div>
              <p className="text-[16px] md:text-[18px] text-black opacity-70 leading-relaxed max-w-[600px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <div className="mt-6">
                <button className="
                  border border-black text-black bg-white
                  px-12 py-2
                  text-[16px] md:text-[18px]
                  font-normal
                  tracking-wider
                  transition-all
                  hover:bg-black hover:text-white
                ">
                  More
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}