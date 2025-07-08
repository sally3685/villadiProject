"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Search } from "lucide-react";
export default function ProdItems({
  catsProds,
  lang,
}: {
  catsProds: any;
  lang: string;
}) {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [search, setSearch] = useState("");
  const filteredItems =
    search === ""
      ? catsProds
      : catsProds.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
  const setRowRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      rowRefs.current[index] = el;
    },
    []
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rowRefs.current.length) return;

      gsap.fromTo(
        rowRefs.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          ease: "power1",
        }
      );
    },
    { scope: containerRef } // Added step to dependencies
  );
  function getContrastColor(bgColor: string): string {
    // Clean the hex color (remove # if present)
    const hex = bgColor.replace("#", "");

    // Convert 3-digit hex to 6-digits if needed
    const fullHex =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex;

    // Parse RGB components
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);

    // Calculate luminance (perceived brightness)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for light colors, white for dark colors
    return luminance > 0.5 ? "#000000" : "#ffffff";
  }
  return (
    <>
      <div className="w-full lg:min-w-5xl h-3/4 overflow-y-auto max-w-7xl rounded-2xl flex flex-wrap gap-20 py-20 px-4 relative bg-[#1c1100]/50  justify-center items-center flex-col">
        {catsProds.length > 0 ? (
          <>
            <h1 className="text-2xl sm:text-4xl xl:text-5xl text-white font-bold text-center">
              {lang === "en" ? "Products" : "منتجات"}
            </h1>
            <div className="relative w-[300px]">
              <input
                type="text"
                className="bg-white/50 z-[1] p-2 w-full rounded-2xl text-black border-2 border-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  lang === "en" ? "Search product ..." : "بحث عن المنتج ..."
                }
              />
              <Search
                className={`text-white top-2 w-full absolute ${lang === "en" ? "left-[44%]" : "right-[44%]"}`}
              ></Search>
            </div>
            <div className="flex gap-20 sm:gap-[80px] flex-wrap justify-center items-center h-full w-full">
              {filteredItems?.map((product: any, index: any) => (
                <div
                  ref={setRowRef(index)}
                  key={index}
                  style={{
                    background: `radial-gradient(${product.p_color} 40%,${product.color})`,
                  }}
                  className="w-[300px] h-[300px] sm:mt-[30px] sm:w-[350px] sm:h-[300px] bg-white/50 flex justify-center items-center relative rounded-2xl flex-col gap-4 transition-all duration-300  before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-[350%,350%]"
                >
                  <div
                    className="absolute w-full h-full before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%] before:opacity-70
             after:absolute after:content-[''] after:w-1/3 after:h-1/2 after:bg-[#ffffff66] after:bottom-[-10px] after:blur-2xl after:right-[15%] after:opacity-50 z-[0] "
                  ></div>

                  <Image
                    src={`${product.img}`}
                    alt="product image"
                    className="w-[80%] h-[250px] object-contain z-[1] hover:scale-[1.2] transition-all duration-75"
                    width={200}
                    height={200}
                  />
                  <Image
                    src={`${product.flavor.primaryImg}`}
                    alt="flavor image"
                    className=" absolute z-[0] w-[150px] h-[200px] object-contain top-0 left-[6%] sm:left-[11%]"
                    width={200}
                    height={200}
                  />
                  <h2
                    className={` text-xl sm:text-2xl text-center p-2 font-bold ${getContrastColor(product.p_color)} z-[1]`}
                  >
                    {product.name}
                  </h2>
                  <Link
                    className="bg-black text-white  text-sm sm:text-lg  px-4 py-3 z-[0] rounded-2xl"
                    href={`/${lang}/Catigories/Products/${product.code}`}
                  >
                    {lang === "en" ? "Product details" : "تفاصيل المنتج"}
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-black">
              {lang === "en" ? "No products yet" : "لا يوجد أصناف بعد"}
            </h1>
            <div
              className={`w-[300px] h-[200px] md:w-[400px] md:h-[300px] justify-center items-center bg-[url(
                    ${`/${lang === "en" ? "villadiLogo.svg" : "villadiLogoAr.svg"}`})] bg-center bg-contain bg-no-repeat`}
            ></div>
          </>
        )}
      </div>
    </>
  );
}
