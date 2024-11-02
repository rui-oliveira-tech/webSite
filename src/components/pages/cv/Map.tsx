import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import MapSection from "@/components/others/Map/Map";
import pointsDataset from "@/resource/generated/processedGoogleMapsMarkers.json";
import MapsImg from "@/assets/images/cv/googleMapsMarkers.jpg";

import "./Cv.scss";

//import { Map } from "@/models/Project";
interface IMapProps {
  animatedOverlay: React.MutableRefObject<string>;
  gradient: string;
}

export default function Map(props: IMapProps) {
  const t = useTranslations();
  const [loadingMap, setLoadingMap] = useState(true);

  let waitForGoogleMaps = useRef(setTimeout(() => {}, 0));

  useEffect(() => {
    new Promise((resolve) => {
      waitForGoogleMaps.current = setTimeout(
        () => resolve(setLoadingMap(false)),
        2000
      );
    });
    return () => clearTimeout(waitForGoogleMaps.current);
  });

  return (
    <>
      {!loadingMap && (
        <div
          className="module"
          style={{
            gridArea: "map",
            backgroundImage: `url(${MapsImg.src})`,
          }}
        >
          <div
            className={"overlay " + props.animatedOverlay.current}
            style={{
              backgroundImage: `${props.gradient},url(${MapsImg.src})`,
            }}
          >
            <p>{t("googleMapsMarkers.overlayTitle")}</p>
          </div>
          <div className="underlay">
            <div className="traveledMap">
              <MapSection pointsDataset={pointsDataset} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
