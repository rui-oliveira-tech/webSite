import React, { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import ReactGA from 'react-ga4';



function getType({ type }) {
  switch (type) {
    case "face":
      return "Facebook";
    case "insta":
      return "Instagram";
    case "l":
      return "Linkedin";
    case "g":
      return "Google";
    case "m":
      return "Mail";
    case "vdab":
      return "VDAB";
    default:
      return "Other";
  }
}


export default function Redirects() {
  const type = getType(useParams());
  const navigate = useNavigate();
  console.log(type);
  useEffect(() => {
    ReactGA.event({
      action: "link from",
      category: type,
    });
    navigate('/');
  }, []);

  return (
    <>    </>
  )
}

