import React from "react";
import { getLocale, getMessages, setRequestLocale } from "next-intl/server";

import RootLayout from "./RootLayout";
import NavigationBar from "@/components/layout/navigationBar/NavigationBar";
import Footer from "@/components/layout/footer/Footer";

import "@/assets/styles/globalVar.scss";
import "@/assets/styles/global.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default async function Layout(props: ILayoutProps) {
  const locale = await getLocale();
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <RootLayout locale={locale} messages={messages}>
      <div className="wideGrid">
        <NavigationBar locale={locale} />
        {props.children}
        <Footer />
      </div>
    </RootLayout>
  );
}
