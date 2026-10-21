"use client";

import { XIcon } from "@phosphor-icons/react";
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

function Navbar() {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-default">
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
                <XIcon aria-hidden="true" size={40} weight="regular" />
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
