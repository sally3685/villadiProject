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
    <div className="w-full h-[80vh] relative pt-[20vh] bg-[#d9d9d9] text-black top-[20%] p-6 rounded-2xl flex flex-col justify-center gap-4 overflow-hidden z-[0] before:absolute before:content-[''] before:w-full before:h-full before:bg-white/20 before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover">
      <h1 className="text-xl sm:text-2xl font-bold w-full text-center">
        {t.FAQ.title}
      </h1>
      <div className="z-[0] w-full h-full flex justify-center items-center">
        <div className="w-3/4 h-full flex gap-8 flex-col justify-center items-start">
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
      </div>
    </div>
  );
}
