"use client";
import React, { useState } from "react";
import Items from "./Items";
import Bars from "./Bars";
import VideoIframe from "./VideoIframe";
import ErrorPage from "../[lang]/error";

export default function VideoWrapper({
  t,
  lang,
  videos,
  myFont3,
}: {
  t: any;
  lang: string;
  videos: any;
  myFont3: any;
}) {
  const [step, setStep] = useState(0);
  if (videos.status === 500) {
    return <ErrorPage error={new Error(videos.message)}></ErrorPage>;
  }
  return (
    <>
      <Items
        lang={lang}
        img={
          videos.videos.length > 0
            ? videos.videos[step].product.secondryImg
            : null
        }
        img2={
          videos.videos.length > 0
            ? videos.videos[step].product.flavor.primaryImg
            : null
        }
      ></Items>
      <Bars t={t} myFont3={myFont3} />
      <div className="h-[600px] w-full scale-[0.9] sm:h-[650px]">
        <VideoIframe
          t={t}
          lang={lang}
          setStep={setStep}
          video={videos.videos.length > 0 ? videos.videos[step] : null}
          step={step}
          boundry={videos.videos.length}
        ></VideoIframe>
      </div>
    </>
  );
}
