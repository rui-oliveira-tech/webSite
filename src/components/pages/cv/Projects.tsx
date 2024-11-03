import React from "react";
import { useTranslations } from "next-intl";
import getFormatDate from "@/utils/getFormatDate";

import projectsImg from "@/assets/images/cv/projects.jpg";
import { IExpressions } from "@/models/IExpressions";
import { IProject } from "@/models/IMessages";

import "./Cv.scss";

interface IProjectsProps {
  gradient: string;
  params: {
    locale: string;
  };
}

export default function Projects(props: IProjectsProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as IExpressions;
  const projects = t.raw("projects.description") as IProject[];

  return (
    <div
      className="module"
      style={{
        gridArea: "projects",
        backgroundImage: `url(${projectsImg.src})`,
      }}
    >
      <div
        className={"overlay "}
        style={{
          backgroundImage: `${props.gradient},url(${projectsImg.src})`,
        }}
      >
        <p>{t("projects.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t("projects.underlayTitle")}</h2>
        {projects.map((project, i) => (
          <React.Fragment key={i}>
            <a
              className="light big subTitle"
              target="_blank"
              rel="noreferrer"
              href={project.website}
            >
              {project.title}
            </a>
            <p className="text small">{getFormatDate(project, expressions)}</p>
            <p className="light text medium textSpacement">
              {project.description}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
