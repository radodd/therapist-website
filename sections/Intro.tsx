"use client";

import Image from "next/image";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { qualifications } from "@/constants";
import { motion } from "framer-motion";
import BlobLayer from "@/components/BlobLayer";

const Intro = () => {
  const [collapse, setCollapse] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.matchMedia("(max-width: 835px)").matches);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <section
      id="about"
      className="relative z-20 flex items-center flex-col w-full object-cover bg-primary"
    >
      {/* Vector Blob Layer */}

      <BlobLayer />

      {/* Contains <>Image,</> and <>Title, Intro Paragraph, Buttons</> */}
      <div className="z-30 relative flex mt-10 max-lg:flex-col items-center medium:ml-[70px] medium:mr-[180px] tablet:m-10">
        {/* Contains Only Image */}
        <div className="flex justify-start items-center max-lg:justify-center">
          <Image
            src="/selfie.jpg"
            alt="intro picture"
            width={300}
            height={450}
            className="max-lg:m-0 rounded-t-full"
          />
        </div>

        {/* Contains Title, Intro Paragraph, Buttons */}
        <div className="flex flex-col text-white max-w-[748px] gap-8 lg:ml-[110px] max-tablet:mx-8">
          <h2 className="text-lg font-normal mt-10 lg:max-w-lg">
            Hi, I'm Gen Fulton.
          </h2>
          <p className="lg:max-w-3xl text-sm font-normal">
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
          {/* See Less/More Button */}
          <div className="max-tablet:hidden">
            <Button
              type="button"
              title={collapse ? "See Less" : "See More"}
              variant="btn-underline"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
          {/* Arrow Icon conditionally renders on screen size */}
          <div
            className={`flex flex-wrap gap-8 font-extrabold font-sm max-lg:justify-center max-sm:gap-[22px] ${
              collapse && "hidden"
            } ${isTablet ? "" : "hidden"}`}
          >
            <Button
              type="button"
              variant="btn-icon"
              icon="/arrow-down.svg"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* ONLY See More Content */}
      <div
        className={`z-30 flex flex-col text-white long-text my-8 mx-[70px]
        max-w-[1190px]
        max-tablet:mx-7
         ${collapse ? "expanded" : ""} `}
      >
        {qualifications.map((item, index) => (
          <div key={item.title} className="flex flex-col pb-6">
            <h2 className="font-normal text-lg pb-6">{item.title}</h2>
            {item.highlights.map((highlight, index) => (
              <p key={`${item.id}-${index}`} className="font-light text-sm">
                {highlight}
              </p>
            ))}
          </div>
        ))}
        <div className="gap-8">
          <Button
            title="View Gen's CV"
            type="button"
            variant="btn-transparent"
          />
          <div className="flex justify-center items-center pt-6">
            <Button
              type="button"
              variant="btn-icon"
              icon="/arrow-down.svg"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
