"use client";

export default function Hero() {
  return (
    <section
      id="howzit"
      className="w-full bg-[rgb(121,148,248)] overflow-hidden"
    >
      {/* Container aligned with navbar */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14">

        {/* Top spacing */}
        <div className="pt-20 md:pt-18 lg:pt-20">

          {/* HOWZIT */}
          <h1 className="
            text-[clamp(88px,24vw,260px)]
            leading-tight
            tracking-tight
            text-black -ml-[2px] sm:-ml-[10px] md:-ml-[14px] lg:-ml-[18px]
            max-w-full
            opacity-70
          ">
            HOWZIT
          </h1>

          {/* Space below HOWZIT */}
          <div className="mt-3 sm:mt-4 md:mt-6">

            {/* I'm Connor Bell */}
            <div className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] leading-tight opacity-70 text-black">
              <span className="font-light">I'm </span>
              <span className="font-normal">Connor Bell</span>
            </div>

            {/* Location */}
            <div className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-tight tracking-wider opacity-70  text-black mt-0">
              Gauteng, South Africa
            </div>

            {/* Space */}
            <div className="mt-8 md:mt-10">

              {/* Degree */}
              <div className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] leading-tight opacity-70 text-black">
                <span className="font-light">Final Year </span>
                <span className="font-normal">BSc Computer Science Student</span>
              </div>

              {/* University */}
              <div className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-tight tracking-wider text-black mt-0 opacity-70 font-light">
                University of Pretoria
              </div>

              {/* Button spacing */}
              <div className="mt-8 md:mt-10">

                {/* Button */}
                <a
                  href="#about"
                  className="
                    inline-block
                    bg-black text-white
                    px-12 py-2
                    text-[16px] sm:text-[16px] md:text-[18px]
                    font-normal
                    opacity-80 
                    tracking-wider
                    transition-all
                    hover:bg-white hover:text-black
                    hover:opacity-70
                  "
                >
                  More
                </a>

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