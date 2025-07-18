import React from "react";
import { getDictionary } from "../../dictionaries";
import CloseBtn from "@/app/ui/CloseBtn";
import { contactUsDictionary } from "../../ContactUsPage/types";
import Link from "next/link";
export default async function ContactIntercepted({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as contactUsDictionary;
  return (
    <div className="top-[20%] z-[3] flex h-[100%] w-[95%] flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 text-black">
      <CloseBtn lang={lang} title={t.contactUs.title}></CloseBtn>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-[204px] flex-col items-start justify-center gap-8">
          <div className="flex items-center justify-center gap-2">
            <svg
              style={{ width: "25px", height: "25px" }}
              className="relative h-[30px]! w-[30px]! object-contain"
              id="phone"
              data-name="phone"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12.96 12.96"
            >
              <path
                className="cls-1"
                d="M9.39,8.03v1.08c0,.07-.03.15-.09.2-.06.05-.14.07-.21.06-2.93-.27-5.25-2.58-5.51-5.51-.01-.07.01-.15.06-.21.05-.05.13-.09.2-.09h1.08c.14,0,.25.1.28.23.03.28.08.55.16.81.01.03.02.05.02.09,0,.07-.03.14-.09.19l-.71.71.08.18c.53,1.07,1.42,1.96,2.51,2.51l.17.08.72-.71c.07-.07.17-.1.28-.07.25.09.53.14.81.17.13.02.23.14.23.28Z"
              />
              <path
                className="cls-1"
                d="M6.48,0C2.9,0,0,2.9,0,6.48s2.9,6.48,6.48,6.48,6.48-2.9,6.48-6.48S10.06,0,6.48,0ZM9.93,9.11c0,.22-.1.45-.27.59-.17.16-.39.23-.63.21-.78-.07-1.53-.28-2.24-.62-.68-.33-1.31-.76-1.84-1.31-.54-.54-.98-1.16-1.31-1.85-.34-.7-.54-1.46-.62-2.23v-.07c0-.2.07-.4.21-.55.15-.17.37-.27.59-.27h1.08c.41,0,.76.31.81.72.03.23.07.48.15.7.08.3.01.61-.2.82l-.44.44c.46.85,1.16,1.55,2.01,2.01l.44-.44c.21-.21.52-.29.81-.2.23.07.48.12.71.15.41.04.72.39.72.81v1.08Z"
              />
            </svg>
            <p className="text-xl font-bold">009639640066054</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg
              style={{ width: "25px", height: "25px" }}
              className="relative h-[30px]! w-[30px]! object-contain"
              id="pinMark"
              data-name="pinMark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12.96 12.96"
            >
              <path
                className="cls-1"
                d="M7.16,5.55c0,.37-.31.67-.68.67s-.68-.3-.68-.67.31-.68.68-.68.68.3.68.68Z"
              />
              <path
                className="cls-1"
                d="M6.48,3c-1.4,0-2.55,1.15-2.55,2.56,0,2.27,1.98,3.91,2.55,4.33.57-.42,2.56-2.06,2.56-4.33,0-1.41-1.15-2.56-2.56-2.56ZM6.48,6.79c-.68,0-1.23-.55-1.23-1.23s.55-1.24,1.23-1.24,1.24.55,1.24,1.24-.56,1.23-1.24,1.23Z"
              />
              <path
                className="cls-1"
                d="M6.48,0C2.9,0,0,2.9,0,6.48s2.9,6.48,6.48,6.48,6.48-2.9,6.48-6.48S10.06,0,6.48,0ZM8.1,9.13c-.72.84-1.44,1.32-1.47,1.34-.05.03-.11.04-.16.04s-.11-.01-.15-.04c-.03-.02-.75-.5-1.48-1.34-.97-1.12-1.49-2.36-1.49-3.58,0-1.72,1.4-3.12,3.11-3.12s3.11,1.4,3.11,3.12c0,1.22-.51,2.46-1.49,3.58Z"
              />
            </svg>
            <p className="text-xl font-bold">{t.contactUs.location}</p>
          </div>
          <p className="w-full text-xl font-bold">
            <Link href={"mailto:Resources@villadifoodindustries.com"}>
              Resources@villadifoodindustries.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
