"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

type ExpertiseCardProps = {
  title: string;
  icon: string;
  description: string;
  expanded: string;
};

const ExpertiseCard = ({
  title,
  icon,
  description,
  expanded,
}: ExpertiseCardProps) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center items-center text-[#000409] mobile:w-[280px] max-mobile:w-[264px]  ${
        collapse ? "h-[566px]" : "h-[407px]"
      }`}
    >
      {/* Animated SVG */}
      <div className="border-2 border-red-300 w-full h-full relative">
        {/* Include your animated SVG component here */}
        {/* Example: <AnimatedSVGComponent /> */}

        <motion.img
          src={"/card-blob-3.svg"}
          alt=""
          className="z-10 absolute transform translate-x-8"
          initial={{
            transform: "translateX(3px) translateY(-8px) rotate(0deg)",
          }}
          animate={{
            transform: "translateX(20px) translateY(-15px) rotate(175deg)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>
      <img src={icon} alt="icon" width={186} height={186} className="z-20" />
      <h2 className="text-lg text-primary font-semibold justify-center text-center py-7 tracking-[-1.5px]">
        {title}
      </h2>
      <p className="justify-center text-center text-sm font-normal">
        {description}
      </p>

      {/* ONLY See More Content */}
      <p
        className={`justify-center text-center text-sm font-normal long-text  ${
          collapse ? "expanded" : "hidden"
        }`}
      >
        {expanded}
      </p>
      <div className="pt-7">
        <Button
          type="button"
          title={collapse ? "See Less" : "See More"}
          variant="btn-card"
          onClick={() => setCollapse((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default ExpertiseCard;
