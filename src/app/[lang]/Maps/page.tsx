import { getAllMaps } from "@/app/data-access-layer/mapDAL";
import React from "react";
import { getDictionary } from "../dictionaries";
import Maps from "@/app/ui/Map";
import ErrorPage from "../error";
import { MapDictionary } from "./types";

export default async function Map({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as MapDictionary;
  const maps = await getAllMaps(lang);
  if (maps.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? maps.messageEn : maps.messageAr)}
      ></ErrorPage>
    );
  }
  return (
    <main className="max-w-8xl relative flex min-h-dvh w-full flex-col items-center justify-center rounded-t-2xl bg-white before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[#5e9ed5]/40 before:mask-[url(/pattern.svg)] before:mask-[150%,150%] before:mask-center before:content-['']">
      <Maps maps={maps.maps} lang={lang} t={t} />
    </main>
  );
}
