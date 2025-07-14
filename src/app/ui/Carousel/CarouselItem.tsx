import Image from "next/image";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";
import { getContrastColor } from "../../../../helpers/contrastColor";
import {
  carouselDictionary,
  CarouselItemType,
  CategoryItem,
  ProductItem,
} from "./carouselTypes";
import React, { forwardRef, RefObject } from "react";
import Light from "../Light";

interface CarouselItemProps {
  item: CarouselItemType;
  index: number;
  type: "products" | "categories" | "recipes";
  t: carouselDictionary;
  addMargin: boolean;
  getStyleForIndex: (index: number) => any;
  getStyleForOpacityIndex: (index: number) => any;
  showVotes?: boolean;
  onVote?: (itemId: string) => void;
  linkText: string;
  linkHref: string;
  ref: (el: HTMLDivElement | null, index: number) => void;
}

export const CarouselItem = ({
  item,
  index,
  type,
  t,
  addMargin,
  getStyleForIndex,
  getStyleForOpacityIndex,
  showVotes,
  onVote,
  linkText,
  linkHref,
  ref,
}: CarouselItemProps) => {
  const itemStyle = {
    background:
      type === "products"
        ? `radial-gradient(${item.p_color} 40%,${item.color})`
        : undefined,
  };

  return (
    <div
      ref={(el) => ref(el, index)}
      style={{
        ...getStyleForIndex(index),
        ...itemStyle,
      }}
      className={`relative flex h-[350px] w-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white ${type === "products" ? "before:absolute before:top-0 before:block before:h-full before:w-full before:bg-white before:mask-[url(/pattern2.svg)] before:mask-[350%,350%] before:mask-center before:content-['']" : ""} sm:h-[350px] sm:w-[350px] ${
        addMargin ? "mb-[66px]" : ""
      }`}
    >
      <Light />

      <div className="relative flex h-[250px] w-full items-center justify-center p-4">
        {type === "recipes" && (
          <Image
            className="absolute top-0 left-[20%] z-[0] h-[180px] w-full rotate-[30deg] object-contain opacity-50"
            src="/chef.png"
            alt="chef image"
            width={300}
            height={400}
          />
        )}

        {type !== "recipes" && (
          <Image
            src={(item as ProductItem | CategoryItem).img}
            alt={`${type} image`}
            className={`relative ${type === "categories" ? "h-[150px]" : "h-[250px]"} z-[1] w-full object-contain transition-all duration-75 hover:scale-[1.2]`}
            width={200}
            height={200}
          />
        )}
        {type !== "categories" && "flavor" in item && (
          <Image
            src={item.flavor.primaryImg}
            alt="flavor image"
            className={`absolute ${type === "products" ? "top-[10%] left-[6%] h-[200px] w-[150px] sm:left-[11%]" : "h-[150px] w-full"} z-[0] object-contain`}
            width={200}
            height={200}
          />
        )}
      </div>

      <div className="flex w-full items-center justify-center">
        <h2
          style={{
            ...getStyleForOpacityIndex(index),
            color:
              type === "products" && item.p_color
                ? getContrastColor(item.p_color)
                : undefined,
          }}
          className="relative w-[75%] p-2 text-center text-xl font-bold text-black sm:text-2xl"
        >
          {item.name}
        </h2>

        {showVotes && item._count?.votes !== undefined && (
          <div className="absolute top-[75%] left-[80%] flex flex-col items-center justify-center gap-2">
            <button
              style={getStyleForOpacityIndex(index)}
              className="relative top-0 z-[0] h-[30px] w-[30px] cursor-pointer text-sm"
              onClick={() => item.id && onVote?.(item.id)}
            >
              <ThumbsUp className="relative h-[35px] w-full rounded-full p-1 hover:bg-black hover:text-white" />
            </button>
            <h2 className="relative p-2 text-center text-sm">
              {t.vote.title} {item._count.votes}
            </h2>
          </div>
        )}
      </div>

      <Link
        style={{
          ...getStyleForOpacityIndex(index),
          color:
            type === "products" && item.p_color
              ? getContrastColor(item.p_color)
              : undefined,
        }}
        className="relative top-4 z-[0] rounded-2xl bg-black px-4 py-3 text-white!"
        href={linkHref}
      >
        {linkText}
      </Link>
    </div>
  );
};
