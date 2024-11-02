import React from "react";
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

export default async function Homepage(props: IHomepageProps) {
  return (
    <div className="wideGrid">
      <NavigationBar {...props} />
      <Home {...props} />
      <Footer />
    </div>
  );
}
