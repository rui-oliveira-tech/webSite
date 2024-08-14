"use client";

import React from "react";
import "./../../ruicons-embedded.css";
import "./../../globalVar.scss";
import "./../../global.css";

import NavigationBar from "@/components/navigationBar/NavigationBar";
import Cv from "@/components/cv/Cv";
import Footer from "@/components/footer/Footer";

interface ICurriculumProps {}

export default function Curriculum(props: ICurriculumProps) {
  return (
    <div className="wideGrid">
      <NavigationBar {...props} />
      <Cv {...props} />
      <Footer />
    </div>
  );
}
