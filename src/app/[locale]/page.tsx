// src/app/[locale]/page.tsx

import React from "react";
/* import Home from "@/components/pages/home/Home";
import FadeIn from "@/components/fadeIn/FadeIn"; */

// This function is used to specify which locales will be pre-rendered
export async function generateStaticParams() {
  const locales = ['en', 'pt', 'fr']; // Replace with your actual locales
  return locales.map(locale => ({ locale }));
}

interface IHomepageProps {
  params: {
    locale: string;
  };
}

export default async function Homepage(props: IHomepageProps) {
  return (
    <div>
      <h2>Your CV Content for</h2>
      {/* 
      <FadeIn type="fast">
        <Home {...props} />
      </FadeIn>{" "} 
      */}
    </div>
  );
}