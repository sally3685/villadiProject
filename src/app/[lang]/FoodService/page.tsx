import React from "react";
import { getDictionary } from "../dictionaries";
import CloseBtn from "@/app/ui/CloseBtn";
export default async function FoodServicePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="relative top-[20%] z-[0] flex h-[100vh] w-full flex-col items-center justify-center gap-[1.5rem] overflow-hidden rounded-2xl bg-[#d9d9d9] p-[10rem_0_4rem_0] text-black before:absolute before:top-0 before:block before:h-full before:w-full before:bg-white/20 before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-[''] sm:p-[13rem_0_4rem_0]">
      <h1
        dangerouslySetInnerHTML={{
          __html: t.foodservice.title,
        }}
        className="z-[0] w-full text-center text-xl font-bold sm:text-2xl"
      ></h1>

      <div className="z-[0] flex h-full w-full max-w-7xl items-center justify-center">
        <div className="flex h-full w-3/4 flex-col items-start justify-center gap-8">
          <ul className="z-[0] flex h-full w-full flex-col gap-6 overflow-y-auto pr-2">
            {t.foodservice.sections.map((section: any, index: any) => (
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
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
