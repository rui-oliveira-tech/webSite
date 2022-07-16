import React, { useEffect, useRef } from "react";
import "./css/global.css";
import "./css/globalVar.scss";
import SectionPage from "./components/sectionPage/SectionPage"
import Home from "./components/home/Home"
import Section from "./components/content/SectionCard"
import Footer from "./components/footer/Footer"



function App() {
  const scrollSpeed = 500;

  let page = useRef(1);
  let allPages = useRef([]);
  let scrollTimeout = null;
  useEffect(() => {
    allPages.current = document.querySelectorAll(".scroll_to");
    const root = document.querySelector("#root");
    root.onwheel = scrollPage;
    // swipeup swipedown

    page.current = Math.ceil(window.pageYOffset / allPages.current[0].scrollHeight);
  }, []);

  function scrollPage(event) {
    event.preventDefault();
    if (scrollTimeout === null) {
      if (event.deltaY > 0) {
        page.current += 1;
      } else {
        page.current -= 1;
      }
      page.current = Math.min(Math.max(0, page.current), 2);
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
      <SectionPage>
        <Home />
      </SectionPage>
      <SectionPage>
        <Section />
      </SectionPage>
      <Footer />
    </>
  );
}

export default App;


