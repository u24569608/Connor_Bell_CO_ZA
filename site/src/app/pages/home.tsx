"use client";

import { useState } from "react";

import { Slider } from "@/components/ui/slider";

const aboutMeDetails = [
  "BSc Computer Science student.",
  "Final year BSc Computer Science student.",
  "Final year BSc Computer Science student at the University of Pretoria.",
  "Final year BSc Computer Science student at the University of Pretoria, passionate about software engineering.",
  "I'm a dedicated, driven, and disciplined final year BSc Computer Science student at the University of Pretoria, passionate about full-stack software development.",
  "I'm a dedicated, driven, and disciplined final year BSc Computer Science student at the University of Pretoria, passionate about full-stack software development. I'm especially interested in UI/UX design.",
  "I'm a final year BSc Computer Science student at the University of Pretoria, from Johannesburg, South Africa. I've always been fascinated by computers and I'm passionate about full-stack software development, especially UI/UX design. I enjoy combining problem-solving with creativity to build applications that are both functional and enjoyable to use. I also love cycling and enjoy challenging myself both on and off the bike.",
];

const aboutMeOffsets = [
  "-translate-y-1/2",
  "-translate-y-[52%]",
  "-translate-y-[55%]",
  "-translate-y-[58%]",
  "-translate-y-[62%]",
  "-translate-y-[66%]",
  "-translate-y-[58%] md:-translate-y-[70%]",
];

function HomePage() {
  const [detailLevel, setDetailLevel] = useState(2);
  const currentDetail = Math.round(detailLevel);
  const currentOffset = aboutMeOffsets[currentDetail] ?? "-translate-y-1/2";

  return (
    <section className="relative h-full select-none overflow-hidden overscroll-none bg-black px-8 text-white">
      <div
        className={`absolute inset-x-8 top-1/2 mx-auto w-auto max-w-4xl ${currentOffset}`}
      >
        <p
          aria-live="polite"
          className="max-w-3xl text-[1.1rem] leading-relaxed"
        >
          {aboutMeDetails[currentDetail]}
          {currentDetail === aboutMeDetails.length - 1 && (
            <>
              {" "}
              <a
                href="https://www.strava.com/athletes/48844564"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="underline underline-offset-4">
                  Check out my Strava
                </span>
                <span aria-hidden="true" className="material-symbols-sharp" style={{fontSize: '1.1rem'}}>
                  north_east
                </span>
              </a>
            </>
          )}
        </p>
      </div>

      <div className="home-slider-panel absolute inset-x-8 bottom-8 mx-auto w-auto max-w-4xl">
        <div className="w-full max-w-xs">
          <h1 className="text-[1.1rem] tracking-wide font-medium mb-6">About Me</h1>
          <Slider
            aria-label="About me detail level"
            aria-valuetext={`Detail level ${currentDetail + 1} of ${aboutMeDetails.length}`}
            value={[detailLevel]}
            onValueChange={(value, eventDetails) => {
              const nextValue = typeof value === "number" ? value : value[0] ?? 0;

              setDetailLevel(
                eventDetails.reason === "keyboard"
                  ? nextValue > detailLevel
                    ? Math.ceil(nextValue)
                    : Math.floor(nextValue)
                  : nextValue,
              );
            }}
            min={0}
            max={aboutMeDetails.length - 1}
            step={0.01}
            largeStep={1}
            className="home-detail-slider [&_[data-slot=slider-range]]:bg-white [&_[data-slot=slider-thumb]]:border-white [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-track]]:bg-white/30"
          />
          <div className="mt-4 flex justify-between text-xs">
            <button
              type="button"
              aria-label="Show less detail"
              disabled={currentDetail === 0}
              onClick={() =>
                setDetailLevel((value) => Math.max(0, Math.round(value) - 1))
              }
              className="fade-underline min-h-6 cursor-pointer tracking-widest underline-offset-4 opacity-100 transition-[opacity,text-decoration-color] duration-500 ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
            >
              LESS
            </button>
            <button
              type="button"
              aria-label="Show more detail"
              disabled={currentDetail === aboutMeDetails.length - 1}
              onClick={() =>
                setDetailLevel((value) =>
                  Math.min(aboutMeDetails.length - 1, Math.round(value) + 1),
                )
              }
              className="fade-underline min-h-6 cursor-pointer tracking-widest underline-offset-4 opacity-100 transition-[opacity,text-decoration-color] duration-500 ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
            >
              MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
