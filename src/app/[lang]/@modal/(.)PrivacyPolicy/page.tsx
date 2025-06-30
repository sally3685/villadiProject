import CloseBtn from "@/app/ui/CloseBtn";
import { getDictionary } from "../../dictionaries";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="w-[80%] h-[70%] bg-white text-black top-[20%] p-6 rounded-2xl flex flex-col gap-4 overflow-hidden z-[3]">
      <CloseBtn lang={lang} title={t.privacy.title}></CloseBtn>
      <p className="text-sm text-gray-500 mb-8">
        {lang === "en" ? "Last updated: " : "اخر تحديث"} {t.privacy.lastUpdated}
      </p>
      <ul className="flex flex-col gap-6 w-full h-full overflow-y-auto pr-2">
        {t.privacy.sections.map((section: any, index: any) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-4 last:border-0"
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="whitespace-pre-line">{section.content}</p>
          </li>
        ))}
      </ul>{" "}
      <p className="mt-8 p-4 bg-gray-50 rounded-lg">
        {t.privacy.acceptanceText}
      </p>
    </div>
  );
}
