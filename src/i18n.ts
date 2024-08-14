import { getRequestConfig } from 'next-intl/server';
import { supportedLngs, defaultLanguage } from "./resource/lngs"
import deepMerge from './util/deepMerge';


export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!supportedLngs.includes(locale as any)) locale = defaultLanguage;

  let messages;
  if (locale === defaultLanguage) {
    messages = (await import(`./messages/${locale}.json`)).default;
  }
  else {
    messages = deepMerge((await import(`./messages/${defaultLanguage}.json`)).default, (await import(`./messages/${locale}.json`)).default);
  }
  return {
    messages
  };

});
