import Image from "next/image";
import Button from "../components/Button";

const Intro = () => {
  return (
    <section
      id="about"
      className="flex items-center flex-col w-full object-cover bg-consult-bg-color"
    >
      <div className="relative flex mt-10 max-lg:flex-col items-center sm:mx-[70px]">
        <div className="flex justify-start items-center max-lg:justify-center image-cropper">
          <Image
            src="/selfie.jpg"
            alt="intro picture"
            width={384}
            height={512}
            // style={{ width: "auto", height: "auto" }}
            className="profile-pic max-lg:m-0"
          />
        </div>

        <div className="flex flex-col text-white gap-8 ml-[110px] max-lg:ml-0 max-[640px]:mx-8">
          <h2 className="font-montserrat text-lg font-normal lg:max-w-lg">
            Meet Gen
          </h2>
          <p className=" lg:max-w-3xl font-montserrat font-light">
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
          <div className="flex flex-wrap gap-8 font-extrabold font-sm max-lg:justify-center max-sm:gap-[22px]">
            <Button title="Contact Gen" type="button" />
            <Button title="View Gen's CV" type="button" negative={true} />
          </div>
        </div>
      </div>
      <div className=" justify-center m-10">
        <Button type="button" title="" icon="arrow.svg" />
      </div>
    </section>
  );
};

export default Intro;
