"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
const xsmallL = {
  width: "400px",
  height: "400px",
  transformOrigin: "right",
  transform: "scale(0.6)",
  marginRight: "-100px",
  transition: "all 0.3s ease",
  zIndex: "1",
  opacity: 1,
};
const smallL = {
  width: "400px",
  height: "400px",
  transformOrigin: "right",
  transform: "scale(0.7)",
  marginRight: "-30px",
  transition: "all 0.3s ease",
  zIndex: "2",
  opacity: 1,
};
const large = {
  width: "400px",
  height: "400px",
  transition: "all 0.3s ease",
  zIndex: "3",
  transform: "scale(1)",
  opacity: 1,
};
const smallR = {
  width: "400px",
  height: "400px",
  transform: "scale(0.7)",
  transformOrigin: "left",
  marginLeft: "-30px",
  transition: "all 0.3s ease",
  zIndex: "2",
  opacity: 1,
};
const xsmallR = {
  width: "400px",
  height: "400px",
  transformOrigin: "left",
  transform: "scale(0.6) ",
  marginLeft: "-100px",
  transition: "all 0.3s ease",
  zIndex: "1",
  opacity: 1,
};

const xsmallLM = {
  position: "absolute",
  width: "300px",
  height: "380px",
  transformOrigin: "top",
  transform: "scale(0.8)",
  transition: "all 0.3s ease",
  zIndex: "1",
  opacity: 1,
  marginBottom: "80px ",
};
const smallLM = {
  position: "absolute",
  width: "300px",
  height: "380px",
  transformOrigin: "top",
  transform: "scale(0.9)",
  transition: "all 0.3s ease",
  zIndex: "2",
  opacity: 1,
  marginBottom: "49px ",
};
const largeM = {
  width: "300px",
  height: "380px",
  transition: "all 0.3s ease",
  transform: "scale(1) ",
  zIndex: "3",
  opacity: 1,
  background: "#ffffffe3",
};
export default function Carousal3D({
  items,
  title,
  all,
  noCats,
  lang,
  color,
}: {
  title: string;
  all: string;
  noCats: string;
  lang: string;
  color: string;
  items: any;
}) {
  const extendedItems = [
    ...items.slice(-4), // Last 4 items at the beginning
    ...items, // Original items
    ...items.slice(0, 4), // First 4 items at the end
  ];

  // Push refs to array
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    divRefs.current[index] = el;
  };
  const containerRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [isMounted, setIsMounted] = useState(false);
  useGSAP(() => {
    if (!isMounted || !containerRef.current || !divRefs.current) return;
    // Clear previous timeline
    if (tlRef.current) {
      tlRef.current.kill();
    }

    // Create new timeline
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% 41%",
        end: "20% 41%",
      },
    });

    // Letter animation
    tlRef.current.fromTo(
      divRefs.current,
      {
        opacity: 0,
        y: 80,
        duration: 1,
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          from: "center",
          each: 0.2,
          amount: 0.3,
        },
        ease: "expo.in",
      }
    );

    // Additional scroll-based animations can be added to the timeline

    return () => {
      // Cleanup
      if (tlRef.current) {
        tlRef.current.kill();
      }
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [lang, isMounted]); // Re-run when lang changes

  // Set initial styles based on screen size
  const [opacitySmall, setOpacitySmall] = useState(
    isMobile
      ? [{ opacity: "1" }, { opacity: "0" }, { opacity: "0" }]
      : [
          { opacity: "0" },
          { opacity: "0" },
          { opacity: "1" },
          { opacity: "0" },
          { opacity: "0" },
        ]
  );
  const [styles, setStyles] = useState(
    isMobile
      ? [largeM, smallLM, xsmallLM]
      : [xsmallL, smallL, large, smallR, xsmallR]
  );

  // Calculate max steps based on current view mode
  const maxSteps = isMobile ? items.length - 3 : items.length - 5;
  const isPrevDisabled = step <= 0;
  const isNextDisabled = step >= maxSteps;

  // Check screen size and update styles
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1100;
      setIsMobile(mobile);
      setStyles(
        mobile
          ? [largeM, smallLM, xsmallLM]
          : [xsmallL, smallL, large, smallR, xsmallR]
      );
      setOpacitySmall(
        mobile
          ? [{ opacity: "1" }, { opacity: "0" }, { opacity: "0" }]
          : [
              { opacity: "0" },
              { opacity: "0" },
              { opacity: "1" },
              { opacity: "0" },
              { opacity: "0" },
            ]
      );
      // Reset step when changing view modes to prevent out-of-bounds
      setStep(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items.length]);

  const [virtualStep, setVirtualStep] = useState(4);
  const getStyleForIndex = (index: number) => {
    if (items.length < (isMobile ? 3 : 5)) return;
    const styleIndex = index - virtualStep;
    const visibleCount = isMobile ? 3 : 5;

    if (styleIndex >= 0 && styleIndex < visibleCount) {
      return styles[styleIndex];
    }
    return { opacity: 0, display: "none" };
  };

  const getStyleForOpacityIndex = (index: number) => {
    if (items.length < (isMobile ? 3 : 5)) return;
    const styleIndex = index - virtualStep;
    const visibleCount = isMobile ? 3 : 5;

    if (styleIndex >= 0 && styleIndex < visibleCount) {
      return opacitySmall[styleIndex];
    }
    return { opacity: 0 };
  };
  // Replace your current handleNext and handlePrev with these:

  const handleNext = () => {
    setVirtualStep((prev) => {
      const newStep = prev + 1;
      // If we reach the end of the extended array, wrap to the "real" start
      if (newStep >= extendedItems.length - 4) {
        return 4; // Jump back to first real item position
      }
      return newStep;
    });
  };

  const handlePrev = () => {
    setVirtualStep((prev) => {
      const newStep = prev - 1;
      // If we reach before the start of the extended array, wrap to the "real" end
      if (newStep < 0) {
        return extendedItems.length - 5; // Jump to last real item position
      }
      return newStep;
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }
  return (
    <div
      ref={containerRef}
      style={{ transformStyle: "preserve-3d" }}
      className="relative flex z-[1] h-full justify-center items-center max-w-6xl"
    >
      {items.length === 0 ? (
        <div className="flex flex-col gap-8 max-w-8xl justify-center items-center w-full py-20 z-[1] ">
          <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-black">
            {noCats}
          </h1>
          <div
            className={`w-[300px] h-[200px] md:w-[400px] md:h-[300px] justify-center items-center bg-[url(${`/${lang === "en" ? "villadiLogo.svg" : "villadiLogoAr.svg"}`})] bg-center bg-contain bg-no-repeat`}
          ></div>
        </div>
      ) : (
        <>
          <div className="flex items-center flex-col  gap-8 justify-center h-auto  max-w-6xl">
            <h1 className="text-2xl sm:text-4xl xl:text-5xl text-black font-bold pb-8">
              {title}
            </h1>
            <div
              className={`flex items-center  flex-col sm:flex-row justify-center sm:justify- h-auto  w-full ${
                items.length < (isMobile ? 3 : 5) ? "gap-8 flex-wrap" : ""
              }`}
            >
              {(items.length < (isMobile ? 3 : 5) ? items : extendedItems)?.map(
                (item: any, index: any) => (
                  <div
                    ref={(el) => {
                      addToRefs(el, index);
                    }}
                    style={{
                      ...getStyleForIndex(index),
                    }}
                    key={index}
                    className={`w-[300px] h-[300px] sm:w-[350px] sm:h-[300px] bg-white/70 flex justify-center items-center relative rounded-2xl flex-col gap-4 ${
                      items.length < (isMobile ? 3 : 5) ? "mb-[66px]" : ""
                    }`}
                  >
                    <div
                      className="absolute w-full h-full before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%] before:opacity-70
             after:absolute after:content-[''] after:w-1/3 after:h-1/2 after:bg-[#ffffff66] after:bottom-[-10px] after:blur-2xl after:right-[15%] after:opacity-50 z-[0] "
                    ></div>

                    <Image
                      className="relative w-[90%] h-[200px] object-contain"
                      src={`${item ? item.img : lang === "en" ? "/villadiLogo.svg" : "/villadiLogoAr.svg"}`}
                      alt="category image"
                      width={300}
                      height={400}
                    />
                    <h2
                      style={{
                        ...getStyleForOpacityIndex(index),
                      }}
                      className="text-xl sm:text-2xl text-center p-2  font-bold text-black z-[1]"
                    >
                      {item.name}
                    </h2>
                    <Link
                      style={{
                        ...getStyleForOpacityIndex(index),
                      }}
                      className="bg-black text-white px-4 py-3 z-[0] rounded-2xl"
                      href={`/${lang}/Catigories/${item.code}/Products`}
                    >
                      {lang === "en" ? "Category's products" : "منتجات الصنف"}
                    </Link>
                  </div>
                )
              )}
            </div>
            <div className="flex relative items-center justify-center w-full gap-8">
              {items && items.length >= (isMobile ? 3 : 5) && (
                <ArrowLeft
                  onClick={handlePrev}
                  className="cursor-pointer text-black"
                />
              )}
              <div className="bg-white text-black font-bold  text-center  p-2 rounded-[50px] gap-2 relative bottom-[15px] flex flex-col justify-center items-center text-sm sm:text-lg">
                {items && (
                  <Link
                    href={`/${lang}/Catigories`}
                    className=" py-2 px-6 text-black rounded-2xl "
                  >
                    {all}
                  </Link>
                )}
              </div>
              {items && items.length >= (isMobile ? 3 : 5) && (
                <ArrowRight
                  onClick={handleNext}
                  className="cursor-pointer text-black"
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
