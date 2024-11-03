import React from "react";
import { useTranslations } from "next-intl";
import getFormatDate, {
  formatDate,
  isExpirationDatePassed,
} from "@/utils/getFormatDate";

import educationImg from "@/assets/images/cv/education.jpg";
import { IExpressions } from "@/models/IExpressions";
import { IEducation } from "@/models/IMessages";

import "./Cv.scss";

interface IEducationProps {
  gradient: string;
  params: {
    locale: string;
  };
}

export default function Education(props: IEducationProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as IExpressions;
  const educations = t.raw("educations.description") as IEducation[];

  return (
    <div
      className="module"
      style={{
        gridArea: "education",
        backgroundImage: `url(${educationImg.src})`,
      }}
    >
      <div
        className={`overlay`}
        style={{
          backgroundImage: `${props.gradient},url(${educationImg.src})`,
        }}
      >
        <p>{t("educations.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <div className="extraBig bold" aria-label="Toggle diploma status">
          {`${t("educations.underlayTitle")}`}
        </div>
        {educations.length > 0 ? (
          educations.map((education, i) => {
            const isPermanent = education.expirationDate === "Permanent";
            const isExpired =
              !isPermanent && isExpirationDatePassed(education.expirationDate);

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
            return null;
          })
        ) : (
          <p className="text small">{t("educations.noEducation")}</p>
        )}
      </div>
    </div>
  );
}
