import React from "react";
import { getAllVideosWithProd } from "@/app/data-access-layer/videoDAL";
import ErrorPage from "../error";
import { getDictionary } from "../dictionaries";
import LeftRightMenu from "@/app/ui/LeftRight/LeftRightMenu";
export default async function Catigory({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const videos = await getAllVideosWithProd(lang);
  if (videos.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? videos.messageEn : videos.messageAr)}
      />
    );
  }
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#ffd597] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[#ffffff] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <LeftRightMenu
        items={videos.videos}
        title={t.videoWrapper.name}
        lang={lang}
        emptyStateText={t.videoWrapper.noVideos}
        searchPlaceholder={t.videoWrapper.search}
        type="videos"
        linkText={t.videoWrapper.link}
      />
    </main>
  );
}
