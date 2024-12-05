"use client";
import React from "react";
import { motion } from "framer-motion";

// Parent container to center the loader
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Take up the full height of the viewport
  width: "100vw", // Take up the full width of the viewport
};

const loadingContainer = {
  width: "6rem", // Increased size of the container
  height: "6rem", // Increased size of the container
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center", // Center the dots vertically
};

const loadingCircle = {
  display: "block",
  width: "1rem", // Increased size of the circles
  height: "1rem", // Increased size of the circles
  borderRadius: "50%", // Ensure it remains circular
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.8, // Slower animation
  yoyo: Infinity,
  ease: "easeInOut",
};

// Multicolor dots
const COLORS = ["#FF5733", "#33FF57", "#3357FF"]; // Red, Green, Blue

export const ThreeDotsWaveLoader = () => {
  return (
    <div style={containerStyle}>
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        {COLORS.map((color, index) => (
          <motion.span
            key={index}
            style={{ ...loadingCircle, backgroundColor: color }} // Apply colors dynamically
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        ))}
      </motion.div>
    </div>
  );
};
