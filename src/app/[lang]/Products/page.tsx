import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import {
  getAllProductsWithoutLang,
  getProdsWithFlavs,
} from "@/app/data-access-layer/productDAL";
import DeleteForm from "@/app/ui/DeleteForm";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
import ProdCodeItems from "@/app/ui/CatsProps";
import ProdItems from "@/app/ui/Prods";
export default async function Product({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  if (result.success === false) {
    return redirect("/signIn");
  } else if (result.user?.role !== "Admin") {
    redirect("/unAuthorized");
  }
  const product = await getProdsWithFlavs(lang);
  console.log(product, "d,mn,mmn,");
  if (product.status === 500) {
    return (
      <ErrorPage
        error={new Error("internal server error")}
        reset={() => {}}
      ></ErrorPage>
    );
  }

  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#e6b56c] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffd597] ">
      <div className="flex flex-col w-full gap-12 px-2 py-12 sm:py-40 max-w-7xl z-[0]">
        <ProdItems catsProds={product.products} lang={lang} />
      </div>
    </main>
  );
}
