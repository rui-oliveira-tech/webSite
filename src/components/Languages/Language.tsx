"use client";

import React, { useTransition } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";

import "./Language.scss";

import { languageImg, languageList, Locale } from "@/resource/lngs/lngs";
import Link from "next/link";
import { setUserLocale } from "./cookies";

interface LanguageProps {
  params: {
    locale: string;
  };
}

const Languages: React.FC<LanguageProps> = (props) => {
  const { locale } = props.params;
  const t = useTranslations("");
  const languages = t.raw("expressions.languages");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onLanguageChange =
    (lang: Locale): React.FormEventHandler<HTMLButtonElement> =>
      (event) => {
        event.preventDefault();
        startTransition(() => {
          setUserLocale(lang)
          const newPath = pathname.replace(`/${locale}`, `/${lang}`);
          router.replace(newPath);
        });
      };

  const languageListUpdated = languageList.map((language) => ({
    ...language,
    language: languages[language.code],
  }));

  return (
    <div className="language dropdown relative group">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image src={languageImg} width={500} height={500} alt="globeIcon" />
      </button>
      <ul
        className={classNames(
          "bg-white p-2 border-2 rounded-md border-solid border-gray-200 absolute top-[150%] right-0 w-40 hidden group-focus-within:block"
        )}
      >
        {languageListUpdated.map(
          ({ code, language, img, langTranslationList }) =>
            langTranslationList && (
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
                  <span>{language}</span>
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Languages;
