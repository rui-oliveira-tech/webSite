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

  return (
    <div className="wideGrid">
      <NavigationBar {...props} />
      <Home {...props} />
      <Footer />
    </div>
  );
}
