import React from "react";
import VerifyEmailForm from "@/app/ui/VerifyEmailForm";
import {
  checkVerifyPassSession,
  checkVerifySession,
} from "@/app/lib/verifyEmailSession";
import { sessionExist } from "@/app/lib/session";
import { ResendCode } from "@/app/ui/ResendCode";
import { getDictionary } from "../../dictionaries";
import { ResendCodePass } from "@/app/ui/ResendCodePass";
import VerifyPassForm from "@/app/ui/verifyPasswordForm";

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const session = await sessionExist();
  const res = await checkVerifyPassSession();
  return (
    <main className="min-h-screen w-full bg-[#ff8b6c] relative before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover ">
      <div
        className="bg-white w-full md:w-1/2 min-h-screen text-black
        z-[0] relative flex flex-col justify-center items-center gap-3"
      >
        {res.success ? (
          <VerifyPassForm t={t} lang={lang} />
        ) : (
          <ResendCodePass lang={lang} t={t} />
        )}
      </div>
    </main>
  );
}
