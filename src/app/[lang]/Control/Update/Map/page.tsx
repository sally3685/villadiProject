import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllMapWithoutLang } from "@/app/data-access-layer/mapDAL";
import MapUpdateForm from "@/app/ui/ControlForms/Map/MapUpdateForm";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
export default async function Video({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as controlDictionary;
  const session = await getSession();
  if (session.status === 404) {
    return redirect(`${lang}/signIn`);
  } else if (session.user?.role !== "Admin") {
    redirect(`/${lang}/unAuthorized`);
  }
  const resultOfMaps = await getAllMapWithoutLang();
  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : resultOfMaps.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en" ? resultOfMaps.messageEn : resultOfMaps.messageAr,
            )
          }
        />
      ) : (
        <>
          <h1
            className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
              lang === "en" ? "pl-12" : "pr-12"
            }`}
          >
            {t.updateMapForm.title}
          </h1>
          <MapUpdateForm
            t={t}
            map={resultOfMaps.maps}
            lang={lang as "en" | "ar"}
          />
        </>
      )}
    </>
  );
}
