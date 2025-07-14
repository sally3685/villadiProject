"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function Items({
  lang,
  img,
  img2,
}: {
  lang: string;
  img: string | null;
  img2: string | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);
  const img5Ref = useRef<HTMLImageElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // Only animate if all refs are available
      if (
        !img1Ref.current ||
        !img2Ref.current ||
        !img3Ref.current ||
        !img4Ref.current ||
        !img5Ref.current ||
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
      // Set initial states
      tlRef.current.set(
        [
          img1Ref.current,
          img2Ref.current,
          img3Ref.current,
          img4Ref.current,
          img5Ref.current,
        ],
        { opacity: 0 },
      );

      // Build the animation timeline
      tlRef.current
        .to(
          [
            img1Ref.current,
            img2Ref.current,
            img3Ref.current,
            img4Ref.current,
            img5Ref.current,
          ],
          { opacity: 1, delay: 1 },
        )
        .fromTo(
          img1Ref.current,
          { y: -10, rotate: 0 },
          {
            y: 10,
            rotate: 10,
            ease: "linear",
            duration: 1,
            yoyo: true,
            repeat: -1,
          },
          "=",
        )
        .fromTo(
          img2Ref.current,
          { y: -10, rotate: 0 },
          {
            y: 10,
            rotate: -10,
            ease: "linear",
            duration: 1,
            yoyo: true,
            repeat: -1,
          },
          "=",
        )
        .fromTo(
          img3Ref.current,
          { y: -10, rotate: 0 },
          {
            y: 10,
            rotate: 15,
            ease: "linear",
            duration: 1,
            yoyo: true,
            repeat: -1,
          },
          "=",
        )
        .fromTo(
          img4Ref.current,
          { y: -10, rotate: 0 },
          {
            y: 10,
            rotate: -20,
            ease: "linear",
            duration: 1,
            yoyo: true,
            repeat: -1,
          },
          "=",
        )
        .fromTo(
          img5Ref.current,
          { y: -10, rotate: 0 },
          {
            y: 10,
            rotate: 10,
            ease: "linear",
            duration: 1,
            yoyo: true,
            repeat: -1,
          },
          "=",
        );
      // Cleanup function
      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
    },
    { scope: containerRef }, // Added step to dependencies
  );

  return (
    <>
      {img ? (
        <>
          <div
            ref={containerRef}
            className="absolute z-[0] grid h-full w-full items-center justify-center overflow-x-hidden"
            style={{
              gridTemplateAreas: `
          "top-left . top-right"
          ". center ."
          "bottom-left . bottom-right"
        `,
              gridTemplateColumns: "1fr auto 1fr",
              gridTemplateRows: "1fr auto 1fr",
              gap: "20px",
            }}
          >
            {/* Top Left */}
            <div
              style={{ gridArea: "top-left" }}
              className={`relative flex items-center justify-center ${lang === "en" ? "-left-1/4" : "-right-1/4"}`}
            >
              <Image
                ref={img1Ref}
                src={img ? `${img}` : "/star.png"}
                alt={`Cover for ${img}`}
                width={100}
                height={100}
                className="h-[70px]! w-[50px]! rounded-3xl object-contain sm:h-[150px]! sm:w-[120px]!"
                priority
              />
            </div>

            {/* Top Right */}
            {img2 && (
              <div
                style={{ gridArea: "top-right" }}
                className={`relative flex items-center justify-center ${lang === "en" ? "left-1/4" : "right-1/4"} `}
              >
                <Image
                  ref={img2Ref}
                  src={img ? `${img2}` : "/star.png"}
                  alt={`Cover for ${img2}`}
                  width={100}
                  height={100}
                  className="h-[70px]! w-[50px]! rounded-3xl object-contain sm:h-[150px]! sm:w-[120px]!"
                  priority
                />
              </div>
            )}

            {/* Center */}
            <div
              style={{ gridArea: "center" }}
              className="flex items-center justify-center"
            >
              <Image
                ref={img3Ref}
                src={img ? `${img}` : "/star.png"}
                alt={`Cover for ${img}`}
                width={100}
                height={100}
                className="h-[70px]! w-[50px]! rounded-3xl object-contain sm:h-[150px]! sm:w-[120px]!"
                priority
              />
            </div>

            {/* Bottom Left */}
            {img2 && (
              <div
                style={{ gridArea: "bottom-left" }}
                className={`relative flex items-center justify-center ${lang === "en" ? "-left-1/4" : "-right-1/4"}`}
              >
                <Image
                  ref={img4Ref}
                  src={img ? `${img2}` : "/star.png"}
                  alt={`Cover for ${img2}`}
                  width={100}
                  height={100}
                  className="h-[70px]! w-[50px]! rounded-3xl object-contain sm:h-[150px]! sm:w-[120px]!"
                  priority
                />
              </div>
            )}

            {/* Bottom Right */}
            <div
              style={{ gridArea: "bottom-right" }}
              className={`relative flex items-center justify-center ${lang === "en" ? "left-1/4" : "right-1/4"}`}
            >
              <Image
                ref={img5Ref}
                src={img ? `${img}` : "/star.png"}
                alt={`Cover for ${img}`}
                width={100}
                height={100}
                className="h-[70px]! w-[50px]! rounded-3xl object-contain sm:h-[150px]! sm:w-[120px]!"
                priority
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
