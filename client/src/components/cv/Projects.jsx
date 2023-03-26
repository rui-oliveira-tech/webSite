import React from "react";

import "./Cv.scss"
import Translation from '../../resource/translation'

export default function Projects(props) {
  const t = Translation();

  return (
    <div className="module" style={{ gridArea: "projects", backgroundImage: `url(${props.cardImages[t.projects.img]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t.projects.img]})` }}>
        <p>{t.projects.overlayTitle}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t.projects.underlayTitle}</h2>
        {t.projects.description.map((degree, i) => (
          <React.Fragment key={i}>
            <a className="light big subTitle" target="_blank" rel="noreferrer" href={t.projects.description[i].website}>{degree.title}</a>
            <p className="text small">{degree.startDate} - {degree.endDate}</p>
            <p className="light text medium textSpacement">{degree.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}