"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

type ExpertiseCardProps = {
  title: string;
  icon: string;
  blob: string;
  description: string;
  expanded: string;
};

const ExpertiseCard = ({
  title,
  icon,
  blob,
  description,
  expanded,
}: ExpertiseCardProps) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <motion.div
      className={`flex flex-col justify-center items-center text-[#000409]
      mobile:w-[280px]
      max-mobile:w-[264px]`}
      animate={{
        height: collapse ? 580 : 407,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {/* Animated SVG */}
      <div className="w-[186px] h-[186px] transform relative">
        {/* Include your animated SVG component here */}
        {/* Example: <AnimatedSVGComponent /> */}

        <motion.img
          src={blob}
          alt=""
          className="z-10 absolute"
          initial={{
            x: 0,
            y: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            rotate: 200,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 50,
            ease: "easeInOut",
          }}
        />
        <img
          src={icon}
          alt="icon"
          width={186}
          height={186}
          className="z-20 absolute"
        />
      </div>
      <h2 className="text-lg text-primary font-semibold justify-center text-center py-7 tracking-[-1.5px]">
        {title}
      </h2>
      <p className="justify-center text-center text-sm font-normal max-w-[260px]">
        {description}
      </p>

      {/* ONLY See More Content */}
      <p
        className={`justify-center text-center text-sm font-normal long-text max-w-[260px] ${
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
    </motion.div>
  );
};

export default ExpertiseCard;
