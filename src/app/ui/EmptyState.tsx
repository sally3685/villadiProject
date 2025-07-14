import Image from "next/image";
import React from "react";

export const EmptyState = ({
  noItems,
  lang,
}: {
  noItems: string;
  lang: string;
}) => (
  <div className="max-w-8xl z-[1] flex h-full w-full flex-col items-center justify-center gap-8 py-20">
    <h1 className="text-2xl text-black sm:text-4xl xl:text-5xl">{noItems}</h1>
    <div
      className="h-[200px] w-[300px] items-center justify-center bg-contain bg-center bg-no-repeat md:h-[300px] md:w-[400px]"
      style={{
        backgroundImage: `url(${lang === "en" ? "/villadiLogo.svg" : "/villadiLogoAr.svg"})`,
      }}
    />
  </div>
);
