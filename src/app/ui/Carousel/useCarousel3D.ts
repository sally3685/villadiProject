import { useState, useEffect, useCallback } from "react";
import { DESKTOP_STYLES, MOBILE_STYLES, MD_STYLES } from "./carouselStyles";
import { CarouselItemType } from "./carouselTypes";
export const useCarousel3D = (items: CarouselItemType[]) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [virtualStep, setVirtualStep] = useState(4);
  const [styles, setStyles] = useState(DESKTOP_STYLES);
  const [opacitySmall, setOpacitySmall] = useState([
    { opacity: "0" },
    { opacity: "0" },
    { opacity: "1" },
    { opacity: "0" },
    { opacity: "0" },
  ]);

  const extendedItems = [...items.slice(-4), ...items, ...items.slice(0, 4)];

  const visibleCount = isMobile || isMd ? 3 : 5;

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 450;
    const md = window.innerWidth < 1100;
    setIsMobile(mobile);
    setIsMd(md);
    setStyles(mobile ? MOBILE_STYLES : md ? MD_STYLES : DESKTOP_STYLES);
    setOpacitySmall(
      mobile || md
        ? [{ opacity: "1" }, { opacity: "0" }, { opacity: "0" }]
        : [
            { opacity: "0" },
            { opacity: "0" },
            { opacity: "1" },
            { opacity: "0" },
            { opacity: "0" },
          ],
    );
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, items.length]);

  const getStyleForIndex = useCallback(
    (index: number) => {
      if (items.length < visibleCount) return;
      const styleIndex = index - virtualStep;
      return styleIndex >= 0 && styleIndex < visibleCount
        ? styles[styleIndex]
        : { opacity: 0, display: "none" };
    },
    [items.length, styles, virtualStep, visibleCount],
  );

  const getStyleForOpacityIndex = useCallback(
    (index: number) => {
      if (items.length < visibleCount) return;
      const styleIndex = index - virtualStep;
      return styleIndex >= 0 && styleIndex < visibleCount
        ? opacitySmall[styleIndex]
        : { opacity: 0 };
    },
    [items.length, opacitySmall, virtualStep, visibleCount],
  );

  const handleNext = useCallback(() => {
    setVirtualStep((prev) => {
      const newStep = prev + 1;
      return newStep >= extendedItems.length - 4 ? 4 : newStep;
    });
  }, [extendedItems.length]);

  const handlePrev = useCallback(() => {
    setVirtualStep((prev) => {
      const newStep = prev - 1;
      return newStep < 0 ? extendedItems.length - 5 : newStep;
    });
  }, [extendedItems.length]);

  return {
    isMobile,
    isMd,
    styles,
    opacitySmall,
    virtualStep,
    extendedItems,
    visibleCount,
    getStyleForIndex,
    getStyleForOpacityIndex,
    handleNext,
    handlePrev,
  };
};
