"use client";
import React, { useCallback } from "react";
import { useLeftRightMenu } from "./useLeftRight";
import { AnimatedText } from "./AnimatedText";
import { MenuItem } from "./MenuItem";
import { SearchBar } from "./SearchBar";
import { EmptyState } from "../EmptyState";
import {
  type LeftRightMenuProps,
  VideoItem,
  CategoryItem,
  RecipeItem,
} from "./LeftRightTypes";
import Link from "next/link";

export default function LeftRightMenu({
  items,
  title,
  lang,
  emptyStateText,
  searchPlaceholder,
  type,
  linkText,
}: LeftRightMenuProps) {
  const {
    search,
    setSearch,
    filteredItems,
    setRowRef,
    setTitleRef,
    isMounted,
  } = useLeftRightMenu(items);
  const renderAnimatedText = useCallback(
    (text: string, index: number) => (
      <AnimatedText text={text} ref={setTitleRef(index)} />
    ),
    [lang, setTitleRef],
  );

  const getContainerClass = () => {
    switch (type) {
      case "categories":
        return "bg-[#46260f] text-white";
      // 87
      case "recipes":
        return "bg-[#46260f] text-white";
      // /65
      case "videos":
        return "bg-[#ffffff] text-black";
      // /80
      default:
        return "bg-[#46260f]";
    }
  };

  if (!isMounted) return null;
  return (
    <div className="max-w-8xl z-[1] flex w-full flex-col items-center justify-center gap-8 overflow-x-hidden pt-42">
      {items.length === 0 ? (
        <EmptyState noItems={emptyStateText} lang={lang} />
      ) : (
        <>
          <h1 className="z-[0] text-2xl font-bold text-black sm:text-4xl xl:text-5xl">
            {title}
          </h1>

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder={searchPlaceholder}
            lang={lang}
            className={getContainerClass()}
          />

          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              ref={setRowRef(index)}
              className={`relative flex items-center justify-center gap-[10%] ${
                index % 2
                  ? "flex-col sm:flex-row-reverse"
                  : "flex-col sm:flex-row"
              } min-h-auto w-full px-4 opacity-0 will-change-transform`}
            >
              <div className="flex h-[200px] w-80 flex-col items-center justify-center gap-6 pt-12">
                <h2 className="relative text-xl font-bold text-black sm:text-3xl xl:text-4xl">
                  {lang === "en"
                    ? renderAnimatedText(item.name, index)
                    : item.name}
                </h2>
                <Link
                  href={
                    type === "videos"
                      ? `/${lang}/Catigories/Products/${(item as VideoItem).product.code}`
                      : type === "categories"
                        ? `/${lang}/Catigories/${(item as CategoryItem).code}/Products`
                        : `/${lang}/Recipes/${(item as RecipeItem).code}/`
                  }
                  className={`rounded-2xl px-4 py-2 text-sm sm:text-lg ${getContainerClass()}`}
                >
                  {linkText}
                </Link>
              </div>
              <div
                className={`relative flex h-80 w-full flex-col items-center justify-evenly overflow-hidden rounded-2xl ${getContainerClass()} md:h-80 md:w-[450px]`}
              >
                <MenuItem item={item} type={type} lang={lang} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
