"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Meta } from "../components/metaTags/Meta";
import { NextIntlClientProvider } from "next-intl";
import classNames from "classnames";
import { Inter } from "next/font/google";
import Loading from "../components/Loading/Loading";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  locale: string;
  messages: any;
}

export default function RootLayout({
  children,
  locale,
  messages,
}: RootLayoutProps) {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFadeIn(true);
      }, 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Meta locale={locale} />
        <body className={classNames(inter.className, "overflow-y-scroll")}>
          {loading ? (
            <Loading />
          ) : (
            <div
              id="root"
              className={`flex flex-col min-h-screen mx-auto loading-page ${
                fadeIn ? "fade-in" : "fade-out"
              }`}
            >
              <Suspense fallback={<Loading />}>
                <div className="flex-grow">{children}</div>
              </Suspense>
            </div>
          )}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
