import React, { useState } from "react";
import { useTranslations } from "next-intl";
import getFormatDate, {
  formatDate,
  isExpirationDatePassed,
} from "@/util/getFormatDate";

import "./Cv.scss";

import educationImg from "@/images/cv/education.jpg";

import { Expressions } from "@/models/Expressions";
import { Education } from "@/models/Education";
interface IEducationProps {
  animatedOverlay: React.MutableRefObject<string>;
  gradient: string;
}

export default function Education(props: IEducationProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as Expressions;
  const educations = t.raw("educations.description") as Education[];

  const [showValid, setShowValid] = useState(true);
  const toggleValid = () => setShowValid(!showValid);

  return (
    <div
      className="module"
      style={{
        gridArea: "education",
        backgroundImage: `url(${educationImg.src})`,
      }}
    >
      <div
        className={"overlay " + props.animatedOverlay.current}
        style={{
          backgroundImage: `${props.gradient},url(${educationImg.src})`,
        }}
      >
        <p>{t("educations.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <button className="extraBig bold" onClick={toggleValid}>
          {`${t("educations.underlayTitle")} ${
            showValid
              ? `(${expressions.offerTypes.validDiplom})`
              : `(${expressions.offerTypes.expiredDiplom})`
          }`}
        </button>
        <p className="text small">{t("educations.key.changeDiplomas")}</p>
        {educations.map((education, i) => {
          const isExpired =
            education.expirationDate !== "Permanent" &&
            isExpirationDatePassed(education.expirationDate);
          if ((showValid && !isExpired) || (!showValid && isExpired)) {
            const title = `${education.title} (${
              isExpired
                ? expressions.offerTypes.expired
                : expressions.offerTypes.valid
            } ${formatDate(education.endDate, expressions)})`;
            return (
              <React.Fragment key={i}>
                <p className="light big subTitle">{title}</p>
                <a
                  className="textGlue medium"
                  target="_blank"
                  rel="noreferrer"
                  href={education.website}
                >
                  {education.companyTitle} {education.company}{" "}
                  {expressions.prepositions.in} {education.location}
                </a>
                <p className="text small">
                  {getFormatDate(education, expressions)}
                </p>
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
