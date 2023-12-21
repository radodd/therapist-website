"use client";

import Image from "next/image";
import Button from "../components/Button";
import { useState } from "react";
import { qualifications } from "@/constants";

const Intro = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <section
      id="about"
      className="flex items-center flex-col w-full object-cover bg-[#144F7C]"
    >
      {/* Contains <>Image,</> and <>Title, Intro Paragraph, Buttons</> */}
      <div className="relative flex mt-10 max-lg:flex-col items-center sm:ml-[70px] sm:mr-[180px]">
        {/* Contains Only Image */}
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

        {/* Contains Title, Intro Paragraph, Buttons */}
        <div className="flex flex-col text-white max-w-[748px] gap-8 lg:ml-[110px] max-[640px]:mx-8">
          <h2 className="font-montserrat text-lg font-normal lg:max-w-lg">
            Meet Gen TEST
          </h2>
          <p className="lg:max-w-3xl text-base font-light">
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
              title="See More"
              variant="btn-underline"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
          <div className="flex flex-wrap gap-8 font-extrabold font-sm max-lg:justify-center max-sm:gap-[22px]">
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
        className={`flex flex-col text-white long-text ${
          collapse ? "expanded" : ""
        } my-10 mx-[70px]`}
      >
        {qualifications.map((item, index) => (
          <div key={item.title} className="flex flex-col pb-6">
            <h2 className="font-normal text-lg pb-6">{item.title}</h2>
            {item.highlights.map((highlight) => (
              <p className="font-light text-base">{highlight}</p>
            ))}
          </div>
        ))}
        <Button title="View Gen's CV" type="button" variant="btn-transparent" />
      </div>

      {/* END See More Content */}
    </section>
  );
};

export default Intro;
