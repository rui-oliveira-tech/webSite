import React, { useEffect, useRef } from "react";

import FileSaver from 'file-saver';

import "./Cv.scss"
import "./CvButton.scss"
import Translation from '../../resource/translation'

export default function CvDownload(props) {
  const currentLanguageCode = props.i18n.language;
  const t = Translation();
  const animation = useRef("notLoading");

  let waitForLoading = useRef(setTimeout(() => { }, 0));

  useEffect(() => {
    waitForLoading.current = setTimeout(() => {
      if (props.isLoading) {
        animation.current = "loading";
      }
    }, 1)
    return () => clearTimeout(waitForLoading.current);
  }, [])


  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf",
      "CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf");
  };

  return (
    <div className="download">
      {(currentLanguageCode === "en" || currentLanguageCode === "nl") && <button className={"learn-more buttonCV " + animation.current} onClick={saveFile}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span id="buttonCV" className="buttonCV-text">{t.home.cvButton}</span>
      </button>}
    </div>
  )
}