import React from "react";

import Cv from "@/components/pages/cv/Cv";
import FadeIn from "@/components/fadeIn/FadeIn";

import { ILocaleProps } from "@/models/ILocaleProps";

export default async function CvPage(props: ILocaleProps) {
  const { locale } = await props.params;
  return (
    <FadeIn type="fast">
      <Cv locale={locale} />
    </FadeIn>
  );
}
