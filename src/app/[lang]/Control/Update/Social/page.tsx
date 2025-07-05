import { getDictionary } from "@/app/[lang]/dictionaries";
import { getAllSocialWithoutLang } from "@/app/data-access-layer/videoDAL";
import SocialUpdateForm from "@/app/ui/SocialUpdateForm";
export default async function Video({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const socials = await getAllSocialWithoutLang();
  return (
    <>
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {lang === "en" ? "Update social links" : "تعديل روابط وسائل التواصل"}
      </h1>
      <SocialUpdateForm
        t={t}
        lang={lang}
        socialItems={
          socials.status === 200 && socials.socials
            ? socials.socials
            : undefined
        }
      />
    </>
  );
}
