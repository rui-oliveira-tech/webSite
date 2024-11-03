// src/app/[locale]/page.tsx

import React from "react";
 import Home from "@/components/pages/home/Home"; 
import FadeIn from "@/components/fadeIn/FadeIn";

import { generateStaticParams } from "@/utils/staticParams";

interface IHomepageProps {
  params: {
    locale: string;
  };
}

export default async function Homepage(props: IHomepageProps) {
  return (
    <FadeIn type="fast">
      aa
       {/*      <Home {...props} />  */}
    </FadeIn>
  );
}

export { generateStaticParams };
