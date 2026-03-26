"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  type Theme = "light" | "dark" | "red";
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "light";

    const root = document.documentElement;
    root.classList.remove("dark", "red");

    if (stored === "dark") root.classList.add("dark");
    if (stored === "red") root.classList.add("red");

    setThemeState(stored);
  }, []);

  const setTheme = (newTheme: Theme) => {
    const root = document.documentElement;

    root.classList.remove("dark", "red");

    if (newTheme === "dark") root.classList.add("dark");
    if (newTheme === "red") root.classList.add("red");

    localStorage.setItem("theme", newTheme);
    setThemeState(newTheme);
  };

  return (
    <footer className="w-full bg-[rgb(61,74,124)] dark:bg-black red:bg-[rgb(20,0,0)] text-white">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left - Name */}
          <div className="text-[36px] opacity-90 font-light red:text-[rgb(254,0,0)] tracking-wide">
            Connor Bell
          </div>

          {/* Right - Sitemap + Connect */}
          <div className="flex-1 ml-1 sm:ml-0 md:ml-34 lg:ml-38">
            <div className="flex flex-col sm:flex-row gap-18">

              {/* Sitemap */}
              <div>
                <h3 className="text-[24px] red:text-[rgb(254,0,0)] font-medium mb-4 opacity-80">Site Map</h3>
                <div className="flex flex-col gap-3 text-[20px] opacity-70">
                  <a href="#howzit" className="hover:opacity-100 hover:font-medium red:text-[rgb(254,0,0)] transition-all">Home</a>
                  <a href="#about" className="hover:opacity-100 hover:font-medium red:text-[rgb(254,0,0)] transition-all">About</a>
                  <a href="#work" className="hover:opacity-100 hover:font-medium red:text-[rgb(254,0,0)] transition-all">Work</a>
                  <a href="#life" className="hover:opacity-100 hover:font-medium red:text-[rgb(254,0,0)] transition-all">Life</a>
                  <a href="#contact" className="hover:opacity-100 hover:font-medium red:text-[rgb(254,0,0)] transition-all">Contact</a>
                </div>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-[24px] font-medium mb-4 red:text-[rgb(254,0,0)] opacity-80">Connect</h3>
                <div className="flex gap-4">

                  <a
                    href="https://github.com/u24569608/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black flex items-center justify-center transition-all hover:scale-105"
                  >
                    <img src="/GitHub.svg" alt="GitHub" className="w-9 h-9" />
                  </a>

                  <a
                    href="https://linkedin.com/in/connorbellup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[rgb(0,125,182)] flex items-center justify-center transition-all hover:scale-105"
                  >
                    <img src="/LinkedIn.svg" alt="LinkedIn" className="w-12 h-12" />
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>
        {/* TEST */}
        {/* Bottom */}
        <div className="mt-12 text-[16px] red:text-[rgb(254,0,0)] tracking-wider opacity-40">
          ©2026 Connor Bell <br />
          Proudly Made in South Africa
          <br/>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => setTheme("light")}
              className={`underline transition hover:opacity-80 ${theme === "light" ? "opacity-100" : "opacity-50"}`}
            >
              Light Mode
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`underline transition hover:opacity-80 ${theme === "dark" ? "opacity-100" : "opacity-50"}`}
            >
              Dark Mode
            </button>

            <button
              onClick={() => setTheme("red")}
              className={`underline transition hover:opacity-80 ${theme === "red" ? "opacity-100" : "opacity-50"}`}
            >
              Red Mode
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}