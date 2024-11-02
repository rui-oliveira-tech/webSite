import React, { useState } from "react";
import { useTranslations } from "next-intl";
import getFormatDate, {
  formatDate,
  isExpirationDatePassed,
} from "@/util/getFormatDate.tsx";

import certificationImg from "@/assets/images/cv/certification.jpg";
import { Expressions } from "@/models/Expressions";
import { Certification } from "@/models/Certification";

import "./Cv.scss";

interface ICertificationProps {
  animatedOverlay: string; 
  gradient: string;
  params: {
    locale: string;
  };
}

export default function Certification(props: ICertificationProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as Expressions;
  const certifications = t.raw("certifications.description") as Certification[];

  const [showDiplomType, setShowDiplomType] = useState<
    "validDiplom" | "duplicateDiplom" | "expiredDiplom"
  >("validDiplom");

  const toggleDiplomaStatus = () => {
    setShowDiplomType((prev) => {
      switch (prev) {
        case "validDiplom":
          return "duplicateDiplom"; // Next state after valid
        case "duplicateDiplom":
          return "expiredDiplom"; // Next state after duplicate
        case "expiredDiplom":
          return "validDiplom"; // Cycle back to valid
        default:
          return "validDiplom"; // Fallback case (shouldn't happen)
      }
    });
  };

  return (
    <div
      className="module"
      style={{
        gridArea: "certification",
        backgroundImage: `url(${certificationImg.src})`,
      }}
    >
      <div
        className={`overlay ${props.animatedOverlay}`}
        style={{
          backgroundImage: `${props.gradient},url(${certificationImg.src})`,
        }}
      >
        <p>{t("certifications.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <button
          className="extraBig bold"
          onClick={toggleDiplomaStatus}
          aria-label="Toggle diploma status"
        >
          {`${t("certifications.underlayTitle")} (${
            expressions.offerTypes[showDiplomType]
          })`}
        </button>
        <p className="text small">{t("certifications.key.changeDiplomas")}</p>
        {certifications.length > 0 ? (
          certifications.map((education, i) => {
            const isPermanent = education.expirationDate === "Permanent";
            const isExpired =
              !isPermanent && isExpirationDatePassed(education.expirationDate);
            const isDuplicate = education.type.includes("duplicate");

            // Adjusted filtering logic
            const shouldShow =
              (showDiplomType === "validDiplom" &&
                !isExpired &&
                !isDuplicate) ||
              (showDiplomType === "duplicateDiplom" &&
                isDuplicate &&
                !isExpired) ||
              (showDiplomType === "expiredDiplom" && isExpired);

            if (shouldShow) {
              const title = isExpired
                ? `${education.title} (${
                    expressions.offerTypes.expired
                  } ${formatDate(education.endDate, expressions)})`
                : `${education.title} (${
                    isPermanent
                      ? expressions.offerTypes.permanent
                      : `${expressions.offerTypes.valid} ${education.expirationDate}`
                  })`;

              return (
                <React.Fragment key={i}>
                  <p className="light big subTitle">{title}</p>
                  <a
                    className="textGlue medium"
                    target="_blank"
                    rel="noreferrer"
                    href={education.website}
                    aria-label={`Visit ${education.companyTitle} website`}
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
          })
        ) : (
          <p className="text small">{t("certifications.noEducation")}</p>
        )}
      </div>
    </div>
  );
}
