"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        y: -scrollY,
        transition: { ease: "easeOut", duration: 0.5 },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <motion.div animate={controls}>{children}</motion.div>
    </div>
  );
};

export default SmoothScroll;
