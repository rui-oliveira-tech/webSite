import React from "react";
import { useTranslations } from "next-intl";
import getFormatDate from "@/util/getFormatDate.tsx";

import othersImg from "@/assets/images/cv/others.jpg";
import { Expressions } from "@/models/Expressions";
import { Other } from "@/models/Other";

import "./Cv.scss";

interface IOthersProps {
  animatedOverlay: React.MutableRefObject<string>;
  gradient: string;
}

export default function Others(props: IOthersProps) {
  const t = useTranslations("");
  const expressions = t.raw("expressions") as Expressions;
  const others = t.raw("other.description") as Other[];

  return (
    <div
      className="module"
      style={{
        gridArea: "others",
        backgroundImage: `url(${othersImg.src})`,
      }}
    >
      <div
        className={"overlay " + props.animatedOverlay.current}
        style={{
          backgroundImage: `${props.gradient},url(${othersImg.src})`,
        }}
      >
        <p>{t("other.overlayTitle")}</p>
      </div>
      <div className="underlay">
        <h2 className="extraBig bold">{t("other.underlayTitle")}</h2>
        {others.map((other, i) => (
          <React.Fragment key={i}>
            <p className="light big subTitle">{other.title}</p>
            <p className="text small">{getFormatDate(other, expressions)}</p>
            <p className="light text medium textSpacement">
              {other.description}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
