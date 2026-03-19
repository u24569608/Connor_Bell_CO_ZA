"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(250,227,65)] px-8 py-6 flex items-center justify-between z-50">
      
      {/* Name */}
      <div className="text-[36px] opacity-70 font-medium tracking-wide text-black">
        Connor Bell
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-24 text-[22px] font-medium tracking-wider text-black">
        <a href="#hero" className="text-black opacity-70 hover:opacity-100 transition-all">
          Home
        </a>
        <a href="#about" className="text-black opacity-70 hover:opacity-100 transition-all">
          About
        </a>
        <a href="#work" className="text-black opacity-70 hover:opacity-100 transition-all">
          Work
        </a>
        <a href="#life" className="text-black opacity-70 hover:opacity-100 transition-all">
          Life
        </a>
        <a href="#contact" className="text-black opacity-70 hover:opacity-100 transition-all">
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-4xl text-black opacity-60"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgb(250,227,65)] z-50 flex flex-col items-center justify-center gap-10 text-3xl">
          
          <div className="absolute top-6 left-8 text-[36px] opacity-70 font-medium tracking-wide text-black">
            Connor Bell
          </div>

          <button
            className="absolute top-6 right-8 text-3xl text-black opacity-60"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <a href="#hero" className="font-medium text-black opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="font-medium text-black opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" className="font-medium text-black opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#life" className="font-medium text-black opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Life</a>
          <a href="#contact" className="font-medium text-black opacity-70 hover:opacity-100 transition-all" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}