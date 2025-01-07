import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingAnimation = ({ duration }: { duration: number }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <motion.img
        src={`${basePath}/moon.svg`}
        alt="Rotating Logo"
        style={{
          width: "150px",
          height: "150px",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default LoadingAnimation;
