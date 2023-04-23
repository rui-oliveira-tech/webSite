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


function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var arrayBuffer = new ArrayBuffer(byteString.length);
  var _ia = new Uint8Array(arrayBuffer);
  for (var i = 0; i < byteString.length; i++) {
    _ia[i] = byteString.charCodeAt(i);
  }

  var dataView = new DataView(arrayBuffer);
  var blob = new Blob([dataView], { type: mimeString });
  return blob;
}