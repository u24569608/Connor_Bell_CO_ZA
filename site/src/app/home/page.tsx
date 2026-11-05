import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import HomePage from "../pages/home";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main data-page="home" className="h-svh overflow-hidden bg-black">
      <Navbar />
      <HomePage />
    </main>
  );
}
