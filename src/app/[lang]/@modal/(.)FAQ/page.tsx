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
    <div className="top-[20%] z-[3] flex h-[100%] w-[95%] flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 text-black">
      <CloseBtn lang={lang} title={t.FAQ.title}></CloseBtn>
      <ul className="flex h-full w-full flex-col gap-6 overflow-y-auto pr-2">
        {t.FAQ.array.map((ques: any, index: number) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-4 text-center last:border-0"
          >
            <p className="font-semibold text-black">{ques.question}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: (ques.answer ? ques.answer : "").replace(
                  /\n/g,
                  "<br />",
                ),
              }}
              className="mt-2 text-center text-black"
            ></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
