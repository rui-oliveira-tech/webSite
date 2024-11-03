// src/app/[locale]/page.tsx

import React from "react";
import HomepageClient from "./HomepageClient"; // Import the client component

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
  return <HomepageClient {...props} />; // Render the client component
}