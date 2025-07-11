import { sessionExist } from "@/app/lib/session";
import { SignInForm } from "@/app/ui/SignInForm";
import React from "react";
import Image from "next/image";

import LogOutButton from "@/app/ui/LogOutButton";
import { getDictionary } from "../../dictionaries";
export default async function signIn({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const session = await sessionExist();
  return (
    <main className="min-h-screen w-full bg-blue-800 relative before:absolute before:content-[''] before:w-full before:h-full before:bg-blue-300 before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover ">
      <div
        className="bg-white w-full md:w-1/2 min-h-screen text-black
          z-[0] relative flex flex-col justify-center items-center gap-3  pt-[10%] pb-[5%]"
      >
        {session ? (
          <>
            <h1 className="text-lg md:text-2xl">{t.SignIn.stop}</h1>
            <LogOutButton t={t}></LogOutButton>
          </>
        ) : (
          <SignInForm t={t} lang={lang}></SignInForm>
        )}
      </div>
    </main>
  );
}
