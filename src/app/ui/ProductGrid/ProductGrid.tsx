// components/ProductsGrid.tsx
"use client";
import React from "react";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "../LeftRight/SearchBar";
import { EmptyState } from "../EmptyState";
import { ProductType } from "@/app/[lang]/Catigories/types";

interface ProductsGridProps {
  products: ProductType[];
  lang: string;
  title?: string;
  searchPlaceholder: string;
  linkText: string;
  emptyText: string;
  cardClass?: string;
}

export const ProductsGrid = ({
  products,
  lang,
  title,
  searchPlaceholder,
  linkText,
  emptyText,
}: ProductsGridProps) => {
  const [search, setSearch] = React.useState("");
  //   const { containerRef, registerRef } = useProductGrid();

  const filteredProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
    : products;

  return (
    <div
      //   ref={containerRef}
      style={{ minWidth: "auto" }}
      className={`relative flex h-3/4 w-full max-w-7xl min-w-auto flex-col items-center justify-center gap-20 overflow-x-hidden overflow-y-auto rounded-2xl bg-[#1c1100]/50 px-4 py-20 lg:min-w-5xl`}
    >
      {title && (
        <h1 className="text-center text-2xl font-bold text-white sm:text-4xl xl:text-5xl">
          {title}
        </h1>
      )}

      {products.length === 0 ? (
        <EmptyState noItems={emptyText} lang={lang} />
      ) : (
        <>
          <SearchBar
            value={search}
            onChange={setSearch}
            lang={lang}
            className="bg-white text-black"
            placeholder={searchPlaceholder}
          />

          <div className="flex w-full flex-wrap items-center justify-center gap-20 sm:gap-[80px]">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.code}
                // ref={registerRef(index)}
                product={product}
                lang={lang}
                linkText={linkText}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
