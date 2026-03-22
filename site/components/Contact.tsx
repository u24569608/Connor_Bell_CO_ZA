"use client";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[rgb(91,111,185)] text-white">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 pt-8 pb-16 md:py-16">

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-20">

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-medium tracking-wide opacity-90 min-w-[140px]">
            Contact
          </h2>

          {/* Form */}
          <div className="w-full max-w-[800px]">

            <h3 className="text-[32px] md:text-[32px] font-light mb-4 opacity-90">
              Get in Touch
            </h3>

            <form className="flex flex-col gap-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 min-[820px]:grid-cols-2 gap-6">
                <div>
                  <label className="text-[18px] opacity-80">First Name*</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-3 text-[20px] bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>

                <div>
                  <label className="text-[18px] opacity-80">Last Name</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-3 text-[20px] bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 min-[820px]:grid-cols-2 gap-6">
                <div>
                  <label className="text-[18px] opacity-80">Email*</label>
                  <input
                    type="email"
                    className="w-full mt-2 px-4 py-3 text-[20px] bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>

                <div>
                  <label className="text-[18px] opacity-80">Phone</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-3 text-[20px] bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[18px] opacity-80">Write a Message</label>
                <textarea
                  rows={5}
                  className="w-full mt-2 px-4 py-3 text-[20px] bg-white/10 border border-white/30 outline-none focus:border-white transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-4 py-3 text-[20px] tracking-wide bg-[rgb(121,148,248)] hover:opacity-90 transition"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}