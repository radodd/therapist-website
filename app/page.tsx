import Intro from "@/sections/Intro";
import Footer from "@/components/Footer";
import Consult from "@/sections/Consult";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Navbar from "@/components/Navbar";
import Expertise from "@/sections/Expertise";
import HeroText from "@/sections/HeroText";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="flex justify-center">
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
    </>
  );
}
// sm:px-[70px] px-[35px] mt-[72px]
