import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllMapWithoutLang } from "@/app/data-access-layer/mapDAL";
import MapUpdateForm from "@/app/ui/MapUpdateForm";
export default async function Video({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const map = await getAllMapWithoutLang();
  return (
    <>
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addMapForm.update}
      </h1>
      <MapUpdateForm
        t={t}
        lang={lang}
        user={result.success && result.user ? result.user : null}
        map={map.status === 200 && map.maps ? map.maps : undefined}
      />
    </>
  );
}
