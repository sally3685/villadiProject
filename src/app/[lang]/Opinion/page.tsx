import { getDictionary } from "../dictionaries";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { getAllComments } from "@/app/data-access-layer/commentDAL";
import LeaveAcomment from "@/app/ui/Comment/LeaveAcomment";
import ErrorPage from "../error";
import { commentDictionary, userType } from "@/app/ui/Comment/CommentTypes";

export default async function Opinion({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as commentDictionary;

  const resultOfComments = await getAllComments();
  const session = await getSession();
  if (session.status === 404) {
    return redirect(`${lang}/signIn`);
  }

  return (
    <>
      {session.status !== 200 ? (
        <ErrorPage
          error={
            new Error(lang === "en" ? session.messageEn : session.messageAr)
          }
        />
      ) : resultOfComments.status === 500 ? (
        <ErrorPage
          error={
            new Error(
              lang === "en"
                ? resultOfComments.messageEn
                : resultOfComments.messageAr,
            )
          }
        />
      ) : (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#ffd597] before:absolute before:top-0 before:block before:h-full before:w-full before:bg-[#e6b56c] before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center before:content-['']">
          <div className="relative flex h-dvh w-full max-w-7xl flex-col items-center justify-center gap-[4rem] p-4 pt-[100px] sm:gap-[10rem] sm:pt-[120px]">
            <LeaveAcomment
              lang={lang as "en" | "ar"}
              t={t}
              comments={resultOfComments.comments}
              user={session.user as userType}
            ></LeaveAcomment>
          </div>
        </main>
      )}
    </>
  );
}
