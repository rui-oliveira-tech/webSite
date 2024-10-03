import { NextIntlClientProvider, useMessages } from "next-intl";
import classNames from "classnames";
import { Inter } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
}: /*   params: { locale }, */
Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={classNames(inter.className, "overflow-y-scroll")}>
        <NextIntlClientProvider messages={messages}>
          <div id="root" className="flex flex-col min-h-screen mx-auto">
            <div className="flex-grow">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}