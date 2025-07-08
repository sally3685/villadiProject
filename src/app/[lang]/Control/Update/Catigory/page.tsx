import { getDictionary } from "@/app/[lang]/dictionaries";

import CategoryUpdateForm from "@/app/ui/CategoryUpdateForm";
import { getAllCategoriesWithoutLang } from "@/app/data-access-layer/catigoryDAL";
import ErrorPage from "@/app/[lang]/error";
export default async function Catigory({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const category = await getAllCategoriesWithoutLang();
  if (category.status === 500) {
    return <ErrorPage error={new Error("internal server error")}></ErrorPage>;
  }
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
      <CategoryUpdateForm t={t} lang={lang} category={category.categories} />
    </>
  );
}
