import React from "react";

import "./Cv.scss"
import Translation from '../../resource/translation'

export default function Others(props) {
  const t = Translation();

  return (
    <div className="module" style={{ gridArea: "others", backgroundImage: `url(${props.cardImages[t.other.img]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t.other.img]})` }}>
        <p>{t.other.overlayTitle}</p>
      </div>
      <div className="underlay">

        <h2 className="extraBig bold">{t.other.underlayTitle}</h2>
        {t.other.description.map((degree, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{degree.title}</p>
            <p className="text small">{degree.startDate} - {degree.endDate}</p>
            <p className="light text medium textSpacement">{degree.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}