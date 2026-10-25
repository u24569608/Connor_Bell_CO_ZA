import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Banner from "@/components/ui/banner";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Connor Bell – Privacy",
};

export default function Privacy() {
  return (
    <main data-page="privacy" className="min-h-svh bg-white">
      <Navbar />
      <Banner heading="Privacy" />
      <section className="w-full max-w-4xl px-8 pt-6 pb-32 md:px-24 md:pb-24">
        <div className="mt-12 max-w-3xl space-y-[68px] text-sm text-neutral-500 sm:text-base [&_p]:text-justify">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-wide text-black sm:text-xl">
              Introduction
            </h2>
            <p>
              This is my personal website. I respect your privacy and I aim to
              collect as little personal information as possible.
              This page explains what information may be processed when you visit
              my website, how it is used, and how to contact me about your
              privacy.
            </p>
          </div>

          <section aria-labelledby="privacy-analytics" className="space-y-2">
            <h2
              id="privacy-analytics"
              className="text-lg font-semibold tracking-wide text-black sm:text-xl"
            >
              Analytics
            </h2>
            <p>
              My website uses{" "}
              <a
                href="https://vercel.com/docs/analytics"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="underline underline-offset-4">
                  Vercel Web Analytics
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-sharp"
                  style={{ fontSize: "1.2rem" }}
                >
                  north_east
                </span>
              </a>{" "}
              to understand general website traffic, such as page views,
              approximate visitor locations, and the types of devices and
              browsers used. It also uses{" "}
              <a
                href="https://vercel.com/docs/speed-insights"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="underline underline-offset-4">
                  Vercel Speed Insights
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-sharp"
                  style={{ fontSize: "1.2rem" }}
                >
                  north_east
                </span>
              </a>{" "}
              to monitor website performance and loading times. These tools help
              me understand how the website is used and how I can improve it.
              They provide anonymous, aggregated statistics about how the
              website is used and how well it performs. The reports I receive do
              not identify you personally. Vercel Web Analytics counts visits
              without placing a tracking cookie on your device. It creates a
              temporary code from each page request to estimate repeat visits.
              This code is discarded after 24 hours, while the anonymous traffic
              statistics remain available.
            </p>
          </section>

          <section aria-labelledby="privacy-hosting" className="space-y-2">
            <h2
              id="privacy-hosting"
              className="text-lg font-semibold tracking-wide text-black sm:text-xl"
            >
              Hosting
            </h2>
            <p>
              My website is hosted by{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="underline underline-offset-4">Vercel</span>
                <span
                  aria-hidden="true"
                  className="material-symbols-sharp"
                  style={{ fontSize: "1.2rem" }}
                >
                  north_east
                </span>
              </a>
              . When you visit, technical
              information, such as your IP address and details about your browser
              and request, may be processed to deliver the website and maintain
              its security. You can read more in{" "}
              <a
                href="https://vercel.com/legal/privacy-notice"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="underline underline-offset-4">
                  Vercel&apos;s Privacy Notice
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-sharp"
                  style={{ fontSize: "1.2rem" }}
                >
                  north_east
                </span>
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="privacy-fonts" className="space-y-2">
            <h2
              id="privacy-fonts"
              className="text-lg font-semibold tracking-wide text-black sm:text-xl"
            >
              Fonts & Icons
            </h2>
            <p>
              The main text font is downloaded directly from my website. Some
              icons are loaded from{" "}
              <a
                href="https://fonts.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="underline underline-offset-4">Google Fonts</span>
                <span
                  aria-hidden="true"
                  className="material-symbols-sharp"
                  style={{ fontSize: "1.2rem" }}
                >
                  north_east
                </span>
              </a>
              . When your browser downloads these icons, Google receives
              technical information such as your IP address and browser details.
              You can read more in{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="underline underline-offset-4">
                  Google&apos;s Privacy Policy
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-sharp"
                  style={{ fontSize: "1.2rem" }}
                >
                  north_east
                </span>
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="privacy-contact" className="space-y-2">
            <h2
              id="privacy-contact"
              className="text-lg font-semibold tracking-wide text-black sm:text-xl"
            >
              Contacting Me
            </h2>
            <p>
              If you contact me using the email address linked on my website, I receive
              your email address, your name (if it is included in your email
              account or message), and any information or attachments you choose
              to share. I use this information to respond to your message.
            </p>
          </section>

          <section aria-labelledby="privacy-help" className="space-y-2">
            <h2
              id="privacy-help"
              className="text-lg font-semibold tracking-wide text-black sm:text-xl"
            >
              Help
            </h2>
            <p>
              If you have any questions about your privacy on my website,
              you can contact me at{" "}
              <a
                href="mailto:connor@cbell.co.za"
                className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                connor@cbell.co.za
              </a>
              .
            </p>
          </section>

          <footer className="space-y-2">
            <h2 className="text-lg font-semibold tracking-wide text-black sm:text-xl">
              Last Updated
            </h2>
            <Badge
              variant="outline"
              className="h-auto rounded-none border-2 border-neutral-300 px-2 py-1 text-xs font-normal text-neutral-500 sm:text-sm"
            >
              <time dateTime="2026-10-23">25 October 2026 by Connor Bell</time>
            </Badge>
          </footer>
        </div>
      </section>
    </main>
  );
}
