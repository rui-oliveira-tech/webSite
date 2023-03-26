import React from "react";

import "./Cv.scss"
import Translation from '../../resource/translation'

export default function About(props) {
  const t = Translation();

  return (
    <div className="module" style={{ gridArea: "about", backgroundImage: `url(${props.cardImages[t.about.img]})` }}>
      <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t.about.img]})` }}>
        <p>{t.about.overlayTitle}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t.about.underlayTitle}</h2>
        <div className="light text">
          {t.about.description.map((item, i) =>
            <React.Fragment key={i}>
              {i === 0 ?
                (<p className="big" key={i}>{item}</p>)
                : i === 1 ?
                  (<p className="medium" key={i}>
                    {item[0]}
                    <a target="_blank" rel="noreferrer" href={t.experience.description[0].website}> {item[1]}</a>
                    {item[2]}
                    {item[3]}
                    {item[4]}
                  </p>)
                  : i === 2 ?
                    (<p className="medium" key={i}>{item}</p>)
                    :
                    (<p className="big right" key={i}>{item}</p>)
              }
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}