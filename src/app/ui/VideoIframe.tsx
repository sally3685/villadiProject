"use client";
import React, {
  IframeHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { VideoType } from "../[lang]/Catigories/types";
import { getContrastColor } from "../../../helpers/contrastColor";

export default function VideoIframe({
  t,
  video,
  lang,
  setStep,
  step,
  boundry,
}: {
  t: any;
  lang: string;
  video: VideoType;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  boundry: number;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout>(null);
  const observerRef = useRef<IntersectionObserver>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (boundry <= 1) return;

    const autoScroll = () => {
      if (!isVisible || isPaused) return;

      setStep((prev) => {
        if (prev >= boundry - 1) return 0;
        return prev + 1;
      });
    };

    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    if (isVisible && !isPaused) {
      autoScrollRef.current = setInterval(autoScroll, 5000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [boundry, isVisible, isPaused, setStep]);

  useEffect(() => {
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handleNext = () => {
    if (step < boundry - 1) {
      setIsPaused(true);

      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }

      setStep((prev) => prev + 1);

      resumeTimerRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
  };
  useEffect(() => {
    setShowVideo(false);
  }, [video]);
  const handlePrev = () => {
    if (step > 0) {
      setIsPaused(true);

      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }

      setStep((prev) => prev - 1);

      resumeTimerRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
  };
  useEffect(() => {
    const mainElement = document.getElementById("section2");

    if (mainElement) {
      mainElement.setAttribute(
        "data-bgcolor",
        video && video.product ? video.product.color : "#ff832b",
      );
      mainElement.setAttribute(
        "data-color",
        video && video.product ? video.product.p_color : "#ffffff",
      );
    }
  }, [step, video]);

  useGSAP(
    () => {
      const main = document.getElementById("main") as HTMLElement;

      if (
        !imgRef.current ||
        !containerRef.current ||
        !boxRef.current ||
        !box2Ref.current ||
        !nameRef.current
      ) {
        return;
      }
      if (tlRef.current) {
        tlRef.current.kill();
      }

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: imgRef.current,
          start: "bottom bottom",
          end: "bottom center",
        },
      });

      if (main)
        tlRef.current.to(main, {
          backgroundColor:
            video && video.product ? video.product.color : "#000000",
          duration: 0.5,
          ease: "power2.inOut",
          "--colorArrow":
            video && video.product ? video.product.p_color : "#ffffff",
        });
      tlRef.current
        // .to(nameRef, {
        //   color: getContrastColor(
        //    video && video.product.color ? video.product.color : black,
        //   ),
        // })
        .fromTo(
          containerRef.current,
          {
            scale: 0.5,
          },
          {
            scale: 1,
          },
          "<",
        )
        .fromTo(
          box2Ref.current,
          { borderRadius: "0px" },
          { borderRadius: "24px" },
          "<",
        )
        .fromTo(boxRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });

      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
    },
    { scope: containerRef, dependencies: [step] },
  );

  useEffect(() => {
    setIsPaused(showVideo);
  }, [showVideo]);

  return (
    <div
      ref={containerRef}
      className={`relative flex aspect-video h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg`}
    >
      <h1
        ref={nameRef}
        className={`mb-12 text-2xl font-bold sm:text-4xl xl:text-5xl text-${video && video.product ? getContrastColor(video.product.color) : "white"}`}
      >
        {t.videoWrapper.name}
      </h1>
      {!showVideo && video ? (
        <button
          onClick={() => setShowVideo(true)}
          className="relative h-[315px] w-[90%] max-w-[700px] cursor-pointer overflow-hidden sm:h-[450px]"
          aria-label={`Play video ${video.name}`}
        >
          <Image
            ref={imgRef}
            src={`${video.coverImg}`}
            alt={`Cover for ${video.name}`}
            fill
            className="rounded-3xl object-cover"
            priority
          />
          <div
            ref={box2Ref}
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-tr from-[#000000]/80 transition hover:from-transparent hover:to-[#000000]/80"
          >
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1 h-8 w-8"
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
              className="h-[315px] w-[90%] max-w-[700px]! rounded-3xl sm:h-[450px]!"
              src={`${video.embededLink}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={lang === "en" ? "/villadiLogo.svg" : "/villadiLogoAr.svg"}
              alt={`Cover for video`}
              width={100}
              height={100}
              className="h-[315px]! w-[90%]! max-w-[560px]! object-contain"
              priority
            />
          )}
        </>
      )}
      <div
        ref={boxRef}
        className="relative flex w-full items-center justify-center gap-8"
      >
        {video && (
          <ArrowLeft
            onClick={handlePrev}
            className={`${
              step === 0
                ? "cursor-not-allowed text-gray-600"
                : "cursor-pointer text-black"
            }`}
          ></ArrowLeft>
        )}
        <div className="relative bottom-[15px] flex flex-col items-center justify-center gap-2 rounded-[50px] bg-white px-6 py-6 text-center text-lg font-bold text-black sm:text-2xl">
          <h2>"{video ? `${video.name}` : `${t.videoWrapper.noVideos}`}"</h2>
          {video && (
            <Link
              href={"/Videos"}
              className="rounded-3xl bg-black px-4 py-2 text-sm text-white sm:text-lg"
            >
              {t.videoWrapper.more}
            </Link>
          )}
        </div>
        {video && (
          <ArrowRight
            onClick={handleNext}
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
