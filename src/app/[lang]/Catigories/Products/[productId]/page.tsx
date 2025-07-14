import {
  getProdsByCode,
  getAllProdCats,
} from "@/app/data-access-layer/productDAL";
import ErrorPage from "@/app/[lang]/error";
import { getDictionary } from "@/app/[lang]/dictionaries";
import ProdDetails from "@/app/ui/ProdDetails";
import Carousel from "@/app/ui/Carousel/Carousel";
import { EmptyState } from "@/app/ui/EmptyState";
import { ProdDetailsDictionary } from "../../types";
import { carouselDictionary } from "@/app/ui/Carousel/carouselTypes";
export default async function ProdCodeDetails({
  params,
}: {
  params: Promise<{ productId: string; lang: "ar" | "en" }>;
}) {
  const { productId, lang } = await params;
  const t = await getDictionary(lang);
  const prods = await getProdsByCode(productId, lang);

  if (prods.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? prods.messageEn : prods.messageAr)}
      ></ErrorPage>
    );
  }

  const allProds = await getAllProdCats(productId, lang);
  if (allProds.status === 500) {
    return (
      <ErrorPage
        error={
          new Error(lang === "en" ? allProds.messageEn : allProds.messageAr)
        }
      ></ErrorPage>
    );
  }
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#ffd597] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[#e6b56c4d] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      {!allProds || !allProds.products ? (
        <EmptyState
          noItems={(t as ProdDetailsDictionary).ProdsWrapper.noProds}
          lang={lang}
        />
      ) : !prods || !prods.product ? (
        <>
          <EmptyState
            noItems={(t as ProdDetailsDictionary).ProdsWrapper.notFound}
            lang={lang}
          />
        </>
      ) : (
        <>
          <div className="z-[0] flex w-full max-w-7xl flex-col items-center justify-center gap-[100px] overflow-x-hidden px-2 py-[100px] sm:gap-[calc(var(--spacing)_*_40)] sm:py-40">
            <ProdDetails
              t={t as ProdDetailsDictionary}
              product={prods.product}
              lang={lang}
            />
            <Carousel
              items={allProds.products}
              title={(t as ProdDetailsDictionary).ProdsWrapper.moreProds}
              all={(t as ProdDetailsDictionary).ProdsWrapper.view}
              noItems={(t as ProdDetailsDictionary).ProdsWrapper.noProds}
              lang={lang}
              t={t as carouselDictionary}
              type="products"
              // color="#1c1100"
              linkPrefix={`/${lang}/Catigories/${prods.product.category.code}/Products`}
              linkText={(t as ProdDetailsDictionary).ProdsWrapper.link}
            />
          </div>
        </>
      )}
    </main>
  );
}
