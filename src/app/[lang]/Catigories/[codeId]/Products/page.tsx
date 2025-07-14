import {
  getAllCodeCategory,
  getAllCategory,
} from "@/app/data-access-layer/catigoryDAL";
import ErrorPage from "@/app/[lang]/error";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Carousel from "@/app/ui/Carousel/Carousel";
import { EmptyState } from "@/app/ui/EmptyState";
import { CatsProdsDictionary } from "../../types";
import { ProductsGrid } from "@/app/ui/ProductGrid/ProductGrid";
import { carouselDictionary } from "@/app/ui/Carousel/carouselTypes";
export default async function ProdCode({
  params,
}: {
  params: Promise<{ codeId: string; lang: string }>;
}) {
  const { codeId, lang } = await params;
  const t = (await getDictionary(lang)) as CatsProdsDictionary;
  const t2 = await getDictionary(lang);
  const catsProds = await getAllCodeCategory(lang, codeId);
  const cats = await getAllCategory(lang);
  if (cats.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? cats.messageEn : cats.messageAr)}
      ></ErrorPage>
    );
  } else if (catsProds.status === 500) {
    return (
      <ErrorPage
        error={
          new Error(lang === "en" ? catsProds.messageEn : catsProds.messageAr)
        }
      ></ErrorPage>
    );
  }
  const products = catsProds.categories?.products || [];
  const categoryName = catsProds.categories?.name || "";

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#ffd597] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[#e6b56c4d] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      {cats.categories.length === 0 ? (
        <>
          <EmptyState noItems={t.catigoriesWrapper.noCats} lang={lang} />
        </>
      ) : (
        <>
          <div className="z-[0] flex w-full max-w-7xl flex-col items-center justify-center gap-[100px] overflow-x-hidden px-2 py-[100px] sm:gap-[calc(var(--spacing)_*_40)] sm:py-40">
            <ProductsGrid
              products={products}
              lang={lang}
              title={`${categoryName} ${lang === "en" ? "→" : "←"} ${t.ProdsWrapper.title}`}
              searchPlaceholder={t.ProdsWrapper.search}
              linkText={t.ProdsWrapper.details}
              emptyText={t.ProdsWrapper.noProds}
            />
            <Carousel
              items={cats.categories}
              title={t.catigoriesWrapper.more}
              all={t.catigoriesWrapper.view}
              noItems={t.catigoriesWrapper.noCats}
              lang={lang}
              t={t2 as carouselDictionary}
              type="categories"
              linkPrefix={`/${lang}/Catigories`}
              linkText={t.catigoriesWrapper.link}
            />
          </div>
        </>
      )}
    </main>
  );
}
