import { getDictionary } from "@/app/[lang]/dictionaries";
import { getAllUsers } from "@/app/data-access-layer/user";
import { getSession } from "@/app/lib/session";
import AdminForm from "@/app/ui/AdminForm";

export default async function Recipy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const users = await getAllUsers("User");
  if (!users.success) {
    throw new Error("fsfsfs");
  }
  const result = await getSession();
  return (
    <>
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addProductForm.title}
      </h1>
      <AdminForm
        t={t}
        users={users.users}
        lang={lang}
        user={result.success && result.user ? result.user : null}
      />
    </>
  );
}
