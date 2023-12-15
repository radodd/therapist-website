import Image from "next/image";
import Button from "./Button";

const Intro = () => {
  return (
    <section
      id="about"
      className="border-blue-400 border-2 flex items-center max-lg:flex-col gap-[110px] w-full max-container"
    >
      <div className="relative flex flex-row">
        <div className="flex justify-start items-center">
          <Image
            src="/intro-picture.png"
            alt="intro picture"
            width={310}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col text-white gap-8 ml-[110px]">
          <h2 className="font-montserrat text-lg font-normal lg:max-w-lg">
            Meet Gen
          </h2>
          <p className="mt-4 lg:max-w-3xl font-montserrat font-light">
            My approach to therapy focuses on conjointly developing goals that
            suit your needs to reduce stress, burnout and improve joy,
            inspiration and harmony in your life. Primarily utilizing
            neuroscience-backed techniques to improve emotional resiliency and
            nervous system re regulation, I will work with you on developing
            goals that meet your needs. Sessions are paced at a rhythm that
            feels right for your nervous system regulation and needs. I utilize
            Somatic Experiencing, a mind-body approach to trauma healing and
            improving stress resiliency to work with individuals and athletes.
          </p>
          <div className="flex flex-wrap gap-8 font-extrabold font-sm">
            <Button title="Contact Gen" type="button" />
            <Button title="View Gen's CV" type="button" negative={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-col  bottom-0 justify-center ">
        <Button type="button" title="" icon="arrow.svg" />
      </div>
    </section>
  );
};

export default Intro;
