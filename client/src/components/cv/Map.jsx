import React, { useEffect, useRef, useState } from "react";

import "./Cv.scss"
import Translation from '../../resource/translation'
import MapSection from "../Map/Map";
import { googleMapsMarkers } from "../../resource/googleMapsMarkers.js"

export default function Map(props) {
  const t = Translation();
  const [loadingMap, setLoadingMap] = useState(true);

  let waitForGoogleMaps = useRef(setTimeout(() => { }, 0));

  useEffect(() => {
    new Promise(resolve => {
      waitForGoogleMaps.current = setTimeout(() => resolve(setLoadingMap(false)), 2000)
    })
    return () => clearTimeout(waitForGoogleMaps.current);
  })

  return (
    <>
      {!loadingMap && <div className="module" style={{ gridArea: "map", backgroundImage: `url(${props.cardImages[t.googleMapsMarkers.img]})` }}>
        <div className={"overlay " + props.animatedOverlay.current} style={{ backgroundImage: `${props.gradient}, url(${props.cardImages[t.googleMapsMarkers.img]})` }}>
          <p>{t.googleMapsMarkers.overlayTitle}</p>
        </div>
        <div className="underlay">
          <div className="traveledMap">
            <MapSection markers={googleMapsMarkers} />
          </div>
        </div>
      </div>
      }
    </>
  )
}