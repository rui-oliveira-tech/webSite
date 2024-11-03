import { getRequestConfig } from 'next-intl/server';
import { supportedLngs, defaultLanguage } from "./resource/lngs/lngs";
import deepMerge from './utils/deepMerge';

export default getRequestConfig(async ({ requestLocale }) => {

  let locale = await requestLocale;

  if (!locale || !supportedLngs.includes(locale as any)) {
    locale = defaultLanguage;
  }
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
