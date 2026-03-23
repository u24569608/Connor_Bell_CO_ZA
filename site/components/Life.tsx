"use client";

import Image from "next/image";

export default function Life() {
  return (
    <section id="life" className="w-full bg-white">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 pt-8 pb-16 md:py-16">

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-20">

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-medium tracking-wide text-black opacity-80 min-w-[124px]">
            Life
          </h2>

          {/* Content */}
          <div className="flex flex-col min-[820px]:flex-row items-start gap-8 w-full max-w-[800px]">

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

            <div className="max-w-[800px]">
              <p className="text-[18px] md:text-[20px] text-black opacity-80 max-w-[600px] text-justify">
                Outside of work and academics, I'm passionate about cycling and spend a lot of my time on the road. Over the years, I've taken part in races such as the 947 Ride Joburg, Amashova, and Ride for Sight, which have been highlights of my riding. I also enjoy mountain biking for a change of pace and scenery. Beyond cycling, I value spending quality time with my girlfriend, listening to good EDM, and enjoying great food. I aim to maintain a balance between staying active, unwinding, and enjoying the simple things.
              </p>

              <div className="mt-8 md:mt-10">
                <div className="mt-12 md:mt-16 w-full">

                  <div className="grid grid-cols-1 min-[540px]:grid-cols-3 gap-10 min-[820px]:gap-16">

                    {/* Hobbies */}
                    <div>
                      <h3 className="text-[20px] md:text-[22px] font-medium mb-4 tracking-wide opacity-80">
                        Hobbies
                      </h3>
                      <ul className="space-y-3 text-[16px] md:text-[18px] opacity-80">
                        <li>– Road Cycling</li>
                        <li>– Mountain Biking</li>
                        <li>– Listening to Music</li>
                        <li>– Computers</li>
                        <li>– Fishing</li>
                      </ul>
                    </div>

                    {/* Likes */}
                    <div>
                      <h3 className="text-[20px] md:text-[22px] font-medium mb-4 tracking-wide opacity-80">
                        Likes
                      </h3>
                      <ul className="space-y-3 text-[16px] md:text-[18px] opacity-80">

                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          EDM
                        </li>

                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          Good Food
                        </li>

                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          Sunshine 
                        </li>

                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          Nature 
                        </li>
                      </ul>
                    </div>

                    {/* Dislikes */}
                    <div>
                      <h3 className="text-[20px] md:text-[22px] font-medium mb-4 tracking-wide opacity-80">
                        Dislikes
                      </h3>
                      <ul className="space-y-3 text-[16px] md:text-[18px] opacity-80">

                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                            <path d="M6 6l12 12M18 6L6 18"/>
                          </svg>
                          Mushrooms
                        </li>

                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                            <path d="M6 6l12 12M18 6L6 18"/>
                          </svg>
                          Traffic
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}