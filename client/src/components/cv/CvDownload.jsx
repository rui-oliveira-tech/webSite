import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';

import "./Cv.scss";
import "./CvButton.scss";

export default function CvDownload(props) {
  const currentLanguageCode = props.i18n.language;

  const { t } = useTranslation();
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

  const downloadPDF = (e) => {
    e.preventDefault();
    const fileName = `RuiOliveira_CV-${currentLanguageCode.toUpperCase()}.pdf`;
    fetch(`/resource/${fileName}`)
      .then(res => res.blob())
      .then(pdf => saveAs(pdf, fileName))
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <div className="download" >
      <button className={"learn-more buttonCV " + animation.current} onClick={downloadPDF}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span id="buttonCV" className="buttonCV-text">{t('home.cvButton')}</span>
      </button>
    </div>
  )
}