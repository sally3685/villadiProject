import React from "react";
import { getDictionary } from "../../dictionaries";
import CloseBtn from "@/app/ui/CloseBtn";
export default async function FAQIntercepted({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="w-[80%] h-[70%] bg-white text-black top-[20%] p-6 rounded-2xl flex flex-col gap-4 overflow-hidden z-[3]">
      <CloseBtn lang={lang} title={t.FAQ.title}></CloseBtn>
      <ul className="flex flex-col gap-6 w-full h-full overflow-y-auto pr-2">
        {t.FAQ.array.map((ques: any, index: number) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-4 last:border-0"
          >
            <p className="text-black font-semibold">{ques.question}</p>
            <p className="mt-2 text-gray-600">{ques.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
