import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getAllUsers } from "@/app/data-access-layer/user";
import { getSession } from "@/app/lib/session";
import AdminForm from "@/app/ui/ControlForms/Admin/AdminForm";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import { redirect } from "next/navigation";

export default async function AddAdmin({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as controlDictionary;
  const users = await getAllUsers("User");
  const session = await getSession();
  if (session.status === 404) {
    return redirect(`${lang}/signIn`);
  } else if (session.user?.role !== "Admin") {
    redirect(`/${lang}/unAuthorized`);
  }
  return (
    <>
      {users.status !== 200 ? (
        <ErrorPage
          error={new Error(lang === "en" ? users.messageEn : users.messageAr)}
        />
      ) : session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : (
        <>
          <h1
            className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
              lang === "en" ? "pl-12" : "pr-12"
            }`}
          >
            {t.addAdminForm.title}
          </h1>
          <AdminForm
            t={t}
            users={users.users}
            lang={lang as "en" | "ar"}
            user={session.user}
          />
        </>
      )}
    </>
  );
}
