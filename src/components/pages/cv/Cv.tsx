"use client";

import React, { useEffect, useState } from "react";
import CvDownload from "./CvDownload";
import About from "./About";
import Education from "./Education";
import Certification from "./Certification";
import Languages from "./Languages";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Experience from "./Experience";
import Projects from "./Projects";
import Others from "./Others";
import Map from "./Map";

import "./Cv.scss";

const gradient =
  "radial-gradient(circle, rgb(25, 58, 89, 0.5) 0%, rgb(0, 0, 0, 0.5) 100%)";

interface ICvProps {
  params: {
    locale: string;
  };
}

export function Cv(props: ICvProps) {
  const [animatedOverlay, setAnimatedOverlay] = useState("notLoading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedOverlay("notLoading");
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  const sharedProps = { ...props, gradient, animatedOverlay };

  return (
    <section className="have_footer have_NavigationBar cv">
      <CvDownload {...sharedProps} />
      <div className="cvContainer">
        <About {...sharedProps} />
        <Certification {...sharedProps} />
        <Education {...sharedProps} />
        <Languages {...sharedProps} />
        <ProgrammingLanguages {...sharedProps} />
        <Experience {...sharedProps} />
        <Projects {...sharedProps} />
        <Others {...sharedProps} />
        <Map {...sharedProps} />
      </div>
    </section>
  );
}

export default Cv;
