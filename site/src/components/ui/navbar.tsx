"use client";

import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const menuControlClassName =
  "absolute top-3 right-8 flex size-10 cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2";

const navigationItems = [
  { href: "/", label: "HOME" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/cv", label: "CV" },
];

const socialItems = [
  {
    href: "https://za.linkedin.com/in/connorbellup",
    label: "LINKEDIN",
  },
  {
    href: "https://github.com/u24569608",
    label: "GITHUB",
  },
];

function Navbar() {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="self-center text-lg text-white font-semibold whitespace-nowrap"
        >
          CONNOR BELL
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Drawer swipeDirection="right">
            <DrawerTrigger
              aria-label="Open menu"
              className={`${menuControlClassName} flex-col gap-1.5 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
            >
              <span className="h-0.5 w-8 bg-white" />
              <span className="h-0.5 w-8 bg-white" />
              <span className="h-0.5 w-8 bg-white" />
            </DrawerTrigger>
            <DrawerContent className="bg-white text-black">
              <DrawerTitle className="sr-only">Navigation</DrawerTitle>
              <DrawerDescription className="sr-only">
                Site navigation menu
              </DrawerDescription>
              <DrawerClose
                aria-label="Close menu"
                className={`${menuControlClassName} focus-visible:ring-black`}
              >
                <span className="absolute h-[2.515px] w-8 rotate-45 bg-black" />
                <span className="absolute h-[2.515px] w-8 -rotate-45 bg-black" />
              </DrawerClose>
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-8 pt-20 pb-8 text-center">
                <nav aria-label="Primary navigation">
                  <ul className="flex flex-col items-center gap-2 text-[1.2rem] font-medium">
                    {navigationItems.map((item) => (
                      <li key={item.href}>
                        <DrawerClose
                          render={
                            <Link
                              href={item.href}
                              className="underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                            />
                          }
                        >
                          {item.label}
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-12 flex flex-col items-center gap-2 text-[1.1rem] font-medium">
                  {socialItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 focus-visible:outline-none"
                    >
                      <span className="underline underline-offset-4">
                        {item.label}
                      </span>
                      <span className="material-symbols-sharp">
                        north_east
                      </span>
                    </a>
                  ))}
                </div>

                <address className="mt-auto pt-16 text-[1rem] leading-relaxed tracking-wide not-italic">
                  <p className="font-semibold text-[1.1rem]">CONNOR BELL</p>
                  <p>
                    Johannesburg – RSA
                  </p>
                  <a
                    href="mailto:connor@cbell.co.za"
                    className="underline-offset-4 underline focus-visible:underline focus-visible:outline-none"
                  >
                    connor@cbell.co.za
                  </a>
                </address>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
