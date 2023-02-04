import React from "react";
import { useTranslation, withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import "./NavigationBar.scss";
import Language from "../Languages/Language";
import { pageList } from "../../resource/pages"

import logo from "../../images/logo/logo.svg";



export function NavigationBar(props) {
  const { t } = useTranslation();
  const currentLanguageCode = props.i18n.language;
  let currentPage = document.location.pathname.split("/");
  currentPage = currentPage[currentPage.length - 1];
  console.log(currentPage);


  return (
    <nav className="mainNavigationBar">
      <Link className="iconNavigationBar" to={`/${currentLanguageCode}`}>
        <img src={logo} alt="Logo" />
      </Link>
      <div className="contentNavigationBar">
        {pageList.reduce((urls, page, i) => {
          if (page.navigationBar) {
            urls.push(<Link key={i} style={{
              opacity: currentPage === page.url ? 0.5 : 1,
            }} to={`/${currentLanguageCode}/${page.url}`} >{t(`navigationBar.${page.url}`)}</Link>);
          }
          return urls;
        }, [])}
      </div>
      <div className="languageNavigationBar">
        <Language />
      </div>
    </nav>
  )
}

export default withTranslation()(NavigationBar);

