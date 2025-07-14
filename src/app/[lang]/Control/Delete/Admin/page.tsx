import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getAllUsers } from "@/app/data-access-layer/user";
import { getSession } from "@/app/lib/session";
import DeleteForm from "@/app/ui/ControlForms/Delete/DeleteForm";
import { deleteType } from "@/app/ui/ControlForms/types";
export default async function Admin({
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
  const users = await getAllUsers("Admin");
  if (users.status === 500) {
    <ErrorPage
      error={new Error(lang === "en" ? users.messageEn : users.messageAr)}
    />;
  }
  return (
    <>
      <h1
        className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addVideoForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="admin"
        user={session.user}
        options={users.users}
        label={t.addVideoForm.deleteLabel}
        deleteAllLabel={t.addVideoForm.deleteAll}
        warning={t.addVideoForm.deleteWarning}
      />
    </>
  );
}
