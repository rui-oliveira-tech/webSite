import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import ReactGA from 'react-ga4';
import cookies from 'js-cookie';

import Vcard from "./components/vcard/Vcard";
import Homepage from './Homepage';
import Portfolio from "./Portfolio";

import { useTranslation } from 'react-i18next';

import { languages } from "./components/Languages/Language";

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
    case "mail":
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
/*   if (!isEmpty(redirect)) {
    const from = getType(redirect.from);
  } */
/*   useEffect(() => {
    ReactGA.event({
      action: "from:" + from,
      category: from,
    });
  }, []); */


const pageList = [
  {
    url: '',
    Component: Homepage
  },
  {
    url: 'portefolio',
    Component: Portfolio
  },
]

const pages = pageList.reduce((urls, page) => {
  urls.push(page.url);
  return urls;
}, [])

export function RedirectApp() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirect = useParams();
  console.log({ redirect });

  const currentLanguageCode = cookies.get('i18next') || 'en';
  console.log({ currentLanguageCode })

  useEffect(() => {
    if (
      typeof redirect === "undefined" || typeof redirect.lang === "undefined" || (
        !pages.includes(redirect.lang) &&
        !languages.includes(redirect.lang)
      )
    ) {
      navigate(`/${currentLanguageCode}`, { replace: true });
    }
    if (pages.includes(redirect.lang)) {
      navigate(`/${currentLanguageCode}/${redirect.lang}`, { replace: true });
    }
  }, []);

  useLayoutEffect(() => {
    if (currentLanguageCode !== redirect.lang) {
      if (redirect.page) {
        navigate(`/${currentLanguageCode}/${redirect.page}`, { replace: true });
      } else {
        navigate(`/${currentLanguageCode}`, { replace: true });
      }
    }
    console.log("useEffect", currentLanguageCode)
  }, [t])

  if (redirect.page === undefined) {
    redirect.page = "";
  }
  if (pages.includes(redirect.page)) {
    const PageComponent = pageList.find((page) => page.url === redirect.page).Component;
    return <PageComponent redirect={redirect} />
  }
  return "404";
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