import React from "react";

import "./Cv.scss"
import Translation from '../../resource/translation'

export default function Education(props) {
  const t = Translation();

  return (
    <div className="module" style={{ gridArea: "education", backgroundImage: `url(${props.cardImages[t.education.img]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t.education.img]})` }}>
        <p>{t.education.overlayTitle}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t.education.underlayTitle}</h2>
        {t.education.description.map((degree, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{degree.title}</p>
            <a className="textGlue medium" target="_blank" rel="noreferrer" href={t.education.description[i].website}>{degree.companyTitle} {t.education.description[i].company} in {t.education.description[i].location}</a>
            <p className="text small">{degree.startDate === "" ? degree.endDate : degree.startDate + " - " + degree.endDate}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}