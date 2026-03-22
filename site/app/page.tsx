import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Life from "@/components/Life";
import Contact from "@/components/Contact"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Life />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
