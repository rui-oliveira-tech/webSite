import React from "react";
import { useTranslations } from "next-intl";
import getFormatDate from "@/util/getFormatDate.tsx";

import projectsImg from "@/images/cv/projects.jpg";
import { Expressions } from "@/models/Expressions";
import { Project } from "@/models/Project";

import "./Cv.scss";

interface IProjectsProps {
  animatedOverlay: React.MutableRefObject<string>;
  gradient: string;
}

export default function Projects(props: IProjectsProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as Expressions;
  const projects = t.raw("projects.description") as Project[];

  return (
    <div
      className="module"
      style={{
        gridArea: "projects",
        backgroundImage: `url(${projectsImg.src})`,
      }}
    >
      <div
        className={"overlay " + props.animatedOverlay.current}
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
