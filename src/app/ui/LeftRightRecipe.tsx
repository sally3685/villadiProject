"use client";
import Image from "next/image";
import React, { useRef, useCallback, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register plugins once

type LeftRightMenuProps = {
  items: any;
  t: any;
  title: string;
  lang: string;
};

export default function LeftRightMenuRec({
  items,
  t,
  title,
  lang,
}: LeftRightMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<gsap.core.Tween[]>([]);
  const [search, setSearch] = useState("");
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
      <div
        ref={setTitleRef(index)}
        className="overflow-hidden relative break-words"
      >
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
  const filteredItems =
    search !== "" || !search
      ? items.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : items;
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

      if (!items.length || !rowRefs.current.length) return;

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
            onEnter: () => animateTitleLetters(index), // Animate letters when row enters
          },
        });

        animationRef.current.push(anim);
      });

      // Animate title letters

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    {
      dependencies: [filteredItems],
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-8 max-w-8xl justify-center items-center w-full pt-42 z-[1] "
    >
      <h1 className="text-black font-bold text-3xl sm:text-4xl z-0">{title}</h1>
      {items.length === 0 ? (
        <>
          <h1 className="text-2xl md:text-5xl text-black">
            {t.recipesWrapper.noRecs}
          </h1>
          <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] justify-center items-center bg-[url(/villadiLogo.svg)] bg-center bg-contain bg-no-repeat"></div>
        </>
      ) : (
        <>
          <input
            type="text"
            className="bg-white/50 z-[1] p-2 rounded-2xl text-black border-2 border-black"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {filteredItems.map((item: any, index: any) => (
            <div
              ref={setRowRef(index)}
              key={item.id}
              className={`flex gap-[15%] justify-center   items-center relative ${
                index % 2
                  ? "sm:flex-row-reverse flex-col"
                  : "flex-col sm:flex-row "
              } min-h-[50vh] w-full px-4 opacity-0 will-change-transform`}
            >
              <div className="flex flex-col w-80 h-80 justify-center items-center gap-6">
                <h1 className="text-5xl font-bold text-black relative  break-words">
                  {renderAnimatedText(item.name, index)}
                </h1>
                <Link
                  href={`/${lang}/Recipes/${item.id}/`}
                  className="bg-[#34351A]/50 text-white rounded-2xl py-2 px-4"
                >
                  {t.recipesWrapper.all}
                </Link>
              </div>

              <div className="bg-[#34351A]/50 rounded-2xl w-[320px] h-80 md:w-[450px] md:h-80 flex justify-evenly items-center p-4 relative flex-col overflow-hidden">
                <div
                  className="absolute w-full h-full before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%] before:opacity-70
             after:absolute after:content-[''] after:w-1/3 after:h-1/2 after:bg-[#ffffff66] after:bottom-[-10px] after:blur-2xl after:right-[15%] after:opacity-50 z-[0]"
                ></div>
                <Image
                  className="absolute bottom-0 w-[200px] h-[200px] object-contain"
                  src={`/${item ? item.flavor.primaryImg : "villadiLogo.svg"}`}
                  alt="category image"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
