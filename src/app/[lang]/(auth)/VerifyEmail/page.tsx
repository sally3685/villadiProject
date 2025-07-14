import React from "react";
import VerifyForm from "@/app/ui/auth/VerifyForm";
import { checkVerifySession } from "@/app/lib/verifyEmailSession";
import { sessionExist } from "@/app/lib/session";
import { ResendCode } from "@/app/ui/auth/ResendCode";
import { getDictionary } from "../../dictionaries";
import { authTypes } from "@/app/ui/auth/authTypes";

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as authTypes;
  const session = await sessionExist();
  const res = await checkVerifySession();
  return (
    <main className="relative min-h-screen w-full bg-[#ff8b6c] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-white before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <div className="relative z-[0] flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-white text-black md:w-1/2">
        {session ? (
          <>
            <h1 className="text-lg md:text-2xl">
              {t.verifypasswordForm.verify}
            </h1>
          </>
        ) : !res.success ? (
          <ResendCode lang={lang as "en" | "ar"} t={t} type="email" />
        ) : (
          <VerifyForm t={t} lang={lang as "en" | "ar"} type="email" />
        )}
      </div>
    </main>
  );
}
