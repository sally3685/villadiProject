import { getDictionary } from "@/app/[lang]/dictionaries";

import CategoryUpdateForm from "@/app/ui/ControlForms/Category/CategoryUpdateForm";
import { getAllCategoriesWithoutLang } from "@/app/data-access-layer/catigoryDAL";
import ErrorPage from "@/app/[lang]/error";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
export default async function Catigory({
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
  const resultOfcategories = await getAllCategoriesWithoutLang();
  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : resultOfcategories.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfcategories.messageEn
                : resultOfcategories.messageAr,
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
            {t.updateCategoryForm.title}
          </h1>
          <CategoryUpdateForm
            t={t}
            lang={lang as "en" | "ar"}
            category={resultOfcategories.categories}
          />
        </>
      )}
    </>
  );
}
