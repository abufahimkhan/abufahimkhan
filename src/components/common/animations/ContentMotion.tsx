"use client";
import { motion } from "framer-motion";

interface ContentProps {
  designation: string;
  name: string;
  description: string;
}
const ContentMotion: React.FC<ContentProps> = ({
  designation,
  name,
  description,
}) => {
  return (
    <div>
      <div className="uppercase text-gray-500 dark:text-white font-black text-3xl">
        {designation}
      </div>
      <div className="flex flex-col relative z-20 text-left">
        <span className="w-20 h-2 bg-gray-400 dark:bg-white"></span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-400">
          {`${name}`}
          <p className="text-5xl sm:text-7xl">{`Shanto`}</p>
        </h1>

        <motion.p
          className="line-clamp-5 py-5 text-sm sm:text-base text-gray-400 dark:text-white max-w-xl"
          initial={{ opacity: 0, y: 50 }} // Starts off invisible and 50px below
          animate={{ opacity: 1, y: 0 }} // Becomes visible and moves to its final position
          transition={{
            duration: 0.5, // Slow animation lasting 1.5 seconds
            ease: "easeOut", // Smooth, linear motion without bounce
          }}
        >
          {`${description}`}
        </motion.p>
      </div>
    </div>
  );
};

export default ContentMotion;
