import React from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Projects(props) {
  const { t } = useTranslation();

  function formatDate(date) {
    if (date === "Permanent") return t(`expressions.offerType.permanent`);
    if (date === "Present") return t(`expressions.month.present`);
    const [year, month, day] = date.split('-').map(Number);
    return [day ? `${day}` : '', month ? t(`expressions.month.${month}`) : '', year].join(' ').trim();
  }

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
            <p className="text small">
              {formatDate(t(`projects.description.${i}.startDate`)) === "0" ? '' : `${formatDate(t(`projects.description.${i}.startDate`)) + " - "}`}
              {formatDate(t(`projects.description.${i}.endDate`))}
            </p>
            <p className="light text medium textSpacement">{degree.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}