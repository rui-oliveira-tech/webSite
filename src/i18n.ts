import { getRequestConfig } from 'next-intl/server';
import { supportedLngs, defaultLanguage } from "./resource/lngs/lngs"
import deepMerge from './util/deepMerge';
import { notFound } from "next/navigation";


export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!supportedLngs.includes(locale as any)) notFound();

  let messages;
  let localeJson = structuredClone((
    await import(`./messages/${locale}.json`)
  ).default)

  if (locale === defaultLanguage) {
    messages = localeJson;
  } else {
    let defaultLocaleJson = structuredClone((
      await import(`./messages/${defaultLanguage}.json`)
    ).default)
    messages = deepMerge(defaultLocaleJson, localeJson);
  }
  return {
    messages
  };
});
