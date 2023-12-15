import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Consult from "@/components/Consult";
import Banner from "@/components/Banner";
import Reviews from "@/components/Reviews";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <section className="sm:px-[70px] px-[35px] bg-banner bg-no-repeat">
        <Banner />
      </section>
      <section className="sm:px-[70px] px-[35px] mt-[72px] bg-navy-blue border-blue-700 border-2">
        <Intro />
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
