"use client";

import { useState } from "react";

import { Slider } from "@/components/ui/slider";

const aboutMeDetails = [
  "BSc Computer Science student.",
  "Final year BSc Computer Science student.",
  "Final year Computer Science student at the University of Pretoria.",
  "Final year Computer Science student at the University of Pretoria with a strong passion for full-stack software development.",
  "Final year Computer Science student at the University of Pretoria. I am hard-working, driven, disciplined, and dedicated, with a strong passion for full-stack software development.",
  "Final year Computer Science student at the University of Pretoria. I am hard-working, driven, disciplined, and dedicated, with a strong passion for full-stack software development. I am especially interested in UI/UX design and creating thoughtful, intuitive digital experiences.",
  "Born and raised in Johannesburg, South Africa, I am a final year BSc Computer Science student at the University of Pretoria. I have always loved computers, both the logic behind how they work and the creativity involved in building with them. I am hard-working, driven, disciplined, and dedicated, with a strong passion for full-stack software development. I am particularly interested in UI/UX design and enjoy creating thoughtful, intuitive digital experiences.",
];

function HomePage() {
  const [detailLevel, setDetailLevel] = useState([0]);
  const currentDetail = detailLevel[0] ?? 0;

  return (
    <section className="flex h-full min-h-0 flex-col items-center overflow-hidden overscroll-none bg-black px-8 pt-24 pb-38 text-white">
      <div className="flex min-h-0 w-full max-w-4xl flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-center">
          <p
            aria-live="polite"
            className="mt-5 max-w-3xl text-[1.1rem] leading-relaxed"
          >
            {aboutMeDetails[currentDetail]}
          </p>
        </div>

        <div className="w-full max-w-xs pt-8 select-none">
          <h1 className="text-[1rem] font-medium mb-6">ABOUT ME</h1>
          <Slider
            aria-label="About me detail level"
            value={detailLevel}
            onValueChange={(value) =>
              setDetailLevel(typeof value === "number" ? [value] : [...value])
            }
            min={0}
            max={aboutMeDetails.length - 1}
            step={1}
            className="[&_[data-slot=slider-range]]:bg-white [&_[data-slot=slider-thumb]]:border-white [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-track]]:bg-white/30"
          />
          <div className="mt-4 flex justify-between text-xs">
            <span className="tracking-widest">LESS</span>
            <span className="tracking-widest">MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
