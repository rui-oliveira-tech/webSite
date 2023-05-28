import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import "./Cv.scss";

export default function Education(props) {
  const { t } = useTranslation();

  const [showValid, setShowValid] = useState(true);
  const toggleValid = () => {
    setShowValid(!showValid);
  };

  function isExpirationDatePassed(expirationDate) {
    const today = new Date();
    const expiration = new Date(expirationDate);

    return expiration < today;
  }

  function formatDate(date) {
    if (date === "Permanent") return t(`expressions.offerType.permanent`);
    if (date === "Present") return t(`expressions.month.present`);
    const [year, month, day] = date.split('-').map(Number);
    return [day ? `${day}` : '', month ? t(`expressions.month.${month}`) : '', year].join(' ').trim();
  }

  return (
    <div className="module" style={{ gridArea: "education", backgroundImage: `url(${props.cardImages[t('education.img')]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t('education.img')]})` }}>
        <p>{t('education.overlayTitle')}</p>
      </div>
      <div className="underlay">
        <button className="extraBig bold" onClick={toggleValid}>{`${t('education.underlayTitle')} ${showValid ? `(${t(`expressions.offerType.validDiplom`)})` : `(${t(`expressions.offerType.expiredDiplom`)})`}`}</button>
        <p className="text small">{t('education.key.changeDiplomas')}</p>
        {t('education.description', { returnObjects: true }).map((degree, i) => {
          if (!isExpirationDatePassed(t(`education.description.${i}.expirationDate`)) && showValid) {
            degree.title = `${degree.title} (${t(`education.description.${i}.expirationDate`) === "Permanent" ? `` : `${t(`expressions.offerType.valid`)} `}${formatDate(t(`education.description.${i}.expirationDate`))})`
            return educationInfo(formatDate, t, degree, i);
          } else if (isExpirationDatePassed(t(`education.description.${i}.expirationDate`)) && !showValid) {
            degree.title = `${degree.title} (${t(`expressions.offerType.expired`)} ${formatDate(t(`education.description.${i}.expirationDate`))})`
            return educationInfo(formatDate, t, degree, i);
          }
        })}
      </div>
    </div>
  )
}

function educationInfo(formatDate, t, degree, i) {
  return (
    <React.Fragment key={i}>
      <p className="light big subTitle">{degree.title}</p>
      <a className="textGlue medium" target="_blank" rel="noreferrer" href={t(`education.description.${i}.website`)}>
        {degree.companyTitle} {t(`education.description.${i}.company`)} {t(`expressions.preposition.in`)} {t(`education.description.${i}.location`)}
      </a>
      <p className="text small">
        {formatDate(t(`education.description.${i}.startDate`)) === "0" ? '' : `${formatDate(t(`education.description.${i}.startDate`)) + " - "}`}
        {formatDate(t(`education.description.${i}.endDate`))}
      </p>
    </React.Fragment>
  );
}