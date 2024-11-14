'use server';

import { Locale } from "@/i18n/lngs";
import { cookies } from 'next/headers';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}