"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { MenuItems } from "@/components/constants/MenuBarRoutes"; // Import your MenuItems array
import Link from "next/link";

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="lg:hidden relative z-50">
      {/* Hamburger Menu */}
      <div
        className={`${
          isOpen ? "glow" : ""
        } transition-all duration-300 ease-in-out`}
      >
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setIsOpen}
          direction="right"
          distance="lg"
          color="#4FD1C5"
        />
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-[3.5rem] p-5 bg-neutral-950 shadow-4xl border-b border-b-white/20"
          >
            <ul className="grid gap-2">
              {MenuItems.map((item, idx) => (
                <motion.li
                  key={item.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10, // Slight delay for staggered animation
                  }}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Close the menu on link click
                    className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950 text-white hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2 text-lg">
                      {item.icon && <item.icon className="w-5 h-5" />}
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
