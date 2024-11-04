import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { supportedLngs, defaultLanguage } from "../resource/lngs/lngs";

export const routing = defineRouting({ locales: supportedLngs, defaultLocale: defaultLanguage });

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);