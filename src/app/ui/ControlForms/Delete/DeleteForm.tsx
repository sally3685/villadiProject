"use client";
import { usePathname } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchableSelect from "../../SelectMenu";
import { useFormStatus } from "react-dom";
import { DeleteAction } from "../../../actions/deleteAction";
import SubmitButton from "../../SubmitButton";
import { deleteType, userType } from "../types";
interface DeleteFormProps {
  t: deleteType;
  lang: string;
  user: userType | undefined;
  options: any[];
  label: string;
  warning: string;
  type: string;
  deleteAllLabel: string;
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
}: DeleteFormProps) {
  const [deleteAll, setDeleteAll] = useState(false);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const [state, action] = useActionState(DeleteAction, undefined);
  const [readyCheckBox, setReadyCheckBox] = useState(false);
  const [selectedField, setSelectedField] = useState();

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(t.delete.deleteSuccess);
        setDeleteAll(false);
        setSelectedField(undefined);
        setReady(false);
        setReadyCheckBox(false);
        window.scroll(0, 0);
      } else {
        toast.error(t.delete.deleteFailed);
      }
    }
  }, [state, t]);

  const handleSubmit = async (formData: FormData) => {
    if (!readyCheckBox) {
      toast.warning(t.delete.deleteCheck);
      return;
    }
    if (!user || user.role === "User") {
      toast.warning(t.delete.noPermission);
      return;
    }
    if (deleteAll === false && selectedField === undefined) {
      toast.warning(t.delete.noSelectionText);
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
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2">
            <label className="block text-lg font-bold text-black lg:text-xl">
              {label}
            </label>

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
                <h2 className="block font-semibold text-black">
                  {t.addAdminForm.deleteWarning2}
                </h2>
              </div>
            )}
            {!deleteAll && (
              <SearchableSelect
                options={options}
                selectedOption={selectedField}
                onSelect={setSelectedField}
              />
            )}
          </div>
        </div>
      </div>
      <SubmitButton
        disabled={false}
        classNameDisabled={"bg-neutral-300 cursor-not-allowed"}
        classNameEnabled={"bg-[#bc7743] hover:bg-[#bc7743] cursor-pointer"}
        className="text-white"
        textDisabled={t.submitStatus.waitDelete}
        textEnabled={t.submitStatus.delete}
        proccessing={false}
        textProccessing=""
      />
    </form>
  );
}
