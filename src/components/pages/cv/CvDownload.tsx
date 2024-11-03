import React from "react";
import { useTranslations } from "next-intl";
import { saveAs } from "file-saver";

import "./Cv.scss";
import "./CvButton.scss";

interface ICvDownloadProps {
  gradient: string;
  locale: string;
}

export default function CvDownload(props: ICvDownloadProps) {
  const currentLanguageCode = props.locale; // Use destructuring for clarity
  const t = useTranslations("");

  const downloadPDF = (e: React.MouseEvent) => {
    e.preventDefault();
    const fileName = `RuiOliveira_CV-${currentLanguageCode.toUpperCase()}.pdf`;
    fetch(`/resource/${fileName}`)
      .then((res) => res.blob())
      .then((pdf) => saveAs(pdf, fileName))
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="download">
      <button
        className={`learn-more buttonCV`} // Access current value
        onClick={downloadPDF}
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span id="buttonCV" className="buttonCV-text">
          {t("home.cvButton")}
        </span>
      </button>
    </div>
  );
}
