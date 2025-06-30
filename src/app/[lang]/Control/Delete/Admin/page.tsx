import { getDictionary } from "@/app/[lang]/dictionaries";
import { getAllUsers } from "@/app/data-access-layer/user";
import { getSession } from "@/app/lib/session";
import DeleteForm from "@/app/ui/DeleteForm";
export default async function Admin({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const users = await getAllUsers("Admin");
  if (!users.success) {
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
        {t.addVideoForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="admin"
        user={result.success && result.user ? result.user : undefined}
        options={users.users}
        label={t.addVideoForm.deleteLabel}
        deleteAllLabel={t.addVideoForm.deleteAll}
        warning={t.addVideoForm.deleteWarning}
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
