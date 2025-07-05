"use client";
import {
  Shapes,
  Codesandbox,
  ChefHat,
  MapPinned,
  ShieldUser,
  Laugh,
  Video,
  Facebook,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideLinks({ t, lang }: { t: any; lang: string }) {
  // Refs
  const catLinkRef = useRef<HTMLLIElement>(null);
  const productLinkRef = useRef<HTMLLIElement>(null);
  const recipyLinkRef = useRef<HTMLLIElement>(null);
  const mapLinkRef = useRef<HTMLLIElement>(null);
  const adminLinkRef = useRef<HTMLLIElement>(null);
  const flavorLinkRef = useRef<HTMLLIElement>(null);
  const videoLinkRef = useRef<HTMLLIElement>(null);
  const socialLinkRef = useRef<HTMLLIElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // State
  const [greenTop, setGreenTop] = useState("0px");
  const [greenLeft, setGreenLeft] = useState("0px");
  const [windowWidth, setWindowWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const pathname = usePathname();

  // Function to position the green indicator
  const positionGreenIndicator = (element: HTMLLIElement) => {
    if (!ulRef.current) return;

    const isDesktop = windowWidth >= 1024;
    const elementRect = element.getBoundingClientRect();
    const ulRect = ulRef.current.getBoundingClientRect();

    if (isDesktop) {
      setGreenLeft("-5%");
      setGreenTop(`${elementRect.top - ulRect.top}px`);
    } else {
      setGreenTop("0px");
      setGreenLeft(`${elementRect.left - ulRect.left}px`);
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize values

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up ResizeObserver for container height changes
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let activeRef: React.RefObject<HTMLLIElement | null> | null = null;

    if (pathname.includes("Catigory")) activeRef = catLinkRef;
    else if (pathname.includes("Product")) activeRef = productLinkRef;
    else if (pathname.includes("Recipy")) activeRef = recipyLinkRef;
    else if (pathname.includes("Map")) activeRef = mapLinkRef;
    else if (pathname.includes("Admin")) activeRef = adminLinkRef;
    else if (pathname.includes("Flavor")) activeRef = flavorLinkRef;
    else if (pathname.includes("Video")) activeRef = videoLinkRef;
    else if (pathname.includes("Social")) activeRef = socialLinkRef;

    if (activeRef?.current) {
      positionGreenIndicator(activeRef.current);
    }
  }, [pathname, windowWidth, lang, containerHeight]); // Added containerHeight to dependencies
  const action = pathname.includes("Add")
    ? "Add"
    : pathname.includes("Update")
      ? "Update"
      : "Delete";
  return (
    <div
      ref={containerRef}
      className="lg:p-6 p-4 relative pt-0 lg:h-full w-full"
    >
      <ul
        ref={ulRef}
        className="justify-evenly lg:justify-center font-medium flex lg:flex-col lg:gap-12 gap-0 flex-row h-full w-full relative"
      >
        {/* Green indicator element */}
        <div
          style={{
            top: greenTop,
            right: lang === "ar" && greenLeft === "-5%" ? greenLeft : "",
            left: greenLeft !== "-5%" ? greenLeft : "",
          }}
          className={`transition-all duration-600 absolute w-[40px] lg:w-[121%] lg:h-[45px] h-full bg-[#7abc43] ${
            lang === "ar"
              ? "rotate-[90deg] rounded-r-xl lg:right-[-5%]"
              : "rotate-[-90deg] rounded-l-xl lg:left-[-5%]"
          } lg:rotate-0`}
        >
          {/* Top corner */}
          <div
            className={`absolute w-[25px] h-[25px] ${
              lang === "ar" ? "left-0 rotate-[90deg]" : "right-0"
            } top-[-25px] lg:top-[-25px]`}
          >
            <div className="relative w-[25px] h-[25px] bg-white rounded-br-2xl z-[3]" />
            <div className="absolute content-[''] w-[15px] h-[15px] bg-[#7abc43] bottom-0 right-0 z-[2]" />
          </div>

          {/* Bottom corner */}
          <div
            className={`absolute w-[25px] h-[25px] top-[40px] lg:top-[45px] ${
              lang === "ar"
                ? "left-0 transform scale-[-1]"
                : "right-0 rotate-[270deg]"
            }`}
          >
            <div className="relative w-[25px] h-[25px] bg-white rounded-br-2xl z-[3]" />
            <div className="absolute content-[''] w-[15px] h-[15px] bg-[#7abc43] bottom-0 right-0 z-[2]" />
          </div>
        </div>

        {/* Navigation links - kept exactly as in your original code */}
        <li ref={catLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Catigory`}
            className={`flex ${
              pathname.includes("Catigory")
                ? "text-white font-bold hover:text-black"
                : "text-black"
            } hover:text-[#7abc43] items-center p-2 rounded-lg text-lg lg:text-xl relative`}
          >
            <Shapes className="z-[1] relative" />
            <span className="ms-3 lg:block hidden z-[1]">
              {t.sideLinks.page1}
            </span>
          </Link>
        </li>

        <li ref={productLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Product`}
            className={`flex items-center p-2 ${
              pathname.includes("Product")
                ? "text-white font-bold hover:text-black"
                : "text-black"
            } hover:text-[#7abc43] rounded-lg text-lg lg:text-xl`}
          >
            <Codesandbox className="z-[1] relative" />
            <span className="ms-3 lg:block hidden z-[1]">
              {t.sideLinks.page2}
            </span>
          </Link>
        </li>

        <li ref={recipyLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Recipy`}
            className={`flex items-center p-2 ${
              pathname.includes("Recipy")
                ? "text-white font-bold hover:text-black"
                : "text-black"
            } hover:text-[#7abc43] rounded-lg text-lg lg:text-xl`}
          >
            <ChefHat className="z-[1] relative" />
            <span className="ms-3 lg:block hidden z-[1]">
              {t.sideLinks.page3}
            </span>
          </Link>
        </li>

        <li ref={mapLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Map`}
            className={`flex items-center p-2 ${
              pathname.includes("Map")
                ? "text-white font-bold hover:text-black"
                : "text-black"
            } hover:text-[#7abc43] rounded-lg text-lg lg:text-xl`}
          >
            <MapPinned className="z-[1] relative" />
            <span className="ms-3 lg:block hidden z-[1]">
              {t.sideLinks.page4}
            </span>
          </Link>
        </li>

        {pathname.includes("Update") ? (
          <>
            <li ref={socialLinkRef}>
              <Link
                href={`/${lang}/Control/${action}/Social`}
                className={`flex items-center p-2 ${
                  pathname.includes("Social")
                    ? "text-white font-bold hover:text-black"
                    : "text-black"
                } hover:text-[#7abc43] rounded-lg text-lg lg:text-xl`}
              >
                <Facebook className="z-[1] relative" />
                <span className="ms-3 lg:block hidden z-[1]">
                  {t.sideLinks.page8}
                </span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li ref={adminLinkRef}>
              <Link
                href={`/${lang}/Control/${action}/Admin`}
                className={`flex items-center p-2 ${
                  pathname.includes("Admin")
                    ? "text-white font-bold hover:text-black"
                    : "text-black"
                } hover:text-[#7abc43] rounded-lg text-lg lg:text-xl`}
              >
                <ShieldUser className="z-[1] relative" />
                <span className="ms-3 lg:block hidden z-[1]">
                  {t.sideLinks.page5}
                </span>
              </Link>
            </li>
          </>
        )}

        <li ref={flavorLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Flavor`}
            className={`flex items-center p-2 ${
              pathname.includes("Flavor")
                ? "text-white font-bold hover:text-black"
                : "text-black"
            } hover:text-[#7abc43] rounded-lg text-lg lg:text-xl`}
          >
            <Laugh className="z-[1] relative" />
            <span className="ms-3 lg:block hidden z-[1]">
              {t.sideLinks.page6}
            </span>
          </Link>
        </li>

        <li ref={videoLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Video`}
            className={`flex items-center p-2 ${
              pathname.includes("Video")
                ? "text-white font-bold hover:text-black"
                : "text-black"
            } hover:text-[#7abc43] rounded-lg text-lg lg:text-xl`}
          >
            <Video className="z-[1] relative" />
            <span className="ms-3 lg:block hidden z-[1]">
              {t.sideLinks.page7}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
