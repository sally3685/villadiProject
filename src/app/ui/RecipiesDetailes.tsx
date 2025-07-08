"use client";
import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoIframe from "./VideoIframe";
export default function RecipeDetails({
  recipe,
  lang,
}: {
  recipe: any;
  lang: string | "en";
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
      <section className="w-full lg:min-w-5xl h-3/4 overflow-x-hidden overflow-y-auto max-w-7xl rounded-2xl flex flex-wrap gap-20 py-12 px-4 relative bg-[#1c1100]/50  justify-center items-center flex-col">
        <h1 className="text-2xl sm:text-4xl xl:text-5xl text-white font-bold text-center">
          {recipe.name}{" "}
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
          {recipe.flavor.name}{" "}
        </h1>
        <div className="flex gap-12 flex-wrap justify-center items-center h-full w-full">
          <div className="flex justify-evenly gap-12 sm:gap-8 items-center w-full h-1/2 flex-wrap sm:flex-nowrap">
            <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[300px] flex justify-center items-center relative rounded-2xl flex-col gap-4 transition-all duration-300  scale-[1.2] sm:scale-[1.1]">
              <div
                className="absolute w-full h-full before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%] before:opacity-70
             after:absolute after:content-[''] after:w-1/3 after:h-1/2 after:bg-[#ffffff66] after:bottom-[-10px] after:blur-2xl after:right-[15%] after:opacity-50 z-[0] "
              ></div>

              <div className="relative h-[300px] p-4 w-full flex justify-center items-center">
                <Image
                  className="absolute top-0 left-[20%] opacity-50 rotate-[30deg] w-full h-[180px] object-contain"
                  src={`/chef.png`}
                  alt="chef image"
                  width={300}
                  height={400}
                />
                <Image
                  className="relative w-full h-[150px] object-contain transition-all duration-75 hover:scale-[1.2]"
                  src={`${recipe.flavor.primaryImg}`}
                  alt="flavor image"
                  width={300}
                  height={400}
                />
              </div>
            </div>{" "}
            <div className="flex text-white flex-col gap-6 items-center justify-center sm:w-1/2 max-w-[400px] w-full h-1/2">
              <h2 className="text-xl sm:text-3xl xl:text-4xl font-bold ">
                {recipe.name}
              </h2>
            </div>
          </div>
          <div className="w-full h-[500px] sm:h-[600px] text-white">
            <p
              dangerouslySetInnerHTML={{
                __html: recipe.detailes.replace(/\n/g, "<br />"),
              }}
              className="text-xl sm:text-2xl pb-20  text-center break-words"
            ></p>
          </div>
        </div>
      </section>
    </>
  );
}
