import React from "react";
import { useTranslation } from 'react-i18next';
import getImagesFromFolder from '../../util/getImagesFromFolder';

import "./Cv.scss";

export default function ProgrammingLanguages(props) {
  const { t } = useTranslation();
  const programmingLanguages = getImagesFromFolder(props.images, "programming_languages");

  return (
    <div className="module" style={{ gridArea: "programmingLanguages", backgroundImage: `url(${props.cardImages[t('programmingLanguages.img')]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t('programmingLanguages.img')]})` }}>
        <p>{t('programmingLanguages.overlayTitle')}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t('programmingLanguages.underlayTitle')}</h2>
        {t('programmingLanguages.description.0', { returnObjects: true }).map((degree, i) => (
          <React.Fragment key={i}>
            {/* <p/> */}
            {/*  <p className="light big subTitle">{degree.title}</p> */}
            {t(`programmingLanguages.description.${degree.id}`, { returnObjects: true }).map((degree, i) => (
              <React.Fragment key={i}>
                <a className="iconProgLang" target="_blank" rel="noreferrer" href={degree.website}>
                  <figure><img src={programmingLanguages[degree.imgLink]} alt={degree.title} /></figure>
                </a>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}