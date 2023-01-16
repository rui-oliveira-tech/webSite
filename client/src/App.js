import React, { useEffect, useRef } from "react";
import {
  useNavigate,
} from "react-router-dom";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import "./css/ruicons-embedded.css";
import "./css/globalVar.scss";
import "./css/global.css";


import { Language, languageList } from "./components/Languages/Language";
import Home from "./components/home/Home";
import CardSection from "./components/content/CardSection";
import Footer from "./components/footer/Footer";

const pageList = [
  {
    url: '',
    component: <Homepage />
  },
  {
    url: 'portefolio',
    component: <Portefolio />
  },

]

export function App({ redirect }) {
  const navigate = useNavigate();
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languageList.find((l) => l.code === currentLanguageCode)
  const instantUrl = pageList[1];
  const { t } = useTranslation()
  useEffect(() => {
    console.log("eeee", currentLanguageCode)
    if (redirect === undefined || redirect.lang === undefined) {
      navigate(`/${currentLanguageCode}`);
      console.log("aaa");
      return;
    }
    if (redirect.lang !== currentLanguageCode) {
      console.log("dddd")
      const instantUrl = pageList.reduce((page, all) => {
        if (page.url === redirect.lang.toLowerCase()) {
          all.append(page)
        }
        return all;
      }, [])
      console.log(instantUrl)
      console.log(Object.keys(instantUrl).length)
      if (redirect.page) {
        navigate(`/${currentLanguageCode}/${redirect.page}`);
        console.log("bbbb")
      }
      if (Object.values(redirect).includes("portefolio")) {
        console.log("portefolio")
      }
      if (Object.keys(instantUrl).length > 0) {
        navigate(`/${currentLanguageCode}/${instantUrl.url}`);
        console.log("ccc")
      }

    }
  }, [currentLanguage, t])
  return (
    <>
      <div className="wideGrid">
        <Language />
        {instantUrl.component}
        {console.log(instantUrl)}
      </div>
      <Footer />
    </>
  );
}

export function Homepage() {



  return (
    <>

    </>
  );
}

export function Portefolio() {
  const scrollSpeed = 500;
  let page = useRef(0);
  let allPages = useRef([]);
  let scrollTimeout = null;
  useEffect(() => {
    allPages.current = document.querySelectorAll(".scroll_to");
    /*  if (!isMobile && false) {
       const root = document.querySelector("#root");
       root.onwheel = scrollPage;
       // swipeup swipedown
       page.current = Math.ceil(window.pageYOffset / allPages.current[0].scrollHeight);
     } */
  }, []);

  function scrollPage(event) {
    event.preventDefault();
    if (scrollTimeout === null) {
      if (event.deltaY > 0) {
        page.current += 1;
      } else {
        page.current -= 1;
      }
      page.current = Math.min(Math.max(0, page.current), 1);
      allPages.current[page.current].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
      }, scrollSpeed)
    }
  }

  return (
    <>
      <div className="wideGrid">
        <Language />
        <Home allPages={allPages} />
        <CardSection />
      </div>
      <Footer />
    </>
  );
}


