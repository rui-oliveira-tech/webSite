import React from "react";
import { useTranslation, withTranslation } from 'react-i18next';
import "./Home.scss";
import main_Img from "../../images/main_Img.jpg";



export function Home(props) {
  const { t } = useTranslation();
  const currentLanguageCode = props.i18n.language;

  function scrollDown(e) {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="have_footer have_NavigationBar home">
      <header>
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

export default withTranslation()(Home);