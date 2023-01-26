import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

import { pageList } from "./resource/pages"
import getLink, { getType } from "./resource/link";
import { languages } from "./components/Languages/Language";


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