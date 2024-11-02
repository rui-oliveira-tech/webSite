"use client";

import React, { useEffect, useRef } from "react";

import { useTranslations } from "next-intl";
import "./../globalVar.scss";
import "./../global.css";

import NavigationBar from "@/components/layout/navigationBar/NavigationBar";
import Home from "@/components/pages/home/Home";
import Footer from "@/components/layout/footer/Footer";

interface IHomepageProps {
  params: {
    locale: string;
  };
}

export default function Homepage(props: IHomepageProps) {
  const t = useTranslations("");
  const scrollSpeed = 500;
  let page = useRef(0);
  let allPages = useRef([]);
  let scrollTimeout = null;

  useEffect(() => {
    allPages.current = document.querySelectorAll(".have_footer");
    /*  if (!isMobile && false) {
       const root = document.querySelector("#root");
       root.onwheel = scrollPage;
       // swipeup swipedown
       page.current = Math.ceil(window.pageYOffset / allPages.current[0].scrollHeight);
     } */
  }, []);

  /*  function scrollPage(event) {
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
  }*/
  return (
    <div className="wideGrid">
      <NavigationBar {...props} />
      <Home {...props} />
      <Footer />
    </div>
  );
}
