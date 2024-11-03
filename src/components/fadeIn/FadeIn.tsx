"use client";

import React, { useEffect, useState } from "react";

interface IFadeInProps {
  children: React.ReactNode;
  type: "slow" | "fast";
}

export default function FadeIn(props: IFadeInProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`fade-in-${props.type} ${fadeIn ? "opacity" : ""}`}>
      {props.children}
    </div>
  );
}
