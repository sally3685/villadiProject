import { useEffect } from "react";

export const useMain = (
  containerRef: React.RefObject<HTMLImageElement | null>,
  observerRef: React.RefObject<IntersectionObserver | null>,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  array:
    | ({
        category: {
          name: string;
          id: string;
          img: string;
          lang: string;
          code: string;
          detailes: string;
        };
        flavor: {
          name: string;
          id: string;
          lang: string;
          primaryImg: string;
        };
      } & {
        name: string;
        code: string;
        detailes: string;
        img: string;
        secondryImg: string;
        categoryId: string;
        flavorId: string;
        color: string;
        p_color: string;
        lang: string;
      })[]
    | null,
  isVisible: boolean,
  isPaused: boolean,
  setStep: React.Dispatch<React.SetStateAction<number>>,
  autoScrollRef: React.RefObject<NodeJS.Timeout | null>,
  resumeTimerRef: React.RefObject<NodeJS.Timeout | null>,
  setSrcImage: React.Dispatch<React.SetStateAction<string[]>>,
  step: number,
  lang: string,
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }, // When 50% of component is visible
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    if (!array || array.length <= 1) return;

    const autoScroll = () => {
      if (!isVisible || isPaused) return;

      setStep((prev) => {
        if (prev >= array.length - 1) return 0; // Loop to start

        return prev + 1;
      });
    };

    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    if (isVisible && !isPaused) {
      autoScrollRef.current = setInterval(autoScroll, 5000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [array, isVisible, isPaused]);
  useEffect(() => {
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);
  useEffect(() => {
    setSrcImage([
      array?.length
        ? array[step].img
        : lang === "en"
          ? "/villadiLogo.svg"
          : "/villadiLogoAr.svg",
      array?.length ? array[step].flavor.primaryImg : "nothing.png",
      array?.length ? array[step].secondryImg : "nothing.png",
    ]);
  }, [step]);
};
