"use client";
import { TriangleAlert } from "lucide-react";
import { AddCategoryAction } from "../actions/catigoryAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { FormFileInput } from "./FormFileInput";

interface User {
  name: string;
  email: string;
  role: string;
}

interface CategoryFormProps {
  t: any;
  lang: string;
  user: User;
}

export default function CategoryForm({ t, lang, user }: CategoryFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    code: "",
    detailes: "",
    img: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);

  const [state, action] = useActionState(AddCategoryAction, undefined);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      nameRef.current?.focus();

      if (state.success) {
        toast.success(t.addCategoryForm.doneSubmit, {
          position: "top-right",
        });
        window.scroll(0, 0);
        // Reset form on successful submission
        setFormDataf({
          name: "",
          code: "",
          detailes: "",
          img: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addCategoryForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    formData.append("language", tempLang);
    action(formData);
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
    setFormDataf({
      name: "",
      code: "",
      detailes: "",
      img: "",
    });
  };

  const isOppositeLanguage = lang !== tempLang;

  return (
    <form
      action={handleSubmit}
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8 flex justify-center flex-col">
            <div className="flex flex-col gap-8 mx-4">
              <h2 className="text-black text-lg lg:text-xl font-bold">
                {t.addCategoryForm.admin} {user?.name}
              </h2>
              <p className="mt-1 text-xs lg:text-sm text-black flex gap-2">
                <TriangleAlert color="#da9a40" size={50} />
                {t.addCategoryForm.adminWarning}
              </p>

              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-xl bg-[#da9a40] w-[fit-content] text-sm lg:text-lg text-white"
                onClick={toggleLanguage}
              >
                {isOppositeLanguage
                  ? t.addCategoryForm.langButton
                  : t.addCategoryForm.opplangButton}
              </button>
            </div>

            <hr className="bg-[#7abc43] h-[2px] lg:rotate-90 lg:left-[50%] relative lg:top-[-20%]" />
          </div>

          {/* Main Form Content */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
            <FormInput
              ref={nameRef}
              id="name"
              label={
                isOppositeLanguage
                  ? t.addCategoryForm.oppName
                  : t.addCategoryForm.name
              }
              placeholder={t.addCategoryForm.namePlaceHolder}
              value={formDataf.name}
              onChange={(value) => setFormDataf({ ...formDataf, name: value })}
              error={state?.errors?.name}
              required
            />

            <FormInput
              id="code"
              label={
                isOppositeLanguage
                  ? t.addCategoryForm.oppCode
                  : t.addCategoryForm.code
              }
              placeholder={t.addCategoryForm.codePlaceHolder}
              value={formDataf.code}
              onChange={(value) => setFormDataf({ ...formDataf, code: value })}
              error={state?.errors?.code}
              required
            />

            <FormTextarea
              id="detailes"
              label={
                isOppositeLanguage
                  ? t.addCategoryForm.oppDetailes
                  : t.addCategoryForm.detailes
              }
              placeholder={t.addCategoryForm.detailesPlaceHolder}
              value={formDataf.detailes}
              onChange={(value) =>
                setFormDataf({ ...formDataf, detailes: value })
              }
              error={state?.errors?.detailes}
            />

            <FormFileInput
              id="img"
              label={
                isOppositeLanguage
                  ? t.addCategoryForm.oppImg
                  : t.addCategoryForm.img
              }
              addText={t.addCategoryForm.addimg}
              selectedText={t.addCategoryForm.imgselected}
              detailsText={t.addCategoryForm.imgdetailes}
              value={formDataf.img}
              onChange={(value) => setFormDataf({ ...formDataf, img: value })}
              error={state?.errors?.img}
              showLanguageInput
              lang={lang}
              tempLang={tempLang}
            />
          </div>
        </div>
      </div>

      <SubmitButton t={t} />
    </form>
  );
}

function SubmitButton({ t }: { t: any }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`py-3 px-2 text-sm rounded cursor-pointer lg:text-lg text-white ${
        pending ? "bg-neutral-300" : "bg-[#7abc43] hover:bg-[#6aab3a]"
      }`}
      type="submit"
    >
      {pending ? t.addCategoryForm.waitSubmit : t.addCategoryForm.submit}
    </button>
  );
}
