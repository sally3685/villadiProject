"use client";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import { FormFileInput } from "../../FormFileInput";
import useCategory from "./useCategory";
import { CategoryFormDataType, controlDictionary, userType } from "../types";
import SubmitButton from "../../SubmitButton";
import { getMessage } from "../../../../../helpers/getMessage";
import ToggleLang from "../ToggleLang";
import { AddCategoryAction } from "@/app/actions/catigoryAction";

interface CategoryFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  user: userType;
}
export default function CategoryForm({ t, lang, user }: CategoryFormProps) {
  const [imgAction, setAction] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);
  const [formDataf, setFormDataf] = useState<CategoryFormDataType>({
    name: "",
    code: "",
    detailes: "",
    img: "",
    key: "",
  });
  const [state, action] = useActionState(AddCategoryAction, undefined);

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
    setFormDataf({
      name: "",
      code: "",
      detailes: "",
      img: "",
      key: "",
    });
  };

  const isOppositeLanguage = lang !== tempLang;
  const handleSubmit = (formData: FormData) => {
    formData.append("language", tempLang);
    formData.append("img", formDataf.img);
    action(formData);
  };
  useCategory(t, nameRef, lang, state, setFormDataf);
  return (
    <form
      action={handleSubmit}
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <ToggleLang
            user={user}
            t={t}
            isOppositeLanguage={isOppositeLanguage}
            toggleLanguage={toggleLanguage}
            lang={lang}
          ></ToggleLang>

          {/* Main Form Content */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
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
              error={
                state?.errors?.name
                  ? getMessage(state.errors.name[0], lang)
                  : ""
              }
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
              error={
                state?.errors?.detailes
                  ? getMessage(state.errors.detailes[0], lang)
                  : ""
              }
              required
            />
            <FormFileInput
              label={
                isOppositeLanguage
                  ? t.addCategoryForm.oppImg
                  : t.addCategoryForm.img
              }
              error={
                state?.errors?.img ? getMessage(state.errors.img[0], lang) : ""
              }
              imgName={formDataf.img}
              onAction={setAction}
              toast={toast}
              setFormDataf={setFormDataf}
              formDataf={formDataf}
              t={t}
              alt={t.addCategoryForm.img}
            />
          </div>
        </div>
      </div>
      <SubmitButton
        proccessing={imgAction}
        textProccessing={t.submitStatus.proccessing}
        disabled={false}
        textDisabled={t.submitStatus.waitSubmit}
        textEnabled={t.submitStatus.submit}
        className="text-white"
        classNameDisabled="cursor-not-allowed bg-neutral-300"
        classNameEnabled="cursor-pointer bg-[#7abc43] hover:bg-[#6aab3a]"
      />
    </form>
  );
}
