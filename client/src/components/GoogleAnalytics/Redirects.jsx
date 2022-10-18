import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactGA from 'react-ga4';

import App from "../../App";
import Vcard from "../vcard/Vcard";


function getLink(type) {
  switch (type) {
    case "facebook":
      return "https://www.facebook.com/RuiOliveira.Electrician/";
    case "instagram":
      return "https://www.instagram.com/RuiOliveira_Electrician/";
    case "linkedin":
      return "https://www.linkedin.com/in/RuiOliveira-Electrician/";
    case "github":
      return "https://github.com/RuiOliveira-Electrician/";
    case "whatsapp":
      return "https://api.whatsapp.com/send/?phone=32474127175&text&type=phone_number&app_absent=0";
    /*  case "google":
       return "Google";
     case "m":
       return "Mail";
     case "vdab":
       return "VDAB";
     case "twitter":
       return "Twitter"; */
    default:
      return "https://www.rui-oliveira.com/";
  }
}

function getType({ type }) {
  switch (type) {
    case "face":
      return "Facebook";
    case "insta":
      return "Instagram";
    case "linkedin":
      return "Linkedin";
    case "github":
      return "Github";
    case "google":
      return "Google";
    case "m":
      return "Mail";
    case "vdab":
      return "VDAB";
    case "twitter":
      return "Twitter";
    default:
      return "other";
  }
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function RedirectApp() {
  const redirect = useParams();
  console.log(isEmpty(redirect))
  if (!isEmpty(redirect)) {
    const from = getType(redirect.from);
  }

  /*   useEffect(() => {
      ReactGA.event({
        action: "from:" + from,
        category: from,
      });
    }, []); */
  console.log("saddasdas");
  return (
    <App />
  )
}

export function RedirectVcard() {
  return (
    <Vcard />
  )
}


export function RedirectToLink() {
  const redirect = useParams();
  const from = getType(redirect.from);
  const to = getLink(redirect.to);

  React.useEffect(() => {
    /*   ReactGA.event({
       action: "redirect:from:" + from + "_to:" + to,
       category: from,
     }); */
    window.location.replace(to);
  }, [])

  return (
    <></>
  )
}

export default RedirectApp;