import React from "react";
import { getAllCategory } from "@/app/data-access-layer/catigoryDAL";
import ErrorPage from "../error";
import LeftRightMenu from "@/app/ui/LeftRight/LeftRightMenu";
import { getDictionary } from "../dictionaries";
import Items from "@/app/ui/Items";
import { mainPageDictionary } from "./types";
export default async function Catigory({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as mainPageDictionary;
  const cats = await getAllCategory(lang);
  if (cats.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? cats.messageEn : cats.messageAr)}
      ></ErrorPage>
    );
  }
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[linear-gradient(to_left_bottom,#fc5e5e,#fdff00)] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <Items img={"/mayo.png"} img2={"/mayo1.png"} lang={lang}></Items>
      <LeftRightMenu
        items={cats.categories}
        title={t.catigoriesWrapper.Cats as string}
        lang={lang}
        emptyStateText={t.catigoriesWrapper.noCats as string}
        searchPlaceholder={t.catigoriesWrapper.search}
        type="categories"
        linkText={t.ProdsWrapper.all}
      />
    </main>
  );
}
