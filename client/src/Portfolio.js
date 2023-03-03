import React from "react";
import "./css/ruicons-embedded.css";
import "./css/globalVar.scss";
import "./css/global.css";


import NavigationBar from "./components/navigationBar/NavigationBar";
import Projects from "./components/portfolio/projects";
import Footer from "./components/footer/Footer";

export default function Portfolio(props) {

  return (
    <div className="wideGrid">
      <NavigationBar />
      <Projects {...props} />
      <Footer />
    </div>
  );
}


