"use client";
import { MapPin } from "lucide-react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Maps({ maps, lang }: { maps: any; lang: string }) {
  const [step, setStep] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapImg = useRef<HTMLImageElement>(null);
  const pinMarker = useRef<HTMLDivElement>(null);
  const details = useRef<HTMLDivElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // Only animate if all refs are available
      if (
        !details.current ||
        !pinMarker.current ||
        !mapImg.current ||
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
          }
        )
        .fromTo(
          pinMarker.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
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
          }
        )
        .fromTo(
          pinMarker.current,
          {
            rotate: -10,
          },
          {
            rotate: 10,
            repeat: 2,
            yoyo: true,
          }
        )
        .to(pinMarker.current, {
          rotate: 0,
        });
      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
    },
    { scope: containerRef, dependencies: [step] } // Added step to dependencies
  );
  return (
    <div
      ref={containerRef}
      className="relative w-full  flex justify-evenly items-center flex-col max-w-7xl pt-[100px] sm:pt-[70px] gap-[4rem] sm:gap-[10rem]"
    >
      {maps.length === 0 ? (
        <>
          <h1 className="text-2xl md:text-5xl text-black">
            {lang === "en" ? "Maps" : "خرائط"}
          </h1>
          <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] justify-center items-center bg-[url(/villadiLogo.svg)] bg-center bg-contain bg-no-repeat"></div>
        </>
      ) : (
        <>
          <h1 className="text-4xl sm:text-6xl font-bold text-black">
            Market of Villadi
          </h1>
          <div className="w-full flex justify-evenly items-center h-1/2  max-w-7xl flex-wrap sm:flex-nowrap">
            <div className="relative w-[300px] h-[300px] sm:scale-[1.5] bg-[#033155] rounded-2xl overflow-hidden">
              <Image
                ref={mapImg}
                src={`/${maps[step].img}`}
                alt="Interactive image"
                width={200}
                height={200}
                className="w-[300px] h-[300px] object-contain"
              />
              {maps[step].top.map((item: any, index: any) => (
                <div
                  key={index}
                  // ref={pinMarker}
                  className="origin-bottom absolute size-[30px] bg-[url(/pinMap_1.svg)] bg-no-repeat bg-contain bg-center rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    top: `${item}%`,
                    left: `${maps[step].left[index]}%`,
                  }}
                ></div>
              ))}
            </div>
            <div
              ref={details}
              className="flex flex-col justify-center items-center text-black z-[2] gap-6 p-6 max-w-[90%] sm:max-w-[450px]"
            >
              <h2 className="text-3xl sm:text-5xl font-semibold">
                Market of {maps[step].name}
              </h2>
              <p className="text-xl sm:text-4xl font-medium">
                {maps[step].details}
              </p>
            </div>
            <button
              className={`text-black  rounded-xl px-4 py-2  ${
                step + 1 < maps.length
                  ? "cursor-pointer bg-[#fcdc43]"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={step + 1 >= maps.length}
              onClick={() => {
                console.log(step);
                if (step + 1 < maps.length) setStep(step + 1);
              }}
            >
              next
            </button>
            <button
              className={`text-black  rounded-xl px-4 py-2  ${
                step - 1 >= 0
                  ? "cursor-pointer bg-[#fcdc43]"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={step - 1 < 0}
              onClick={() => {
                console.log(step);
                if (step - 1 >= 0) setStep(step - 1);
              }}
            >
              prev
            </button>
          </div>
        </>
      )}
    </div>
  );
}
