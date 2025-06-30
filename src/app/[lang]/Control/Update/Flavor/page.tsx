import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllFlavorsWithoutLang } from "@/app/data-access-layer/flavorDAL";
import FlavorUpdateForm from "@/app/ui/FlavorUpdateForm";
import ErrorPage from "@/app/[lang]/error";
import { redirect } from "next/navigation";
export default async function Flavor({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const result = await getSession();
  const flavor = await getAllFlavorsWithoutLang();
  if (result.success === false) {
    return redirect("/signIn");
  } else if (result.user?.role !== "Admin") {
    redirect("/unAuthorized");
  }
  if (flavor.status === 500) {
    return (
      <ErrorPage
        error={new Error("internal server error")}
        reset={() => {}}
      ></ErrorPage>
    );
  }
  return (
    <>
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addFlavorForm.update}
      </h1>
      <FlavorUpdateForm t={t} flavor={flavor.flavors} />
    </>
  );
}
