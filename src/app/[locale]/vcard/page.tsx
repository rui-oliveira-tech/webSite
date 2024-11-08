// components/VcardWrapper.tsx
"use client";

import Vcard from "@/components/vcard/Vcard";
import FadeIn from "@/components/fadeIn/FadeIn";

import { ILocaleProps } from "@/models/ILocaleProps";

export default function VcardPage(props: ILocaleProps) {
  return (
    <FadeIn type="fast">
      <Vcard {...props} />
    </FadeIn>
  );
}
