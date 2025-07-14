import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getAllCategory } from "@/app/data-access-layer/catigoryDAL";
import { getAllFlavor } from "@/app/data-access-layer/flavorDAL";
import { getSession } from "@/app/lib/session";
import ProductForm from "@/app/ui/ControlForms/Product/ProductForm";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import { redirect } from "next/navigation";

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
  const catsEn = await getAllCategory("en");
  const catsAr = await getAllCategory("ar");
  const flavorEn = await getAllFlavor("en");
  const flavorAr = await getAllFlavor("ar");

  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : catsEn.status === 500 ? (
        <ErrorPage
          error={new Error(lang === "en" ? catsEn.messageEn : catsEn.messageAr)}
        />
      ) : catsAr.status === 500 ? (
        <ErrorPage
          error={new Error(lang === "en" ? catsAr.messageEn : catsAr.messageAr)}
        />
      ) : flavorEn.status === 500 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? flavorEn.messageEn : flavorEn.messageAr)
          }
        />
      ) : flavorAr.status === 500 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? flavorAr.messageEn : flavorAr.messageAr)
          }
        />
      ) : (
        <>
          <h1
            className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
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
            lang={lang as "en" | "ar"}
            user={session.user}
          />
        </>
      )}
    </>
  );
}
