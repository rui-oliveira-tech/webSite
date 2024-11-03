import React from "react";
/* import { getLocale, getMessages } from "next-intl/server";

import RootLayout from "./RootLayout";
import NavigationBar from "@/components/layout/navigationBar/NavigationBar";
import Footer from "@/components/layout/footer/Footer"; */

import "@/assets/styles/globalVar.scss";
import "@/assets/styles/global.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default async function Layout(props: ILayoutProps) {
  /*  const locale = await getLocale();
  const messages = await getMessages(); */

  return (
    <>
     <html lang={"en"}>
      <body>
        aaa
      </body>
     </html>
      {/* <RootLayout locale={locale} messages={messages}>
      <div className="wideGrid">
        <NavigationBar locale={locale} />
        {props.children}
        <Footer />
      </div>
    </RootLayout> */}
    </>
  );
}
