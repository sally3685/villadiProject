import {
  getAllCodeCategory,
  getAllCategory,
} from "@/app/data-access-layer/catigoryDAL";
import ErrorPage from "@/app/[lang]/error";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";
import Carousal3D from "@/app/ui/Carousal3D";
import ProdCodeItems from "@/app/ui/CatsProps";
export default async function ProdCode({
  params,
}: {
  params: Promise<{ codeId: string; lang: string }>;
}) {
  const { codeId, lang } = await params;
  const t = await getDictionary(lang);
  const catsProds = await getAllCodeCategory(lang, codeId);
  const cats = await getAllCategory(lang);
  if (cats.status === 500 || catsProds.status === 500) {
    return <ErrorPage error={new Error("internal server error ")}></ErrorPage>;
  }
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#e6b56c4d] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffd597] ">
      {cats.categories.length === 0 ? (
        <>
          <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-black z-[0]">
            {lang === "en" ? "No categories found" : "لا يوجد أصناف لعرضها"}
          </h1>

          <div
            className={`w-[300px] h-[200px] md:w-[400px] z-[0] md:h-[300px] justify-center items-center bg-[url(${`/${lang === "en" ? "villadiLogo.svg" : "villadiLogoAr.svg"}`})] bg-center bg-contain bg-no-repeat`}
          ></div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-full items-center justify-center gap-[100px] sm:gap-[calc(var(--spacing)_*_40)] px-2 py-[100px] sm:py-40 max-w-7xl z-[0] overflow-x-hidden">
            <ProdCodeItems catsProds={catsProds} lang={lang} />
            <Carousal3D
              items={cats.categories}
              title={lang === "en" ? "More categories" : "المزيد من الأصناف"}
              noCats={t.catigoriesWrapper.noCats}
              all={t.catigoriesWrapper.view}
              lang={lang}
              color="#1c1100"
            />
          </div>
        </>
      )}
    </main>
  );
}
