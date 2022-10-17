import React, { useEffect } from "react";
import {
  useParams,
} from "react-router-dom";
import ReactGA from 'react-ga4';

import App from "../../App";
import Vcard from "../vcard/Vcard";



function getType({ type }) {
  switch (type) {
    case "face":
      return ["link from", "Facebook"];
    case "insta":
      return ["link from", "Instagram"];
    case "linkedin":
      return ["link from", "Linkedin"];
    case "google":
      return ["link from", "Google"];
    case "m":
      return ["link from", "Mail"];
    case "vdab":
      return ["link from", "VDAB"];
    case "twitter":
      return ["link from", "Twitter"];
    default:
      return ["link from", "other"];
  }
}

export function Redirect_App() {
  const type = getType(useParams());

  useEffect(() => {
    ReactGA.event({
      action: type[0],
      category: type[1],
    });
  }, []);

  return (
    <App />
  )
}

export function Redirect_Vcard() {
  const type = getType(useParams());

  return (
    <Vcard />
  )
}

export default Redirect_App;
