"use client";
import React from "react";

/* import Cv from "@/components/pages/cv/Cv";
import FadeIn from "@/components/fadeIn/FadeIn";
 */

interface ICvProps {
  params: {
    locale: string;
  };
}

const CvClient: React.FC<ICvProps> = ({ params }) => {
  return (
    <div>
      <h2>Your CV Content for {params.locale}</h2>
      {/* <FadeIn type="fast">
      <Cv {...props} />
    </FadeIn> */}
    </div>
  );
};

export default CvClient;
