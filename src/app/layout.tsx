import React from "react";
import { getLocale, getMessages } from "next-intl/server";
import RootLayout from "./RootLayout";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <RootLayout locale={locale} messages={messages}>
      {children}
    </RootLayout>
  );
}
