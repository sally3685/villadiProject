import React from "react";
import { getDictionary } from "../dictionaries";
import CloseBtn from "@/app/ui/CloseBtn";
export default async function Faq({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="w-full h-[80vh] pt-[20vh] bg-[#d9d9d9] text-black top-[20%] p-6 rounded-2xl flex flex-col justify-center gap-4 overflow-hidden z-[0] before:absolute before:content-[''] before:w-full before:h-full before:bg-white/20 before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover">
      <h1 className="z-[0] text-xl sm:text-2xl font-bold w-full text-center">
        {t.terms.title}
      </h1>
      <p className="z-[0] text-sm text-gray-500 mb-8">
        {lang === "en" ? "Last updated: " : "اخر تحديث"} {t.terms.lastUpdated}
      </p>
      <ul className="z-[0] flex flex-col gap-6 w-full h-full overflow-y-auto pr-2">
        {t.terms.sections.map((section: any, index: any) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-4 last:border-0"
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="whitespace-pre-line">{section.content}</p>
          </li>
        ))}
      </ul>{" "}
      <p className="z-[0] mt-8 p-4 bg-gray-50 rounded-lg">
        {t.terms.acceptanceText}
      </p>
    </div>
  );
}
