"use client";

import { NextSeo } from "next-seo";
import { useTranslations } from "next-intl";

interface IMetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  locale?: string;
}

const Meta = ({ title, description, canonical, locale }: IMetaProps) => {
  const t = useTranslations("");

  const pageTitle = title || t("app_title");
  const pageDescription = description || t("app_description");
  console.log(pageTitle, pageDescription, locale);

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        //    canonical={canonical}
        //    twitter={{
        //      cardType: "summary_large_image",
        //      // Add Twitter handle and site URL if needed
        //    }}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          // Add URL if available
          locale: locale,
          site_name: pageTitle,
        }}
      />
    </>
  );
};

export { Meta };
//<Head>
//{/* Example meta tags */}
//<meta charSet="UTF-8" key="charset" />
//<meta
//  name="viewport"
//  content="width=device-width,initial-scale=1"
//  key="viewport"
///>
//<link
//  rel="apple-touch-icon"
//  /*   href={buildUrl("/apple-touch-icon.png")} */
//  key="apple"
///>
//<link
//  rel="icon"
//  type="image/png"
//  sizes="32x32"
//  /*   href={buildUrl("/favicon-32x32.png")} */
//  key="icon32"
///>
//<link
//  rel="icon"
//  type="image/png"
//  sizes="16x16"
//  /*  href={buildUrl("/favicon-16x16.png")} */
//  key="icon16"
///>
//{/*   <link rel="icon" href={buildUrl("/favicon.ico")} key="favicon" /> */}
//</Head>