"use client";
import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export const ThreeDotsWaveLoader = () => {
  const loaderColors = ["#24d86a", "#FF5733", "#3357FF", "#FFC300", "#C70039"]; // Multicolor array
  const [colorIndex, setColorIndex] = useState(0); // To track the current color

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % loaderColors.length); // Cycle through colors
    }, 300); // Change color every second

    return () => clearInterval(colorChangeInterval); // Cleanup interval on unmount
  }, [loaderColors.length]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height to center vertically
        width: "100vw", // Full viewport width to center horizontally
      }}
    >
      <PacmanLoader
        color={loaderColors[colorIndex]} // Dynamically change color
        size={50} // Adjust size of the loader
        margin={2} // Adjust spacing between elements
        speedMultiplier={1} // Adjust animation speed
      />
    </div>
  );
};
