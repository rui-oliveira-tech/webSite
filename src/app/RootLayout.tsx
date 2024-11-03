"use client";

import React from "react";
import { Meta } from "../components/metaTags/Meta";
import { NextIntlClientProvider } from "next-intl";
import classNames from "classnames";
import { Inter } from "next/font/google";
import Loading from "../components/Loading/Loading";
import FadeIn from "@/components/fadeIn/FadeIn";
import { useLoadingAnimation } from "@/hooks/useLoadingAnimation"; // Import the hook

const inter = Inter({ subsets: ["latin"] });

interface IRootLayoutProps {
  children: React.ReactNode;
  locale: string;
  messages: any;
}

export default function RootLayout(props: IRootLayoutProps) {
  const { animationDuration } = useLoadingAnimation("20s", 2500);

  return (
    <html lang={props.locale}>
      <NextIntlClientProvider messages={props.messages} locale={props.locale}>
        <Meta locale={props.locale} />
        <body
          style={
            { "--loadingAnimation": animationDuration } as React.CSSProperties
          }
          className={classNames(inter.className, "overflow-y-scroll")}
        >
          <Loading>
            <div id="root" className="flex flex-col min-h-screen mx-auto">
              <FadeIn type="slow">
                <div className="flex-grow">{props.children}</div>
              </FadeIn>
            </div>
          </Loading>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
