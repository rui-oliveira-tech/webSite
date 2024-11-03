import React from "react";
import { useTranslations } from "next-intl";
import getFormatDate from "@/utils/getFormatDate";

import experienceImg from "@/assets/images/cv/experience.jpg";
import { IExpressions } from "@/models/IExpressions";
import { IExperience } from "@/models/IMessages";

import "./Cv.scss";

interface IExperienceProps {
  gradient: string;
}

export default function Experience(props: IExperienceProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as IExpressions;
  const experiences = t.raw("experiences.description") as IExperience[];

  return (
    <div
      className="module"
      style={{
        gridArea: "experience",
        backgroundImage: `url(${experienceImg.src})`,
      }}
    >
      <div
        className={"overlay "}
        style={{
          backgroundImage: `${props.gradient},url(${experienceImg.src})`,
        }}
      >
        <p>{t("experiences.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t("experiences.underlayTitle")}</h2>
        {experiences.map((experience, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{experience.title}</p>
            <a
              className="textGlue medium"
              target="_blank"
              rel="noreferrer"
              href={experience.website}
            >
              {experience.company} {expressions.prepositions.in}{" "}
              {experience.location}
            </a>
            <p className="text small">
              {getFormatDate(experience, expressions)}
              {" -> "}
              {
                expressions.offerTypes[
                  experience.offerType as keyof IExpressions["offerTypes"]
                ]
              }
            </p>
            <div className="functionsPerformed">
              {experience.functionsPerformed &&
                typeof experience.functionsPerformed === "object" &&
                Object.values(experience.functionsPerformed).map(
                  (functionPerformed, index) => (
                    <p
                      key={index}
                      className="light text medium textSpacement icon-right-open"
                    >
                      {functionPerformed}
                    </p>
                  )
                )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
