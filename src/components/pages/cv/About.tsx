import React from "react";
import { useTranslations } from "next-intl";

import aboutImg from "@/assets/images/cv/about.jpg";
import { IExpressions } from "@/models/IExpressions";
import { IExperience } from "@/models/IMessages";

import "./Cv.scss";

interface IAboutProps {
  gradient: string;
}

export default function About(props: IAboutProps) {
  const t = useTranslations();
  const expressions = t.raw("expressions") as IExpressions;
  const experiences = t.raw("experiences.description") as IExperience[];

  return (
    <div
      className="module"
      style={{
        gridArea: "about",
        backgroundImage: `url(${aboutImg.src})`,
      }}
    >
      <div
        className={`overlay`}
        style={{
          backgroundImage: `${props.gradient},url(${aboutImg.src})`,
        }}
      >
        <p>{t("about.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t("about.underlayTitle")}</h2>
        <div className="light text">
          <p className="big">{t("about.description.salutation")}</p>
          <p className="medium">
            {t("about.description.workingSituation")}
            <a target="_blank" rel="noreferrer" href={experiences[0].website}>
              {" "}
              {experiences[0].company}
            </a>
            {`\n${expressions.prepositions.in}\n`}
            {`${experiences[0].location}.\n`}
          </p>
          <p className="medium">
            {Object.values(t.raw("about.description.body")).map((info, i) => (
              <React.Fragment key={i}>{info as React.ReactNode}</React.Fragment>
            ))}
          </p>
          <p className="big right">
            {t("about.description.complimentaryClose")}
          </p>
        </div>
      </div>
    </div>
  );
}
