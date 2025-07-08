"use client";
import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoIframe from "./VideoIframe";
export default function ProdDetails({
  product,
  lang,
  t,
}: {
  product: any;
  lang: string | "en";
  t: any;
}) {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [step, setStep] = useState(0);
  //   const filteredItems =
  //     search !== "" || !search
  //       ? product.videos.filter((item: any) =>
  //           item.name.toLowerCase().includes(search.toLowerCase())
  //         )
  //       : product.videos;

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rowRefs.current.length) return;

      gsap.fromTo(
        rowRefs.current,
        {
          scale: 0.5,
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
      <section className="w-full lg:min-w-5xl h-3/4 overflow-auto max-w-7xl rounded-2xl flex flex-wrap gap-20 py-12 px-4 relative bg-[#1c1100]/50  justify-center items-center flex-col">
        <h1 className="text-2xl sm:text-4xl xl:text-5xl text-white font-bold text-center">
          {product.product.category.name}{" "}
          {lang === "en" ? (
            <ArrowRight className="inline-block text-3xl font-bold" />
          ) : (
            <ArrowLeft className="inline-block text-3xl font-bold" />
          )}{" "}
          {lang === "en" ? "Products" : "منتجات"}{" "}
          {lang === "en" ? (
            <ArrowRight className="inline-block text-3xl font-bold" />
          ) : (
            <ArrowLeft className="inline-block text-3xl font-bold" />
          )}{" "}
          {product.product.name}{" "}
        </h1>
        <div className="flex gap-12 flex-wrap justify-center items-center h-full w-full">
          <div className="flex justify-evenly gap-12 sm:gap-8 items-center w-full h-1/2 flex-wrap sm:flex-nowrap">
            <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[300px] flex justify-center items-center relative rounded-2xl flex-col gap-4 transition-all duration-300  scale-[1.2] sm:scale-[1.3]">
              <div
                className="absolute w-full h-full before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%] before:opacity-70
             after:absolute after:content-[''] after:w-1/3 after:h-1/2 after:bg-[#ffffff66] after:bottom-[-10px] after:blur-2xl after:right-[15%] after:opacity-50 z-[0] "
              ></div>

              <Image
                src={`${product.product.img}`}
                alt="product image"
                className="w-[80%] h-[250px] object-contain z-[1]  transition-all duration-75 hover:scale-[1.2]"
                width={200}
                height={200}
              />
              <Image
                src={`${product.product.flavor.primaryImg}`}
                alt="flavor image"
                className=" absolute z-[0] w-[150px] h-[200px] object-contain top-[12%] left-[6%] sm:left-[11%]"
                width={200}
                height={200}
              />
            </div>
            <div className="flex text-white flex-col gap-6 items-center justify-center sm:w-1/2 max-w-[400px] w-full h-1/2">
              <h2 className="text-xl sm:text-3xl xl:text-4xl font-bold ">
                {lang === "en" ? "Product : " : "المنتج : "}
                {product.product.name}
              </h2>
              <h3 className="text-xl sm:text-3xl xl:text-4xl font-semibold ">
                {lang === "en" ? "Flavor : " : "النكهة : "}
                {product.product.flavor.name}
              </h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: product.product.detailes.replace(/\n/g, "<br />"),
                }}
                className=" text-xl text-center sm:text-2xl font-semibold "
              ></p>
            </div>
          </div>
          <div className="w-full h-[500px] text-white sm:h-[600px]">
            <VideoIframe
              lang={lang}
              t={t}
              video={product.product.videos[step]}
              setStep={setStep}
              step={step}
              boundry={product.product.videos.length}
            />
          </div>
        </div>
      </section>
    </>
  );
}
