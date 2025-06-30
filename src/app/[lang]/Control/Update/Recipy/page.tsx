import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllRecipiesWithoutLang } from "@/app/data-access-layer/recipyDAL";
import { getAllFlavorsWithoutLang } from "@/app/data-access-layer/flavorDAL";
import RecipeUpdateForm from "@/app/ui/RecipeUpdateForm";
export default async function Recipe({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const recipe = await getAllRecipiesWithoutLang();
  const flavors = await getAllFlavorsWithoutLang();
  return (
    <>
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addCategoryForm.update}
      </h1>
      <RecipeUpdateForm
        t={t}
        lang={lang}
        user={result.success && result.user ? result.user : null}
        recipe={
          recipe.status === 200 && recipe.recipies ? recipe.recipies : undefined
        }
        flavors={
          flavors.status === 200 && flavors.flavors
            ? flavors.flavors
            : undefined
        }
      />
    </>
  );
}
