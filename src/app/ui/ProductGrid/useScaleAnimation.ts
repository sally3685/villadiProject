// hooks/useScaleAnimation.ts
import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useScaleAnimation = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const registerRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  useGSAP(
    () => {
      if (!itemRefs.current.length) return;

      gsap.fromTo(
        itemRefs.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.8,
          stagger: {
            from: "center",
            each: 0.05,
          },
          ease: "back.out(1.2)",
        },
      );
    },
    { scope: containerRef },
  );

  return { containerRef, registerRef };
};
