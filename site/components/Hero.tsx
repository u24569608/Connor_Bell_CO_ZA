

"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full bg-[rgb(121,148,248)]"
    >
      {/* Container aligned with navbar */}
      <div className="w-full px-14">

        {/* Top spacing */}
        <div className="pt-16 md:pt-18 lg:pt-20">

          {/* HOWZIT */}
          <h1 className="
            text-[120px] md:text-[210px] lg:text-[260px]
            leading-tight
            tracking-tight
            text-black -ml-[18px]
          ">
            HOWZIT
          </h1>

          {/* Space below HOWZIT */}
          <div className="mt-2 md:mt-2 lg:mt-2">

            {/* I'm Connor Bell */}
            <div className="text-[32px] md:text-[36px] lg:text-[38px] leading-tight opacity-70 text-black">
              <span className="font-light">I'm </span>
              <span className="font-normal">Connor Bell</span>
            </div>

            {/* Location */}
            <div className="text-[20px] md:text-[22px] lg:text-[24px] leading-tight tracking-wider opacity-70  text-black mt-0">
              Gauteng, South Africa
            </div>

            {/* Space */}
            <div className="mt-8 md:mt-10">

              {/* Degree */}
              <div className="text-[28px] md:text-[32px] lg:text-[36px] leading-tight opacity-70 text-black">
                <span className="font-light">Final Year </span>
                <span className="font-normal">BSc Computer Science Student</span>
              </div>

              {/* University */}
              <div className="text-[20px] md:text-[22px] lg:text-[24px] leading-tight tracking-wider text-black mt-0 opacity-70 font-light">
                University of Pretoria
              </div>

              {/* Button spacing */}
              <div className="mt-8 md:mt-10">

                {/* Button */}
                <button className="
                  bg-black text-white
                  px-14 py-2
                  text-[18px] md:text-[20px]
                  font-normal
                  opacity-80 
                  tracking-wider
                  transition-all
                  hover:bg-white hover:text-black
                  hover:opacity-70

                ">
                  More
                </button>

              </div>
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="pb-22 md:pb-24 lg:pb-28" />

        </div>
      </div>
    </section>
  );
}