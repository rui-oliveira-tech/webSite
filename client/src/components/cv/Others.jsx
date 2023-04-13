import React from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Others(props) {
  const { t } = useTranslation();

  return (
    <div className="module" style={{ gridArea: "others", backgroundImage: `url(${props.cardImages[t('other.img')]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t('other.img')]})` }}>
        <p>{t('other.overlayTitle')}</p>
      </div>
      <div className="underlay">

        <h2 className="extraBig bold">{t('other.underlayTitle')}</h2>
        {t('other.description', { returnObjects: true }).map((degree, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{degree.title}</p>
            <p className="text small">{
              t(`other.description.${i}.startDateYear`) === "" ? "" :
                t(`other.description.${i}.startDateDay`)
                + " " + (t(`other.description.${i}.startDateMonth`) === "" ? "" : t(`expressions.month.${t(`other.description.${i}.startDateMonth`)}`))
                + " " + t(`other.description.${i}.startDateYear`)
                + " - "}
              {t(`other.description.${i}.endDateYear`) === "" ? "" :
                t(`other.description.${i}.endDateYear`) === "Present" ? t(`expressions.month.Present`) :
                  t(`other.description.${i}.endDateDay`)
                  + " " + (t(`other.description.${i}.endDateMonth`) === "" ? "" : t(`expressions.month.${t(`other.description.${i}.endDateMonth`)}`))
                  + " " + t(`other.description.${i}.endDateYear`)}
            </p>
            <p className="light text medium textSpacement">{degree.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}