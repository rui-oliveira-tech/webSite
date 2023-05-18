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
    const parts = date.split('-');
    const year = parts[0];
    const month = Number(parts[1]);
    const day = Number(parts[2]);
    return `${day} ${t(`expressions.month.number.${month - 1}`)} ${year}`;
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
            return educationInfo(t, degree, i);
          } else if (isExpirationDatePassed(t(`education.description.${i}.expirationDate`)) && !showValid) {
            degree.title = `${degree.title} (${t(`expressions.offerType.expired`)} ${formatDate(t(`education.description.${i}.expirationDate`))})`
            return educationInfo(t, degree, i);
          }
        })}
      </div>
    </div>
  )
}

function educationInfo(t, degree, i) {
  return (
    <React.Fragment key={i}>
      <p className="light big subTitle">{degree.title}</p>
      <a className="textGlue medium" target="_blank" rel="noreferrer" href={t(`education.description.${i}.website`)}>
        {degree.companyTitle} {t(`education.description.${i}.company`)} {t(`expressions.preposition.in`)} {t(`education.description.${i}.location`)}
      </a>
      <p className="text small">
        {t(`education.description.${i}.startDateYear`) === "" ? "" :
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
  );
}