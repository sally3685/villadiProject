import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getAllSocialWithoutLang } from "@/app/data-access-layer/videoDAL";
import { getSession } from "@/app/lib/session";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import SocialUpdateForm from "@/app/ui/ControlForms/Social/SocialUpdateForm";
import { redirect } from "next/navigation";
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
  const socials = await getAllSocialWithoutLang();
  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : socials.status === 500 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? socials.messageEn : socials.messageAr)
          }
        />
      ) : (
        <>
          <h1
            className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
              lang === "en" ? "pl-12" : "pr-12"
            }`}
          >
            {t.updateSocial.title}
          </h1>
          <SocialUpdateForm
            t={t}
            lang={lang as "en" | "ar"}
            socialItems={socials.socials}
          />
        </>
      )}
    </>
  );
}
