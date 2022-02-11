import React, { useEffect, useRef } from "react";
import "./css/global.css";
import Section from "./components/section/Section"
import FirstPageContainer from "./containers/1_Page";
// import SecondPageContainer from "./containers/2_Page";
import ThirdPageContainer from "./containers/3_Page";

function App() {
  const scrollSpeed = 500;

  let page = useRef(0);
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
      <Section id='fristPage'>
        <FirstPageContainer />
      </Section>

     {/*  <Section id='secondPage'>
        <SecondPageContainer />
      </Section> */}

      <Section id='thirdPage'>
        <ThirdPageContainer />
      </Section>

    </>
  );
}

export default App;


