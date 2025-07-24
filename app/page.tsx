import Intro from "@/sections/Intro";
import Consult from "@/sections/Consult";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Expertise from "@/sections/Expertise";
import HeroText from "@/sections/HeroText";
import Media from "@/sections/Media";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="flex justify-center bg-eggshell">
        <HeroText />
      </section>
      <section className="relative overflow-hidden">
        <Intro />
      </section>
      <section className="mobile:px-[70px] mobile:py-16 max-mobile:px-8 max-mobile:py-10 bg-eggshell ">
        <Expertise />
      </section>
      <section className="relative sm:px-0 bg-sea-foam justify-center shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]">
        <Reviews />
      </section>
      <section>
        <Media />
      </section>
      <section className="pt-[72px] bg-eggshell">
        <Consult />
      </section>
    </>
  );
}
