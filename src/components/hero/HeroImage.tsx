"use client";
import Image from "next/image";
import React from "react";
import { Images } from "../utils/Images";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, translateY: 50 }} // Initial animation state
        whileInView={{ opacity: 1, translateY: 0 }} // Animation when in view
        viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the card is visible
        transition={{ duration: 0.5 }} // Smooth animation
      >
        <Image
          src={Images.hero_dark}
          className=" object-cover w-56 h-56"
          alt="shanto"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
