import React, { useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./Home.scss";
import getImagesFromFolder from './../../util/getImagesFromFolder';



export function Home(props) {
  const images = getImagesFromFolder(props.images, "home");
  const { t } = useTranslation();
  const animation = useRef("notLoading");
  let waitForLoading = useRef(setTimeout(() => { }, 0));
  useEffect(() => {
    waitForLoading.current = setTimeout(() => {
      if (props.isLoading) {
        animation.current = "loading";
      }
    }, 1)
    return () => clearTimeout(waitForLoading.current);
  }, [])

  /*  function scrollDown(e) {
     document.querySelector(".projects").scrollIntoView({
       behavior: "smooth",
       block: "start",
     });
   } */

  return (
    <section className="have_footer have_NavigationBar home">
      <header>
        <figure>
          <img src={images.main} className="frontImage" alt="Rui Oliveira" />
        </figure>
      </header>
      <main>
        <h1 className="title">{t('home.title')}</h1>
        <h2 data-texteffect={t('home.subTitle.first')} className={"subTitle first " + animation.current}>{t('home.subTitle.first')}</h2>
        <h3 data-texteffect={t('home.subTitle.second')} className={"subTitle second " + animation.current}>{t('home.subTitle.second')}</h3>
        <h3 data-texteffect={t('home.subTitle.third')} className={"subTitle third " + animation.current}>{t('home.subTitle.third')}</h3>
      </main>

      {/*  <footer className="scrollArrow" onClick={scrollDown}>
        <span></span>
        <span></span>
        <span></span>
      </footer> */}
    </section>
  )
}

export default Home;