import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllFlavorsWithoutLang } from "@/app/data-access-layer/flavorDAL";
import FlavorUpdateForm from "@/app/ui/ControlForms/Flavor/FlavorUpdateForm";
import ErrorPage from "@/app/[lang]/error";
import { redirect } from "next/navigation";
import { controlDictionary } from "@/app/ui/ControlForms/types";
export default async function Flavor({
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
  const resultOfFlavor = await getAllFlavorsWithoutLang();
  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : resultOfFlavor.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfFlavor.messageEn
                : resultOfFlavor.messageAr,
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
            {t.updateFlavorForm.title}
          </h1>
          <FlavorUpdateForm
            t={t}
            flavor={resultOfFlavor.flavors}
            lang={lang as "en" | "ar"}
          />
        </>
      )}
    </>
  );
}
