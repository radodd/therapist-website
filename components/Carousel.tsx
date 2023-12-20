"use client";
import { reviews } from "@/constants";

import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

type CarouselProps = {
  text: string;
};

const Carousel: React.FC<CarouselProps> = ({ text }) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <motion.div className="border-purple-400 border-2 flex justify-center max-w-[1080px] max-medium:max-w-[810px] max-small:max-w-[600px] max-extrasmall:max-w-[350px]">
        {reviews.map((item, index) => (
          <motion.p
            key={item.id}
            className={`border-orange-400 border-2 flex text-center text-2xl  ${
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
      </motion.div>
      <div className="absolute h-full w-full justify-between items-center flex max-w-[1270px]">
        <Button
          type="button"
          title=""
          icon="arrow-left.svg"
          onClick={previousSlide}
        />
        <Button
          type="button"
          title=""
          icon="arrow-right.svg"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};

export default Carousel;
