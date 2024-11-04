import React from "react";

import Home from "@/components/pages/home/Home";
import FadeIn from "@/components/fadeIn/FadeIn";

import { ILocaleProps } from "@/models/ILocaleProps";

export default async function Homepage(props: ILocaleProps) {
  return (
    <FadeIn type="fast">
      <Home />
    </FadeIn>
  );
}
