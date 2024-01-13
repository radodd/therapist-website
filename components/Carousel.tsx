"use client";
import { reviews } from "@/constants";

import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

type CarouselProps = {
  text: string;
  slideIndex: number;
};

const Carousel: React.FC<CarouselProps> = ({ text, slideIndex }) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrent(slideIndex);
  };

  return (
    <>
      <motion.div
        className="flex flex-col gap-6 items-center justify-center text-center
        min-h-full

        max-w-[1080px]
max-mobileplus:max-w-[250px]
         max-extrasmall:max-w-[350px]
max-small:max-w-[600px]
         max-medium:max-w-[810px]"
        // mobile:max-h-[563px]
        // max-mobile:min-h-[508px]
        //
        //
      >
        <img
          src="carousel-icon.svg"
          alt="carousel icon"
          className="z-10 flex justify-center"
        />
        {reviews.map((item, index) => (
          <motion.div
            key={item.id}
            className={`text-md font-normal text-primary z-30
            max-mobile:align-middle
            max-mobileplus:text-[16px]
            max-mobileplus:justify-center
            max-mobile:w-56 ${index === current ? "" : "hidden"}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: index === current ? 1 : 0,
              x: index === current ? 0 : 100,
            }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            "{item.text}"
            <div className="flex flex-row justify-center items-center mt-6 gap-4">
              <span
                key={item.name}
                className="font-bold text-md text-tertiary flex justify-center"
              >
                {item.name}
              </span>
              <span
                key={item.id}
                className="italic text-tertiary flex max-mobile:text-[14px] "
              >
                {item.profession}
              </span>
            </div>
          </motion.div>
        ))}

        <div className=" z-40 flex bottom-0 justify-center py-2 gap-4 max-mobile:mb-4">
          {reviews.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer"
            >
              <Button
                type="button"
                icon={`${
                  slideIndex === current ? "dot-selected.svg" : "dot.svg"
                }`}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="absolute h-full w-full justify-between items-center flex px-[40px] max-w-[1349px] max-tablet:px-[10px]">
        <Button
          type="button"
          title=""
          variant="btn-icon"
          icon="arrow-left.svg"
          onClick={previousSlide}
        />
        <Button
          type="button"
          title=""
          variant="btn-icon"
          icon="arrow-right.svg"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};

export default Carousel;
