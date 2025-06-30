import SuggestAFlavor from "@/app/ui/SuggestAFlavor";
import { getDictionary } from "../dictionaries";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  if (result.success === false) {
    return redirect("/signIn");
  } else if (result.user?.role !== "Admin") {
    redirect("/unAuthorized");
  }

  return (
    <>
      <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#e6b56c] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffd597]">
        <div className="relative w-full h-dvh flex justify-center items-center flex-col max-w-7xl pt-[100px] sm:pt-[120px] gap-[4rem] sm:gap-[10rem]">
          <SuggestAFlavor lang={lang} t={t} user={result.user}></SuggestAFlavor>
        </div>
      </main>
    </>
  );
}
