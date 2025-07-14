import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllProductsWithoutLang } from "@/app/data-access-layer/productDAL";
import { getAllVideossWithoutLang } from "@/app/data-access-layer/videoDAL";
import VideoUpdateForm from "@/app/ui/ControlForms/Video/VideoUpdateForm";
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
  const resultOfVideos = await getAllVideossWithoutLang();
  const resultOfProducts = await getAllProductsWithoutLang();
  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : resultOfVideos.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfVideos.messageEn
                : resultOfVideos.messageAr,
            )
          }
        />
      ) : resultOfProducts.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfProducts.messageEn
                : resultOfProducts.messageAr,
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
            {t.updateVideoForm.title}
          </h1>
          <VideoUpdateForm
            t={t}
            lang={lang as "en" | "ar"}
            video={resultOfVideos.videos}
            products={resultOfProducts.products}
          />
        </>
      )}
    </>
  );
}
