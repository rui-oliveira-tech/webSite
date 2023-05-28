import React from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Others(props) {
  const { t } = useTranslation();

  function formatDate(date) {
    if (date === "Permanent") return t(`expressions.offerType.permanent`);
    if (date === "Present") return t(`expressions.month.present`);
    const [year, month, day] = date.split('-').map(Number);
    return [day ? `${day}` : '', month ? t(`expressions.month.${month}`) : '', year].join(' ').trim();
  }

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
            <p className="text small">
              {formatDate(t(`other.description.${i}.startDate`)) === "0" ? '' : `${formatDate(t(`other.description.${i}.startDate`)) + " - "}`}
              {formatDate(t(`other.description.${i}.endDate`))}
            </p>
            <p className="light text medium textSpacement">{degree.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}