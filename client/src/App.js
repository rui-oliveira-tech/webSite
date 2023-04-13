import React, { useEffect, useRef } from "react";
//import { isMobile } from 'react-device-detect';
import "./css/ruicons-embedded.css";
import "./css/globalVar.scss";
import "./css/global.css";
import Loading from "./components/Loading/Loading";
import Home from "./components/home/Home";
import CardSection from "./components/content/CardSection";
import Footer from "./components/footer/Footer";



function App() {
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
      <Loading />
      <div className="wideGrid">
        <Home allPages={allPages} />
        <CardSection />
      </div>
      <Footer />
    </>
  );
}

export default App;


