import Image from "next/image";
import React from "react";
import { getDictionary } from "../dictionaries";
import AboutusPage from "@/app/ui/aboutus/aboutus";
import { aboutUsTypes } from "@/app/ui/aboutus/types";
import { getAllSocialWithoutLang } from "@/app/data-access-layer/videoDAL";
import { Metadata } from "next";
export const metadata: Metadata = {
  description:
    "Learn the story of Viladi — from humble beginnings in Aleppo to becoming a leader in snack manufacturing and exporting to several Arab countries.",
  keywords:
    "about Viladi, Viladi story, food factories Syria, snacks for export, Arab snack company, Viladi history, chips company Aleppo",
};
// { t }: { t: any }
export default async function AboutUs({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const t = await getDictionary(lang);
  const social = await getAllSocialWithoutLang();
  // if (social.status === 500) {
  //   return (
  //     <ErrorPage
  //       error={new Error(lang === "en" ? social.messageEn : social.messageAr)}
  //     />
  //   );
  // }
  const facebook = social.socials.find(
    (social) => social.name.toLowerCase() === "facebook",
  )?.channelLink;
  const instagram = social.socials.find(
    (social) => social.name.toLowerCase() === "instagram",
  )?.channelLink;
  return (
    <AboutusPage
      t={t as aboutUsTypes}
      facebook={facebook}
      instagram={instagram}
    />
  );
}
