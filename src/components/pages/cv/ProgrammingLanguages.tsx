import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import programmingLanguagesImg from "@/assets/images/cv/programmingLanguages.jpg";
import { proglanguageList } from "@/assets/images/programming_languages/ImgSrc";
import { IProgrammingLanguage } from "@/models/IMessages";

import "./Cv.scss";

interface IProgrammingLanguagesProps {
  gradient: string;
}

export default function ProgrammingLanguages(
  props: IProgrammingLanguagesProps
) {
  const t = useTranslations("");
  const programmingLanguages = t.raw(
    "programmingLanguages.description"
  ) as IProgrammingLanguage[];

  const imageMap = proglanguageList.reduce((acc, proglanguage) => {
    acc[proglanguage.code] = proglanguage.img;
    return acc;
  }, {} as Record<string, string>);

  return (
    <div
      className="module"
      style={{
        gridArea: "programmingLanguages",
        backgroundImage: `url(${programmingLanguagesImg.src})`,
      }}
    >
      <div
        className={"overlay "}
        style={{
          backgroundImage: `${props.gradient},url(${programmingLanguagesImg.src})`,
        }}
      >
        <p>{t("programmingLanguages.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">
          {t("programmingLanguages.underlayTitle")}
        </h2>
        {programmingLanguages.map((proglanguage, i) => (
          <React.Fragment key={i}>
            <a
              className="iconProgLang"
              target="_blank"
              rel="noreferrer"
              href={proglanguage.website}
            >
              <figure>
                <Image
                  src={imageMap[proglanguage.img]}
                  className="frontImage"
                  width={500}
                  height={500}
                  alt={proglanguage.title}
                />
              </figure>
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
