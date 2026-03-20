"use client";

export default function NotFound() {
  return (
    <section className="w-full min-h-[100svh] bg-black text-white flex overflow-y-auto">
      <div className="fixed inset-0 bg-black -z-10"></div>
      
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 flex flex-col justify-start py-20">
        
        {/* Name (like navbar) */}
        <div className="mb-12">
          <p className="text-[42px] font-medium tracking-wide opacity-70">
            Connor Bell
          </p>
        </div>

        {/* BIG heading */}
        <h1 className="
          text-[clamp(90px,24vw,220px)]
          font-medium
          tracking-tight
          leading-[0.9]
        ">
          OH SHUCKS
        </h1>

        {/* spacing */}
        <div className="mt-8">

          {/* 404 line */}
          <p className="text-[56px] md:text-[65px] font-regular tracking-wide">
            404
          </p>

          {/* small text */}
          <p className="text-[32px] md:text-[32px] tracking-wide opacity-80">
            Eish... <br></br> This Page Doesn't Exist
          </p>

        </div>

        {/* button */}
        <div className="mt-5 pb-5">
          <a
            href="/"
            className="
              inline-block
              bg-white text-black
              px-10 py-2
              text-[22px] md:text-[22px]
              tracking-wider
              transition-all
              hover:bg-[rgb(250,227,65)] hover:text-black
            "
          >
            Back Home
          </a>
        </div>

      </div>
    </section>
  );
}