import { useRef, useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MenuItemType } from "./LeftRightTypes";

gsap.registerPlugin(ScrollTrigger);

export const useLeftRightMenu = (items: MenuItemType[]) => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<gsap.core.Tween[]>([]);
  const [search, setSearch] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const setRowRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      rowRefs.current[index] = el;
    },
    [],
  );

  const setTitleRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      titleRefs.current[index] = el;
    },
    [],
  );

  const filteredItems = search
    ? items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      )
    : items;

  const initAnimations = useCallback(() => {
    animationRef.current.forEach((anim) => anim?.kill());
    ScrollTrigger.getAll().forEach((st) => st.kill());

    if (!filteredItems.length || !rowRefs.current.length) return;

    rowRefs.current.forEach((row, index) => {
      if (!row) return;
      gsap.set(row, {
        opacity: 0,
        x: index % 2 ? 20 : -20,
        willChange: "opacity, transform",
      });
    });
    const animateTitleLetters = (index: number) => {
      const titleElement = titleRefs.current[index];
      if (!titleElement) return;
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      gsap.to(titleElement.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.3,
        ease: "back.out(1.2)",
      });
    };
    rowRefs.current.forEach((row, index) => {
      if (!row) return;

      const anim = gsap.to(row, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          onEnter: () => animateTitleLetters(index),
        },
      });

      animationRef.current.push(anim);
    });
  }, [filteredItems]);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      animationRef.current.forEach((anim) => anim?.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    if (isMounted) initAnimations();
  }, [filteredItems, isMounted, initAnimations]);

  return {
    search,
    setSearch,
    filteredItems,
    setRowRef,
    setTitleRef,
    isMounted,
  };
};
