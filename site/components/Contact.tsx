"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);

      // Clear form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide success after 4s
      setTimeout(() => setSuccess(false), 4000);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="w-full bg-[rgb(91,111,185)] text-white">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 pt-8 pb-16 md:py-16">

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-20">

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-medium tracking-wide opacity-90 min-w-[140px]">
            Contact
          </h2>

          {/* Form */}
          <div className="w-full max-w-[800px] lg:ml-[140px] xl:ml-[124px]">

            <h3 className="text-[32px] md:text-[32px] font-light mb-4 opacity-90">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 min-[820px]:grid-cols-2 gap-6">
                <div>
                  <label className="text-[20px] opacity-80">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 text-[20px] font-['ubuntu-mono'] font-semibold bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>

                <div>
                  <label className="text-[20px] opacity-80">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 text-[20px] font-['ubuntu-mono'] font-semibold bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 min-[820px]:grid-cols-2 gap-6">
                <div>
                  <label className="text-[20px] opacity-80">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 text-[20px] font-['ubuntu-mono'] font-semibold bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>

                <div>
                  <label className="text-[20px] opacity-80">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 text-[20px] font-['ubuntu-mono'] font-semibold bg-white/10 border border-white/30 outline-none focus:border-white transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[20px] opacity-80">Write a Message*</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 text-[20px] font-['ubuntu-mono'] font-semibold bg-white/10 border border-white/30 outline-none focus:border-white transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 py-3 text-[22px] tracking-wide font-medium bg-[rgb(121,148,248)] hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <rect width="2" height="5" x="11" y="1" opacity=".14"/>
                      <rect width="2" height="5" x="11" y="1" opacity=".29" transform="rotate(30 12 12)"/>
                      <rect width="2" height="5" x="11" y="1" opacity=".43" transform="rotate(60 12 12)"/>
                      <rect width="2" height="5" x="11" y="1" opacity=".57" transform="rotate(90 12 12)"/>
                      <rect width="2" height="5" x="11" y="1" opacity=".71" transform="rotate(120 12 12)"/>
                      <rect width="2" height="5" x="11" y="1" opacity=".86" transform="rotate(150 12 12)"/>
                      <rect width="2" height="5" x="11" y="1" transform="rotate(180 12 12)"/>
                      <animateTransform
                        attributeName="transform"
                        calcMode="discrete"
                        dur="0.75s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                      />
                    </g>
                  </svg>
                )}
                {loading ? "Sending..." : "Send"}
              </button>

              {success && (
                <p className="text-[22px] font-medium -mt-2 text-[rgb(169, 187, 255)]">
                  Shap! Message Received
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}