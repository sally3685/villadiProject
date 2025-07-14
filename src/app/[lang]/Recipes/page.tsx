import React from "react";
import ErrorPage from "../error";
import { getDictionary } from "../dictionaries";
import Items from "@/app/ui/Items";
import { getAllRecipies } from "@/app/data-access-layer/recipyDAL";
import { Metadata } from "next";
import LeftRightMenu from "@/app/ui/LeftRight/LeftRightMenu";
export const metadata: Metadata = {
  description: "Recipies to make the best puffs",
};
export default async function Catigory({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const recipes = await getAllRecipies(lang);
  if (recipes.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? recipes.messageEn : recipes.messageAr)}
      />
    );
  }
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[#e6b56c] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <Items img={"/cheese.png"} img2={"/vanillia.png"} lang={lang}></Items>
      <LeftRightMenu
        items={recipes.recipies}
        title={t.recipesWrapper.title}
        lang={lang}
        emptyStateText={t.recipesWrapper.noRecs}
        searchPlaceholder={t.recipesWrapper.search}
        type="recipes"
        linkText={t.recipesWrapper.link}
      />
    </main>
  );
}
