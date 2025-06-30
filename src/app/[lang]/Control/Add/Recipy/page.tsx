import { getDictionary } from "@/app/[lang]/dictionaries";
import { getAllFlavor } from "@/app/data-access-layer/flavorDAL";
import { getSession } from "@/app/lib/session";
import RecipyForm from "@/app/ui/RecipyForm";

export default async function Recipy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const flavorEn = await getAllFlavor("en");
  const flavorAr = await getAllFlavor("ar");
  if (flavorEn.status === 500 || flavorAr.status === 500) {
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
        {t.addRecipyForm.title}
      </h1>
      <RecipyForm
        t={t}
        flavorEn={flavorEn.flavors}
        flavorAr={flavorAr.flavors}
        lang={lang}
        user={result.success && result.user ? result.user : null}
      />
    </>
  );
}
