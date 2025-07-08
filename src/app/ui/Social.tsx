"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { social } from "../../../prisma/generated/prisma";

export default function Social({
  t,
  lang,
  socialItems,
}: {
  t: any;
  lang: string;
  socialItems: social[];
}) {
  const [step, setStep] = useState(0);
  const [face, setFace] = useState<{ embed: string; channel: string }>({
    embed: "",
    channel: "",
  });
  const [insta, setInsta] = useState<{ embed: string; channel: string }>({
    embed: "",
    channel: "",
  });
  const [you, setYou] = useState<{ embed: string; channel: string }>({
    embed: "",
    channel: "",
  });
  useEffect(() => {
    socialItems.map((item) => {
      if (item.name === "facebook") {
        setFace({ embed: item.embededlink, channel: item.channelLink });
      }
      if (item.name === "instagram") {
        setInsta({ embed: item.embededlink, channel: item.channelLink });
      }
      if (item.name === "youtube") {
        setYou({ embed: item.embededlink, channel: item.channelLink });
      }
    });
  }, [socialItems]);
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
        className="z-[0] top-[11%] overflow-hidden text-2xl sm:text-4xl xl:text-5xl font-bold relative w-full h-full flex justify-center items-center text-black"
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

  // useEffect(() => {
  // const instagram_embed = document.querySelectorAll(".instagram-embed");
  // if (
  //     typeof instagram_embed !== "undefined" &&
  //     instagram_embed !== null &&
  //     Object.values(instagram_embed).length > 0
  // ) {
  //     Object.values(instagram_embed).map((emb) => {
  //         const url = emb?.textContent;
  //         if (url.startsWith("https")) {
  //             const newComponent = (
  //                 <InstagramEmbed
  //                     width={700}
  //                     height={900}
  //                     url={url}
  //                     className="my-5"
  //                 />
  //             );
  //             const root = ReactDOM.createRoot(emb);
  //             root.render(newComponent);
  //             return () => {
  //                 root.unmount();
  //             };
  //         }
  //     });
  // }
  // }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-20 flex lg:block flex-col gap-[30px] lg:gap-0 px-4 w-full h-auto lg:h-full justify-center items-center"
    >
      {lang === "en" ? (
        renderAnimatedText("Get Social")
      ) : (
        <h1 className="z-[0]  overflow-hidden text-2xl lg:text-4xl xl:text-5xl font-bold relative w-full h-full flex justify-center items-center text-black">
          تواجدنا على مواقع التواصل
        </h1>
      )}
      {/* <div class="instagram-embed">https://www.instagram.com/p/link/</div> */}

      <div
        ref={instaRef}
        className="relative lg:absolute  lg:top-[5%] lg:left-[28%] lg:scale-[0.7] top-0 left-0 scale-[1]!  rounded-2xl"
      >
        <div className="rounded-full z-[3] bg-[#5F9FD6] h-[80px] w-[80px] absolute top-[-10px] left-[-10px] flex justify-center items-center">
          <Link href={insta.channel}>
            <div className="bg-[url(/insta.png)] bg-center bg-contain size-[60px] rounded-full "></div>
          </Link>
        </div>
        <iframe
          src={`https://www.instagram.com/p/${insta.embed}/embed/`}
          // src="https://www.instagram.com/villadico/?igsh=MjBxeTA2Ynd4M3Y3#"
          width="280"
          height="300"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="rounded-2xl lg:w-[280px]! lg:h-[300px]! w-[300px]! h-[300px]! "
        ></iframe>
      </div>
      <div
        ref={youTubeRef}
        className="relative lg:absolute scale-[1]! lg:scale-none bg-grey-600 rounded-2xl  lg:top-1/2 lg:left-[10%] left-0 top-0"
      >
        <div className="rounded-full z-[3] bg-[#5F9FD6] h-[80px] w-[80px] absolute top-[-10px] left-[-10px] flex justify-center items-center">
          <Link href={you.channel}>
            <div className="bg-[url(/youtube.png)] bg-center   bg-contain size-[60px] rounded-full "></div>
          </Link>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${you.embed}`}
          // src="https://www.youtube.com/user/webdevelopete"
          // src="https://youtube.com/user/youtube?sub_confirmation=1"
          width="300"
          height="350"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="rounded-2xl lg:w-[300px]! lg:h-[350px]! w-[300px]! h-[300px]! "
        ></iframe>
      </div>
      <div
        ref={facebookRef}
        className="relative lg:absolute  rounded-2xl  lg:top-[40%] lg:left-[70%] left-0 top-0 lg:scale-[0.9] scale-[1]!"
      >
        <div className="rounded-full z-[3] bg-[#5F9FD6] h-[80px] w-[80px] absolute top-[-20px] left-[-10px] flex justify-center items-center">
          <Link href={face.channel}>
            <div className="bg-[url(/facebook.png)] bg-center bg-contain size-[60px] rounded-full "></div>
          </Link>
        </div>
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${face.embed}&tabs=timeline&width=300&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width="310"
          height="360"
          scrolling="no"
          className="rounded-2xl  lg:w-[310px]! lg:h-[360px]! w-[300px]! h-[300px]!"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share "
        ></iframe>
      </div>
    </div>
  );
}
