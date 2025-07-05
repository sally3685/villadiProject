import React from "react";
import { getAllVideosWithProd } from "@/app/data-access-layer/videoDAL";
import ErrorPage from "../error";
import LeftRightMenuVideos from "@/app/ui/LeftRightVideos";
import { getDictionary } from "../dictionaries";
import Items from "@/app/ui/Items";
export default async function Catigory({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const { status, message, videos } = await getAllVideosWithProd(lang);
  if (status === 500) {
    return <ErrorPage error={new Error(message)}></ErrorPage>;
  }
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#ffffff8f] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffd597] ">
      <LeftRightMenuVideos
        videos={videos}
        t={t}
        title={t.videoWrapper.name}
        lang={lang}
      />
    </main>
  );
}
