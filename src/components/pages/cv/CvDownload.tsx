import React from "react";
import { useTranslations } from "next-intl";
import { saveAs } from "file-saver";

import "./Cv.scss";
import "./CvButton.scss";

export default function CvDownload({ locale }: { locale: string }) {
  const t = useTranslations("");

  const downloadPDF = (e: React.MouseEvent) => {
    e.preventDefault();
    const fileName = `RuiOliveira_CV-${locale.toUpperCase()}.pdf`;
    fetch(`/resource/${fileName}`)
      .then((res) => res.blob())
      .then((pdf) => saveAs(pdf, fileName))
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="download">
      <button className="learn-more buttonCV" onClick={downloadPDF}>
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
