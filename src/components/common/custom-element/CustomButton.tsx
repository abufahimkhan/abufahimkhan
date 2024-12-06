"use client";

import React from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

interface ButtonProps {
  title: string;
  icon?: React.ElementType;
  CustomCss?: string;
  onclick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  icon: Icon,
  CustomCss,
  onclick,
}) => {
  return (
    <Button
      className={clsx("flex items-center px-4 py-2", CustomCss)}
      onClick={onclick}
    >
      {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
      {title}
    </Button>
  );
};

export default CustomButton;
