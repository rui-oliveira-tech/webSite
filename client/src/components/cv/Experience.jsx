import React from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Experience(props) {
  const { t } = useTranslation();

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
            <a className="textGlue medium" target="_blank" rel="noreferrer" href={t(`experience.description.${i}.website`)}>{t(`experience.description.${i}.company`)} in {t(`experience.description.${i}.location`)}</a>
            <p className="text small">{
              t(`experience.description.${i}.startDateYear`) === "" ? "" :
                t(`experience.description.${i}.startDateDay`)
                + " " + (t(`experience.description.${i}.startDateMonth`) === "" ? "" : t(`expressions.month.${t(`experience.description.${i}.startDateMonth`)}`))
                + " " + t(`experience.description.${i}.startDateYear`)
                + " - "}
              {t(`experience.description.${i}.endDateYear`) === "" ? "" :
                t(`experience.description.${i}.endDateYear`) === "Present" ? t(`expressions.month.Present`) + " -> " :
                  t(`experience.description.${i}.endDateDay`)
                  + " " + (t(`experience.description.${i}.endDateMonth`) === "" ? "" : t(`expressions.month.${t(`experience.description.${i}.endDateMonth`)}`))
                  + " " + t(`experience.description.${i}.endDateYear`)
                  + " -> "}
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