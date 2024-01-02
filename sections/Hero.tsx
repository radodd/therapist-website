import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="z-10 relative overflow-hidden w-full flex flex-col justify-center"
    >
      <img
        src="/hero.jpg"
        alt=""
        className="z-20 absolute object-cover scale-150 object-center transform translate-x-[25%] translate-y-[5%] max-tablet:hidden"
      />

      <img
        src="/mobile-hero.jpg"
        alt=""
        className="z-20 absolute object-cover scale-150 transform translate-x-[15%] translate-y-[5%] tablet:hidden max-mobile:"
      />

      <div
        className="z-30 bg-gradient-to-r from-black/80 from-12% to-transparent to-70%
      max-mobile:bg-gradient-to-br
      max-tablet:from-25%
      max-mobile:from-20%
     "
      >
        <div
          className="z-40 flex flex-col justify-start leading-normal
        tablet:mt-[186px]
        mobileplus:mt-[70px]
        max-mobileplus:mt-[40px]
        max-mobile:mt-[10px]
        max-tablet:mx-8
        tablet:mx-[70px]
        "
        >
          <h1
            className="text-hero font-normal text-white whitespace-pre justify-start pb-6
          max-mobile:flex
          max-mobile:flex-col
          max-mobile:text-[50px]"
          >
            Gen Fulton
          </h1>
          <h2
            className=":flex-col text-lg font-normal text-white mb-12
          max-mobile:text-[20px]
          max-tablet:flex
          max-tablet:flex-col"
          >
            Psychotherapy&nbsp;
            <span className="inline-block">& Coaching</span>
          </h2>

          <div className=" font-extrabold  max-tablet:mb-8 tablet:mb-[86px]">
            <Button type="button" variant="btn-primary" title="View Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
