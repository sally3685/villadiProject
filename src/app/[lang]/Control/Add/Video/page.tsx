import { getDictionary } from "@/app/[lang]/dictionaries";
import { getAllProducts } from "@/app/data-access-layer/productDAL";
import { getSession } from "@/app/lib/session";
import VideoForm from "@/app/ui/VideoForm";

export default async function Video({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const productEn = await getAllProducts("en");
  const productAr = await getAllProducts("ar");
  if (productEn.status === 500 || productAr.status === 500) {
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
        {t.addVideoForm.title}
      </h1>
      <VideoForm
        t={t}
        productEn={productEn.products}
        productAr={productAr.products}
        lang={lang}
        user={result.success && result.user ? result.user : null}
      />
    </>
  );
}
