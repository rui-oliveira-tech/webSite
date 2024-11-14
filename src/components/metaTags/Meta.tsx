"use client";

import { NextSeo } from "next-seo";
import { useTranslations } from "next-intl";

interface IMetaProps {
  locale?: string;
}

export const Meta = (props: IMetaProps) => {
  const t = useTranslations("");

  const pageTitle = t("app_title");
  const pageDescription = t("app_description");
  const canonical = "";
  const imageUrl =
    process.env.NEXT_PUBLIC_URL + "/favicon/android-chrome-512x512.png";

  return (
    <>
      {/* <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical} // Add canonical URL if needed
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          images: [
            {
              url: imageUrl,
              width: 512,
              height: 512,
              alt: pageTitle,
            },
          ],
          locale: props.locale,
          site_name: pageTitle,
          type: "website",
        }}
      /> */}
    </>
  );
};

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
