"use client";
import React, { useState } from "react";
import VideoIframe from "./VideoIframe";
import Light from "./Light";
import {
  ProductDetails,
  ProdDetailsDictionary,
} from "../[lang]/Catigories/types";
import { useScaleAnimation } from "./ProductGrid/useScaleAnimation";
import ProductImg from "./ProductGrid/ProductImg";
export default function ProdDetails({
  product,
  lang,
  t,
}: {
  product: ProductDetails;
  lang: "ar" | "en";
  t: ProdDetailsDictionary;
}) {
  const [step, setStep] = useState(0);
  const { containerRef, registerRef } = useScaleAnimation();
  return (
    <>
      <section
        ref={containerRef}
        className="relative flex h-3/4 w-full max-w-7xl min-w-auto flex-col flex-wrap items-center justify-center gap-20 overflow-x-hidden overflow-y-auto rounded-2xl bg-[#1c1100]/50 px-4 py-12"
      >
        <h1 className="text-center text-2xl font-bold text-white sm:text-4xl xl:text-5xl">
          {`${product.category?.name} ${lang === "en" ? "→" : "←"} ${t.ProdsWrapper.title} ${lang === "en" ? "→" : "←"} ${product.name}`}
        </h1>
        <div className="flex h-full w-full flex-wrap items-center justify-center gap-12">
          <div className="flex h-1/2 w-full flex-wrap items-center justify-evenly gap-12 sm:flex-nowrap sm:gap-8">
            <div className="relative flex h-[300px] w-[300px] scale-[1.2] flex-col items-center justify-center gap-4 rounded-2xl transition-all duration-300 sm:h-[300px] sm:w-[350px] sm:scale-[1.3]">
              <Light />

              <ProductImg
                img={product.img}
                flavorImg={product.flavor.primaryImg}
              ></ProductImg>
            </div>
            <div className="flex h-1/2 w-full max-w-[400px] flex-col items-center justify-center gap-6 text-white sm:w-1/2">
              <h2 className="text-center text-xl font-bold sm:text-3xl xl:text-4xl">
                {t.ProdsWrapper.product} : {product.name}
              </h2>
              <h3
                className={`text-center text-xl font-semibold sm:text-3xl xl:text-4xl text-[${product.p_color}]`}
              >
                {t.ProdsWrapper.flavor} : {product.flavor.name}
              </h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: (product.detailes ? product.detailes : "").replace(
                    /\n/g,
                    "<br />",
                  ),
                }}
                className="text-center text-xl font-semibold sm:text-2xl"
              ></p>
            </div>
          </div>
          <div className="h-[500px] w-full text-white sm:h-[600px]">
            <VideoIframe
              lang={lang}
              t={t}
              video={product.videos[step]}
              setStep={setStep}
              step={step}
              boundry={product.videos.length}
            />
          </div>
        </div>
      </section>
    </>
  );
}
