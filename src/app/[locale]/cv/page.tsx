"use client";

import React from "react";
import "./../../globalVar.scss";
import "./../../global.css";

import NavigationBar from "@/components/layout/navigationBar/NavigationBar";
import Cv from "@/components/pages/cv/Cv";
import Footer from "@/components/layout/footer/Footer";

interface ICurriculumProps {
  params: {
    locale: string;
  };
}

export default function Curriculum(props: ICurriculumProps) {
  return (
    <div className="wideGrid">
      <NavigationBar {...props} />
      <Cv {...props} />
      <Footer />
    </div>
  );
}
