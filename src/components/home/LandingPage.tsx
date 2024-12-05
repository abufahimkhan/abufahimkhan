"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "../utils/Images";
const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-12">
      <div className="uppercase text-gray-500 dark:text-white font-black text-3xl">
        Software Developer
      </div>
      <div className="flex flex-col relative z-20 text-left">
        <span className="w-20 h-2 bg-gray-400 dark:bg-white"></span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-400">
          {`A.Fahim Khan`}
          <p className="text-5xl sm:text-7xl">{`Shanto`}</p>
        </h1>
        <motion.p
          className="line-clamp-5 mt-5 text-sm sm:text-base text-gray-600 dark:text-white max-w-xl"
          initial={{ opacity: 0, scale: 0.5 }} // Initial state: invisible and shrunk
          animate={{ opacity: 1, scale: 1 }} // Final state: visible and full size
          transition={{
            duration: 0.8, // Animation lasts 0.8 seconds
            delay: 0.5, // Starts after 0.5 seconds
            ease: [0, 0.71, 0.2, 1.01], // Custom easing for smooth animation
          }}
        >
          {`I am a passionate and creative Web Developer with a love for beautiful
          and functional websites.`}
        </motion.p>
        <div className="bg-green-300"></div>
      </div>
      <motion.div
        className="relative"
        initial={{ opacity: 1, scale: 0.1 }} // Initial state: invisible and shrunk
       
        animate={{
          opacity: 1, scale: 1,
          rotate: [0, 0, 720],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          scale: 1.1,
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 0,
          repeatDelay: 1,
        }}
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

export default LandingPage;
