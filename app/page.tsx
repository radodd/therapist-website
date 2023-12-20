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
      <section className="sm:px-[70px] max-sm:px-8 bg-banner bg-no-repeat bg-cover">
        <Banner />
      </section>
      <section className="sm:px-[70px] px-[35px] mt-[72px] bg-navy-blue border-blue-700 border-2">
        <Intro />
      </section>
      <section className="sm:px-[70px] sm:p-10">
        <Expertise />
      </section>
      <section className="relative sm:px-0 bg-sea-foam justify-center">
        <Reviews />
      </section>
      <section className="sm:px-[70px] sm:p-10 mt-[72px] bg-gradient-to-r from-[rgba(38,66,90,0.70)] via-transparent to-[rgba(38,66,90,0.70)] bg-cover bg-no-repeat">
        <Consult />
      </section>
    </>
  );
}
