import beImg from "@/assets/images/languages/be.svg";
import esImg from "@/assets/images/languages/es.svg";
import frImg from "@/assets/images/languages/fr.svg";
import enImg from "@/assets/images/languages/en.svg";
import nlImg from "@/assets/images/languages/nl.svg";
import ptImg from "@/assets/images/languages/pt.svg";

import langImg from "@/assets/images/languages/language.svg";

export const languageImg = langImg;

export const defaultLanguage = "en";

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
