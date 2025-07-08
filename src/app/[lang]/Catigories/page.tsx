import React from "react";
import {
  getAllCategoriesWithoutLang,
  getAllCategory,
} from "@/app/data-access-layer/catigoryDAL";
import ErrorPage from "../error";
import LeftRightMenu from "@/app/ui/LeftRightMenu";
import { getDictionary } from "../dictionaries";
import Items from "@/app/ui/Items";
export default async function Catigory({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const { status, message, categories } = await getAllCategory(lang);
  if (status === 500) {
    return <ErrorPage error={new Error(message)}></ErrorPage>;
  }
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[linear-gradient(to_left_bottom,#fc5e5e,#fdff00)] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-white ">
      {/* bg-[#ffd597] */}
      <Items img={"/mayo.png"} img2={"/mayo1.png"} lang={lang}></Items>
      <LeftRightMenu
        items={categories}
        t={t}
        title={t.catigoriesWrapper.Cats}
        lang={lang}
      />
    </main>
  );
}
