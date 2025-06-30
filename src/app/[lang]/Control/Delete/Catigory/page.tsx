import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllCategoriesWithoutLang } from "@/app/data-access-layer/catigoryDAL";
import DeleteForm from "@/app/ui/DeleteForm";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
export default async function Catigory({
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
  const category = await getAllCategoriesWithoutLang();
  if (category.status === 500) {
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
        {t.addCategoryForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="category"
        user={result.success && result.user ? result.user : undefined}
        options={category.categories}
        label={t.addCategoryForm.deleteLabel}
        deleteAllLabel={t.addCategoryForm.deleteAll}
        warning={t.addCategoryForm.deleteWarning}
        noPermissionText={{
          en: "You don't have permission to delete",
          ar: "ليس لديك إذن للحذف",
        }}
        noSelectionText={{
          en: "Please select an item to delete",
          ar: "الرجاء تحديد عنصر للحذف",
        }}
      />
    </>
  );
}
