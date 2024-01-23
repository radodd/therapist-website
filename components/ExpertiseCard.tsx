"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const [isMobile, setIsMobile] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 835px)").matches);
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

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group flex flex-col justify-center items-center text-[#000409]
      mobile:w-[280px]
      max-mobile:w-[264px]"
      animate={{
        height: collapse ? 600 : 447,
      }}
      // whileHover={{
      //   scale: 1.04,
      // }}
      transition={{
        duration: 0.3,
      }}
    >
      {/* Animated SVG */}
      <div
        className="w-[186px] h-[186px] transform relative
      "
      >
        {/* Include your animated SVG component here */}
        {/* Example: <AnimatedSVGComponent /> */}

        <motion.img
          src={blob}
          alt=""
          className={`z-10 absolute transition
          ${
            isMobile
              ? ""
              : "group-hover:-translate-x-[15px] group-hover:translate-y-2 group-hover:-rotate-6 group-hover:duration-500 group-hover:ease-in-out"
          }`}

          // initial={{
          //   x: 0,
          //   y: 0,
          // }}
          // whileHover={{
          //   x: 0,
          //   y: 0,
          //   scale: 2,
          // }}
          // transition={{
          // repeat: Infinity,
          // repeatType: "mirror",
          // duration: 2,
          // ease: "easeInOut",
        />
        <img
          src={icon}
          alt="icon"
          width={186}
          height={186}
          className={`z-20 absolute
          ${
            isMobile
              ? ""
              : "group-hover:translate-x-[15px] group-hover:-translate-y-2 group-hover:rotate-6 group-hover:duration-500 group-hover:ease-in-out"
          }`}
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
      <div className="z-30 pt-7">
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
