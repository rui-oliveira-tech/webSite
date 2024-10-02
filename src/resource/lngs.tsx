import beImg from "@/images/languages/be.svg";
import esImg from "@/images/languages/es.svg";
import frImg from "@/images/languages/fr.svg";
import enImg from "@/images/languages/en.svg";
import nlImg from "@/images/languages/nl.svg";
import ptImg from "@/images/languages/pt.svg";

import langImg from "@/images/languages/language.svg";

export const languageImg = langImg;

export const defaultLanguage = "en";
// if a language add chande on middleware.ts
export const languageList = [
  {
    code: "en",
    img: enImg,
    langTranslationList: true,
  },
  {
    code: "nl",
    img: nlImg,
    langTranslationList: true,
  },
  {
    code: "fr",
    img: frImg,
    langTranslationList: true,
  },
  {
    code: "pt",
    img: ptImg,
    langTranslationList: true,
  },
  {
    code: "es",
    img: esImg,
    langTranslationList: false,
  },
] as const satisfies Language[];

export const supportedLngs = languageList
  .filter((language) => language.langTranslationList)
  .map((language) => language.code);

export type Locale = (typeof supportedLngs)[number];

export type Language = {
  code: string;
  img: any;
  langTranslationList: boolean;
};
