import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllVideossWithoutLang } from "@/app/data-access-layer/videoDAL";
import DeleteForm from "@/app/ui/DeleteForm";
export default async function Video({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const video = await getAllVideossWithoutLang();
  if (video.status !== 200) {
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
        type="video"
        user={result.success && result.user ? result.user : undefined}
        options={video.videos}
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
