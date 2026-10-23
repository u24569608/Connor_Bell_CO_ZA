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
import SocialLinks from "@/components/ui/social-links";

const menuControlClassName =
  "absolute top-3 right-8 z-30 flex size-10 touch-manipulation cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2";

const navigationItems = [
  { href: "/", label: "HOME" },
  { href: "/cv", label: "CV" },
];

function Navbar() {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="self-center hover:underline underline-offset-4 tracking-wide text-lg text-white font-semibold whitespace-nowrap"
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
                          nativeButton={false}
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

                <SocialLinks className="mt-12 flex-col items-center" />

                <address className="mt-auto pt-16 text-[1rem] leading-relaxed tracking-wide not-italic">
                  <p className="font-semibold text-[1.1rem]">CONNOR BELL</p>
                  <p className="flex items-center justify-center gap-1.5">
                    <span>Johannesburg – South Africa</span>
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
