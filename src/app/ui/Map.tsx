"use client";
import { MapPin } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapDictionary } from "../[lang]/Maps/types";
import { EmptyState } from "./EmptyState";
import NextPrevButton from "./ControlForms/NextPrevButton";
export default function Maps({
  maps,
  lang,
  t,
}: {
  t: MapDictionary;
  maps: {
    lang: string;
    left: string[];
    top: string[];
    id: string;
    details: string;
    img: string;
    name: string;
  }[];
  lang: string;
}) {
  const [step, setStep] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapImg = useRef<HTMLImageElement>(null);
  const pinMarker = useRef<(HTMLDivElement | null)[]>([]);
  const details = useRef<HTMLDivElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const setPinRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      pinMarker.current[index] = el;
    },
    [],
  );
  useGSAP(
    () => {
      if (
        !details.current ||
        !pinMarker.current.length ||
        !mapImg.current ||
        !containerRef.current
      )
        return;

      if (tlRef.current) {
        tlRef.current.kill();
      }

      tlRef.current = gsap.timeline();
      gsap.set([details, pinMarker, mapImg], {
        opacity: 0,
      });

      tlRef.current
        .fromTo(
          mapImg.current,
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        )
        .fromTo(
          pinMarker.current,
          {
            scale: 0,
          },
          {
            scale: 1,
          },
        )
        .fromTo(
          details.current,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        );
      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
    },
    { scope: containerRef, dependencies: [step] },
  );
  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-7xl flex-col items-center justify-evenly gap-[4rem] px-4 py-[100px] lg:gap-[150px] lg:pt-48"
    >
      {maps.length === 0 ? (
        <EmptyState noItems={t.map.noItem} lang={lang} />
      ) : (
        <>
          <h1 className="text-2xl font-bold text-black lg:text-4xl xl:text-5xl">
            {t.map.title}
          </h1>
          <div className="flex h-1/2 w-full max-w-7xl flex-wrap items-center justify-evenly gap-[4rem] lg:flex-nowrap lg:gap-[150px]">
            <div
              className={`relative left-0 h-[300px] w-[300px] overflow-hidden rounded-2xl bg-[#033155] ${lang === "en" ? "lg:left-[76px]" : "lg:right-[76px]"} lg:scale-[1.5]`}
            >
              <Image
                ref={mapImg}
                src={`${maps[step].img}`}
                alt="map image"
                width={200}
                height={200}
                className="h-[300px] w-[300px] object-contain"
              />
              {maps[step].top.map((item: any, index: any) => (
                <div
                  key={index}
                  // ref={pinMarker}
                  ref={setPinRef(index)}
                  className="pointer-events-none absolute z-10 size-[30px] origin-bottom -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[url(/pinMap_1.svg)] bg-contain bg-center bg-no-repeat"
                  style={{
                    top: `${item}%`,
                    left: `${maps[step].left[index]}%`,
                  }}
                ></div>
              ))}
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center lg:w-[50%]">
              <div
                ref={details}
                className="z-[2] flex max-w-[90%] flex-col items-center justify-center gap-6 p-6 text-black lg:max-w-[450px]"
              >
                <h2 className="text-center text-xl font-semibold lg:text-3xl xl:text-4xl">
                  {t.map.location} {maps[step].name}
                </h2>
                <p className="text-lg font-medium lg:text-2xl xl:text-3xl">
                  {maps[step].details}
                </p>
              </div>
              <div className="flex h-auto w-full items-center justify-around">
                <NextPrevButton
                  handleStep={() => {
                    if (step + 1 < maps.length) setStep(step + 1);
                  }}
                  disabled={step + 1 >= maps.length}
                  text={t.map.next}
                  bg="rounded-xl! px-4! py-2! text-black! bg-[#fcdc43]!"
                  hoverBg="bg-[#cfad00]!"
                  disBg="bg-neutral-300!"
                />
                <NextPrevButton
                  handleStep={() => {
                    if (step - 1 >= 0) setStep(step - 1);
                  }}
                  disabled={step - 1 < 0}
                  text={t.map.prev}
                  bg="rounded-xl! px-4! py-2! text-black! bg-[#fcdc43]!"
                  hoverBg="bg-[#cfad00]!"
                  disBg="bg-neutral-300!"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
