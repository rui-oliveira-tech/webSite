import React from "react";

import "./Cv.scss"
import Translation from '../../resource/translation'

export default function Experience(props) {
  const t = Translation();

  return (
    <div className="module" style={{ gridArea: "experience", backgroundImage: `url(${props.cardImages[t.experience.img]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t.experience.img]})` }}>
        <p>{t.experience.overlayTitle}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t.experience.underlayTitle}</h2>
        {t.experience.description.map((degree, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{degree.title}</p>
            <a className="textGlue medium" target="_blank" rel="noreferrer" href={t.experience.description[i].website}>{t.experience.description[i].company} in {t.experience.description[i].location}</a>
            <p className="text small">{degree.startDate} - {degree.endDate} - {degree.offerType}{" "}</p>
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