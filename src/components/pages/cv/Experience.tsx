import React from "react";
import { useTranslations } from "next-intl";
import getFormatDate from "@/util/getFormatDate.tsx";

import experienceImg from "@/images/cv/experience.jpg";
import { Expressions } from "@/models/Expressions";
import { Experience } from "@/models/Experience";

import "./Cv.scss";

interface IExperienceProps {
  animatedOverlay: React.MutableRefObject<string>;
  gradient: string;
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
        className={"overlay " + props.animatedOverlay.current}
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
              {getFormatDate(experience, expressions) +
                " -> " +
                expressions.offerTypes[experience.offerType]}
            </p>
            <p className="light text medium textSpacement">
              {experience.skillsGained}
            </p>
            <p className="light text medium textSpacement">
              {experience.functionsPerformed}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
