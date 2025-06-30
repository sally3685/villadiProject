"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
export default function Social({ t, lang }: { t: any; lang: string }) {
  const [step, setStep] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const instaRef = useRef<HTMLDivElement>(null);
  const facebookRef = useRef<HTMLDivElement>(null);
  const youTubeRef = useRef<HTMLDivElement>(null);
  // Register plugins

  const renderAnimatedText = (text: string) => {
    return (
      <h1
        ref={titleRef}
        className="z-[2]  overflow-hidden text-5xl relative w-full h-full flex justify-center items-center text-black"
      >
        {text.split("").map((letter, i) => (
          <span
            key={i}
            className="letter inline-block opacity-0 translate-y-full"
            style={{ display: letter === " " ? "inline" : "inline-block" }}
          >
            {letter}
          </span>
        ))}
      </h1>
    );
  };

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Clear previou
    // s timeline
    if (!facebookRef.current || !instaRef.current || !youTubeRef.current)
      return;
    if (tlRef.current) {
      tlRef.current.kill();
    }
    gsap.registerPlugin(ScrollTrigger);

    // Create new timeline
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% 41%",
        end: "20% 41%",
      },
    });

    // Letter animation
    tlRef.current
      .to(".letter", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "ease.out(0.5)",
      })
      .fromTo(
        [facebookRef.current, instaRef.current, youTubeRef.current],
        {
          y: 600,
          ease: "ease.out(0.5)",
        },
        {
          duration: 1,
          stagger: 0.5,
          y: 0,
        },
        "<=0.2"
      );
    // .fromTo(
    //   instaRef.current,
    //   {
    //     opacity: 0,
    //     y: 80,
    //     duration: 1.2,
    //     ease: "back.out(1.2)",
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //   },
    //   "<=0.2"
    // )
    // .fromTo(
    //   youTubeRef.current,
    //   {
    //     opacity: 0,
    //     y: 80,
    //     duration: 1.2,
    //     ease: "back.out(1.2)",
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //   },
    //   "<=0.2"
    // );

    // Additional scroll-based animations can be added to the timeline

    return () => {
      // Cleanup
      if (tlRef.current) {
        tlRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [lang]); // Re-run when lang changes

  return (
    <div
      ref={containerRef}
      className="relative py-20 flex sm:block flex-col gap-[30px] sm:gap-0 px-4 w-full h-auto sm:h-full justify-center items-center"
    >
      {renderAnimatedText(
        lang === "en" ? "Get Social" : "تواجدنا على وسائل التواصل"
      )}
      <div
        ref={instaRef}
        className="relative sm:absolute scale-[1]! sm:scale-none  bg-amber-900 rounded-2xl sm:w-[200px] sm:h-[300px] w-[300px] h-[200px] sm:top-1/2 sm:left-1/5 left-0 top-0"
      >
        <div className="rounded-full bg-[#5F9FD6] h-[80px] w-[80px] absolute top-[-10px] left-[-10px] flex justify-center items-center">
          <Link href={"/"}>
            <div className="bg-[url(/insta.png)] bg-center bg-contain size-[60px] rounded-full "></div>
          </Link>
        </div>
        <iframe
          src="https://www.instagram.com/reel/DLLGG13TAlC/?igsh=M3MwdWpubzBjb3g0"
          width="500"
          height="250"
          className="w-full! h-full! rounded-2xl"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div
        ref={facebookRef}
        className="relative sm:absolute  sm:w-[200px] sm:h-[300px] w-[300px] h-[200px]  sm:top-[10%] sm:left-[35%] sm:scale-[0.7] top-0 left-0 scale-[1]!  rounded-2xl"
      >
        <div className="rounded-full bg-[#5F9FD6] h-[80px] w-[80px] absolute top-[-20px] left-[-10px] flex justify-center items-center">
          <Link href={"/"}>
            <div className="bg-[url(/facebook.png)] bg-center bg-contain size-[60px] rounded-full "></div>
          </Link>
        </div>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frishi.gupta.259192%2Fposts%2Fpfbid02uGPJxPMH6zZFDn4CByw1UwxZXHLHtiK43xQPkFzk7h1hhvEYbZsqQTZHcXG7qpt4l&show_text=true&width=500"
          width="500"
          height="250"
          className="w-full! h-full! rounded-2xl"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div
        ref={youTubeRef}
        className="relative sm:absolute bg-amber-900 rounded-2xl sm:w-[200px] sm:h-[300px] w-[300px] h-[200px] sm:top-[40%] sm:left-[70%] left-0 top-0 sm:scale-[0.9] scale-[1]!"
      >
        <div className="rounded-full bg-[#5F9FD6] h-[80px] w-[80px] absolute top-[-10px] left-[-10px] flex justify-center items-center">
          <Link href={"/"}>
            <div className="bg-[url(/youtube.png)] bg-center bg-contain size-[60px] rounded-full "></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
