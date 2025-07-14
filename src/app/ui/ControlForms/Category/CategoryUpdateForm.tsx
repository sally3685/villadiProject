"use client";
import { UpdateCategoryAction } from "@/app/actions/catigoryAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import { FormFileInput } from "../../FormFileInput";
import SearchableSelect from "../../SelectMenu";
import Stepper from "../../Stepper";
import { Category } from "../../../../../prisma/generated/prisma";
import { deleteUTFiles } from "@/app/data-access-layer/uploadthingDAL";
import Image from "next/image";
import useCategory from "./useCategory";
import { controlDictionary } from "../types";
import { getMessage } from "../../../../../helpers/getMessage";
import SubmitButton from "../../SubmitButton";
import NextPrevButton from "../NextPrevButton";
import DeleteImg from "../DeleteImg";
interface CategoryFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  category: Category[];
}

export default function CategoryUpdateForm({
  t,
  lang,
  category,
}: CategoryFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    code: "",
    detailes: "",
    img: "",
    key: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);
  const [state, action] = useActionState(UpdateCategoryAction, undefined);
  const [imgDelete, setImgDelete] = useState(false);
  const [imgAction, setAction] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);
  useCategory(
    t,
    nameRef,
    lang,
    state,
    setFormDataf,
    setStep,
    setSelectedCategory,
  );

  const handleNextStep = () => {
    if (!selectedCategory) {
      toast.warning(t.required.categoryRequired);
      return;
    }
    setFormDataf({
      name: selectedCategory?.name,
      code: selectedCategory?.code,
      detailes: selectedCategory?.detailes,
      img: selectedCategory?.img,
      key: selectedCategory?.img.split("/").pop() as string,
    });
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedCategory(undefined);
  };
  const handleSubmit = (formData: FormData) => {
    if (!selectedCategory) {
      toast.warning(t.required.categoryRequired);
      return;
    }
    formData.append("language", selectedCategory?.lang);
    formData.append("id", selectedCategory?.id);
    formData.append("img", formDataf?.img);
    action(formData);
  };

  return (
    <form
      action={handleSubmit}
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="flex h-full items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <div className="flex flex-col justify-center space-y-8 lg:col-span-2">
            <div>
              <h2 className="pb-4 text-xl text-black">{t.steps.title} :</h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {step === 0 && (
              <div>
                <label className="block text-lg font-bold text-black lg:text-xl">
                  {t.choose.category}
                </label>
                <SearchableSelect
                  options={category}
                  selectedOption={selectedCategory}
                  onSelect={setSelectedCategory}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addCategoryForm.name}
                  placeholder={t.addCategoryForm.namePlaceHolder}
                  value={formDataf.name}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, name: value })
                  }
                  error={
                    state?.errors?.name
                      ? getMessage(state.errors.name[0], lang)
                      : ""
                  }
                  required
                />

                <FormInput
                  id="code"
                  label={t.addCategoryForm.code}
                  placeholder={t.addCategoryForm.codePlaceHolder}
                  value={formDataf.code}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, code: value })
                  }
                  error={
                    state?.errors?.code
                      ? getMessage(state.errors.code[0], lang)
                      : ""
                  }
                  required
                />

                <FormTextarea
                  id="detailes"
                  label={t.addCategoryForm.detailes}
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
                {!imgDelete && formDataf.img && (
                  <DeleteImg
                    t={t}
                    formDataf={formDataf}
                    setFormDataf={setFormDataf}
                    setAction={setAction}
                    setImgDelete={setImgDelete}
                    alt={t.addCategoryForm.img}
                  />
                )}
                {imgDelete && (
                  <FormFileInput
                    label={t.addCategoryForm.img}
                    error={
                      state?.errors?.img
                        ? getMessage(state.errors.img[0], lang)
                        : ""
                    }
                    imgName={formDataf.img}
                    onAction={setAction}
                    toast={toast}
                    setFormDataf={setFormDataf}
                    formDataf={formDataf}
                    t={t}
                    alt={t.addCategoryForm.img}
                  />
                )}
              </div>
            )}

            <div className="mt-8 flex w-full justify-between">
              <NextPrevButton
                handleStep={handlePrevStep}
                disabled={step === 0}
                text={t.steps.previous}
              />
              {step < 1 ? (
                <NextPrevButton
                  handleStep={handleNextStep}
                  disabled={!selectedCategory}
                  text={t.steps.next}
                />
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
