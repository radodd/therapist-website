import React from "react";
import { motion } from "framer-motion";

const BlobLayer = () => {
  return (
    <div className="absolute border-2 justify-end border-red-700 flex flex-wrap w-full h-[1000px] ">
      {/* Blob 1 */}
      <div className=" border-2 border-orange-500 w-full z-10 relative">
        <motion.img
          src={"/blob-1.svg"}
          alt=""
          className="absolute"
          style={{
            right: "0",
          }}
          initial={{
            transform: "translateX(3px) translateY(-8px)",
          }}
          animate={{
            transform: "translateX(35px) translateY(-15px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Blob 2 */}
      <div
        className="z-20 w-full relative border-2 border-green-500"
        style={{
          transform: "translateX(10vw) translateY(vh)", // Use viewport units for responsive translation
        }}
      >
        <motion.img
          src={"/blob-2.svg"}
          alt=""
          className="absolute transform"
          style={{
            right: "20vw",
          }}
          initial={{
            transform: "translateX(8px) translateY(-4px)",
          }}
          animate={{
            transform: "translateX(30px) translateY(-50px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Blob 3 */}
      <div
        className="z-30 w-full relative border-2 border-red-200"
        style={{ transform: "translateY(-200px)" }}
      >
        <motion.img
          src={"/blob-3.svg"}
          alt=""
          className="absolute"
          style={{
            right: "0",
          }}
          initial={{
            transform: "translateX(9px) translateY(1px)",
          }}
          animate={{
            transform: "translateX(15px) translateY(-10px)",
          }}
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

{
  /* <motion.img */
}
//   src={"/blob.svg"}
//   alt=""
//   className="absolute z-10"
//   style={{ right: "0" }}
//   initial={{
//     transform: "translateX(8px) translateY(-4px)",
//   }}
//   animate={{
//     transform: "translateX(25px) translateY(-20px)",
//   }}
//   transition={{
//     repeat: Infinity,
//     repeatType: "mirror",
//     duration: 3,
//     ease: "easeInOut",
//   }}
// />
