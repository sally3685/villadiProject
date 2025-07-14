import Main from "@/app/ui/mainPage/Main";
import { getProdsWithFlavs } from "../data-access-layer/productDAL";
import ErrorPage from "./error";
import { getAllRecipies } from "../data-access-layer/recipyDAL";
import { getAllCategory } from "../data-access-layer/catigoryDAL";
import { getDictionary } from "./dictionaries";
import {
  getAllSocialWithoutLang,
  getAllVideosWithProd,
} from "../data-access-layer/videoDAL";
import VideoWrapper from "../ui/videoWrapper";
import { getSession } from "../lib/session";
import Social from "../ui/Social";
import localFont from "next/font/local";
import Carousel from "../ui/Carousel/Carousel";
import { carouselDictionary } from "../ui/Carousel/carouselTypes";
const myFont3 = localFont({
  src: "./fonts/StanHand.ttf",
});
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const result = await getSession();
  const { lang } = await params;
  const t = (await getDictionary(lang)) as carouselDictionary;
  const products = await getProdsWithFlavs(lang);
  if (products.status === 500) {
    return (
      <ErrorPage
        error={
          new Error(lang === "en" ? products.messageEn : products.messageAr)
        }
      ></ErrorPage>
    );
  }
  const category = await getAllCategory(lang);
  if (category.status === 500) {
    return (
      <ErrorPage
        error={
          new Error(lang === "en" ? category.messageEn : category.messageAr)
        }
      ></ErrorPage>
    );
  }
  const video = await getAllVideosWithProd(lang);
  if (video.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? video.messageEn : video.messageAr)}
      ></ErrorPage>
    );
  }
  const recipe = await getAllRecipies(lang);
  if (recipe.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? recipe.messageEn : recipe.messageAr)}
      ></ErrorPage>
    );
  }
  const socials = await getAllSocialWithoutLang();
  if (socials.status === 500) {
    return (
      <ErrorPage
        error={new Error(lang === "en" ? socials.messageEn : socials.messageAr)}
      ></ErrorPage>
    );
  }
  return (
    <main
      id="main"
      className="max-w-8xl relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[white] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[var(--colorArrow)] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']"
    >
      <section
        id="section1"
        className="section flex h-[100dvh] w-full items-center justify-center"
        data-bgcolor="#d9d9d9"
        data-color="#ffffff"
      >
        <Main
          array={products.products ? products.products : null}
          messageEn={products.messageEn}
          messageAr={products.messageAr}
          lang={lang}
        />
      </section>
      <section
        id="section2"
        className="section relative flex h-[100vh] w-full flex-col items-center justify-center lg:min-h-[760px]"
        data-bgcolor="#ff832b"
        data-color="#ffffff"
      >
        <VideoWrapper t={t} lang={lang} videos={video} myFont3={myFont3} />
      </section>
      <section
        id="section3"
        className="section flex h-auto min-h-dvh w-full items-center justify-center"
        data-bgcolor="#7ABC43"
        data-color="#ffffff"
      >
        <Carousel
          items={category.categories}
          title={t.catigoriesWrapper.title}
          all={t.catigoriesWrapper.view}
          noItems={t.catigoriesWrapper.noCats}
          lang={lang}
          t={t}
          type="categories"
          linkPrefix={`/${lang}/Catigories`}
          linkText={lang === "en" ? "Category's products" : "منتجات الصنف"}
        />
      </section>
      <section
        id="section4"
        className="section flex h-auto min-h-dvh w-full items-center justify-center lg:min-h-[760px]"
        data-bgcolor="#DA9A40"
        data-color="#ffffff"
      >
        <Carousel
          items={recipe.recipies}
          user={result}
          title={t.recipesWrapper.title}
          all={t.recipesWrapper.view}
          noItems={t.recipesWrapper.noRecs}
          lang={lang}
          t={t}
          type="recipes"
          linkPrefix={`/${lang}/Recipes`}
          linkText={t.recipesWrapper.link}
          showVotes={true}
        />
      </section>
      <section
        id="section5"
        className="section flex h-auto w-full items-center justify-center lg:h-[100vh] lg:min-h-[760px]"
        data-bgcolor="#5F9FD6"
        data-color="#ffffff"
      >
        {/* <FacebookFeed /> */}
        <Social t={t} lang={lang} socialItems={socials.socials}></Social>
      </section>
    </main>
  );
}
