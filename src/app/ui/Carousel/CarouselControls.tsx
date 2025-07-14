import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CarouselItemType } from "./carouselTypes";

export const CarouselControls = ({
  items,
  isMobile,
  isMd,
  handlePrev,
  handleNext,
  linkPrefix,
  all,
}: {
  items: CarouselItemType[];
  isMobile: boolean;
  isMd: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  linkPrefix: string;
  all: string;
}) => (
  <div className="relative flex w-full items-center justify-center gap-8">
    {items.length >= (isMobile || isMd ? 3 : 5) && (
      <ArrowLeft onClick={handlePrev} className="cursor-pointer text-black" />
    )}

    <div className="relative bottom-[15px] flex flex-col items-center justify-center gap-2 rounded-[50px] bg-white p-2 text-center text-sm font-bold text-black sm:text-lg">
      <Link href={linkPrefix} className="rounded-2xl px-6 py-2 text-black">
        {all}
      </Link>
    </div>

    {items.length >= (isMobile || isMd ? 3 : 5) && (
      <ArrowRight onClick={handleNext} className="cursor-pointer text-black" />
    )}
  </div>
);
