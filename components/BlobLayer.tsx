"use client";

import { motion } from "framer-motion";

const BlobLayer = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute flex flex-wrap w-full h-[1000px]
    max-small:scale-[0.5]
    max-small:right-0
    max-small:translate-x-[25%]
    max-small:-translate-y-[20%]"
    >
      {/* Blob 1 */}
      <div className="w-full z-10 relative">
        <motion.img
          src={"/intro section/blob-1.svg"}
          alt=""
          className="absolute small:scale-50"
          style={{ right: "0" }}
          initial={{ x: 3, y: -8 }}
          animate={{ x: 35, y: -15 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Blob 2 */}
      <div
        className="z-20 w-full relative"
        style={{ transform: "translateX(10vw)" }}
      >
        <motion.img
          src={"/intro section/blob-2.svg"}
          alt=""
          className="absolute"
          style={{ right: "10vw" }}
          initial={{ x: 15, y: -4 }}
          animate={{ x: 50, y: -50 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Blob 3 */}
      <div
        className="z-30 w-full relative"
        style={{ transform: "translateY(-200px)" }}
      >
        <motion.img
          src={"/intro section/blob-3.svg"}
          alt=""
          className="absolute"
          style={{ right: "0" }}
          initial={{ x: 9, y: 1 }}
          animate={{ x: 15, y: -50 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default BlobLayer;
