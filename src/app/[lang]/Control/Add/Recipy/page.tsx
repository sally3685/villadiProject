import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getAllFlavor } from "@/app/data-access-layer/flavorDAL";
import { getSession } from "@/app/lib/session";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import RecipyForm from "@/app/ui/ControlForms/Recipe/RecipyForm";
import { redirect } from "next/navigation";

export default async function Recipy({
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
  const flavorEn = await getAllFlavor("en");
  const flavorAr = await getAllFlavor("ar");

  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : flavorEn.status === 500 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? flavorEn.messageEn : flavorEn.messageAr)
          }
        />
      ) : flavorAr.status === 500 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? flavorAr.messageEn : flavorAr.messageAr)
          }
        />
      ) : (
        <>
          <h1
            className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
              lang === "en" ? "pl-12" : "pr-12"
            }`}
          >
            {t.addRecipyForm.title}
          </h1>
          <RecipyForm
            t={t}
            flavorEn={flavorEn.flavors}
            flavorAr={flavorAr.flavors}
            lang={lang as "en" | "ar"}
            user={session.user}
          />
        </>
      )}
    </>
  );
}
