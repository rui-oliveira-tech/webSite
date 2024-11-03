// src/app/[locale]/cv/page.tsx

import React from "react";

import Cv from "@/components/pages/cv/Cv";
import FadeIn from "@/components/fadeIn/FadeIn";

// This function specifies the locales for the CV page
export async function generateStaticParams() {
  const locales = ["en", "pt", "fr"]; // Replace with your actual locales
  return locales.map((locale) => ({ locale })); // Pre-render for each locale
}

interface ICvProps {
  params: {
    locale: string;
  };
}

export default function CvPage(props: ICvProps) {
  return (
    <div>
      <h2>Your CV Content for</h2>
      <FadeIn type="fast">
        <Cv {...props} />
      </FadeIn>
    </div>
  );
}
