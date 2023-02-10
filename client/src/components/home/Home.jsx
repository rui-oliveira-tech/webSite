import React from "react";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import FileSaver from 'file-saver';
import "./Home.scss";
import "./CvButton.scss";
import main_Img from "../../images/main_Img.jpg";



export default function Home({ allPages }) {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get('i18next') || 'en'

  function scrollDown(e) {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf",
      "CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf");
  };
  return (
    <section className="have_footer have_NavigationBar home">
      <header>
        {/*  {(currentLanguageCode === "en" || currentLanguageCode === "nl") && <button className="learn-more buttonCV" onClick={saveFile}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span id="buttonCV" className="buttonCV-text">{t('home.cvButton')}</span>
        </button>} */}
        <figure>
          <img src={main_Img} className="frontImage" alt="Rui Oliveira" />
        </figure>
      </header>
      <main>
        <h1 className="title">{t('home.title')}</h1>
        <h2 data-texteffect={t('home.subTitle.first')} className="subTitle first">{t('home.subTitle.first')}</h2>
        <h3 data-texteffect={t('home.subTitle.second')} className="subTitle second">{t('home.subTitle.second')}</h3>
        <h3 data-texteffect={t('home.subTitle.third')} className="subTitle third">{t('home.subTitle.third')}</h3>
      </main>

      {/*  <footer className="scrollArrow" onClick={scrollDown}>
        <span></span>
        <span></span>
        <span></span>
      </footer> */}
    </section>
  )
}