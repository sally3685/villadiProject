import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllRecipiesWithoutLang } from "@/app/data-access-layer/recipyDAL";
import { getAllFlavorsWithoutLang } from "@/app/data-access-layer/flavorDAL";
import RecipeUpdateForm from "@/app/ui/ControlForms/Recipe/RecipeUpdateForm";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
export default async function Recipe({
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
  const resultOfRecipes = await getAllRecipiesWithoutLang();
  const resultOfFlavors = await getAllFlavorsWithoutLang();
  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : resultOfRecipes.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfRecipes.messageEn
                : resultOfRecipes.messageAr,
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
            {t.updateRecipyForm.title}
          </h1>
          <RecipeUpdateForm
            t={t}
            lang={lang as "en" | "ar"}
            recipe={resultOfRecipes.recipies}
            flavors={resultOfFlavors.flavors}
          />
        </>
      )}
    </>
  );
}
