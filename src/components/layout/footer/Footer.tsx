
'use client';

import React from "react";
import { useTranslations } from "next-intl";
import "./Footer.scss";

import Button from "../../others/Button/Button";
import GetLink from "@/resource/link";

export function Footer() {
  const t = useTranslations("");
  
  return (
    <footer className="mainFooter">
      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={GetLink("instagram")}
      >
        <i className="icon-instagram" />
      </a>

      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={GetLink("whatsapp")}
      >
        <i className="icon-whatsapp" />
      </a>

      <Button className="from-center" href="mailto:hire@rui-oliveira.com">
        {t("footer.mailButton")}
      </Button>

      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={GetLink("github")}
      >
        <i className="icon-github" />
      </a>

      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={GetLink("linkedin")}
      >
        <i className="icon-linkedin" />
      </a>

      {/*  <a className="icon" href="https://www.facebook.com/RuiOliveira.Electrician/"><i className="fab fa-facebook-f" /></a> */}
    </footer>
  );
}

export default Footer;
