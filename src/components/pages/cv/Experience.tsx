import React from "react";
import { useTranslations } from "next-intl";
import getFormatDate from "@/util/getFormatDate.tsx";

import experienceImg from "@/assets/images/cv/experience.jpg";
import { Expressions } from "@/models/Expressions";
import { Experience } from "@/models/Experience";

import "./Cv.scss";

interface IExperienceProps {
  animatedOverlay: string; 
  gradient: string;
  params: {
    locale: string;
  };
}

export default function Experience(props: IExperienceProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as Expressions;
  const experiences = t.raw("experiences.description") as Experience[];

  return (
    <div
      className="module"
      style={{
        gridArea: "experience",
        backgroundImage: `url(${experienceImg.src})`,
      }}
    >
      <div
        className={"overlay " + props.animatedOverlay}
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
              {expressions.offerTypes[experience.offerType]}
            </p>
            <p className="light text medium textSpacement">
              {experience.skillsGained}
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
