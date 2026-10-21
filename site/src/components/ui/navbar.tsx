import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link
          href="/"
          className="self-center text-lg text-white font-semibold whitespace-nowrap"
        >
          CONNOR BELL
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            aria-label="Open Menu"
            className="flex size-8 cursor-pointer flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="h-0.5 w-8 bg-white" />
            <span className="h-0.5 w-8 bg-white" />
            <span className="h-0.5 w-8 bg-white" />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
