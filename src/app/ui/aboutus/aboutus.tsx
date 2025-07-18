"use client";
import { useLayoutEffect, useRef } from "react";
import { aboutUsTypes } from "./types";
import Link from "next/link";

export default function AboutusPage({
  t,
  facebook,
  instagram,
}: {
  t: aboutUsTypes;
  facebook: string | undefined;
  instagram: string | undefined;
}) {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#ffffff] px-4 before:absolute before:top-0 before:block before:h-full before:w-full before:bg-gradient-to-bl before:from-[#8dff63] before:via-[#ffd166] before:to-[#ef476f] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <div className="border-opacity-30 relative z-[1] mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-gray-100 bg-white/90 py-20 pt-40 shadow-2xl backdrop-blur-sm">
        {/* header */}
        <h1 className="relative mb-6 inline-block w-full text-center text-2xl font-bold sm:text-4xl xl:text-5xl">
          <span className="relative z-10">
            {t.aboutUs.whoAreWe.title}
            <span className="absolute -bottom-1 left-0 z-[-1] h-3 w-full -skew-y-2 bg-[#ffd166]/70"></span>
          </span>
        </h1>
        <div className="relative mx-auto max-w-6xl px-4 py-12">
          {/* Who We Are */}
          <section id="who-we-are" className="section-block relative mb-24">
            <p
              dangerouslySetInnerHTML={{
                __html: t.aboutUs.whoAreWe.description.replace(/\n/g, "<br />"),
              }}
              className="relative text-center text-sm text-black sm:text-lg"
            ></p>
          </section>

          {/* History & Vision */}
          <div className="relative mb-24 grid gap-16 md:grid-cols-2">
            <div className="section-block group relative rounded-xl border-2 border-transparent py-6 transition-all duration-300 hover:border-[#395a50]/10">
              <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-[#06d6a0]/70"></div>
              <h2 className="relative mb-4 text-xl font-semibold sm:text-3xl">
                <span className="relative z-10">{t.aboutUs.history.title}</span>
                <span className="absolute -bottom-1 left-0 z-0 h-2 w-1/2 -skew-x-12 bg-[#06d6a0]/40"></span>
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: t.aboutUs.history.description.replace(
                    /\n/g,
                    "<br />",
                  ),
                }}
                className="text-center text-sm text-black sm:text-lg"
              ></p>
            </div>
            <div className="section-block group relative rounded-xl border-2 border-transparent py-6 transition-all duration-300 hover:border-[#395a50]/10">
              <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-[#ef476f]/70"></div>
              <h2 className="relative mb-4 text-xl font-semibold sm:text-3xl">
                <span className="relative z-10">{t.aboutUs.vision.title}</span>
                <span className="absolute -bottom-1 left-0 z-0 h-2 w-1/2 -skew-x-12 bg-[#ef476f]/40"></span>
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: t.aboutUs.vision.description.replace(/\n/g, "<br />"),
                }}
                className="text-center text-sm text-black sm:text-lg"
              ></p>
            </div>
          </div>

          {/* Quality Commitment */}
          <section className="section-block relative mb-24 overflow-hidden rounded-xl bg-[#395a50] p-8">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10"></div>
            <h2 className="relative mb-4 text-xl font-semibold text-white sm:text-3xl">
              <span className="relative z-10">{t.aboutUs.quality.title}</span>
              <span className="absolute -bottom-1 left-0 z-0 h-2 w-full bg-[#ffd166]"></span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t.aboutUs.quality.description.replace(/\n/g, "<br />"),
              }}
              className="relative border-l-2 border-[#ffd166] pl-6 text-center text-sm text-gray-100 sm:text-lg"
            ></p>
          </section>

          {/* Brands */}
          <section id="brand-section" className="relative mb-24">
            <div className="absolute top-1/4 -left-10 h-8 w-8 rounded-full bg-[#ef476f]/30"></div>
            <div className="absolute right-0 bottom-0 h-12 w-12 rotate-45 bg-[#06d6a0]/20"></div>

            <h2 className="relative mx-auto mb-12 inline-block text-center text-xl font-semibold sm:text-3xl">
              <span className="relative z-10 px-4">
                {t.aboutUs.brandTitle.title}
              </span>
              <span className="absolute inset-0 z-0 h-full w-full -skew-y-3 border-t-8 border-b-8 border-[#395a50]/20"></span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {Object.entries(t.aboutUs.brand).map(([key, brand]) => (
                <div
                  key={key}
                  className="brand-card relative overflow-hidden rounded-xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#395a50]/30"
                >
                  <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#ffd166]"></div>
                  <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full bg-[#ef476f]"></div>

                  <h3 className="relative mb-2 text-xl font-bold sm:text-2xl">
                    <span className="relative z-10">{brand.title}</span>
                    <span className="absolute -bottom-1 left-0 z-0 h-1 w-full bg-[#395a50]/20"></span>
                  </h3>
                  <p className="mb-4 text-sm text-black sm:text-lg">
                    {brand.subtitle}
                  </p>
                  <ul className="stagger-item">
                    {brand.products.map((product, i) => (
                      <li
                        key={i}
                        className="relative border-b border-gray-100 py-2 pl-4 before:absolute before:top-1/2 before:left-0 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[#395a50]"
                      >
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Innovation & Digital */}
          <div className="relative mb-24 grid gap-16 md:grid-cols-2">
            <div className="absolute top-0 left-1/2 h-16 w-1 -translate-x-1/2 bg-gradient-to-b from-[#395a50] to-transparent sm:block"></div>

            <div className="section-block group relative rounded-xl border border-gray-100 bg-white/50 p-6 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-[#ffd166]/70"></div>
              <h2 className="relative mb-4 text-xl font-semibold sm:text-3xl">
                <span className="relative z-10">
                  {t.aboutUs.innovation.title}
                </span>
                <span className="absolute -bottom-1 left-0 z-0 h-1.5 w-3/4 bg-[#ffd166]/50"></span>
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: t.aboutUs.innovation.description.replace(
                    /\n/g,
                    "<br />",
                  ),
                }}
                className="text-center text-sm text-black sm:text-lg"
              ></p>
            </div>

            <div className="section-block group relative rounded-xl border border-gray-100 bg-white/50 p-6 backdrop-blur-sm">
              <div className="absolute -right-3 -bottom-3 h-6 w-6 rounded-full bg-[#06d6a0]/70"></div>
              <h2 className="relative mb-4 text-xl font-semibold sm:text-3xl">
                <span className="relative z-10">{t.aboutUs.digital.title}</span>
                <span className="absolute -bottom-1 left-0 z-0 h-1.5 w-3/4 bg-[#06d6a0]/50"></span>
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: t.aboutUs.digital.description.replace(
                    /\n/g,
                    "<br />",
                  ),
                }}
                className="mb-4 text-center text-sm text-black sm:text-lg"
              ></p>
              <div className="stagger-item flex flex-wrap gap-2">
                {t.aboutUs.digital.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-[#395a50]/20 bg-[#395a50]/10 px-3 py-1 text-sm text-black transition-colors hover:bg-[#395a50] hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Export */}
          <section className="section-block relative mb-24 overflow-hidden rounded-xl bg-gradient-to-r from-[#395a50] to-[#395a50]/90 p-8">
            <div className="absolute top-8 right-8 h-12 w-12 rotate-45 bg-white/10"></div>
            <div className="absolute bottom-8 left-8 h-8 w-8 rounded-full bg-white/10"></div>

            <h2 className="relative mb-4 text-xl font-semibold text-white sm:text-3xl">
              <span className="relative z-10">{t.aboutUs.export.title}</span>
              <span className="absolute -bottom-1 left-0 z-0 h-1.5 w-1/2 bg-[#ffd166]"></span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t.aboutUs.export.description.replace(/\n/g, "<br />"),
              }}
              className="mb-4 text-center text-sm text-gray-100 sm:text-lg"
            ></p>
            <ul className="stagger-item mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {t.aboutUs.export.cities.map((city, i) => (
                <li
                  key={i}
                  className="rounded-lg bg-white/90 p-3 text-center shadow-sm transition-all hover:scale-105 hover:bg-white"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p
              dangerouslySetInnerHTML={{
                __html: t.aboutUs.export.description2.replace(/\n/g, "<br />"),
              }}
              className="text-center text-sm text-gray-100 sm:text-lg"
            ></p>
          </section>

          {/* Social */}
          <section className="section-block relative mb-24 text-center">
            <div className="absolute top-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-[#ef476f]/30"></div>
            <h2 className="relative mb-8 inline-block text-xl font-semibold sm:text-3xl">
              <span className="relative z-10 px-4">
                {t.aboutUs.followUs.title}
              </span>
              <span className="absolute inset-0 z-0 h-full w-full -rotate-6 rounded-full border-2 border-dashed border-[#395a50]/30"></span>
            </h2>
            <div className="flex flex-col justify-center gap-6 sm:flex-row sm:gap-12">
              <div className="flex items-center justify-center gap-2">
                <Link
                  href={instagram ? instagram : ""}
                  className="group relative text-xl text-pink-600 hover:text-pink-800"
                >
                  <span className="relative z-10">
                    {t.aboutUs.followUs.insta}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-1 w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <span className="relative z-10 block h-8 w-8 bg-[url(/insta.png)] bg-contain bg-center bg-no-repeat"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Link
                  href={facebook ? facebook : ""}
                  className="group relative text-xl text-blue-600 hover:text-blue-800"
                >
                  <span className="relative z-10">
                    {t.aboutUs.followUs.face}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <span className="relative z-10 block h-8 w-8 bg-[url(/facebook.png)] bg-contain bg-center bg-no-repeat"></span>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="section-block relative border-t border-gray-200 py-16 text-center">
            <div className="absolute top-1/2 left-0 h-16 w-16 -translate-y-1/2 rounded-full bg-[#ffd166]/20 blur-lg"></div>
            <div className="absolute top-1/2 right-0 h-16 w-16 -translate-y-1/2 rounded-full bg-[#06d6a0]/20 blur-lg"></div>

            <h2 className="relative mb-6 inline-block text-xl font-semibold sm:text-3xl">
              <span className="relative z-10 px-6">
                {t.aboutUs.finish.title}
              </span>
              <span className="absolute inset-0 z-0 h-full w-full -skew-y-3 rounded-full bg-[#395a50]/10"></span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t.aboutUs.finish.descritption.replace(/\n/g, "<br />"),
              }}
              className="relative mx-auto max-w-2xl text-center text-sm sm:text-lg"
            ></p>
          </section>
        </div>
      </div>
    </main>
  );
}
