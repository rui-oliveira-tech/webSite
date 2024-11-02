import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { languageList } from "@/resource/lngs/lngs";
import languagesImg from "@/assets/images/cv/languages.jpg";
import { Expressions } from "@/models/Expressions";
import { Language } from "@/models/Language";

import "./Cv.scss";

interface ILanguagesProps {
  animatedOverlay: string; 
  gradient: string;
  params: {
    locale: string;
  };
}

export default function Languages(props: ILanguagesProps) {
  const t = useTranslations("");

  const imageMap = languageList.reduce((acc, lang) => {
    acc[lang.code] = lang.img;
    return acc;
  }, {});
  const languagesExp = t.raw("expressions.languages") as Expressions;

  const languages = t.raw("languages.description").map((item) => ({
    ...(item as Language[]),
    language: languagesExp[item.flag],
  }));

  return (
    <div
      className="module"
      style={{
        gridArea: "languages",
        backgroundImage: `url(${languagesImg.src})`,
      }}
    >
      <div
        className={"overlay " + props.animatedOverlay}
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
              <th colSpan="2">{t("languages.key.understanding")}</th>
              <th colSpan="2">{t("languages.key.speaking")}</th>
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
                    src={imageMap[language.flag]}
                    className="flag-icon w-5 h-5 "
                    width={10}
                    height={10}
                    alt={language.flag}
                  />
                  <span>{language.language}</span>
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
              <td className="noBorder left" colSpan="5">
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
