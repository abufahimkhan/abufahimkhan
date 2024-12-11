"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
interface ImageProps{
    source: string | StaticImageData;
    CustomCss?: string;
}
const ImageShow:React.FC<ImageProps> = ({source,CustomCss}) => {
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
          src={source}
          className={(clsx(" object-cover w-56 h-56", CustomCss))}
          alt="shanto"
        />
      </motion.div>
    </div>
  );
};

export default ImageShow;
