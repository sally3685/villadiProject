import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllProductsWithoutLang } from "@/app/data-access-layer/productDAL";
import { getAllVideossWithoutLang } from "@/app/data-access-layer/videoDAL";
import VideoUpdateForm from "@/app/ui/VideoUpdateForm";
export default async function Video({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const video = await getAllVideossWithoutLang();
  const products = await getAllProductsWithoutLang();
  return (
    <>
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addVideoForm.update}
      </h1>
      <VideoUpdateForm
        t={t}
        lang={lang}
        user={result.success && result.user ? result.user : null}
        video={video.status === 200 && video.videos ? video.videos : undefined}
        products={
          products.status === 200 && products.products
            ? products.products
            : undefined
        }
      />
    </>
  );
}
