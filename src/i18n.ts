import { getRequestConfig } from 'next-intl/server';
import { notFound } from "next/navigation";
import { supportedLngs, defaultLanguage } from "./resource/lngs/lngs";
import deepMerge from './util/deepMerge';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!supportedLngs.includes(locale as any)) notFound();

  let messages;
  let localeJson = (await import(`./assets/translations/${locale}.json`)).default;

  if (locale === defaultLanguage) {
    messages = localeJson;
  } else {
    let defaultLocaleJson = (await import(`./assets/translations/${defaultLanguage}.json`)).default;
    messages = deepMerge(defaultLocaleJson, localeJson);
  }

  return {
    messages
  };
});