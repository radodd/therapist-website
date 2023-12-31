import React from "react";
import { motion } from "framer-motion";

const BlobLayer = () => {
  return (
    <motion.img
      src={"/blob.svg"}
      alt=""
      className="absolute z-10"
      style={{ right: "0" }}
      initial={{
        transform: "translateX(8px) translateY(-4px)",
      }}
      animate={{
        transform: "translateX(25px) translateY(-20px)",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      }}
    />
  );
};

export default BlobLayer;
