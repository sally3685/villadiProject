import {
  getProdsByCode,
  getAllProdCats,
} from "@/app/data-access-layer/productDAL";
import ErrorPage from "@/app/[lang]/error";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Carousal3D from "@/app/ui/Carousal3D";
import ProdCodeItems from "@/app/ui/CatsProps";
import ProdDetails from "@/app/ui/ProdDetails";
import CarousalProducts from "@/app/ui/CarousalProducts";
export default async function ProdCodeDetails({
  params,
}: {
  params: Promise<{ productId: string; lang: string }>;
}) {
  const { productId, lang } = await params;
  const t = await getDictionary(lang);
  const prods = await getProdsByCode(productId, lang);

  const allProds = await getAllProdCats(productId, lang);

  if (prods.status === 500 || allProds.status === 500) {
    return (
      <ErrorPage
        error={new Error("internal server error ")}
        reset={() => {}}
      ></ErrorPage>
    );
  }
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#e6b56c] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffd597] ">
      {!allProds || !allProds.products ? (
        <>
          <h1 className="text-2xl md:text-5xl text-black z-[0]">
            {lang === "en" ? "No products found" : "لا يوجد منتجات لعرضها"}
          </h1>
          <div className="w-[300px] h-[200px] md:w-[400px] z-[0] md:h-[300px] justify-center items-center bg-[url(/villadiLogo.svg)] bg-center bg-contain bg-no-repeat"></div>
        </>
      ) : !prods || !prods.product ? (
        <>
          <h1 className="text-2xl md:text-5xl text-black z-[0]">
            {lang === "en" ? "Product was not found" : "لم يتم إيجاد المنتج"}
          </h1>
          <div className="w-[300px] h-[200px] md:w-[400px] z-[0] md:h-[300px] justify-center items-center bg-[url(/villadiLogo.svg)] bg-center bg-contain bg-no-repeat"></div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-full items-center justify-center gap-12 px-2 py-[100px] sm:py-40 max-w-7xl z-[0]">
            <ProdDetails t={t} product={prods} lang={lang} />
            <CarousalProducts
              items={allProds.products}
              title={lang === "en" ? "More Products" : "المزيد من المنتجات"}
              noCats={lang === "en" ? "No Products yet" : "لا يوجد منتجات بعد"}
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
