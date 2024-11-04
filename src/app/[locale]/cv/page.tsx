import React from "react";

import Cv from "@/components/pages/cv/Cv";
import FadeIn from "@/components/fadeIn/FadeIn";

import { ILocaleProps } from "@/models/ILocaleProps";

export default function CvPage(props: ILocaleProps) {
  return (
    <FadeIn type="fast">
      <Cv {...props} />
    </FadeIn>
  );
}
