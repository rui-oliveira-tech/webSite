import React from "react";

import "./Cv.scss"
import { useTranslation } from 'react-i18next';

export default function Languages(props) {
  const { t } = useTranslation();

  return (
    <div className="module" style={{ gridArea: "languages", backgroundImage: `url(${props.cardImages[t('languages.img')]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t('languages.img')]})` }}>
        <p>{t('languages.overlayTitle')}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t('languages.underlayTitle')}</h2>
        <table className="languagesTable">
          <thead className="">
            <tr>
              <th className="languageColumn">{t('languages.language')}</th>
              <th colSpan="2">{t('languages.understanding')}</th>
              <th colSpan="2">{t('languages.speaking')}</th>
              <th >{t('languages.writing')}</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td></td>
              <td>{t('languages.listening')}</td>
              <td>{t('languages.reading')}</td>
              <td>{t('languages.interaction')}</td>
              <td>{t('languages.production')}</td>
              <td></td>
            </tr>
            {t('languages.description', { returnObjects: true }).map((degree, i) => (
              <tr className="color" key={i}>
                <td className="noBorder left"><span className={"flag-icon flag-icon-" + t(`languages.description.${i}.flag`)}></span>{degree.language}</td>
                <td>{t(`languages.description.${i}.listening`)}</td>
                <td>{t(`languages.description.${i}.reading`)}</td>
                <td>{t(`languages.description.${i}.spokenInteraction`)}</td>
                <td>{t(`languages.description.${i}.spokenProduction`)}</td>
                <td>{t(`languages.description.${i}.writing`)}</td>
              </tr>
            ))}
            <tr>
              <td className="noBorder left" ></td>
              <td className="noBorder left" colSpan="5">
                <p className="text small noPading">{t('languages.levels')}</p>
                <p className="text small noPading">{t('languages.framework')}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}