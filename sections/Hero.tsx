"use client";
import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="z-10 relative overflow-hidden w-full flex flex-col justify-center"
    >
      {/* <img
        src="/hero.jpg"
        alt=""
        className="z-20 absolute object-cover scale-150 object-center transform translate-x-[25%] translate-y-[5%] max-tablet:hidden"
      /> */}

      <img
        src="/mobile-hero.jpg"
        alt=""
        className="z-20 absolute object-cover transform
        max-mobileplus:scale-[2.3]
        max-extrasmall:translate-x-[5%]
        max-mobile:translate-y-[0%]
        max-tablet:scale-[1.8]
        max-tablet:translate-x-[4%]
        max-tablet:translate-y-[10%]
        tablet:scale-[1.3]
        tablet:translate-x-[3%]
        medium:translate-y-[8%]
        medium:scale-[1.3]
        wide:translate-x-[10%]
        wide:translate-y-[12%]
        wide:scale-[1.2]
        wideplus:translate-x-[5%]
        wideplus:translate-y-[12%]
        wideplus:scale-[1.1]"
      />

      <div
        className="z-30 bg-gradient-to-r from-black/80 from-12% to-transparent to-70%
        max-mobile:from-20%
        max-tablet:from-25%"
      >
        <div
          className="z-40 flex flex-col justify-start leading-normal
          max-mobileplus:mt-[40px]
          max-mobile:mt-[10px]
          mobileplus:mt-[70px]
          tablet:mt-[186px]
          max-tablet:mx-8
          tablet:mx-[70px]"
        >
          <h1
            className="flex flex-col text-hero font-normal text-white whitespace-pre justify-start pb-6
            max-tablet:flex
            max-tablet:flex-col
            max-tablet:text-[50px]
            max-tablet:pb-0
            max-tablet:pt-[170px]"
          >
            Gen Fulton{" "}
            <span className="inline-block max-tablet:hidden">Consultancy</span>
          </h1>
          <h2
            className="flex-col text-lg font-normal text-white pb-12
            max-mobile:text-[20px]
            max-tablet:flex
            max-tablet:flex-col
            max-tablet:pb-8"
          >
            Psychotherapy&nbsp;
            <span className="inline-block">& Coaching</span>
          </h2>

          <div
            className="font-extrabold
            max-tablet:mb-10
            tablet:mb-[86px]"
          >
            <Button
              type="button"
              variant="btn-primary"
              title="View Expertise"
              href="#expertise"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
