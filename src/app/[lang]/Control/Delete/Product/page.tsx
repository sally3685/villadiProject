import { getDictionary } from "@/app/[lang]/dictionaries";
import { getSession } from "@/app/lib/session";
import { getAllProductsWithoutLang } from "@/app/data-access-layer/productDAL";
import DeleteForm from "@/app/ui/ControlForms/Delete/DeleteForm";
import { redirect } from "next/navigation";
import ErrorPage from "@/app/[lang]/error";
import { deleteType } from "@/app/ui/ControlForms/types";
export default async function Product({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = (await getDictionary(lang)) as deleteType;
  const session = await getSession();
  if (session.status === 500) {
    <ErrorPage
      error={new Error(lang === "en" ? session.messageEn : session.messageAr)}
    />;
  }
  const product = await getAllProductsWithoutLang();
  if (product.status === 500) {
    <ErrorPage
      error={new Error(lang === "en" ? product.messageEn : product.messageAr)}
    />;
  }
  return (
    <>
      {" "}
      <h1
        className={`z-[1] w-[90%] pt-3 pb-3 text-2xl font-bold text-black lg:text-3xl ${
          lang === "en" ? "pl-12" : "pr-12"
        }`}
      >
        {t.addProductForm.deleteLabel}
      </h1>
      <DeleteForm
        t={t}
        lang={lang}
        type="product"
        user={session.user}
        options={product.products}
        label={t.addProductForm.deleteLabel}
        deleteAllLabel={t.addProductForm.deleteAll}
        warning={t.addProductForm.deleteWarning}
      />
    </>
  );
}
