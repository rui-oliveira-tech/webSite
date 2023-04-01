import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { saveAs } from 'file-saver';

import "./Cv.scss";
import "./CvButton.scss";

export default function CvDownload(props) {
  const currentLanguageCode = props.i18n.language;
  const { t } = useTranslation();
  const animation = useRef("notLoading");
  const server = process.env.REACT_APP_API;
  let waitForLoading = useRef(setTimeout(() => { }, 0));

  useEffect(() => {
    waitForLoading.current = setTimeout(() => {
      if (props.isLoading) {
        animation.current = "loading";
      }
    }, 1)
    return () => clearTimeout(waitForLoading.current);
  }, [])

  const createAndDownloadPdf = () => {
    /*   FileSaver.saveAs(
       process.env.PUBLIC_URL + "/resource/CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf",
       "CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf");
   */

    let state = {
      name: '',
      receiptId: 0,
      price1: 0,
      price2: 0,
    }


    axios.post(`${server}/cv-pdf/create/${currentLanguageCode}`, state)
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
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