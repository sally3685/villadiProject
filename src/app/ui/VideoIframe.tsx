"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ErrorPage from "../[lang]/error";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
export default function VideoIframe({
  t,
  video,
  setStep,
  step,
  boundry,
}: {
  t: any;
  video: any;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  boundry: number;
}) {
  const [showVideo, setShowVideo] = useState(false);
  //   console.log(video.video.coverImg, "fff");
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  useEffect(() => {
    const mainElement = document.getElementById("section2");

    if (mainElement) {
      mainElement.setAttribute(
        "data-bgcolor",
        video ? video.product.color : "#000000"
      );
      mainElement.setAttribute(
        "data-color",
        video ? video.product.p_color : "#ffffff"
      );
    }
  }, [step]);
  useGSAP(
    () => {
      if (
        !imgRef.current ||
        !containerRef.current ||
        !boxRef.current ||
        !box2Ref.current
      ) {
        return;
      }
      if (tlRef.current) {
        tlRef.current.kill();
      }
      const mainElement = document.getElementById("section2");

      if (mainElement) {
        mainElement.setAttribute("data-bgcolor", video.product.color);
        mainElement.setAttribute("data-color", video.product.p_color);
      }

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: imgRef.current,
          start: "bottom bottom",
          end: "bottom center",
        },
      });
      tlRef.current
        .fromTo(
          containerRef.current,
          {
            scale: 0.5,
          },
          {
            scale: 1,
          }
        )
        .fromTo(
          box2Ref.current,
          { borderRadius: "0px" },
          { borderRadius: "24px" },
          "<"
        )
        .fromTo(boxRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });

      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
    },
    { scope: containerRef } // Added step to dependencies
  );

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video w-full h-full rounded-lg flex flex-col justify-center items-center overflow-hidden`}
    >
      <h1 className=" font-bold text-4xl mb-12">{t.videoWrapper.name}</h1>
      {!showVideo && video ? (
        // Cover photo with play button
        <button
          onClick={() => setShowVideo(true)}
          className="relative overflow-hidden w-[90%] h-[315px] sm:h-[450px] max-w-[700px] cursor-pointer"
          aria-label={`Play video ${video.name}`}
        >
          <Image
            ref={imgRef}
            src={`/${video.coverImg}`}
            alt={`Cover for ${video.name}`}
            fill
            className="object-cover rounded-3xl"
            priority
          />
          <div
            ref={box2Ref}
            className="overflow-hidden rounded-3xl absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#000000]/80 transition hover:from-transparent hover:to-[#000000]/80"
          >
            <div className="h-16 w-16 overflow-hidden rounded-full bg-red-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-8 w-8 ml-1"
              >
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <>
          {video ? (
            <iframe
              width="560"
              height="315"
              onClick={() => {
                setShowVideo(!showVideo);
              }}
              className="rounded-3xl w-[90%] h-[315px] sm:h-[450px]! max-w-[700px]!"
              src={`${video.embededLink}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={`/villadiLogo.svg`}
              alt={`Cover for video`}
              width={100}
              height={100}
              className="object-contain w-[90%]! h-[315px]! max-w-[560px]!"
              priority
            />
          )}
        </>
      )}
      <div
        ref={boxRef}
        className="flex relative items-center justify-center w-full gap-8"
      >
        {video && (
          <ArrowLeft
            onClick={() => {
              console.log(boundry, step);
              if (step === 0) return;
              setStep((prev) => prev - 1);
            }}
            className={`${
              step === 0
                ? "cursor-not-allowed text-gray-600"
                : "cursor-pointer text-black"
            }`}
          ></ArrowLeft>
        )}
        <div className="bg-white text-black font-bold  text-center  px-6 py-6 rounded-[50px] gap-2 relative bottom-[15px] flex flex-col justify-center items-center text-2xl">
          <h2>"{video ? `${video.name}` : `${t.videoWrapper.noVideos}`}"</h2>
          {video && (
            <Link
              href={"/Videos"}
              className="bg-black text-white text-sm py-2 px-4 rounded-3xl"
            >
              {t.videoWrapper.more}
            </Link>
          )}
        </div>
        {video && (
          <ArrowRight
            onClick={() => {
              if (step === boundry - 1) {
                return;
              } else {
                console.log(boundry, step, step === boundry);
                setStep((prev) => prev + 1);
              }
            }}
            className={`${
              step === boundry - 1
                ? "cursor-not-allowed text-gray-600"
                : "cursor-pointer text-black"
            }`}
          ></ArrowRight>
        )}
      </div>
    </div>
  );
}
