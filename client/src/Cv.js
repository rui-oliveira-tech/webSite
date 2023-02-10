import React from "react";
import "./css/ruicons-embedded.css";
import "./css/globalVar.scss";
import "./css/global.css";


import NavigationBar from "./components/navigationBar/NavigationBar";
import CardSection from "./components/cv/CardSection";
import Footer from "./components/footer/Footer";

export default function Cv() {

  return (
    <div className="wideGrid">
      <NavigationBar />
      <CardSection />
      <Footer />
    </div>
  );
}


