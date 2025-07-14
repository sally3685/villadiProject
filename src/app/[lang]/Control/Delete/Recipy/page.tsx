import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllRecipiesWithoutLang } from "@/app/data-access-layer/recipyDAL";
import DeleteForm from "@/app/ui/ControlForms/Delete/DeleteForm";
import ErrorPage from "@/app/[lang]/error";
import { deleteType } from "@/app/ui/ControlForms/types";
export default async function Recipy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as deleteType;
  const session = await getSession();
  if (session.status === 500) {
    <ErrorPage
      error={new Error(lang === "en" ? session.messageEn : session.messageAr)}
    />;
  }
  const recipe = await getAllRecipiesWithoutLang();
  if (recipe.status === 500) {
    <ErrorPage
      error={new Error(lang === "en" ? recipe.messageEn : recipe.messageAr)}
    />;
  }
  return (
    <>
      {" "}
      <h1
        className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addRecipyForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="recipe"
        user={session.user}
        options={recipe.recipies}
        label={t.addRecipyForm.deleteLabel}
        deleteAllLabel={t.addRecipyForm.deleteAll}
        warning={t.addRecipyForm.deleteWarning}
      />
    </>
  );
}
