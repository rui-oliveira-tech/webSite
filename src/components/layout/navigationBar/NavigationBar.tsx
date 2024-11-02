"use client";

import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";

import "./NavigationBar.scss";
import Languages from "../Languages/Language";
import { pageList, Page } from "../../../resource/pages";

import logoImg from "@/assets/images/logo/logo.svg";
import { usePathname } from "next/navigation";
import { languageImg, supportedLngs, Locale } from "@/resource/lngs/lngs";

// Define the props interface for the NavigationBar component
interface NavigationBarProps {
  params: {
    locale: string;
  };
}

function classPageInList(
  pathname: string,
  currentPage: Page,
  supportedLngs: Locale[]
): string {
  return (currentPage.name === "homepage" &&
    supportedLngs.some((lng) => pathname.endsWith(`/${lng}`))) ||
    pathname.endsWith(`${currentPage.url}`)
    ? "thisPage"
    : "notThisPage";
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  const t = useTranslations("");
  const pathname = usePathname();
  const currentLanguageCode = props.params.locale;

  const logoClass = pageList.some(
    (page) =>
      page.name === "homepage" &&
      supportedLngs.some((lng) => pathname.endsWith(`/${lng}`))
  )
    ? "thisPage"
    : "notThisPage";

  return (
    <nav className="mainNavigationBar">
      <Link className="iconNavigationBar" href={`/${currentLanguageCode}`}>
        <Image
          src={logoImg}
          className={logoClass}
          width={500}
          height={500}
          alt="Logo"
        />
      </Link>
      <div className="contentNavigationBar">
        {pageList.reduce((urls: ReactNode[], page: Page, i: number) => {
          const pageClass = classPageInList(pathname, page, supportedLngs);
          if (page.navigationBar) {
            urls.push(
              <Link
                key={i}
                className={pageClass}
                href={`/${currentLanguageCode}${page.url === "" ? "" : "/"}${
                  page.url
                }`}
              >
                {t(`navigationBar.${page.name}`)}
              </Link>
            );
          }
          return urls;
        }, [])}
      </div>
      <div className="languageNavigationBar">
        <Languages {...props} />
      </div>
    </nav>
  );
};

export default NavigationBar;
