import React from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Education(props) {
  const { t } = useTranslation();

  return (
    <div className="module" style={{ gridArea: "education", backgroundImage: `url(${props.cardImages[t('education.img')]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t('education.img')]})` }}>
        <p>{t('education.overlayTitle')}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t('education.underlayTitle')}</h2>
        {t('education.description', { returnObjects: true }).map((degree, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{degree.title}</p>
            <a className="textGlue medium" target="_blank" rel="noreferrer" href={t(`education.description.${i}.website`)}>{degree.companyTitle} {t(`education.description.${i}.company`)} in {t(`education.description.${i}.location`)}</a>
            <p className="text small">{
              t(`education.description.${i}.startDateYear`) === "" ? "" :
                t(`education.description.${i}.startDateDay`)
                + " " + (t(`education.description.${i}.startDateMonth`) === "" ? "" : t(`expressions.month.${t(`education.description.${i}.startDateMonth`)}`))
                + " " + t(`education.description.${i}.startDateYear`)
                + " - "}
              {t(`education.description.${i}.endDateYear`) === "" ? "" :
                t(`education.description.${i}.endDateYear`) === "Present" ? t(`expressions.month.Present`) :
                  t(`education.description.${i}.endDateDay`)
                  + " " + (t(`education.description.${i}.endDateMonth`) === "" ? "" : t(`expressions.month.${t(`education.description.${i}.endDateMonth`)}`))
                  + " " + t(`education.description.${i}.endDateYear`)}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}