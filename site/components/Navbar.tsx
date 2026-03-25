"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(250,227,65)] dark:bg-[rgb(16,16,16)] px-5 sm:px-8 md:px-10 lg:px-14 py-4 flex items-center justify-between z-50">
      <div className="w-full flex items-center justify-between">
        {/* Name */}
        <div className="text-[36px] lg:text-[36px] leading-tight dark:text-white whitespace-nowrap opacity-70 font-medium tracking-wide text-black">
          Connor Bell
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-x-24 xl:gap-x-24 text-[26px] xl:text-[26px] font-medium tracking-wider text-black whitespace-nowrap">
          <a href="#howzit" className="text-black dark:text-white opacity-70 hover:opacity-100 transition-all">
            Home
          </a>
          <a href="#about" className="text-black dark:text-white opacity-70 hover:opacity-100 transition-all">
            About
          </a>
          <a href="#work" className="text-black dark:text-white opacity-70 hover:opacity-100 transition-all">
            Work
          </a>
          <a href="#life" className="text-black dark:text-white opacity-70 hover:opacity-100 transition-all">
            Life
          </a>
          <a href="#contact" className="text-black dark:text-white opacity-70 hover:opacity-100 transition-all">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-4xl text-black dark:text-white opacity-65"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgb(250,227,65)] dark:bg-[rgb(16,16,16)] z-50 flex flex-col">
          
          <div className="absolute top-0 left-0 w-full px-5 sm:px-8 md:px-10 lg:px-14 py-4 flex items-center justify-between">
            <div className="text-[36px] opacity-70 font-medium tracking-wide text-black dark:text-white">
              Connor Bell
            </div>

            <button
              className="text-3xl text-black dark:text-white opacity-65"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-12 text-3xl">
            <a href="#howzit" className="font-medium text-black dark:text-white opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="font-medium text-black dark:text-white opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" className="font-medium text-black dark:text-white opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#life" className="font-medium text-black dark:text-white opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Life</a>
            <a href="#contact" className="font-medium text-black dark:text-white opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}