import { sessionExist } from "@/app/lib/session";
import React from "react";

import LogOutButton from "@/app/ui/auth/LogOutButton";
import { getDictionary } from "../../dictionaries";
import { ResetPasswordForm } from "@/app/ui/auth/ResetPasswordForm";
import { authTypes } from "@/app/ui/auth/authTypes";
export default async function ResetPassword({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const session = await sessionExist();
  return (
    <main className="relative min-h-screen w-full bg-blue-800 before:absolute before:top-0 before:block before:h-full before:w-full before:bg-blue-300 before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <div className="relative z-[0] flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-white text-black md:w-1/2">
        {" "}
        {session ? (
          <>
            <h1 className="text-lg md:text-2xl">{t.SignIn.stop}</h1>
            <LogOutButton t={t}></LogOutButton>
          </>
        ) : (
          <ResetPasswordForm
            t={t as authTypes}
            lang={lang as "en" | "ar"}
          ></ResetPasswordForm>
        )}
      </div>
    </main>
  );
}
