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
}: {
  t: any;
  lang: string;
  videos: any;
}) {
  const [step, setStep] = useState(0);
  if (videos.status === 500) {
    return (
      <ErrorPage error={new Error(videos.message)} reset={() => {}}></ErrorPage>
    );
  }
  return (
    <>
      <Items
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
      <Bars t={t} />
      <div className="w-full h-[600px] sm:h-[650px] scale-[0.9]">
        <VideoIframe
          t={t}
          setStep={setStep}
          video={videos.videos.length > 0 ? videos.videos[step] : null}
          step={step}
          boundry={videos.videos.length}
        ></VideoIframe>
      </div>
    </>
  );
}
