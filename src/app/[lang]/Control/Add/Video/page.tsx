import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getAllProducts } from "@/app/data-access-layer/productDAL";
import { getSession } from "@/app/lib/session";
import { controlDictionary } from "@/app/ui/ControlForms/types";
import VideoForm from "@/app/ui/ControlForms/Video/VideoForm";
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
  const productEn = await getAllProducts("en");
  const productAr = await getAllProducts("ar");

  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : productEn.status === 500 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? productEn.messageEn : productEn.messageAr)
          }
        />
      ) : productAr.status === 500 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? productAr.messageEn : productAr.messageAr)
          }
        />
      ) : (
        <>
          <h1
            className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
              lang === "en" ? "pl-12" : "pr-12"
            }`}
          >
            {t.addVideoForm.title}
          </h1>
          <VideoForm
            t={t}
            productEn={productEn.products}
            productAr={productAr.products}
            lang={lang as "en" | "ar"}
            user={session.user}
          />
        </>
      )}
    </>
  );
}
