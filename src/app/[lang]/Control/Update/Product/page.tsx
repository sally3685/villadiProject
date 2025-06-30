import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import ProductUpdateForm from "@/app/ui/ProductUpdateForm";
import { getAllProductsWithoutLang } from "@/app/data-access-layer/productDAL";
import { getAllCategoriesWithoutLang } from "@/app/data-access-layer/catigoryDAL";
import { getAllFlavorsWithoutLang } from "@/app/data-access-layer/flavorDAL";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
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
  const product = await getAllProductsWithoutLang();
  const category = await getAllCategoriesWithoutLang();
  const flavors = await getAllFlavorsWithoutLang();
  if (
    flavors.status === 500 ||
    category.status === 500 ||
    product.status === 500
  ) {
    return (
      <ErrorPage
        error={new Error("internal server error")}
        reset={() => {}}
      ></ErrorPage>
    );
  }
  return (
    <>
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addProductForm.update}
      </h1>
      <ProductUpdateForm
        t={t}
        lang={lang}
        product={product.products}
        categories={category.categories}
        flavors={flavors.flavors}
      />
    </>
  );
}
