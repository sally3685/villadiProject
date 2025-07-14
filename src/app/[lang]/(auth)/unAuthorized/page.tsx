import React from "react";
import { getDictionary } from "../../dictionaries";

export default async function unAuthorized({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <main className="before:content-['']flex relative top-[20%] z-[0] flex h-[80vh] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-[#d9d9d9] p-6 pt-[20vh] text-black before:absolute before:top-0 before:block before:h-full before:w-full before:bg-white/20 before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center">
      <h1 className="text-2xl font-bold sm:text-4xl xl:text-5xl">
        {t.unAuthorized.title}😔
      </h1>
    </main>
  );
}
