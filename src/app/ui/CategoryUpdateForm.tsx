"use client";
import { UpdateCategoryAction } from "../actions/catigoryAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { FormFileInput } from "./FormFileInput";
import SearchableSelect from "./SelectMenu";
import Stepper from "./Stepper";
import { Category } from "../../../prisma/generated/prisma";
import { deleteUTFiles } from "../data-access-layer/uploadthingDAL";
import Image from "next/image";
interface CategoryFormProps {
  t: any;
  lang: string;
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
  const [imgDelete, setImgDelete] = useState(false);
  const [imgAction, setAction] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);
  const [state, action] = useActionState(UpdateCategoryAction, undefined);
  //   const currentCategories = tempLang === "en" ? categoryEn : categoryAr;

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      nameRef.current?.focus();

      if (state.success) {
        toast.success(
          lang === "en"
            ? "Category updated successfully"
            : "تم تعديل الصنف بنجاح",
          {
            position: "top-right",
          }
        );
        window.scroll(0, 0);
        setStep(0);
        setSelectedCategory(undefined);
        // Reset form on successful submission
        setFormDataf({
          name: "",
          code: "",
          detailes: "",
          img: "",
          key: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addCategoryForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedCategory) {
      toast.warning(t.addCategoryForm.categoryRequired);
      return;
    }
    formData.append("language", selectedCategory?.lang);
    formData.append("id", selectedCategory?.id);
    formData.append("img", formDataf?.img);
    action(formData);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedCategory) {
      toast.warning(t.addCategoryForm.categoryRequired);
      return;
    }
    if (!selectedCategory) {
      toast.warning(t.addCategoryForm.categoryRequired);
      return;
    }
    setFormDataf({
      name: selectedCategory?.name,
      code: selectedCategory?.code,
      detailes: selectedCategory?.detailes,
      img: selectedCategory?.img,
      key: "",
    });
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedCategory(undefined);
  };
  const isOppositeLanguage = lang !== tempLang;

  return (
    <form
      action={handleSubmit}
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 w-full">
          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-8 flex justify-center flex-col">
            <div>
              <h2 className="text-black text-xl pb-4">
                {t.addCategoryForm.steps}:
              </h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {/* Step 0: Flavor Selection */}
            {step === 0 && (
              <div>
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {t.addCategoryForm.category}
                </label>
                <SearchableSelect
                  options={category}
                  selectedOption={selectedCategory}
                  onSelect={setSelectedCategory}
                />
              </div>
            )}

            {/* Step 1: Recipe Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addCategoryForm.name}
                  placeholder={t.addCategoryForm.namePlaceHolder}
                  value={formDataf.name}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, name: value })
                  }
                  error={state?.errors?.name}
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
                  error={state?.errors?.code}
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
                  error={state?.errors?.detailes}
                />
                {!imgDelete && formDataf.img && (
                  <div className="flex flex-col gap-2 col-span-full">
                    <p className="text:sm lg:text-lg font-semibold">
                      {lang === "en"
                        ? "click on the image to delete and reupload"
                        : "اضغط على الصورة لحذفها وإعادة الادخال"}
                    </p>
                    <p className="text:xs lg:text-sm ">
                      {lang === "en"
                        ? "if image is not here it is a network error . you can still click and delete it "
                        : "اذا لم تظهر الصورة فهي مشكلة بالانترنت لازال بامكانك الضغط لحذفها"}
                    </p>
                    <Image
                      src={formDataf.img}
                      width={500}
                      height={200}
                      alt="category img"
                      className="object-contain cursor-pointer h-[200px]"
                      onClick={async () => {
                        setAction(true);
                        const key = formDataf.img.split("/").pop();
                        const res = await deleteUTFiles(key as string);
                        if (res.status === 200) {
                          toast.success(
                            lang === "en" ? "image deleted" : "تم حذف الصورة"
                          );
                          setFormDataf({ ...formDataf, img: "", key: "" });
                          setImgDelete(true);
                        } else
                          toast.error(
                            lang === "en" ? "deletion failed" : "فشل الحذف"
                          );
                        if (res) setAction(false);
                      }}
                    ></Image>
                  </div>
                )}
                {imgDelete && (
                  <FormFileInput
                    label={
                      isOppositeLanguage
                        ? t.addCategoryForm.oppImg
                        : t.addCategoryForm.img
                    }
                    error={state?.errors?.img}
                    imgName={formDataf.img}
                    onAction={setAction}
                    toast={toast}
                    setFormDataf={setFormDataf}
                    formDataf={formDataf}
                    lang={lang}
                    alt={lang === "en" ? "category img" : "صورة الصنف"}
                  />
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex w-full justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={step === 0}
                className={`px-4 py-2 bg-blue-700 rounded text-white ${
                  step === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-800"
                }`}
              >
                {t.addCategoryForm.previous}
              </button>

              {step < 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!selectedCategory}
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    !selectedCategory
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-800"
                  }`}
                >
                  {t.addCategoryForm.next}
                </button>
              ) : (
                <SubmitButton t={t} lang={lang} imgAction={imgAction} />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

function SubmitButton({
  t,
  imgAction,
  lang,
}: {
  t: any;
  lang: string;
  imgAction: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || imgAction}
      className={`py-3 px-2 text-sm rounded lg:text-lg text-white ${
        pending || imgAction
          ? "bg-neutral-300 cursor-not-allowed"
          : "bg-[#7abc43] hover:bg-[#6aab3a]  cursor-pointer"
      }`}
      type="submit"
    >
      {pending
        ? t.addCategoryForm.waitSubmit
        : imgAction && lang === "en"
          ? "proccessing"
          : imgAction && lang === "ar"
            ? "يتم المعالجة"
            : t.addCategoryForm.submit}
    </button>
  );
}
