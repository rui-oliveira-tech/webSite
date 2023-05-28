import React from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Experience(props) {
  const { t } = useTranslation();

  function formatDate(date) {
    if (date === "Permanent") return t(`expressions.offerType.permanent`);
    if (date === "Present") return t(`expressions.month.present`);
    const [year, month, day] = date.split('-').map(Number);
    return [day ? `${day}` : '', month ? t(`expressions.month.${month}`) : '', year].join(' ').trim();
  }

  return (
    <div className="module" style={{ gridArea: "experience", backgroundImage: `url(${props.cardImages[t('experience.img')]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t('experience.img')]})` }}>
        <p>{t('experience.overlayTitle')}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t('experience.underlayTitle')}</h2>
        {t('experience.description', { returnObjects: true }).map((degree, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{degree.title}</p>
            <a className="textGlue medium" target="_blank" rel="noreferrer" href={t(`experience.description.${i}.website`)}>{t(`experience.description.${i}.company`)} {t(`expressions.preposition.in`)} {t(`experience.description.${i}.location`)}</a>
            <p className="text small">
              {formatDate(t(`experience.description.${i}.startDate`)) === "0" ? '' : `${formatDate(t(`experience.description.${i}.startDate`)) + " - "}`}
              {formatDate(t(`experience.description.${i}.endDate`)) + " -> "}
              {t(`expressions.offerType.${t(`experience.description.${i}.offerType`)}`)}
            </p>
            <p className="light text medium textSpacement">{degree.skillsGained}</p>
            <p className="light text medium textSpacement">
              {degree.functionsPerformed}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}