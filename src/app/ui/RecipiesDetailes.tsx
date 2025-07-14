import React from "react";
import Image from "next/image";
import Light from "./Light";
import { EmptyState } from "./EmptyState";
export default function RecipeDetails({
  recipe,
  lang,
  t,
}: {
  recipe: {
    name: string;
    flavor: {
      name: string;
      primaryImg: string;
    };
    detailes: string;
  } | null;
  lang: string | "en";
  t: {
    ProdsWrapper: {
      title: string;
    };
    recipesWrapper: {
      NotFound: string;
    };
  };
}) {
  return (
    <>
      <section className="relative flex h-3/4 w-full max-w-7xl min-w-auto flex-col flex-wrap items-center justify-center gap-20 overflow-x-hidden overflow-y-auto rounded-2xl bg-[#1c1100]/50 px-4 py-12">
        {!recipe ? (
          <EmptyState noItems={t.recipesWrapper.NotFound} lang={lang} />
        ) : (
          <>
            <h1 className="text-center text-2xl font-bold text-white sm:text-4xl xl:text-5xl">
              {`${recipe.name} ${lang === "en" ? "→" : "←"} ${t.ProdsWrapper.title} ${lang === "en" ? "→" : "←"} ${recipe.flavor.name}`}
            </h1>
            <div className="flex h-full w-full flex-wrap items-center justify-center gap-12">
              <div className="flex h-1/2 w-full flex-wrap items-center justify-evenly gap-12 sm:flex-nowrap sm:gap-8">
                <div className="relative flex h-[300px] w-[300px] scale-[1.2] flex-col items-center justify-center gap-4 rounded-2xl transition-all duration-300 sm:h-[300px] sm:w-[350px] sm:scale-[1.1]">
                  <Light />

                  <div className="relative flex h-[300px] w-full items-center justify-center p-4">
                    <Image
                      className="absolute top-0 left-[20%] h-[180px] w-full rotate-[30deg] object-contain opacity-50"
                      src={`/chef.png`}
                      alt="chef image"
                      width={300}
                      height={400}
                    />
                    <Image
                      className="relative h-[150px] w-full object-contain transition-all duration-75 hover:scale-[1.2]"
                      src={`${recipe.flavor.primaryImg}`}
                      alt="flavor image"
                      width={300}
                      height={400}
                    />
                  </div>
                </div>{" "}
                <div className="flex h-1/2 w-full max-w-[400px] flex-col items-center justify-center gap-6 text-white sm:w-1/2">
                  <h2 className="text-xl font-bold sm:text-3xl xl:text-4xl">
                    {recipe.name}
                  </h2>
                </div>
              </div>
              <div className="h-[500px] w-full text-white sm:h-[600px]">
                <p
                  dangerouslySetInnerHTML={{
                    __html: recipe.detailes.replace(/\n/g, "<br />"),
                  }}
                  className="pb-20 text-center text-xl break-words sm:text-2xl"
                ></p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
