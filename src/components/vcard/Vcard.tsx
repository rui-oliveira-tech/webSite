"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { VcardGenerator } from "@/components/vcard/vcardGenerator/VcardGenerator"; // Ensure correct import
import { ILocaleProps } from "@/models/ILocaleProps";

import "./Vcard.scss";

export default function VcardPage(props: ILocaleProps) {
  const router = useRouter();
  const filename = `Rui_Oliveira_Vcard.vcf`;
  const vcardSuffix = props.params.vcardCode
    ? props.params.vcardCode
    : "default";

  const [timer, setTimer] = useState(5);
  const [errors, setErrors] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const vCardLink = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const generateVCard = async () => {
      if (vcardSuffix) {
        try {
          const vCardData = await VcardGenerator(vcardSuffix);

          if (vCardData) {
            const blob = new Blob([vCardData], { type: "text/vcard" });
            const url = URL.createObjectURL(blob);
            setFileUrl(url);
            return () => {
              URL.revokeObjectURL(url);
            };
          } else {
            throw new Error("Generated vCard data is empty");
          }
        } catch (error) {
          console.error("Error generating vCard:", error);
          setErrors(true);
        }
      }
    };

    generateVCard();
  }, [vcardSuffix, filename]);

  useEffect(() => {
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);

    if (timer === 0) {
      router.replace("/", { locale: props.params.locale });
    }

    return () => clearInterval(countdown);
  }, [timer, vcardSuffix, router, props.params.locale]);

  const resetTimer = () => setTimer(5);

  return (
    <div className="centerVcard">
      <div className="ringVcard"></div>
      <div className="titleTextVcard">You will be redirected</div>
      <div className="timerTextVcard">Redirecting in {timer} seconds...</div>

      {!errors ? (
        <a
          className="vcardDownloadTextVcard"
          onClick={resetTimer}
          ref={vCardLink}
          href={fileUrl || undefined}
          download={filename}
        >
          Download Vcard
        </a>
      ) : (
        <>
          <p className="textErrorVcard">Error</p>
          <p className="vcardDownloadTextVcard">Please try later</p>
        </>
      )}
    </div>
  );
}
