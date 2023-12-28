import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="z-10 relative overflow-hidden w-full h-full flex flex-col justify-center"
    >
      <img
        src="/hero.jpg"
        alt=""
        className="z-20 absolute object-cover object-center scale-150 transform translate-x-[25%] translate-y-[5%]"
      />
      <div className="z-30 bg-gradient-to-r from-black/80 from-12% to-transparent to-70%">
        <div className="z-40 flex flex-col justify-start leading-normal mt-24 gap-[24px] max-sm:mt-8 sm:mx-[70px] max-sm:mx-8">
          <h1 className="text-trim font-montserrat text-xl font-normal text-white whitespace-pre justify-start">
            Gen Fulton
          </h1>
          <h2 className="font-montserrat text-lg font-normal text-white">
            Coaching & Consulting
          </h2>
          <p className="text-base font-light text-white sm:max-w-[440px]">
            Gen works with her clients based on where they are and what they
            hope to achieve rather than imposing an agenda on her clients. This
            holistic, person-centered approach has helped reduce intolerable and
            uncomfortable symptoms and increased insight, hope and harmony.
          </p>
          <div className="mb-[13px] font-extrabold">
            <Button type="button" variant="btn-primary" title="View Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
