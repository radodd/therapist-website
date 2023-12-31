"use client";

import Image from "next/image";
import Button from "../components/Button";
import { useState } from "react";
import { qualifications } from "@/constants";
import { motion } from "framer-motion";
import BlobLayer from "@/components/BlobLayer";

const Intro = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <section
      id="about"
      className="z-20 flex items-center flex-col w-full object-cover bg-primary"
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

          <div className="">
            <Button
              type="button"
              title={collapse ? "See Less" : "See More"}
              variant="btn-underline"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
          <div
            className={`flex flex-wrap gap-8 font-extrabold font-sm max-lg:justify-center max-sm:gap-[22px] ${
              collapse && "hidden"
            }`}
          >
            <Button title="Contact Gen" type="button" variant="btn-primary" />
            <Button
              title="View Gen's CV"
              type="button"
              variant="btn-transparent"
            />
          </div>
        </div>
      </div>

      {/* ONLY See More Content */}
      <div
        className={`z-30 flex flex-col text-white long-text max-w-[1190px] max-mobile:mx-8 ${
          collapse ? "expanded" : ""
        } my-8 mx-[70px]`}
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
        <div className="flex gap-8">
          <Button title="Contact Gen" type="button" variant="btn-primary" />
          <Button
            title="View Gen's CV"
            type="button"
            variant="btn-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
