import { getDictionary } from "@/app/[lang]/dictionaries";
import ErrorPage from "@/app/[lang]/error";
import { getSession } from "@/app/lib/session";
import FlavorForm from "@/app/ui/FlavorForm";
import { redirect } from "next/navigation";

export default async function Flavor({
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
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addFlavorForm.title}
      </h1>
      <FlavorForm t={t} lang={lang} user={result.user} />
    </>
  );
}
