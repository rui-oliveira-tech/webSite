"use client";

import React, { useEffect, useState } from "react";

import NavigationBar from "@/components/layout/navigationBar/NavigationBar";
import Home from "@/components/pages/home/Home";
import Footer from "@/components/layout/footer/Footer";
import FadeIn from "@/components/fadeIn/FadeIn";

interface IHomepageProps {
  params: {
    locale: string;
  };
}

export default function Homepage(props: IHomepageProps) {
  return (
    <FadeIn type="fast">
      <Home {...props} />
    </FadeIn>
  );
}
