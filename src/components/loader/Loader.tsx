"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Centering the loader on the screen
const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  position: "fixed" as "fixed", // Correcting the position type
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  borderRadius: "50%",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: { y: "0%" },
  end: { y: "100%" },
};

const loadingCircleTransition = {
  duration: 1.5, // Duration is now longer (1.5 seconds)
  yoyo: Infinity,
  ease: "easeInOut",
};

const COLORS = ["#ff0000", "#00ff00", "#0000ff"]; // Multicolor dots

export const ThreeDotsWaveLoader = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      {COLORS.map((color, index) => (
        <motion.span
          key={index}
          style={{ ...loadingCircle, backgroundColor: color }}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      ))}
    </motion.div>
  );
};

const ClientLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // End loading after 2 seconds (make the delay a bit longer)
    }, 3000); // Adjusted to 1500ms (1.5s)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <ThreeDotsWaveLoader />; // Show the loader
  }

  return <>{children}</>;
};

export default ClientLoader;
