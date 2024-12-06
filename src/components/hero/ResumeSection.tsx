"use client";
import React from "react";
import CustomButton from "../common/custom-element/CustomButton";
import { FileUser} from "lucide-react";

const ResumeSection = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1dHqgw19Mm0kr25gkJ1JRUDMdT7QNsjwt/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="flex gap-2 py-2">
      <CustomButton
        title="Resume"
        icon={FileUser}
        CustomCss="bg-slate-400 text-white"
        onclick={handleResumeClick} // Attach the click handler
      />

      <CustomButton title="Hire Me" CustomCss="bg-pink-400 text-white" />
    </div>
  );
};

export default ResumeSection;
