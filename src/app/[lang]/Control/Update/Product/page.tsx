import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import ProductUpdateForm from "@/app/ui/ControlForms/Product/ProductUpdateForm";
import { getAllProductsWithoutLang } from "@/app/data-access-layer/productDAL";
import { getAllCategoriesWithoutLang } from "@/app/data-access-layer/catigoryDAL";
import { getAllFlavorsWithoutLang } from "@/app/data-access-layer/flavorDAL";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
import { controlDictionary } from "@/app/ui/ControlForms/types";
export default async function Product({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as controlDictionary;
  const session = await getSession();
  if (session.status === 404) {
    return redirect(`${lang}/signIn`);
  } else if (session.user?.role !== "Admin") {
    redirect(`/${lang}/unAuthorized`);
  }
  const resultOfProduct = await getAllProductsWithoutLang();
  const resultOfCategory = await getAllCategoriesWithoutLang();
  const resultOfFlavors = await getAllFlavorsWithoutLang();

  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : resultOfProduct.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfProduct.messageEn
                : resultOfProduct.messageAr,
            )
          }
        />
      ) : resultOfCategory.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfCategory.messageEn
                : resultOfCategory.messageAr,
            )
          }
        />
      ) : resultOfFlavors.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfFlavors.messageEn
                : resultOfFlavors.messageAr,
            )
          }
        />
      ) : (
        <>
          <h1
            className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
              lang === "en" ? "pl-12" : "pr-12"
            }`}
          >
            {t.updateProductForm.title}
          </h1>
          <ProductUpdateForm
            t={t}
            lang={lang as "en" | "ar"}
            product={resultOfProduct.products}
            categories={resultOfCategory.categories}
            flavors={resultOfFlavors.flavors}
          />
        </>
      )}
    </>
  );
}
