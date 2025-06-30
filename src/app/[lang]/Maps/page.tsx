import { getAllMaps } from "@/app/data-access-layer/mapDAL";
import React from "react";
import { getDictionary } from "../dictionaries";
import Maps from "@/app/ui/Map";
import ErrorPage from "../error";

export default async function Map({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const maps = await getAllMaps(lang);
  if (maps.status === 500) {
    return <ErrorPage error={new Error("k")} reset={() => {}}></ErrorPage>;
  }
  return (
    <main
      className=" min-h-dvh w-full rounded-t-2xl flex justify-center items-center flex-col max-w-8xl  before:absolute before:content-[''] before:w-full before:h-full before:bg-[#5e9ed5] before:top-0 before:block before:mask-[url(/pattern.svg)] before:mask-cover bg-white relative
    "
    >
      <Maps maps={maps.maps} lang={lang} />
    </main>
  );
}
