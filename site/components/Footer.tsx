"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[rgb(61,74,124)] text-white">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left - Name */}
          <div className="text-[36px] opacity-90 font-light tracking-wide">
            Connor Bell
          </div>

          {/* Right - Sitemap + Connect */}
          <div className="flex-1 ml-1 sm:ml-0 md:ml-24 lg:ml-28">
            <div className="flex flex-col sm:flex-row gap-18">

              {/* Sitemap */}
              <div>
                <h3 className="text-[24px] font-medium mb-4 opacity-80">Site Map</h3>
                <div className="flex flex-col gap-3 text-[20px] opacity-70">
                  <a href="#howzit" className="hover:opacity-100 hover:font-medium transition-all">Home</a>
                  <a href="#about" className="hover:opacity-100 hover:font-medium transition-all">About</a>
                  <a href="#work" className="hover:opacity-100 hover:font-medium transition-all">Work</a>
                  <a href="#life" className="hover:opacity-100 hover:font-medium transition-all">Life</a>
                  <a href="#contact" className="hover:opacity-100 hover:font-medium transition-all">Contact</a>
                </div>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-[24px] font-medium mb-4 opacity-80">Connect</h3>
                <div className="flex gap-4">

                  <a
                    href="https://github.com/u24569608/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black flex items-center justify-center transition-all hover:scale-105"
                  >
                    <img src="/Github.svg" alt="GitHub" className="w-9 h-9" />
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

        {/* Bottom */}
        <div className="mt-12 text-[16px] tracking-wider opacity-40">
          ©2026 Connor Bell <br />
          Proudly Made in South Africa
        </div>

      </div>
    </footer>
  );
}