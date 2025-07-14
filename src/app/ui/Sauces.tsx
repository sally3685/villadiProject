import React from "react";
import Image from "next/image";
export default function Sauces({ lang }: { lang: "en" | "ar" }) {
  return (
    <div
      className={`absolute top-[10%] z-[1] rotate-[-100deg] ${lang === "en" ? "left-[70%]" : "right-[70%]"} flex flex-col gap-[40px]`}
    >
      <Image
        src={"/mayo.png"}
        alt={`Cover for `}
        width={100}
        height={100}
        className="h-[50px]! w-[50px]! rounded-3xl object-contain"
        priority
      />
      <Image
        src={"/mayo1.png"}
        alt={`Cover for `}
        width={100}
        height={100}
        className="relative left-[50px] h-[50px]! w-[50px]! rounded-3xl object-contain"
        priority
      />
      <Image
        src={"/mayo3.png"}
        alt={`Cover for `}
        width={100}
        height={100}
        className="h-[50px]! w-[50px]! rounded-3xl object-contain"
        priority
      />
    </div>
  );
}
