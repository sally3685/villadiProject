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
    <div className="top-[20%] z-[3] flex h-[100%] w-[95%] flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 text-black">
      <CloseBtn lang={lang} title={t.terms.title}></CloseBtn>
      <h2 className="mt-2 text-center text-sm font-bold text-[#595e66]">
        {t.terms.lastUpdated.date} : {t.terms.lastUpdated.title}
      </h2>
      <ul className="flex h-full w-full flex-col gap-6 overflow-y-auto pr-2">
        {t.terms.sections.map((section: any, index: any) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-4 text-center last:border-0"
          >
            <h2 className="mb-2 text-xl font-semibold">{section.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: (section.content ? section.content : "").replace(
                  /\n/g,
                  "<br />",
                ),
              }}
              className="mt-2 text-center whitespace-pre-line text-black"
            ></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
