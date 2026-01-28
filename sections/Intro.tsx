"use client";

import Button from "../components/Button";
import { useEffect, useState } from "react";
import { intro, qualifications } from "@/constants";
import BlobLayer from "@/components/BlobLayer";

const Intro = () => {
  const [collapse, setCollapse] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.matchMedia("(max-width: 835px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative z-20 flex items-center flex-col w-full object-cover bg-primary"
    >
      {/* Vector Blob Layer */}

      <BlobLayer />

      {/* Contains <>Image,</> and <>Title, Intro Paragraph, Buttons</> */}
      <div
        className={`z-30 relative flex max-lg:flex-col items-center medium:ml-[70px] medium:mr-[180px] ${
          collapse ? "tablet:my-10" : "tablet:my-16"
        } tablet:mx-[70px] max-tablet:m-7 max-mobile:mx-8`}
      >
        {/* Contains Only Image */}
        <div className="flex justify-start items-center max-lg:justify-center">
          <img
            src="/selfie.jpg"
            alt="intro picture"
            width={300}
            height={450}
            className="max-lg:m-0 rounded-t-full"
          />
        </div>

        {/* Contains Title, Intro Paragraph, Buttons */}
        <div className="flex flex-col text-white xl:max-w-[748px] gap-8 lg:ml-[110px] ">
          {intro.map((items, index) => (
            <div key={index}>
              {" "}
              <h2 className="text-lg font-normal mt-10 pb-6 lg:max-w-lg">
                {items.greeting}
              </h2>
              <p className="lg:max-w-3xl text-sm font-normal">{items.text}</p>
            </div>
          ))}

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
              icon="arrow/arrow-down.svg"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* ONLY See More Content */}
      <div
        className={`z-30 flex flex-col text-white long-text  mx-[70px]
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
            onClick={() =>
              window.open(
                "/docs/Gen Fulton's Curriculum Vitae January 2026.pdf",
              )
            }
          />
          <div className="flex justify-center items-center pt-6 mb-10">
            <Button
              type="button"
              variant="btn-icon"
              icon="arrow/arrow-up.svg"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
