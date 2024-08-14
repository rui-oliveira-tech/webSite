"use client";

import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";

import "./NavigationBar.scss";
import Languages from "../Languages/Language";
import { pageList } from "../../resource/pages";

import logoImg from "@/images/logo/logo.svg";
import { usePathname } from "next/navigation";

export default function NavigationBar(props) {
  const t = useTranslations("");
  const pathname = usePathname();
  const currentLanguageCode = props.params.locale;

  const logoClass = pathname.includes("cv") ? "thisPage" : "notThisPage";
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
        {pageList.reduce((urls, page, i) => {
          if (page.navigationBar) {
            urls.push(
              <Link
                key={i}
                className={
                  pathname.endsWith(page.url) ||
                  pathname.split("/").length === 1
                    ? "thisPage"
                    : "notThisPage"
                }
                href={`/${currentLanguageCode}${page.url === "" ? "" : "/"}${
                  page.url
                }`}
              >
                {t(`navigationBar.${page.name}`)}
              </Link>
            );
          }
          return urls;
        }, [] as ReactNode[])}
      </div>
      <div className="languageNavigationBar">
        <Languages {...props} />
      </div>
    </nav>
  );
}
