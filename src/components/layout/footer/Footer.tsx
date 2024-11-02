"use client";

import React from "react";
import { useTranslations } from "next-intl";
import "./Footer.scss";
import "./../../../assets/icons/css/fontello-embedded.css";

import Button from "../../others/Button/Button";
import { links } from "@/resource/links";

export function Footer() {
  const t = useTranslations("");

  return (
    <footer className="mainFooter">
      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={links.instagram.link}
      >
        <i className="icon-instagram" />
      </a>

      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={links.whatsapp.link}
      >
        <i className="icon-whatsapp" />
      </a>

      <Button className="from-center" href={links.mail.link}>
        {t("footer.mailButton")}
      </Button>

      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={links.github.link}
      >
        <i className="icon-github-circled" />
      </a>

      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        href={links.linkedin.link}
      >
        <i className="icon-linkedin" />
      </a>

      {/*  <a className="icon" href="https://www.facebook.com/RuiOliveira.Electrician/"><i className="fab fa-facebook-f" /></a> */}
    </footer>
  );
}

export default Footer;
