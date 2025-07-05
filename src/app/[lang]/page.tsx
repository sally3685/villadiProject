import Change from "@/components/change";
import { getProdsWithFlavs } from "../data-access-layer/productDAL";
import ErrorPage from "./error";
import { getAllRecipies } from "../data-access-layer/recipyDAL";
import Carousal3D from "../ui/Carousal3D";
import { getAllCategory } from "../data-access-layer/catigoryDAL";
import { getDictionary } from "./dictionaries";
import {
  getAllSocialWithoutLang,
  getAllVideosWithProd,
} from "../data-access-layer/videoDAL";
import VideoWrapper from "../ui/videoWrapper";
import Carousal3DRec from "../ui/Carousal3DRec";
import { getSession } from "../lib/session";
import Social from "../ui/Social";
import localFont from "next/font/local";
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
  const t = await getDictionary(lang);
  const { status, message, products } = await getProdsWithFlavs(lang);
  const video = await getAllVideosWithProd(lang);
  const recipe = await getAllRecipies(lang);
  const socials = await getAllSocialWithoutLang();

  const category = await getAllCategory(lang);
  if (
    status === 500 ||
    category.status === 500 ||
    video.status === 500 ||
    recipe.status === 500 ||
    socials.status === 500
  ) {
    return <ErrorPage error={new Error(message)}></ErrorPage>;
  }

  return (
    <main
      id="main"
      className="h-full w-full flex justify-center items-center flex-col max-w-8xl relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[var(--colorArrow)] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[white] overflow-hidden "
      // style={{ "&::before": { mask: "url(/pattern.svg) center / cover" } }}
      // mask: url(/pattern.svg) center center / cover;
    >
      <section
        id="section1"
        className="w-full flex justify-center items-center h-[100dvh]  section "
        data-bgcolor="#8e191c"
        data-color="#cd6628"
      >
        <Change
          array={products ? products : null}
          message={message}
          lang={lang}
        />
      </section>
      <section
        id="section2"
        className="w-full relative h-[100vh] flex justify-center items-center flex-col  section"
        data-bgcolor="#ff832b"
        data-color="#ffffff"
      >
        <VideoWrapper t={t} lang={lang} videos={video} myFont3={myFont3} />
      </section>
      <section
        id="section3"
        className="w-full h-auto min-h-dvh section flex justify-center items-center"
        data-bgcolor="#7ABC43"
        data-color="#ffffff"
      >
        <Carousal3D
          items={category.categories}
          title={t.catigoriesWrapper.have}
          noCats={t.catigoriesWrapper.noCats}
          all={t.catigoriesWrapper.view}
          lang={lang}
          color="#34351A"
        />
      </section>
      <section
        id="section4"
        className="w-full h-auto min-h-dvh section flex justify-center items-center"
        data-bgcolor="#DA9A40"
        data-color="#ffffff"
      >
        <Carousal3DRec
          user={result}
          items={recipe.recipies}
          title={t.recipesWrapper.Recs}
          noCats={t.recipesWrapper.noRecs}
          all={t.recipesWrapper.view}
          lang={lang}
          color="#6b3f01"
        />
      </section>
      <section
        id="section5"
        className="w-full h-auto lg:h-[100vh] section flex justify-center items-center"
        data-bgcolor="#5F9FD6"
        data-color="#ffffff"
      >
        {/* <FacebookFeed /> */}
        <Social t={t} lang={lang} socialItems={socials.socials}></Social>
      </section>
    </main>
  );
}
