"use client";
import { motion } from "framer-motion";

interface MotionProps {
  id: number; // Use the `id` to calculate the delay
  children: React.ReactNode;
}

const CardMotion: React.FC<MotionProps> = ({ id, children }) => {
  return (
    <motion.div
      className="w-full md:w-[48%] lg:w-[20%] p-5 rounded-xl shadow-lg bg-[#1f1e1f] border-4 border-none border-indigo-600"
      initial={{ opacity: 0, translateY: 50 }} // Initial animation state
      whileInView={{ opacity: 1, translateY: 0 }} // Animation when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the card is visible
      transition={{ duration: 0.5, delay: id * 0.2 }} // Smooth animation with delay based on `id`
    >
      {children}
    </motion.div>
  );
};

export default CardMotion;
