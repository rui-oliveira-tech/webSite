// src/app/[locale]/cv/page.tsx

import React from "react";

import Cv from "@/components/pages/cv/Cv";
import FadeIn from "@/components/fadeIn/FadeIn";

import { generateStaticParams } from "@/utils/staticParams";

interface ICvProps {

}

export default function CvPage(props: ICvProps) {
  return (
    <FadeIn type="fast">sss
    {/*   <Cv {...props} locale="en" /> */}
    </FadeIn>
  );
}

export { generateStaticParams };
