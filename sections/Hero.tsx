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
      <div className="z-30 bg-gradient-to-r from-black/80 from-12% to-transparent to-70% ">
        <div className="z-40 flex flex-col justify-start leading-normal mt-24 max-sm:mt-8 sm:mx-[70px] max-sm:mx-8 my-20">
          <h1 className="text-trim text-hero font-normal text-white whitespace-pre justify-start pb-6">
            Gen Fulton
          </h1>
          <h2 className=" text-lg font-normal text-white mb-12">
            Psychotherapy & Coaching
          </h2>

          <div className="mb-[13px] font-extrabold">
            <Button type="button" variant="btn-primary" title="View Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
