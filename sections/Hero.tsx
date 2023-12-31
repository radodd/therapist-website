import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="z-10 relative overflow-hidden w-full h-auto flex flex-col justify-center"
    >
      <img
        src="/hero.jpg"
        alt=""
        className="z-20 absolute object-cover object-center scale-150 transform translate-x-[25%] translate-y-[5%] max-tablet:hidden"
      />

      <img
        src="/mobile-hero.jpg"
        alt=""
        className="z-20 absolute object-cover scale-150 transform translate-x-[15%] translate-y-[5%] tablet:hidden"
      />

      <div className="z-30 bg-gradient-to-r from-black/80 from-12% to-transparent to-70% max-mobile:bg-gradient-to-br max-tablet:from-25% max-mobile:from-20% max-tablet:mb-8">
        <div className="z-40 flex flex-col justify-start leading-normal tablet:mt-[186px] [494px]:mb-[126px] mobile:mt-10 mobile:mx-[70px] max-mobile:mx-8">
          <h1 className="text-trim text-hero font-normal text-white whitespace-pre justify-start pb-6">
            Gen Fulton
          </h1>
          <h2 className="text-lg font-normal text-white mb-12">
            Psychotherapy <span className="inline-block">& Coaching</span>
          </h2>

          <div className=" font-extrabold">
            <Button type="button" variant="btn-primary" title="View Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
