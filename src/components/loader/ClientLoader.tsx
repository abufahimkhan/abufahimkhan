"use client";

import React, { useEffect, useState } from "react";
import { ThreeDotsWaveLoader } from "./Loader";

const ClientLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // End loading after 5 seconds
    }, 3000); // Increased timeout duration to 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <ThreeDotsWaveLoader />;
  }

  return <>{children}</>;
};

export default ClientLoader;
