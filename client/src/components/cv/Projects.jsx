import React from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Projects(props) {
  const { t } = useTranslation();

  return (
    <div className="module" style={{ gridArea: "projects", backgroundImage: `url(${props.cardImages[t('projects.img')]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t('projects.img')]})` }}>
        <p>{t('projects.overlayTitle')}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t('projects.underlayTitle')}</h2>
        {t('projects.description', { returnObjects: true }).map((degree, i) => (
          <React.Fragment key={i}>
            <a className="light big subTitle" target="_blank" rel="noreferrer" href={t(`projects.description.${i}.website`)}>{degree.title}</a>
            <p className="text small">{
              t(`projects.description.${i}.startDateYear`) === "" ? "" :
                t(`projects.description.${i}.startDateDay`)
                + " " + (t(`projects.description.${i}.startDateMonth`) === "" ? "" : t(`expressions.month.${t(`projects.description.${i}.startDateMonth`)}`))
                + " " + t(`projects.description.${i}.startDateYear`)
                + " - "}
              {t(`projects.description.${i}.endDateYear`) === "" ? "" :
                t(`projects.description.${i}.endDateYear`) === "Present" ? t(`expressions.month.Present`) :
                  t(`projects.description.${i}.endDateDay`)
                  + " " + (t(`projects.description.${i}.endDateMonth`) === "" ? "" : t(`expressions.month.${t(`projects.description.${i}.endDateMonth`)}`))
                  + " " + t(`projects.description.${i}.endDateYear`)}
            </p>
            <p className="light text medium textSpacement">{degree.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}