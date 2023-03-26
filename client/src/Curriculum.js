import React from "react";
import "./css/ruicons-embedded.css";
import "./css/globalVar.scss";
import "./css/global.css";


import NavigationBar from "./components/navigationBar/NavigationBar";
import Cv from "./components/cv/Cv";
import Footer from "./components/footer/Footer";

export default function Curriculum(props) {

  return (
    <div className="wideGrid">
      <NavigationBar {...props} />
      <Cv {...props} />
      <Footer />
    </div>
  );
}


