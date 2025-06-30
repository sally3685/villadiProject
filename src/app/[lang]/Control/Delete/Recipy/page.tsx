import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllRecipiesWithoutLang } from "@/app/data-access-layer/recipyDAL";
import DeleteForm from "@/app/ui/DeleteForm";
export default async function Recipy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const recipe = await getAllRecipiesWithoutLang();
  if (recipe.status !== 200) {
    //   <ErrorPage
    //     error={new Error(state.general)}
    //     reset={() => {
    //       router.refresh();
    //     }}
    //   ></ErrorPage>
    // );
  }

  return (
    <>
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addRecipyForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="recipe"
        user={result.success && result.user ? result.user : undefined}
        options={recipe.recipies}
        label={t.addRecipyForm.deleteLabel}
        deleteAllLabel={t.addRecipyForm.deleteAll}
        warning={t.addRecipyForm.deleteWarning}
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
