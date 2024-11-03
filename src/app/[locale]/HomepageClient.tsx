// src/app/[locale]/HomepageClient.tsx

"use client"; // Mark this file as a client component

import React from "react";

/* import Home from "@/components/pages/home/Home";
import FadeIn from "@/components/fadeIn/FadeIn"; */

interface IHomepageProps {
  params: {
    locale: string;
  };
}
const HomepageClient: React.FC<IHomepageProps> = ({ params }) => {
  return (
    <div>
      <h2>Your CV Content for {params.locale}</h2>
      {/* 
      <FadeIn type="fast">
        <Home {...props} />
      </FadeIn>{" "} 
      */}
    </div>
  );
};

export default HomepageClient;
