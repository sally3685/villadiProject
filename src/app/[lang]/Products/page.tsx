import { getDictionary } from "@/app/[lang]/dictionaries";
import { getProdsWithFlavs } from "@/app/data-access-layer/productDAL";
import ErrorPage from "@/app/[lang]/error";
import { ProductsGrid } from "@/app/ui/ProductGrid/ProductGrid";
export default async function Product({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const product = await getProdsWithFlavs(lang);
  if (product.status === 500) {
    <ErrorPage
      error={new Error(lang === "en" ? product.messageEn : product.messageAr)}
    />;
  }
  const products = product.products || [];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#ffd597] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[#e6b56c4d] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <div className="z-[0] flex w-full max-w-7xl flex-col gap-12 px-2 py-12 sm:py-40">
        <ProductsGrid
          products={products}
          lang={lang}
          title={t.ProdsWrapper.title}
          searchPlaceholder={t.ProdsWrapper.search}
          linkText={t.ProdsWrapper.details}
          emptyText={t.catigoriesWrapper.noCats}
        />
      </div>
    </main>
  );
}
