import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

import Vcard from "./components/vcard/Vcard";
import Homepage from './Homepage';
import Portfolio from "./Portfolio";


import GetLink, { GetType } from "./resource/link";
import { languages } from "./components/Languages/Language";

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
  const currentLanguageCode = cookies.get('i18next') || 'en';

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