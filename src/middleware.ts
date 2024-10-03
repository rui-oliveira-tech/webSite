import createMiddleware from 'next-intl/middleware';
import { supportedLngs, defaultLanguage } from "./resource/lngs/lngs"

export default createMiddleware({
  locales: supportedLngs,
  defaultLocale: defaultLanguage,
});

export const config = {
  matcher: ['/((?!api|_next|static|...).*)', '/', '/(en|nl|fr|pt)/:path*'] 
};
