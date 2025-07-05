"use client";
import Image from "next/image";
import React, { useRef, useCallback, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Search } from "lucide-react";

// Register plugins once

type LeftRightMenuProps = {
  videos: any;
  t: any;
  title: string;
  lang: string;
};

export default function LeftRightMenuVideos({
  videos,
  t,
  title,
  lang,
}: LeftRightMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<gsap.core.Tween[]>([]);
  const [search, setSearch] = useState("");
  const [showVideo, setShowVideo] = useState<boolean[]>(
    Array(videos.length).fill(false)
  );

  // Store ref callbacks
  const setRowRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      rowRefs.current[index] = el;
    },
    []
  );

  const setTitleRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      titleRefs.current[index] = el;
    },
    []
  );

  // Split text into spans for letter animation
  const renderAnimatedText = (text: string, index: number) => {
    return (
      <div ref={setTitleRef(index)} className="overflow-hidden relative">
        {text.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block opacity-0 translate-y-full"
            style={{ display: letter === " " ? "inline" : "inline-block" }}
          >
            {letter}
          </span>
        ))}
      </div>
    );
  };

  const filteredItems = search
    ? videos.filter((video: any) =>
        video.name.toLowerCase().includes(search.toLowerCase())
      )
    : videos;

  useGSAP(
    () => {
      if (
        !titleRefs.current ||
        !ScrollTrigger ||
        !animationRef.current ||
        !rowRefs.current ||
        !containerRef.current
      )
        return;
      const animateTitleLetters = (index: number) => {
        const titleElement = titleRefs.current[index];
        if (!titleElement) return;
        if (typeof window !== "undefined") {
          gsap.registerPlugin(ScrollTrigger);
        }

        gsap.to(titleElement.querySelectorAll("span"), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          delay: 0.3,
          ease: "back.out(1.2)",
        });
      };

      // Clear previous animations
      animationRef.current.forEach((anim) => anim?.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());

      if (!filteredItems.length || !rowRefs.current.length) return;

      // Set initial state for rows
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        gsap.set(row, {
          opacity: 0,
          x: index % 2 ? 20 : -20,
          willChange: "opacity, transform",
        });
      });

      // Create row animations
      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const anim = gsap.to(row, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            onEnter: () => animateTitleLetters(index),
          },
        });

        animationRef.current.push(anim);
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    {
      dependencies: [filteredItems],
      scope: containerRef,
    }
  );

  const toggleVideo = (index: number) => {
    setShowVideo((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-8 max-w-8xl justify-center items-center w-full pt-42 z-[1]"
    >
      {videos.length === 0 ? (
        <>
          <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-black">
            {t.videoWrapper.noVideos}
          </h1>
          <div
            className={`w-[300px] h-[200px] md:w-[400px] md:h-[300px] justify-center items-center bg-[url(
                    ${`/${lang === "en" ? "villadiLogo.svg" : "villadiLogoAr.svg"}`})] bg-center bg-contain bg-no-repeat`}
          ></div>
        </>
      ) : (
        <>
          <h1 className="text-black font-bold  text-2xl sm:text-4xl xl:text-5xl z-0">
            {title}
          </h1>
          <div className="relative w-[300px]">
            <input
              type="text"
              className="bg-[#ffffff]/80 z-[1] p-2 w-full rounded-2xl text-black border-2 border-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                lang === "en" ? "Search video ..." : "بحث عن فيديو ..."
              }
            />
            <Search
              className={`text-black top-2  absolute ${lang === "en" ? "right-0" : "left-0"}`}
            ></Search>
          </div>

          {filteredItems.map((video: any, index: number) => (
            <div
              ref={setRowRef(index)}
              key={video.id}
              className={`flex gap-[10%] justify-center items-center relative ${
                index % 2
                  ? "sm:flex-row-reverse flex-col"
                  : "flex-col sm:flex-row"
              } min-h-[50vh] w-full px-4 opacity-0 will-change-transform`}
            >
              <div
                className={`flex flex-col w-80  h-[200px] pt-12  justify-center items-center gap-6 `}
              >
                {/* <Image
                  className={`z-[0] ${
                    index % 2 === 0 ? "left-[10%]" : "right-[10%]"
                  } stick absolute max-w-[200px] left- object-contain max-h-[160px]`}
                  src={`/${video.product.flavor.primaryImg}`}
                  width={200}
                  height={200}
                  alt="stick"
                /> */}
                <h2 className=" text-xl sm:text-3xl xl:text-4xl font-bold text-black relative ">
                  {lang === "en"
                    ? renderAnimatedText(video.name, index)
                    : video.name}
                </h2>
                <Link
                  href={`/${lang}/Catigories/Products/${video.product.code}`}
                  className="bg-[#ffffff]/80 text-black rounded-2xl py-2 px-4 text-sm sm:text-lg"
                >
                  {t.videoWrapper.details}
                </Link>
              </div>

              <div className="rounded-2xl w-[320px] h-80 md:w-[500px] md:h-94 flex justify-evenly items-center p-4 relative flex-col overflow-hidden">
                {!showVideo[index] ? (
                  <button
                    onClick={() => toggleVideo(index)}
                    className="relative overflow-hidden w-[90%] h-[315px] sm:h-[450px] max-w-[700px] cursor-pointer"
                    aria-label={`Play video ${video.name}`}
                  >
                    <Image
                      src={`/${video.coverImg}`}
                      alt={`Cover for ${video.name}`}
                      fill
                      className="object-cover rounded-3xl"
                      priority
                    />
                    <div className="overflow-hidden rounded-3xl absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#000000]/80 transition hover:from-transparent hover:to-[#000000]/80">
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
                  <iframe
                    width="560"
                    height="315"
                    onClick={() => toggleVideo(index)}
                    className="rounded-3xl w-[90%] h-[315px] sm:h-[450px]! max-w-[700px]!"
                    src={`${video.embededLink}?autoplay=1`}
                    title={`${video.name} video player`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
