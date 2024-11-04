import { getRequestConfig } from 'next-intl/server';
import { supportedTranledLngs, defaultLanguage } from "./lngs";
import { routing } from "./routing"
import deepMerge from '../utils/deepMerge';

/* export default getRequestConfig(async ({ requestLocale }) => {

  let locale = await requestLocale;

  if (!locale || !supportedTranledLngs.includes(locale as any)) {
    locale = defaultLanguage;
  }
  let messages;
  let localeJson = (await import(`../assets/translations/${locale}.json`)).default;

  if (locale === defaultLanguage) {
    messages = localeJson;
  } else {
    let defaultLocaleJson = (await import(`../assets/translations/${defaultLanguage}.json`)).default;
    messages = deepMerge(defaultLocaleJson, localeJson);
  }

  return {
    messages
  };
});
 */


export default getRequestConfig(async ({ requestLocale }) => {

  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  let messages;
  let localeJson = (await import(`../assets/translations/${locale}.json`)).default;

  if (locale === routing.defaultLocale) {
    messages = localeJson;
  } else {
    let defaultLocaleJson = (await import(`../assets/translations/${routing.defaultLocale}.json`)).default;
    messages = deepMerge(defaultLocaleJson, localeJson);
  }

  return {
    messages
  };
});
