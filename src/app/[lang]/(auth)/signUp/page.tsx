import { SignUpForm } from '@/app/ui/SignUpForm';
import { sessionExist } from '@/app/lib/session';
import Image from 'next/image';
import LogOutButton from '@/app/ui/LogOutButton';
import { getDictionary } from '../../dictionaries';
export default async function signUp({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const session = await sessionExist();
  return (
    <main className="min-h-screen w-full bg-pink-800 relative before:absolute before:content-[''] before:w-full before:h-full before:bg-pink-300 before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover ">
      <div
        className="bg-white w-full md:w-1/2 min-h-screen text-black
        z-[0] relative flex flex-col justify-center items-center gap-3"
      >
        {' '}
        <Image
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          src={`/${lang === 'en' ? 'villadiLogo.svg' : 'villadiLogoAr.svg'}`}
          width={100}
          height={100}
          alt="logo"
        ></Image>{' '}
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
