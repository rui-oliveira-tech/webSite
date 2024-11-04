import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useLanguageListUpdated } from "@/i18n/routing";
import { supportedlanguagesExpLngs } from "@/i18n/lngs";

import languagesImg from "@/assets/images/cv/languages.jpg";

import { IExpressions } from "@/models/IExpressions";
import { ILanguage } from "@/models/IMessages";

import "./Cv.scss";

interface ILanguagesProps {
  gradient: string;
}

export default function Languages(props: ILanguagesProps) {
  const t = useTranslations("");
  const languagesExp = (t.raw("expressions") as IExpressions).languages;

  const languageListUpdated = useLanguageListUpdated(supportedlanguagesExpLngs);
  const languages = (t.raw("languages.description") as ILanguage[])
    .map((item) => {
      const matchedLanguage = languageListUpdated.find(
        (lang) => lang.code === item.flag
      );
      return matchedLanguage
        ? {
            ...item,
            img: matchedLanguage.img,
            languageTranslatedName:
              languagesExp[item.flag as keyof IExpressions["languages"]],
          }
        : null;
    })
    .filter(Boolean); // Remove null entries

  return (
    <div
      className="module"
      style={{
        gridArea: "languages",
        backgroundImage: `url(${languagesImg.src})`,
      }}
    >
      <div
        className={"overlay "}
        style={{
          backgroundImage: `${props.gradient},url(${languagesImg.src})`,
        }}
      >
        <p>{t("languages.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t("languages.underlayTitle")}</h2>
        <table className="languagesTable">
          <thead className="">
            <tr>
              <th className="languageColumn">{t("languages.key.language")}</th>
              <th colSpan={2}>{t("languages.key.understanding")}</th>
              <th colSpan={2}>{t("languages.key.speaking")}</th>
              <th>{t("languages.key.writing")}</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td></td>
              <td>{t("languages.key.listening")}</td>
              <td>{t("languages.key.reading")}</td>
              <td>{t("languages.key.interaction")}</td>
              <td>{t("languages.key.production")}</td>
              <td></td>
            </tr>
            {languages.map((language, i) => (
              <tr className="color" key={i}>
                <td className="noBorder left flex items-center">
                  <Image
                    src={language.img.src}
                    className="flag-icon w-5 h-5 "
                    width={10}
                    height={10}
                    alt={language.flag}
                  />
                  <span>{language.languageTranslatedName}</span>
                </td>
                <td>{language.listening}</td>
                <td>{language.reading}</td>
                <td>{language.spokenInteraction}</td>
                <td>{language.spokenProduction}</td>
                <td>{language.writing}</td>
              </tr>
            ))}
            <tr>
              <td className="noBorder left"></td>
              <td className="noBorder left" colSpan={5}>
                <p className="text small noPading">
                  {t("languages.key.levels")}
                </p>
                <p className="text small noPading">
                  {t("languages.key.framework")}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
