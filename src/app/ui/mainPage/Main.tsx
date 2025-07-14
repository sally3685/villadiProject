"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import Link from "next/link";
import { EmptyState } from "@/app/ui/EmptyState";
import { useMain } from "./useMain";
const Main = ({
  array,
  messageEn,
  messageAr,
  lang,
}: {
  lang: string;
  messageEn: string | "no Categories";
  messageAr: string | "لا يوجد منتجات";
  array:
    | ({
        category: {
          name: string;
          id: string;
          img: string;
          lang: string;
          code: string;
          detailes: string;
        };
        flavor: {
          name: string;
          id: string;
          lang: string;
          primaryImg: string;
        };
      } & {
        name: string;
        code: string;
        detailes: string;
        img: string;
        secondryImg: string;
        categoryId: string;
        flavorId: string;
        color: string;
        p_color: string;
        lang: string;
      })[]
    | null;
}) => {
  const [step, setStep] = useState(0);

  const [srcImage, setSrcImage] = useState<string[]>([
    array?.length
      ? array[step].img
      : lang === "en"
        ? "/villadiLogo.svg"
        : "/villadiLogoAr.svg",
    array?.length ? array[step].flavor.primaryImg : "nothing.png",
    array?.length ? array[step].secondryImg : "nothing.png",
  ]);

  const containerRef = useRef<HTMLImageElement>(null);
  const tomato1Ref = useRef<HTMLImageElement>(null);
  const tomato2Ref = useRef<HTMLImageElement>(null);
  const stickRef = useRef<HTMLImageElement>(null);
  const stick2Ref = useRef<HTMLImageElement>(null);
  const stick3Ref = useRef<HTMLImageElement>(null);
  const stick4Ref = useRef<HTMLImageElement>(null);
  const poster1Ref = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const cornerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout>(null);
  const observerRef = useRef<IntersectionObserver>(null);

  useMain(
    containerRef,
    observerRef,
    setIsVisible,
    array,
    isVisible,
    isPaused,
    setStep,
    autoScrollRef,
    resumeTimerRef,
    setSrcImage,
    step,
    lang,
  );
  const handleNext = () => {
    if (array && step < array.length - 1) {
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

  const handlePrev = () => {
    if (array && step > 0) {
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

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const main = document.querySelector("main") as HTMLElement;
      if (
        !tomato1Ref.current ||
        !tomato2Ref.current ||
        !stickRef.current ||
        !stick2Ref.current ||
        !stick3Ref.current ||
        !stick4Ref.current ||
        !poster1Ref.current ||
        !circleRef.current ||
        !cornerRef.current ||
        !boxRef.current ||
        !box2Ref.current ||
        !textRef.current ||
        !containerRef.current ||
        !main
      )
        return;

      if (tlRef.current) {
        tlRef.current.kill();
      }

      tlRef.current = gsap.timeline();

      tlRef.current.set(
        [
          tomato1Ref.current,
          tomato2Ref.current,
          stickRef.current,
          stick2Ref.current,
          stick3Ref.current,
          stick4Ref.current,
          circleRef.current,
          cornerRef.current,
          boxRef.current,
          box2Ref.current,
          textRef.current,
        ],
        { opacity: 0 },
      );
      tlRef.current.set([circleRef.current, boxRef.current, box2Ref.current], {
        scale: 0,
      });
      tlRef.current.set(cornerRef.current, {
        width: 0,
        height: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      });
      if (isVisible)
        tlRef.current.to(main, {
          backgroundColor: array && array[step] ? array[step].color : "#000000",
          duration: 0.5,
          ease: "power2.inOut",
          "--colorArrow":
            array && array[step] ? array[step].p_color : "#ffffff",
        });
      tlRef.current

        .fromTo(
          containerRef.current,
          { y: -250 },
          {
            y: 0,
            duration: 1,
            rotate: -4,
            ease: "bounce",
          },
          "<",
        )

        .fromTo(
          tomato1Ref.current,
          { x: 0, y: 0 },
          { x: -190, y: -220, opacity: 1 },
          "-=0.2",
        )
        .fromTo(
          stickRef.current,
          { x: 0, y: 0 },
          { x: 140, y: 150, rotate: 40, opacity: 1 },
          "<",
        )
        .fromTo(
          tomato2Ref.current,
          { x: 0, y: 0 },
          { x: 130, y: 0, opacity: 1 },
          "<",
        )
        .fromTo(
          stick2Ref.current,
          { x: 0, y: 0 },
          { x: -140, y: 0, rotate: -45, opacity: 1 },
          "<",
        )
        .fromTo(
          stick3Ref.current,
          { x: 0, y: 0 },
          { x: 150, y: -200, rotate: -30, opacity: 1 },
          "<",
        )
        .fromTo(
          stick4Ref.current,
          { x: 0, y: 0 },
          { x: -150, y: 200, rotate: 30, opacity: 1 },
          "<",
        )
        .fromTo(
          tomato1Ref.current,
          { y: -230 },
          { y: -220, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "=",
        )
        .fromTo(
          stickRef.current,
          { y: 140 },
          { y: 150, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "=",
        )
        .fromTo(
          [stick2Ref.current, tomato2Ref.current],
          { y: -10 },
          { y: 0, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "=",
        )
        .fromTo(
          stick3Ref.current,
          { y: -210 },
          { y: -200, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "=",
        )
        .fromTo(
          stick4Ref.current,
          { y: 190 },
          { y: 200, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "=",
        )
        .to(circleRef.current, {
          opacity: 1,
          scale: 1,
        })
        .to(cornerRef.current, {
          opacity: 1,
          width: "50%",
          borderTopWidth: 4,
        })
        .to(
          cornerRef.current,
          {
            height: "50%",
            borderLeftWidth: 4,
          },
          "-=0.4",
        )
        .to(boxRef.current, {
          opacity: 1,
          scale: 1,
        })
        .to(
          textRef.current,
          {
            opacity: 1,
          },
          "-=0.4",
        )
        .fromTo(
          box2Ref.current,
          {
            opacity: 1,
            scale: 1,
            rotate: -10,
          },
          {
            rotate: 10,
          },
        );

      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
    },
    { scope: containerRef, dependencies: [srcImage, step, isVisible] }, // Added step to dependencies
  );
  useEffect(() => {}, [srcImage]);
  return (
    <div className="relative flex h-full w-full items-center justify-center p-8 pt-[120px]">
      {!array || array?.length === 0 ? (
        <EmptyState
          noItems={lang === "en" ? messageEn : messageAr}
          lang={lang}
        />
      ) : (
        <>
          <ArrowLeftCircleIcon
            size={40}
            className={`absolute top-[90%] left-[0%] z-10 w-[50%] sm:top-[50%] ${
              array && step < array.length - 1
                ? "cursor-pointer text-white"
                : "cursor-not-allowed text-stone-400"
            }`}
            onClick={handleNext}
          />
          <div className="absolute h-1/2 w-1/2 before:absolute before:top-0 before:left-[22%] before:h-full before:w-1/2 before:bg-[#ffffffa6] before:opacity-70 before:blur-3xl before:content-[''] after:absolute after:right-[15%] after:bottom-0 after:h-1/2 after:w-1/3 after:bg-[#ffffff66] after:opacity-50 after:blur-2xl after:content-['']"></div>
          <div
            ref={containerRef}
            className="relative flex h-full max-h-[500px] w-full max-w-[440px] min-w-[320px] scale-[0.7] items-center justify-center bg-contain bg-center bg-no-repeat sm:scale-[0.8] lg:scale-[0.9] xl:scale-[1]"
            style={{
              backgroundImage: `url(${srcImage[0]})`,
            }}
          >
            <Image
              ref={tomato1Ref}
              className="tomato1 absolute z-[0] max-h-[160px] w-auto max-w-[150px] object-contain"
              src={`${srcImage[1]}`}
              width={80}
              height={90}
              alt="flavor"
              priority={true}
            />
            <Image
              ref={tomato2Ref}
              className="tomato2 absolute z-[0] max-h-[160px] w-auto max-w-[150px] object-contain"
              src={`${srcImage[1]}`}
              width={80}
              height={90}
              alt="flavor"
              priority={true}
            />
            <Image
              ref={stickRef}
              className="stick absolute z-[0] max-h-[160px] w-auto max-w-[100px] object-contain"
              src={`${srcImage[2]}`}
              width={80}
              height={80}
              alt="piece"
              priority={true}
            />
            <Image
              ref={stick2Ref}
              className="stick2 absolute z-[0] max-h-[160px] w-auto max-w-[100px] object-contain"
              src={`${srcImage[2]}`}
              width={80}
              height={100}
              alt="piece"
              priority={true}
            />
            <Image
              ref={stick3Ref}
              className="stick3 absolute z-[0] max-h-[160px] w-auto max-w-[100px] object-contain"
              src={`${srcImage[2]}`}
              width={80}
              height={100}
              alt="piece"
              priority={true}
            />
            <Image
              ref={stick4Ref}
              className="stick4 absolute z-[0] max-h-[160px] w-auto max-w-[100px] object-contain"
              src={`${srcImage[2]}`}
              width={80}
              height={100}
              alt="piece"
              priority={true}
            />
            <div className="absolute h-full w-full">
              <div
                ref={box2Ref}
                className="absolute top-[-30%] left-1/2 flex h-32 w-40 items-start justify-center bg-white mask-[url(/border.svg)] mask-contain mask-center mask-no-repeat before:absolute before:h-full before:w-full before:bg-[url(/border_1.svg)] before:bg-contain before:bg-center before:bg-no-repeat before:content-[''] md:top-0 md:left-[100%]"
              >
                <Link
                  ref={textRef}
                  href={
                    array
                      ? `${lang}/Catigories/${array[step].category.code}/Products`
                      : `${lang}/Catigories`
                  }
                  className="relative top-[20%] h-[55%] w-[90%] rotate-[15deg] text-center font-bold text-black"
                >
                  {array[step].category.name}
                </Link>
              </div>
              <div
                ref={poster1Ref}
                className="relative top-[20%] left-[-17%] h-64 w-full"
              >
                <div
                  ref={circleRef}
                  className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black before:absolute before:-top-2 before:-left-2 before:h-8 before:w-8 before:rounded-full before:border-4 before:border-black before:content-['']"
                />

                <div
                  ref={cornerRef}
                  className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-0 transform rounded-tl-2xl"
                  style={{
                    borderTop: "0 solid black",
                    borderLeft: "0 solid black",
                    borderRight: "none",
                    borderBottom: "none",
                  }}
                />
                <div
                  ref={boxRef}
                  className="absolute top-full left-[-10%] flex h-20 w-32 items-center justify-center rounded-2xl border-4 border-gray-800 bg-white"
                >
                  <Link
                    ref={textRef}
                    href={
                      array
                        ? `${lang}/Catigories/Products/${array[step].code}`
                        : `${lang}/Catigories`
                    }
                    className="text-center font-bold text-gray-800 opacity-0"
                  >
                    {array[step].name}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ArrowRightCircleIcon
            size={40}
            className={`absolute top-[90%] right-[0%] w-[50%] sm:top-[50%] ${
              array && step > 0
                ? "cursor-pointer text-white"
                : "cursor-not-allowed text-stone-400"
            }`}
            onClick={handlePrev}
          />
        </>
      )}
    </div>
  );
};

export default Main;
