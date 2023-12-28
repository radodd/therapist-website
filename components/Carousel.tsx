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

  // const Dot = ({ active }: { active: boolean }) => (
  //   <span
  //     className={`inline-block w-4 h-4 mx-2 bg-[#8B949A;] rounded-full ${
  //       active ? "bg-primary" : ""
  //     }`}
  //   ></span>
  // );

  return (
    <>
      <motion.div className="flex items-center justify-center h-[398px] max-w-[1080px] max-medium:max-w-[810px] max-small:max-w-[600px] max-extrasmall:max-w-[350px] max-mobile:min-h-[200px]">
        {reviews.map((item, index) => (
          <motion.p
            key={item.id}
            className={`text-2xl max-mobile:align-middle z-30 ${
              index === current ? "" : "hidden"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: index === current ? 1 : 0,
              x: index === current ? 0 : 100,
            }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            "{item.text}"
          </motion.p>
        ))}

        <div className="absolute z-10 bottom-4 flex justify-center py-2">
          {reviews.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <Button
                type="button"
                title=""
                variant={`${
                  slideIndex === current ? "btn-selected" : "btn-icon"
                }`}
                icon="dot.svg"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="absolute h-full w-full justify-between items-center flex max-w-[1270px]">
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
