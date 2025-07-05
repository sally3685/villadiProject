"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";
const Bars = ({ t, myFont3 }: { t: any; myFont3: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const marquee3Ref = useRef<HTMLDivElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // Only animate if all refs are available
      if (
        !marqueeRef.current ||
        !marquee2Ref.current ||
        !marquee3Ref.current ||
        !containerRef.current ||
        !ScrollTrigger ||
        !tlRef
      )
        return;
      const marqueeContent = marqueeRef.current!.children;
      const marqueeWidth = (marqueeContent[0] as HTMLElement).offsetWidth;
      const marqueeContent2 = marquee2Ref.current.children;
      const marqueeWidth2 = (marqueeContent2[0] as HTMLElement).offsetWidth;
      const marqueeContent3 = marquee3Ref.current.children;
      const marqueeWidth3 = (marqueeContent3[0] as HTMLElement).offsetWidth;
      // Create a reference to store the timeline
      // Kill any existing timeline before creating a new one
      if (tlRef.current) {
        tlRef.current.kill();
      }

      // Create new timeline
      tlRef.current = gsap.timeline();
      gsap.to(marqueeContent, {
        x: -marqueeWidth, // Move the content to the left by its width
        duration: 30, // Adjust the duration for speed
        ease: "none",
        repeat: -1, // Infinite loop
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth), // Reset position when it goes out of view
        },
      });

      const secondBarAnimation = gsap.to(marqueeContent2, {
        x: marqueeWidth2, // Move to the right
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth2),
        },
        paused: true, // Start paused
      });
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: marqueeContent2,
        start: "top bottom", // When the top of the second bar reaches the center of the viewport
        end: "bottom top", // When the bottom of the second bar reaches the center of the viewport
        onEnter: () => {
          setTimeout(() => {
            secondBarAnimation.play();
          }, 200);
        }, // Play animation when the second bar enters the viewport
        onLeaveBack: () => secondBarAnimation.pause(), // Pause animation when the second bar leaves the viewport
      });

      const thirdBarAnimation = gsap.to(marqueeContent3, {
        x: -marqueeWidth3, // Move to the right
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth3),
        },
        paused: true, // Start paused
      });
      ScrollTrigger.create({
        trigger: marqueeContent3,
        start: "top bottom", // When the top of the second bar reaches the center of the viewport
        end: "bottom top", // When the bottom of the second bar reaches the center of the viewport
        onEnter: () => {
          setTimeout(() => {
            thirdBarAnimation.play();
          }, 200);
        }, // Play animation when the second bar enters the viewport
        onLeaveBack: () => thirdBarAnimation.pause(), // Pause animation when the second bar leaves the viewport
      }); // Cleanup function
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
      className={`absolute z-[0] h-[300x] w-full rotate-[-5deg] ${myFont3.className} font-bold`}
    >
      <div
        ref={marqueeRef}
        className=" text-2xl sm:text-3xl lg:text-4xl py-[8px]  mt-12my-5 h-auto w-full relative  overflow-hidden"
      >
        <div className="w-full h-full flex  gap-[10px] items-center">
          <p className="w-full text-center font-bold text-black">{t.Bar.two}</p>
          <p className="w-full text-center font-bold text-white">{t.Bar.one}</p>
          <p className="w-full text-center font-bold text-black hidden sm:block">
            {t.Bar.three}
          </p>
        </div>
        <div className="w-full left-full absolute h-full flex  gap-[10px] items-center top-0">
          <p className="w-full text-center font-bold text-black">{t.Bar.two}</p>
          <p className="w-full text-center font-bold text-white">{t.Bar.one}</p>
          <p className="w-full text-center font-bold text-black hidden sm:block">
            {t.Bar.three}
          </p>
        </div>
      </div>

      <div
        ref={marquee2Ref}
        className=" text-2xl sm:text-3xl lg:text-4xl py-[8px]  my-5 h-auto w-full relative overflow-hidden"
      >
        <div className="w-full h-full flex  gap-[10px] items-center">
          <p className="w-full text-center font-bold text-black">
            {t.Bar.three}
          </p>

          <p className="w-full text-center font-bold text-white">{t.Bar.two}</p>
          <p className="w-full text-center font-bold text-black hidden sm:block">
            {t.Bar.one}
          </p>
        </div>
        <div className="w-full -left-full absolute h-full flex  gap-[10px] items-center top-0">
          <p className="w-full text-center font-bold text-black ">
            {t.Bar.three}
          </p>

          <p className="w-full text-center font-bold text-white">{t.Bar.two}</p>
          <p className="w-full text-center font-bold text-black hidden sm:block">
            {t.Bar.one}
          </p>
        </div>
      </div>

      <div
        ref={marquee3Ref}
        className="text-2xl sm:text-3xl lg:text-4xl py-[8px]  my-5 h-auto w-full relative overflow-hidden"
      >
        <div className="w-full h-full flex  gap-[10px] items-center">
          <p className="w-full text-center font-bold text-black">{t.Bar.one}</p>
          <p className="w-full text-center font-bold text-white">{t.Bar.two}</p>
          <p className="w-full text-center font-bold text-black hidden sm:block">
            {t.Bar.three}
          </p>
        </div>
        <div className="w-full left-full absolute h-full flex  gap-[10px] items-center top-0">
          <p className="w-full text-center font-bold text-black">{t.Bar.one}</p>
          <p className="w-full text-center font-bold text-white">{t.Bar.two}</p>
          <p className="w-full text-center font-bold text-black hidden sm:block">
            {t.Bar.three}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bars;
