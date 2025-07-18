import React from "react";
import ErrorPage from "../error";
import { getDictionary } from "../dictionaries";
import Items from "@/app/ui/Items";
import { getAllRecipies } from "@/app/data-access-layer/recipyDAL";
import LeftRightMenu from "@/app/ui/LeftRight/LeftRightMenu";
import { Metadata } from "next";
export const metadata: Metadata = {
  description:
    "Discover delicious recipes using Viladi snacks! From appetizers to main courses, transform our chips and snacks into creative dishes loved across Arab households.",
  keywords:
    "Viladi recipes, snack recipes, Arab snack dishes, recipes with chips, Viladi cooking ideas, easy snack meals, Syrian snack recipes, creative snack creations",
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
