import { SignUpForm } from "@/app/ui/auth/SignUpForm";
import { sessionExist } from "@/app/lib/session";
import LogOutButton from "@/app/ui/auth/LogOutButton";
import { getDictionary } from "../../dictionaries";
export default async function signUp({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const session = await sessionExist();
  return (
    <main className="relative min-h-screen w-full bg-pink-800 before:absolute before:top-0 before:block before:h-full before:w-full before:bg-pink-300 before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
      <div className="relative z-[0] flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-white pt-40 pb-[5%] text-black md:w-1/2">
        {" "}
        {session ? (
          <>
            <h1 className="text-lg md:text-2xl">{t.SignUp.stop}</h1>
            <LogOutButton t={t}></LogOutButton>
          </>
        ) : (
          <SignUpForm t={t} lang={lang}></SignUpForm>
        )}
      </div>
    </main>
  );
}
