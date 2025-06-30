import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getAllCategory } from "@/app/data-access-layer/catigoryDAL";
import { getAllFlavor } from "@/app/data-access-layer/flavorDAL";
import { getSession } from "@/app/lib/session";
import ProductForm from "@/app/ui/ProductForm";
import { redirect } from "next/navigation";

export default async function Product({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const catsEn = await getAllCategory("en");
  const catsAr = await getAllCategory("ar");
  const flavorEn = await getAllFlavor("en");
  const flavorAr = await getAllFlavor("ar");
  const result = await getSession();
  if (result.success === false) {
    return redirect("/signIn");
  } else if (result.user?.role !== "Admin") {
    redirect("/unAuthorized");
  }
  if (
    catsEn.status === 500 ||
    catsAr.status === 500 ||
    flavorEn.status === 500 ||
    flavorAr.status === 500
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
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addProductForm.title}
      </h1>
      <ProductForm
        t={t}
        flavorEn={flavorEn.flavors}
        flavorAr={flavorAr.flavors}
        catsEn={catsEn.categories}
        catsAr={catsAr.categories}
        lang={lang}
        user={result.user}
      />
    </>
  );
}
