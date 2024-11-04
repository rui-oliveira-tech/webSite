import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { useTranslations } from "next-intl";
import { supportedTranledLngs, defaultLanguage, languagesList } from "./lngs";

export const routing = defineRouting({ locales: supportedTranledLngs, defaultLocale: defaultLanguage });

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export const useLanguageListUpdated = (langs: string[]) => {
    const languages = useTranslations("").raw("expressions.languages");

    return (Object.keys(languagesList) as Array<keyof typeof languagesList>)
        .filter(code => langs?.includes(code))
        .map(code => ({
            code,
            ...languagesList[code],
            languageTranslatedName: languages[code],
        }));
};