import beImg from "@/assets/images/languages/be.svg";
import esImg from "@/assets/images/languages/es.svg";
import frImg from "@/assets/images/languages/fr.svg";
import enImg from "@/assets/images/languages/en.svg";
import nlImg from "@/assets/images/languages/nl.svg";
import ptImg from "@/assets/images/languages/pt.svg";

export const defaultLanguage = "en";
export const supportedTranledLngs = ["en", "nl", "fr", "pt"];
export const supportedlanguagesExpLngs = ["en", "nl", "fr", "pt", "es"];

export const languagesList = {
  en: {
    img: enImg,
  },
  nl: {
    img: nlImg,
  },
  fr: {
    img: frImg,
  },
  pt: {
    img: ptImg,
  },
  es: {
    img: esImg,
  },
} as const satisfies Record<string, Language>;

export type Locale = keyof typeof languagesList;

export type Language = {
  img: any;
};
