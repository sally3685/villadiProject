import React from "react";
import ErrorPage from "../error";
import { getDictionary } from "../dictionaries";
import Items from "@/app/ui/Items";
import LeftRightMenuRec from "@/app/ui/LeftRightRecipe";
import { getAllRecipies } from "@/app/data-access-layer/recipyDAL";
import { Metadata } from "next";

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
  const { status, message, recipies } = await getAllRecipies(lang);
  if (status === 500) {
    return <ErrorPage error={new Error(message)}></ErrorPage>;
  }
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#e6b56c] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-white ">
      {/* [#ffd597]  */}
      <Items img={"/cheese.png"} img2={"/vanillia.png"} lang={lang}></Items>
      <LeftRightMenuRec
        items={recipies}
        t={t}
        title={lang === "en" ? "All Recipies" : "كل الوصفات"}
        lang={lang}
      />
    </main>
  );
}
