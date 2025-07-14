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
      className="relative w-full p-4 pt-0 lg:h-full lg:p-6"
    >
      <ul
        ref={ulRef}
        className="relative flex h-full w-full flex-row justify-evenly gap-0 font-medium lg:flex-col lg:justify-center lg:gap-12"
      >
        {/* Green indicator element */}
        <div
          style={{
            top: greenTop,
            right: lang === "ar" && greenLeft === "-5%" ? greenLeft : "",
            left: greenLeft !== "-5%" ? greenLeft : "",
          }}
          className={`absolute h-full w-[40px] bg-[#7abc43] transition-all duration-600 lg:h-[45px] lg:w-[121%] ${
            lang === "ar"
              ? "rotate-[90deg] rounded-r-xl lg:right-[-5%]"
              : "rotate-[-90deg] rounded-l-xl lg:left-[-5%]"
          } lg:rotate-0`}
        >
          {/* Top corner */}
          <div
            className={`absolute h-[25px] w-[25px] ${
              lang === "ar" ? "left-0 rotate-[90deg]" : "right-0"
            } top-[-25px] lg:top-[-25px]`}
          >
            <div className="relative z-[3] h-[25px] w-[25px] rounded-br-2xl bg-white" />
            <div className="absolute right-0 bottom-0 z-[2] h-[15px] w-[15px] bg-[#7abc43] content-['']" />
          </div>

          {/* Bottom corner */}
          <div
            className={`absolute top-[40px] h-[25px] w-[25px] lg:top-[45px] ${
              lang === "ar"
                ? "left-0 scale-[-1] transform"
                : "right-0 rotate-[270deg]"
            }`}
          >
            <div className="relative z-[3] h-[25px] w-[25px] rounded-br-2xl bg-white" />
            <div className="absolute right-0 bottom-0 z-[2] h-[15px] w-[15px] bg-[#7abc43] content-['']" />
          </div>
        </div>

        {/* Navigation links - kept exactly as in your original code */}
        <li ref={catLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Catigory`}
            className={`flex ${
              pathname.includes("Catigory")
                ? "font-bold text-white hover:text-black"
                : "text-black"
            } relative items-center rounded-lg p-2 text-lg hover:text-[#7abc43] lg:text-xl`}
          >
            <Shapes className="relative z-[1]" />
            <span className="z-[1] ms-3 hidden lg:block">
              {t.sideLinks.page1}
            </span>
          </Link>
        </li>

        <li ref={productLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Product`}
            className={`flex items-center p-2 ${
              pathname.includes("Product")
                ? "font-bold text-white hover:text-black"
                : "text-black"
            } rounded-lg text-lg hover:text-[#7abc43] lg:text-xl`}
          >
            <Codesandbox className="relative z-[1]" />
            <span className="z-[1] ms-3 hidden lg:block">
              {t.sideLinks.page2}
            </span>
          </Link>
        </li>

        <li ref={recipyLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Recipy`}
            className={`flex items-center p-2 ${
              pathname.includes("Recipy")
                ? "font-bold text-white hover:text-black"
                : "text-black"
            } rounded-lg text-lg hover:text-[#7abc43] lg:text-xl`}
          >
            <ChefHat className="relative z-[1]" />
            <span className="z-[1] ms-3 hidden lg:block">
              {t.sideLinks.page3}
            </span>
          </Link>
        </li>

        <li ref={mapLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Map`}
            className={`flex items-center p-2 ${
              pathname.includes("Map")
                ? "font-bold text-white hover:text-black"
                : "text-black"
            } rounded-lg text-lg hover:text-[#7abc43] lg:text-xl`}
          >
            <MapPinned className="relative z-[1]" />
            <span className="z-[1] ms-3 hidden lg:block">
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
                    ? "font-bold text-white hover:text-black"
                    : "text-black"
                } rounded-lg text-lg hover:text-[#7abc43] lg:text-xl`}
              >
                <Facebook className="relative z-[1]" />
                <span className="z-[1] ms-3 hidden lg:block">
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
                    ? "font-bold text-white hover:text-black"
                    : "text-black"
                } rounded-lg text-lg hover:text-[#7abc43] lg:text-xl`}
              >
                <ShieldUser className="relative z-[1]" />
                <span className="z-[1] ms-3 hidden lg:block">
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
                ? "font-bold text-white hover:text-black"
                : "text-black"
            } rounded-lg text-lg hover:text-[#7abc43] lg:text-xl`}
          >
            <Laugh className="relative z-[1]" />
            <span className="z-[1] ms-3 hidden lg:block">
              {t.sideLinks.page6}
            </span>
          </Link>
        </li>

        <li ref={videoLinkRef}>
          <Link
            href={`/${lang}/Control/${action}/Video`}
            className={`flex items-center p-2 ${
              pathname.includes("Video")
                ? "font-bold text-white hover:text-black"
                : "text-black"
            } rounded-lg text-lg hover:text-[#7abc43] lg:text-xl`}
          >
            <Video className="relative z-[1]" />
            <span className="z-[1] ms-3 hidden lg:block">
              {t.sideLinks.page7}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
