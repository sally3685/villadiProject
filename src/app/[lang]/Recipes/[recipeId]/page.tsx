import {
  getAllRecipies,
  getAllRecipyById,
} from "@/app/data-access-layer/recipyDAL";
import ErrorPage from "@/app/[lang]/error";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Carousal3D from "@/app/ui/Carousal3D";
import ProdCodeItems from "@/app/ui/CatsProps";
import RecipeDetails from "@/app/ui/RecipiesDetailes";
import Carousal3DRec from "@/app/ui/Carousal3DRec";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
export default async function Recipes({
  params,
}: {
  params: Promise<{ recipeId: string; lang: string }>;
}) {
  const { recipeId, lang } = await params;
  const t = await getDictionary(lang);
  const recipe = await getAllRecipyById(recipeId, lang);
  const recipes = await getAllRecipies(lang);
  const result = await getSession();

  if (recipe.status === 500 || recipes.status === 500) {
    return <ErrorPage error={new Error("internal server error ")}></ErrorPage>;
  }
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#e6b56c4d] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffd597] ">
      {recipes.recipies.length === 0 ? (
        <>
          <h1 className=" text-2xl sm:text-4xl xl:text-5xl text-black z-[0]">
            {lang === "en" ? "No recipies found" : "لا يوجد وصفات لعرضها"}
          </h1>
          <div
            className={`w-[300px] h-[200px] md:w-[400px] z-[0] md:h-[300px] justify-center items-center bg-[url(${`/${lang === "en" ? "villadiLogo.svg" : "villadiLogoAr.svg"}`}] bg-center bg-contain bg-no-repeat`}
          ></div>
        </>
      ) : !recipe ? (
        <>
          <h1 className=" text-2xl sm:text-4xl xl:text-5xl text-black z-[0]">
            {lang === "en" ? "Recipe not found" : " لم يتم ايجاد الوصفة"}
          </h1>
          <div
            className={`w-[300px] h-[200px] md:w-[400px] z-[0] md:h-[300px] justify-center items-center bg-[url(${`/${lang === "en" ? "villadiLogo.svg" : "villadiLogoAr.svg"}`}] bg-center bg-contain bg-no-repeat`}
          ></div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-full items-center justify-center gap-[100px] sm:gap-[calc(var(--spacing)_*_40)] px-2 py-[100px] sm:py-40 max-w-7xl z-[0] overflow-x-hidden">
            <RecipeDetails recipe={recipe.recipie} lang={lang} />
            <Carousal3DRec
              user={result}
              items={recipes.recipies}
              title={
                lang === "en" ? "Trending recipies" : "أكثر الوصفات إعجابا"
              }
              noCats={t.recipesWrapper.noRecs}
              all={t.recipesWrapper.view}
              lang={lang}
              color="#6b3f01"
            />
          </div>
        </>
      )}
    </main>
  );
}
