// src/app/[locale]/cv/page.tsx

import React from "react";
import CvClient from "@/components/pages/cv/Cv"; // Adjust the import path as necessary

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
  return <CvClient {...props} />; // Render the client component
}
