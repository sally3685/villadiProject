import React, { useState } from "react";
import Image from "next/image";
import Light from "../Light";
import {
  CategoryItem,
  MenuItemType,
  RecipeItem,
  VideoItem,
} from "./LeftRightTypes";

interface MenuItemProps {
  item: MenuItemType;
  type: "categories" | "recipes" | "videos";
  lang: string;
}

export const MenuItem = ({ item, type, lang }: MenuItemProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {type === "videos" ? (
        <>
          {!showVideo ? (
            <button
              onClick={() => setShowVideo(true)}
              className="relative h-full w-full cursor-pointer overflow-hidden"
              aria-label="Play video"
            >
              <Image
                src={(item as VideoItem).coverImg}
                alt="Video cover"
                fill
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-[#000000]/80 transition hover:from-transparent hover:to-[#000000]/80">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="ml-1 h-8 w-8"
                  >
                    <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            <iframe
              width="560"
              height="315"
              onClick={() => setShowVideo(false)}
              className="h-full! w-full! rounded-2xl"
              src={`${(item as VideoItem).embededLink}?autoplay=1`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </>
      ) : type === "categories" ? (
        <>
          <Light />
          <Image
            className="absolute bottom-0 h-72 w-full object-contain"
            src={`${item ? (item as CategoryItem).img : lang === "en" ? "/villadiLogo.svg" : "/villadiLogoAr.svg"}`}
            alt="category image"
            width={300}
            height={400}
          />
        </>
      ) : (
        <>
          <Light />
          <div className="relative flex h-[300px] w-full items-center justify-center p-4">
            <Image
              className="absolute top-0 left-[20%] h-[180px] w-full rotate-[30deg] object-contain opacity-70"
              src={`/chef.png`}
              alt="chef image"
              width={300}
              height={400}
            />
            <Image
              className="relative h-[150px] w-full object-contain"
              src={`${item ? (item as RecipeItem).flavor.primaryImg : lang === "en" ? "/villadiLogo.svg" : "/villadiLogoAr.svg"}`}
              alt="recipe image"
              width={300}
              height={400}
            />
          </div>
        </>
      )}
    </>
  );
};
