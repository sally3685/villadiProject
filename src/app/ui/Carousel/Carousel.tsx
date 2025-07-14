"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCarousel3D } from "./useCarousel3D";
import { CarouselItem } from "./CarouselItem";
import { CarouselControls } from "./CarouselControls";
import { EmptyState } from "../EmptyState";
import { type Carousel3DProps, type CarouselItemType } from "./carouselTypes";
import { toast } from "react-toastify";
import { AddVotesAction } from "@/app/actions/votes";

export default function Carousel({
  items,
  user,
  title,
  all,
  noItems,
  lang,
  type,
  t,
  linkPrefix,
  linkText,
  showVotes = false,
}: Carousel3DProps) {
  const {
    isMd,
    isMobile,
    extendedItems,
    visibleCount,
    getStyleForIndex,
    getStyleForOpacityIndex,
    handleNext,
    handlePrev,
  } = useCarousel3D(items);

  const divRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    divRefs.current[index] = el;
  };

  useGSAP(() => {
    if (!isMounted || !containerRef.current || !divRefs.current) return;
    tlRef.current?.kill();

    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% 41%",
        end: "20% 41%",
      },
    });

    tlRef.current.fromTo(
      divRefs.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: { from: "center", each: 0.2, amount: 0.3 },
        ease: "linear",
      },
    );

    return () => tlRef.current?.kill();
  }, [lang, isMounted]);

  const handleVote = async (itemId: string) => {
    if (user?.user?.email) {
      const result = await AddVotesAction(user.user.email, itemId);
      if (result.status === 409) {
        toast.warning(lang === "en" ? result.messageEn : result.messageAr);
      }
      if (result.status === 500) {
        toast.error(lang === "en" ? result.messageEn : result.messageAr);
      }
    } else {
      toast.warning(t.vote.notSigned);
    }
  };

  const getItemLink = (item: CarouselItemType) => {
    switch (type) {
      case "products":
        return `/${lang}/Catigories/Products/${item.code}`;
      case "categories":
        return `/${lang}/Catigories/${item.code}/Products`;
      case "recipes":
        return `/${lang}/Recipes/${item.code}`;
      default:
        return "#";
    }
  };

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      style={{ transformStyle: "preserve-3d" }}
      className="relative z-[1] flex h-full w-full max-w-6xl items-center justify-center"
    >
      {items.length === 0 ? (
        <EmptyState noItems={noItems} lang={lang} />
      ) : (
        <div className="flex h-auto w-full max-w-6xl flex-col items-center justify-center gap-8">
          <h1 className="pb-8 text-2xl font-bold text-black sm:text-4xl xl:text-5xl">
            {title}
          </h1>

          <div
            className={`sm:justify- flex w-full flex-col items-center justify-center sm:flex-row ${
              items.length < visibleCount
                ? "h-auto flex-wrap gap-8"
                : "h-[500px]"
            }`}
          >
            {(items.length < visibleCount ? items : extendedItems)?.map(
              (item, index) => (
                <CarouselItem
                  key={`${item.code}-${index}`}
                  ref={(el: HTMLDivElement | null) => addToRefs(el, index)}
                  item={item}
                  index={index}
                  type={type}
                  t={t}
                  addMargin={items.length < (isMobile || isMd ? 3 : 5)}
                  getStyleForIndex={getStyleForIndex}
                  getStyleForOpacityIndex={getStyleForOpacityIndex}
                  showVotes={showVotes}
                  onVote={handleVote}
                  linkText={linkText}
                  linkHref={getItemLink(item)}
                />
              ),
            )}
          </div>

          <CarouselControls
            items={items}
            isMobile={isMobile}
            isMd={isMd}
            handlePrev={handlePrev}
            handleNext={handleNext}
            linkPrefix={linkPrefix}
            all={all}
          />
        </div>
      )}
    </div>
  );
}
