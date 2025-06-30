"use client";
import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
    search !== "" || !search
      ? catsProds.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : catsProds;
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
          duration: 0.8,
          stagger: {
            from: "center",
            each: 0.05,
          },
          ease: "back.out(1.2)",
        },
        {
          scale: 1,
        }
      );
    },
    { scope: containerRef } // Added step to dependencies
  );
  return (
    <>
      <div className="w-full lg:min-w-5xl h-3/4 overflow-auto max-w-7xl rounded-2xl flex flex-wrap gap-20 py-12 px-4 relative bg-[#1c1100]/50  justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-4xl text-white font-bold ">
          {lang === "en" ? "Products" : "منتجات"}
        </h1>
        <input
          type="text"
          className="bg-white/50 z-[1] p-2 rounded-2xl text-black border-2 border-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search videos..."
        />
        <div className="flex gap-20 sm:gap-[80px] flex-wrap justify-center items-center h-full w-full">
          {filteredItems?.map((product: any, index: any) => (
            <div
              ref={setRowRef(index)}
              key={index}
              style={{
                background: `radial-gradient(${product.p_color} 40%,${product.color})`,
              }}
              className="w-[300px] h-[300px] sm:w-[350px] sm:h-[300px] bg-white/50 flex justify-center items-center relative rounded-2xl flex-col gap-4 transition-all duration-300  before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-[350%,350%]"
            >
              <div
                className="absolute w-full h-full before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%] before:opacity-70
             after:absolute after:content-[''] after:w-1/3 after:h-1/2 after:bg-[#ffffff66] after:bottom-[-10px] after:blur-2xl after:right-[15%] after:opacity-50 z-[0] "
              ></div>

              <Image
                src={`/${product.img}`}
                alt="product image"
                className="w-[80%] h-[250px] object-contain z-[1] hover:scale-[1.2] transition-all duration-75"
                width={200}
                height={200}
              />
              <Image
                src={`/${product.flavor.primaryImg}`}
                alt="product image"
                className=" absolute z-[0] w-[150px] h-[200px] object-contain top-0 left-[6%] sm:left-[11%]"
                width={200}
                height={200}
              />
              <h2 className="text-xl sm:text-2xl font-bold text-black z-[1]">
                {product.name}
              </h2>
              <Link
                className="bg-black text-white px-4 py-3 z-[0] rounded-2xl"
                href={`/${lang}/Catigories/Products/${product.code}`}
              >
                {lang === "en" ? "Product details" : "تفاصيل المنتج"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
