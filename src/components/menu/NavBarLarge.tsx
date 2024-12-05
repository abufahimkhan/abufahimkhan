import { MenuItems } from "@/components/constants/MenuBarRoutes";
import Link from "next/link";
import React from "react";

export const NavBarLarge = () => {
  return (
    <nav className="flex justify-center py-5 shadow-lg">
      <ul className="flex items-center gap-6 text-sm">
        {MenuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-all"
            >
              {/* Add glow effect to the icon */}
              {item.icon && (
                <span className="glow">
                  <item.icon className="w-5 h-5" />
                </span>
              )}
              {/* Add glow effect to the text */}
              <span className="glow font-sen">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
