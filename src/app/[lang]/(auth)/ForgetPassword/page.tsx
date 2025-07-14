import React from "react";
import { checkVerifyPassSession } from "@/app/lib/verifyEmailSession";
import { getDictionary } from "../../dictionaries";
import VerifyForm from "@/app/ui/auth/VerifyForm";
import { authTypes } from "@/app/ui/auth/authTypes";
import { ResendCode } from "@/app/ui/auth/ResendCode";

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as authTypes;
  const res = await checkVerifyPassSession();
  return (
    <main className="relative min-h-screen w-full bg-[#ff8b6c] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-white before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <div className="relative z-[0] flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-white text-black md:w-1/2">
        {res.success ? (
          <VerifyForm t={t} lang={lang as "en" | "ar"} type="password" />
        ) : (
          <ResendCode lang={lang as "en" | "ar"} t={t} type="password" />
        )}
      </div>
    </main>
  );
}
