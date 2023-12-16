import Intro from "@/sections/Intro";
import Footer from "@/components/Footer";
import Consult from "@/sections/Consult";
import Banner from "@/sections/Banner";
import Reviews from "@/sections/Reviews";
import Navbar from "@/components/Navbar";
import Focus from "@/sections/Focus";

export default function Home() {
  return (
    <>
      <section className="sm:px-[70px] max-sm:px-8 bg-banner bg-no-repeat bg-cover">
        <Banner />
      </section>
      <section className="sm:px-[70px] px-[35px] mt-[72px] bg-navy-blue border-blue-700 border-2">
        <Intro />
      </section>
      <section className="padding">
        <Focus />
      </section>
      <section className="padding-x py-10">
        <Reviews />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Consult />
      </section>

      <section className="padding padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
}
