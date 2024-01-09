import Intro from "@/sections/Intro";
import Footer from "@/sections/Footer";
import Consult from "@/sections/Consult";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Navbar from "@/sections/Navbar";
import Expertise from "@/sections/Expertise";
import HeroText from "@/sections/HeroText";
import Copyright from "@/sections/Copyright";

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section className="flex justify-center bg-[#F9F4E9]">
        <HeroText />
      </section>
      <section className="relative overflow-hidden">
        <Intro />
      </section>
      <section className="mobile:px-[70px] mobile:my-16 ">
        <Expertise />
      </section>
      <section className="relative sm:px-0 bg-sea-foam justify-center">
        <Reviews />
      </section>
      <section className=" mt-[72px] consult-bg-style">
        <Consult />
      </section>
      <Footer />
      <section>
        <Copyright />
      </section>
    </>
  );
}
