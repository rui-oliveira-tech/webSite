import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { saveAs } from 'file-saver';

import "./Cv.scss";
import "./CvButton.scss";

const server = process.env.REACT_APP_API;
export default function CvDownload(props) {
  const currentLanguageCode = props.i18n.language;
  const { t } = useTranslation();
  const animation = useRef("notLoading");
  let waitForLoading = useRef(setTimeout(() => { }, 0));
  const cvFile = `CV_DOWNLOAD_${currentLanguageCode.toUpperCase()}`;
  const cvFileName = `${cvFile}_NAME`;

  useEffect(() => {
    waitForLoading.current = setTimeout(() => {
      if (props.isLoading) {
        animation.current = "loading";
      }
    }, 1)
    return () => clearTimeout(waitForLoading.current);
  }, [])

  const createAndDownloadPdf = () => {
    if (localStorage.getItem(cvFile) !== null && process.env.NODE_ENV !== "development") {
      saveAs(dataURItoBlob(localStorage.getItem(cvFile)), localStorage.getItem(cvFileName));
      return
    }

    let cvData = {
      education: t('education.description', { returnObjects: true }),
      experience: t('experience.description', { returnObjects: true })
    }

    axios.post(`${server}/cv-pdf/create/${currentLanguageCode}`, cvData, { responseType: "blob" })
      .then((res) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          localStorage.setItem(cvFile, event.target.result);
          localStorage.setItem(`CV_DOWNLOAD_${currentLanguageCode.toUpperCase()}_NAME`, res.headers["x-suggested-filename"]);
          saveAs(event.target.result, res.headers["x-suggested-filename"]);
        }
        reader.readAsDataURL(res.data);
      })
  };

  return (
    <div className="download" >
      {(currentLanguageCode === "en" || currentLanguageCode === "nl") && <button className={"learn-more buttonCV " + animation.current} onClick={createAndDownloadPdf}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span id="buttonCV" className="buttonCV-text">{t('home.cvButton')}</span>
      </button>}
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