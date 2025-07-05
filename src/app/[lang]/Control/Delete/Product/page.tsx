import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllProductsWithoutLang } from "@/app/data-access-layer/productDAL";
import DeleteForm from "@/app/ui/DeleteForm";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
export default async function Product({
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
  const product = await getAllProductsWithoutLang();
  if (product.status === 500) {
    return <ErrorPage error={new Error("internal server error")}></ErrorPage>;
  }

  return (
    <>
      {" "}
      <h1
        className={`text-black font-bold z-[1] text-2xl lg:text-3xl pt-3 w-[90%] pb-3 ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addProductForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="product"
        user={result.user}
        options={product.products}
        label={t.addProductForm.deleteLabel}
        deleteAllLabel={t.addProductForm.deleteAll}
        warning={t.addProductForm.deleteWarning}
        noPermissionText={{
          en: "You don't have permission to delete",
          ar: "ليس لديك إذن للحذف",
        }}
        noSelectionText={{
          en: "Please select an item to delete",
          ar: "الرجاء تحديد عنصر للحذف",
        }}
      />
    </>
  );
}
