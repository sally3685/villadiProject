import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllMapWithoutLang } from "@/app/data-access-layer/mapDAL";
import DeleteForm from "@/app/ui/ControlForms/Delete/DeleteForm";
import ErrorPage from "@/app/[lang]/error";
import { deleteType } from "@/app/ui/ControlForms/types";
export default async function Map({
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
  const map = await getAllMapWithoutLang();
  if (map.status === 500) {
    <ErrorPage
      error={new Error(lang === "en" ? map.messageEn : map.messageAr)}
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
        {t.addMapForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="map"
        user={session.user}
        options={map.maps}
        label={t.addMapForm.deleteLabel}
        deleteAllLabel={t.addMapForm.deleteAll}
        warning={t.addMapForm.deleteWarning}
      />
    </>
  );
}
