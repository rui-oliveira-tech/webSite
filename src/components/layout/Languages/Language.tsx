"use client";

import React, { useTransition } from "react";
import Image from "next/image";
import classNames from "classnames";

import {
  useRouter,
  usePathname,
  useLanguageListUpdated,
  routing,
} from "@/i18n/routing";
import { Locale } from "@/i18n/lngs";
import { setUserLocale } from "./cookies";

import langImg from "@/assets/images/languages/language.svg";

import "./Language.scss";

interface ILanguageProps {
  locale: string;
}

export default function Languages(props: ILanguageProps) {
  const locale = props.locale;
  const languageListUpdated = useLanguageListUpdated(routing.locales);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onLanguageChange =
    (lang: Locale): React.FormEventHandler<HTMLButtonElement> =>
    (event) => {
      event.preventDefault();
      startTransition(() => {
        setUserLocale(lang);
        router.replace(pathname, { locale: lang });
      });
    };

  return (
    <div className="language dropdown relative group">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image src={langImg} width={500} height={500} alt="globeIcon" />
      </button>
      <ul
        className={classNames(
          "bg-white p-2 border-2 rounded-md border-solid border-gray-200 absolute top-[150%] right-0 w-40 hidden group-focus-within:block"
        )}
      >
        {languageListUpdated.map(({ code, languageTranslatedName, img }) => (
          <li className="py-1 hover:bg-gray-100 rounded-md" key={code}>
            <button
              style={{
                opacity: locale === code ? 0.5 : 1,
              }}
              className={classNames("flex items-center", {
                disabled: locale === code,
              })}
              disabled={isPending}
              onClick={onLanguageChange(code)}
            >
              <Image
                className="inline mr-2 ml-2"
                src={img.src}
                width={20}
                height={20}
                alt={code}
              />
              <span>{languageTranslatedName}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
