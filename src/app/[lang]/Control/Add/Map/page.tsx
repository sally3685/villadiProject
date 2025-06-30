import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import MapForm from "@/app/ui/MapForm";

export default async function Map({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  return (
    <>
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addMapForm.title}
      </h1>
      <MapForm
        t={t}
        lang={lang}
        user={result.success && result.user ? result.user : null}
      />
    </>
  );
}
