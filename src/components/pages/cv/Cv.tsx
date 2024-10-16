"use client";

import React, { useEffect, useRef } from "react";

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

// color: #193a59;
// background-color: #bdd9f3;
// const gradient = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
// const gradient = "radial-gradient(circle, rgb(25, 58, 89, 0.7) 0%, rgb(189, 217, 243, 0.7) 100%)"

const gradient =
  "radial-gradient(circle, rgb(25, 58, 89, 0.5) 0%, rgb(0, 0, 0, 0.5) 100%)";

export default function Cv(props) {
  const animatedOverlay = useRef("");
  let waitForOverlay = useRef(setTimeout(() => {}, 0));
  useEffect(() => {
    waitForOverlay.current = setTimeout(() => {
      animatedOverlay.current = "animated";
    }, 1);
    return () => clearTimeout(waitForOverlay.current);
  }, []);

  return (
    <section className="have_footer have_NavigationBar cv">
      <CvDownload {...props} animatedOverlay={animatedOverlay} />
      <div className="cvContainer">
        <About
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <Certification
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <Education
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <Languages
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <ProgrammingLanguages
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <Experience
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <Projects
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <Others
          {...props}
          gradient={gradient}
          animatedOverlay={animatedOverlay}
        />
        <Map {...props} gradient={gradient} animatedOverlay={animatedOverlay} />
      </div>
    </section>
  );
}
