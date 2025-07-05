import SuggestAFlavor from "@/app/ui/SuggestAFlavor";
import { getDictionary } from "../dictionaries";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { getAllComments } from "@/app/data-access-layer/commentDAL";
import LeaveAcomment from "@/app/ui/LeaveAcomment";
import ErrorPage from "../error";

export default async function Opinion({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const { status, message, comments } = await getAllComments();
  console.log(comments, status);
  if (result.success === false) {
    return redirect("/signIn");
  }
  if (status !== 200) {
    return <ErrorPage error={new Error(message)}></ErrorPage>;
  }

  return (
    <>
      <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#e6b56c] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffd597]">
        <div className="relative w-full h-dvh flex justify-center items-center flex-col max-w-7xl pt-[100px] sm:pt-[120px] gap-[4rem] sm:gap-[10rem]">
          <LeaveAcomment
            lang={lang}
            t={t}
            comments={comments}
            user={result.user}
          ></LeaveAcomment>
        </div>
      </main>
    </>
  );
}
