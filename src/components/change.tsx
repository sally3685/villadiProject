"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import Link from "next/link";
const Change = ({
  array,
  message,
  lang,
}: {
  lang: string;
  message: string | null;
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
    array?.length ? array[step].img : "villadiLogo.svg",
    array?.length ? array[step].flavor.primaryImg : "nothing.png",
    array?.length ? array[step].secondryImg : "nothing.png",
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // When 50% of component is visible
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    if (!array || array.length <= 1) return;

    const autoScroll = () => {
      if (!isVisible || isPaused) return;

      setStep((prev) => {
        if (prev >= array.length - 1) return 0; // Loop to start
        return prev + 1;
      });
    };

    // Clear any existing interval
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    // Set up new interval if component is visible and not paused
    if (isVisible && !isPaused) {
      autoScrollRef.current = setInterval(autoScroll, 5000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [array, isVisible, isPaused]);
  useEffect(() => {
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);
  const handleNext = () => {
    if (array && step < array.length - 1) {
      // Pause auto-scrolling
      setIsPaused(true);

      // Clear any pending resume
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }

      // Update step
      setStep((prev) => prev + 1);

      // Schedule resume after 5 seconds
      resumeTimerRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
  };

  const handlePrev = () => {
    if (array && step > 0) {
      // Pause auto-scrolling
      setIsPaused(true);

      // Clear any pending resume
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }

      // Update step
      setStep((prev) => prev - 1);

      // Schedule resume after 5 seconds
      resumeTimerRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
  };
  useEffect(() => {
    const mainElement = document.getElementById("section1");

    if (mainElement) {
      mainElement.setAttribute(
        "data-bgcolor",
        array?.length ? array[step].color : "#ffffff"
      );
      mainElement.setAttribute(
        "data-color",
        array?.length ? array[step].p_color : "#000000"
      );
    }
    setSrcImage([
      array?.length ? array[step].img : "villadiLogo.svg",
      array?.length ? array[step].flavor.primaryImg : "nothing.png",
      array?.length ? array[step].secondryImg : "nothing.png",
    ]);
  }, [step]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // Only animate if all refs are available
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
        !containerRef.current
      )
        return;

      // Create a reference to store the timeline
      // Kill any existing timeline before creating a new one
      if (tlRef.current) {
        tlRef.current.kill();
      }

      // Create new timeline
      tlRef.current = gsap.timeline();
      const mainElement = document.getElementById("section1");

      if (mainElement) {
        mainElement.setAttribute(
          "data-bgcolor",
          array?.length ? array[step].color : "#000000"
        );
        mainElement.setAttribute(
          "data-color",
          array?.length ? array[step].p_color : "#ffffff"
        );
      }

      // Set initial states
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
        { opacity: 0 }
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

      // Build the animation timeline
      tlRef.current
        .fromTo(
          containerRef.current,
          { y: -250 },
          {
            y: 0,
            duration: 1,
            rotate: -4,
            ease: "bounce",
          }
        )
        .fromTo(
          tomato1Ref.current,
          { x: 0, y: 0 },
          { x: -190, y: -220, opacity: 1 },
          "-=0.2"
        )
        .fromTo(
          stickRef.current,
          { x: 0, y: 0 },
          { x: 140, y: 150, rotate: 40, opacity: 1 },
          "<"
        )
        .fromTo(
          tomato2Ref.current,
          { x: 0, y: 0 },
          { x: 130, y: 0, opacity: 1 },
          "<"
        )
        .fromTo(
          stick2Ref.current,
          { x: 0, y: 0 },
          { x: -140, y: 0, rotate: -45, opacity: 1 },
          "<"
        )
        .fromTo(
          stick3Ref.current,
          { x: 0, y: 0 },
          { x: 150, y: -200, rotate: -30, opacity: 1 },
          "<"
        )
        .fromTo(
          stick4Ref.current,
          { x: 0, y: 0 },
          { x: -150, y: 200, rotate: 30, opacity: 1 },
          "<"
        )
        .fromTo(
          tomato1Ref.current,
          { y: -230 },
          { y: -220, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "="
        )
        .fromTo(
          stickRef.current,
          { y: 140 },
          { y: 150, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "="
        )
        .fromTo(
          [stick2Ref.current, tomato2Ref.current],
          { y: -10 },
          { y: 0, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "="
        )
        .fromTo(
          stick3Ref.current,
          { y: -210 },
          { y: -200, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "="
        )
        .fromTo(
          stick4Ref.current,
          { y: 190 },
          { y: 200, ease: "linear", duration: 1, yoyo: true, repeat: -1 },
          "="
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
          "-=0.4"
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
          "-=0.4"
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
          }
        );

      // Cleanup function
      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
    },
    { scope: containerRef, dependencies: [srcImage, step] } // Added step to dependencies
  );

  return (
    <div className="w-full h-full flex justify-center items-end p-8 relative ">
      <ArrowLeftCircleIcon
        size={40}
        className={`z-10 absolute top-[90%] sm:top-[50%] w-[50%] left-[0%] ${
          array && step < array.length - 1
            ? "cursor-pointer text-white"
            : "cursor-not-allowed text-stone-400"
        }`}
        onClick={handleNext}
      />
      <div
        className="absolute w-1/2 h-1/2 before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%] before:opacity-70
             after:absolute after:content-[''] after:w-1/3 after:h-1/2 after:bg-[#ffffff66] after:bottom-0 after:blur-2xl after:right-[15%] after:opacity-50 "
      ></div>
      <div
        ref={containerRef}
        className="chips  w-full h-full bg-center bg-no-repeat bg-contain relative flex justify-center items-center max-w-[440px] max-h-[500px] scale-[0.7] sm:scale-[0.8] lg:scale-[0.9] xl:scale-[1] min-w-[320px]"
        style={{
          backgroundImage: `url(${srcImage[0]})`,
        }}
      >
        <Image
          ref={tomato1Ref}
          className="z-[0] tomato1 absolute max-w-[100px] object-contain max-h-[160px] "
          src={`/${srcImage[1]}`}
          width={80}
          height={100}
          alt="tomato"
        />
        <Image
          ref={tomato2Ref}
          className="z-[0] tomato2 absolute max-w-[100px] object-contain max-h-[160px]"
          src={`/${srcImage[1]}`}
          width={80}
          height={100}
          alt="tomato"
        />
        <Image
          ref={stickRef}
          className="z-[0] stick absolute max-w-[100px] object-contain max-h-[160px]"
          src={`/${srcImage[2]}`}
          width={80}
          height={80}
          alt="stick"
        />
        <Image
          ref={stick2Ref}
          className="z-[0] stick2 absolute max-w-[100px] object-contain max-h-[160px]"
          src={`/${srcImage[2]}`}
          width={80}
          height={100}
          alt="stick"
        />
        <Image
          ref={stick3Ref}
          className="z-[0] stick3 absolute max-w-[100px] object-contain max-h-[160px]"
          src={`/${srcImage[2]}`}
          width={80}
          height={100}
          alt="stick"
        />
        <Image
          ref={stick4Ref}
          className="z-[0] stick4 absolute max-w-[100px] object-contain max-h-[160px]"
          src={`/${srcImage[2]}`}
          width={80}
          height={100}
          alt="stick"
        />
        <div className="absolute w-full h-full">
          <div
            ref={box2Ref}
            className="absolute left-1/2 top-[-30%] md:top-0  md:left-[100%] w-40 h-32 bg-white flex items-start justify-center  mask-[url(/border.svg)] mask-center mask-contain mask-no-repeat before:absolute before:content-[''] before:w-full before:h-full before:bg-[url(/border_1.svg)] before:bg-contain before:bg-center before:bg-no-repeat"
          >
            <Link
              ref={textRef}
              href={
                array
                  ? `${lang}/Catigories/${array[step].category.code}/Products`
                  : `${lang}/Catigories`
              }
              className="text-black relative font-bold rotate-[15deg] text-center top-[20%] w-[90%] h-[55%]"
            >
              {array?.length ? array[step].category.name : message}
            </Link>
          </div>
          <div
            ref={poster1Ref}
            className="relative w-full h-64 top-[20%] left-[-17%]"
          >
            <div
              ref={circleRef}
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 before:absolute before:content-[''] before:w-8 before:h-8 before:border-4 before:border-black before:rounded-full before:-left-2 before:-top-2"
            />

            <div
              ref={cornerRef}
              className="absolute top-1/2 left-1/2 transform -translate-y-0 -translate-x-full rounded-tl-2xl"
              style={{
                borderTop: "0 solid black",
                borderLeft: "0 solid black",
                borderRight: "none",
                borderBottom: "none",
              }}
            />
            <div
              ref={boxRef}
              className="absolute top-full left-[-10%] w-32 h-20 bg-white border-4 border-gray-800 flex items-center justify-center  rounded-2xl"
            >
              <Link
                ref={textRef}
                href={
                  array
                    ? `${lang}/Catigories/Products/${array[step].code}`
                    : `${lang}/Catigories`
                }
                className="text-gray-800 font-bold opacity-0 text-center"
              >
                {array?.length ? array[step].name : message}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ArrowRightCircleIcon
        size={40}
        className={`absolute w-[50%] right-[0%] top-[90%] sm:top-[50%] ${
          array && step > 0
            ? "cursor-pointer text-white"
            : "cursor-not-allowed text-stone-400"
        }`}
        onClick={handlePrev}
      />
    </div>
  );
};

export default Change;
