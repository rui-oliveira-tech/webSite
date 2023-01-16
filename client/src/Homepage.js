import React from "react";
import "./css/ruicons-embedded.css";
import "./css/globalVar.scss";
import "./css/global.css";

import Language from "./components/Languages/Language";

export default function Homepage() {

  return (
    <div className="wideGrid">
      <Language />
    </div>
  );
}
