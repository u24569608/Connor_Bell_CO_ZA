"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(250,227,65)] px-8 py-6 flex items-center justify-between z-50">
      
      {/* Name */}
      <div className="text-[36px] font-medium tracking-wide text-black">
        Connor Bell
      </div>

      {/* Links */}
      <div className="flex gap-24 text-[22px] font-medium tracking-wider text-black">
        <a href="#hero" className="text-black hover:underline underline-offset-4 transition-all">
          Home
        </a>
         <a href="#about" className="text-black hover:underline underline-offset-4 transition-all">
          About
        </a>
        <a href="#work" className="text-black hover:underline underline-offset-4 transition-all">
          Work
        </a>
        <a href="#life" className="text-black hover:underline underline-offset-4 transition-all">
          Life
        </a>
        <a href="#contact" className="text-black hover:underline underline-offset-4 transition-all">
          Contact
        </a>
      </div>
    </nav>
  );
}