import { description } from "@/constants";
import React from "react";

const HeroText = () => {
  return (
    <section
      className="flex my-16 justify-center items-center text-center w-full max-w-[1160px]
    max-tablet:mx-8
    tablet:mx-[140px]"
    >
      {description.map((item, index) => (
        <p
          key={index}
          className="text-lg font-normal text-secondary text-pretty"
        >
          {item.text}
        </p>
      ))}
    </section>
  );
};

export default HeroText;
