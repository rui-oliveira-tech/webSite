// src/app/[locale]/cv/page.tsx

import React from "react";

import Cv from "@/components/pages/cv/Cv";
import FadeIn from "@/components/fadeIn/FadeIn";

interface ICvProps {}

export default function CvPage(props: ICvProps) {
  return (
    <FadeIn type="fast">
      <Cv {...props} locale="en" />
    </FadeIn>
  );
}
