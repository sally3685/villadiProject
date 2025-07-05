"use client";
import { usePathname } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchableSelect from "./SelectMenu";
import { useFormStatus } from "react-dom";
import { DeleteAction } from "../actions/deleteAction";
interface DeleteFormProps {
  t: any;
  lang: string;
  user:
    | {
        name: string;
        email: string;
        role: string;
      }
    | undefined;
  options: any[];
  label: string;
  warning: string;
  type: string;
  deleteAllLabel: string;
  noPermissionText: {
    en: string;
    ar: string;
  };
  noSelectionText: {
    en: string;
    ar: string;
  };
}

export default function DeleteForm({
  t,
  lang,
  user,
  options,
  label,
  type,
  deleteAllLabel,
  warning,
  noPermissionText,
  noSelectionText,
}: DeleteFormProps) {
  const [deleteAll, setDeleteAll] = useState(false);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const [state, action] = useActionState(DeleteAction, undefined);
  const [readyCheckBox, setReadyCheckBox] = useState(false);
  const [selectedField, setSelectedField] = useState();

  useEffect(() => {
    console.log(state);
    if (state) {
      if (state.success) {
        toast.success(lang === "en" ? "Deletion successful" : "تم الحذف بنجاح");
        setDeleteAll(false);
        setSelectedField(undefined);
        setReady(false);
        setReadyCheckBox(false);
        window.scroll(0, 0);
      } else {
        toast.error(lang === "en" ? "Deletion failed" : "فشل الحذف");
      }
    }
  }, [state, t]);

  const handleSubmit = async (formData: FormData) => {
    if (!readyCheckBox) {
      toast.warning(
        lang === "en"
          ? "make sure to check the delete warning"
          : "تأكد من اختيار تأكيد الحذف "
      );
      return;
    }
    if (!user || user.role === "User") {
      toast.warning(lang === "en" ? noPermissionText.en : noPermissionText.ar);
      return;
    }
    if (deleteAll === false && selectedField === undefined) {
      toast.warning(lang === "en" ? noSelectionText.en : noSelectionText.ar);
      return;
    }
    formData.append("selectedField", JSON.stringify(selectedField));
    formData.append("type", type);
    action(formData);
    setDeleteAll(false);
    setSelectedField(undefined);
    setReady(false);
    setReadyCheckBox(false);
  };
  useEffect(() => {
    if (deleteAll || selectedField) {
      setReady(true);
    }
    if (!deleteAll && selectedField === undefined) {
      setReady(false);
    }
  }, [deleteAll, selectedField]);
  return (
    <form
      action={handleSubmit}
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2">
            <label className="block text-black text-lg lg:text-xl font-bold">
              {label}
            </label>

            {/* Delete All checkbox */}
            {ready && (
              <div className="flex items-center gap-2 lg:col-span-6">
                <input
                  type="checkbox"
                  id="ready"
                  checked={readyCheckBox}
                  onChange={(e) => setReadyCheckBox(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="ready"
                  className="text-sm font-medium text-gray-700"
                >
                  {warning}
                </label>
              </div>
            )}
            {!pathname.includes("Admin") ? (
              <div className="flex items-center gap-2 lg:col-span-6">
                <input
                  type="checkbox"
                  id="deleteAll"
                  name="deleteAll"
                  checked={deleteAll}
                  onChange={(e) => setDeleteAll(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="deleteAll"
                  className="text-sm font-medium text-gray-700"
                >
                  {deleteAllLabel}
                </label>
              </div>
            ) : (
              <div className="flex items-center gap-2 lg:col-span-6">
                <h2 className="text-black font-semibold block">
                  Note that the last admin cant be removed
                </h2>
              </div>
            )}
            {/* Item selection (disabled when deleteAll is checked) */}
            {!deleteAll && (
              <SearchableSelect
                options={options}
                selectedOption={selectedField}
                onSelect={setSelectedField}
              />
            )}
          </div>

          {/* Submit button */}
        </div>
      </div>
      <SubmitButton t={t} lang={lang} />
    </form>
  );
}

function SubmitButton({ t, lang }: { t: any; lang: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`py-3 px-2 text-sm rounded cursor-pointer lg:text-lg text-white ${
        pending ? "bg-neutral-300" : "bg-[#7abc43] hover:bg-[#6aab3a]"
      }`}
      type="submit"
    >
      {pending ? (
        <>{lang === "en" ? "Deleting..." : "جاري الحذف..."}</>
      ) : (
        <> {lang === "en" ? "Delete" : " حذف"}</>
      )}
    </button>
  );
}
