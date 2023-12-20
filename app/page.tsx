import Intro from "@/sections/Intro";
import Footer from "@/components/Footer";
import Consult from "@/sections/Consult";
import Banner from "@/sections/Banner";
import Reviews from "@/sections/Reviews";
import Navbar from "@/components/Navbar";
import Expertise from "@/sections/Expertise";

export default function Home() {
  return (
    <>
      <section className="bg-banner bg-no-repeat bg-cover">
        <Banner />
      </section>
      <section className="intro-bg-style">
        <Intro />
      </section>
      <section className="sm:px-[70px] sm:p-10">
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
