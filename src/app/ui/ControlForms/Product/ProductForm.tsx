"use client";
import { AddProductAction } from "../../../actions/productAction";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import FormColorInput from "../../FormColorPicker";
import Stepper from "../../Stepper";
import SearchableSelect from "../../SelectMenu";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import { FormFileInput } from "../../FormFileInput";
import {
  controlDictionary,
  userType,
  categoryType,
  flavorType,
} from "../types";
import useProduct from "./useProduct";
import ToggleLang from "../ToggleLang";
import { getMessage } from "../../../../../helpers/getMessage";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface ProductFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  user: userType;
  catsEn: categoryType[];
  catsAr: categoryType[];
  flavorAr: flavorType[];
  flavorEn: flavorType[];
}

export default function ProductForm({
  t,
  flavorEn,
  flavorAr,
  catsEn,
  catsAr,
  lang,
  user,
}: ProductFormProps) {
  const [imgAction, setAction] = useState(false);
  const [imgAction2, setAction2] = useState(false);
  const [key1, setKey1] = useState({
    img: "",
    key: "",
  });
  const [key2, setKey2] = useState({
    img: "",
    key: "",
  });
  const [step, setStep] = useState(0);
  const [formDataf, setFormDataf] = useState({
    name: "",
    code: "",
    detailes: "",
    patternColor: "#aabbcc",
    backgroundColor: "#aabbcc",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    categoryType | undefined
  >(undefined);
  const [selectedFlavor, setSelectedFlavor] = useState<flavorType | undefined>(
    undefined,
  );
  const [tempLang, setTempLang] = useState<string>(lang);

  const [state, action] = useActionState(AddProductAction, undefined);

  useProduct(
    t,
    nameRef,
    lang,
    state,
    setKey1,
    setKey2,
    setFormDataf,
    setStep,
    setSelectedCategory,
    setSelectedFlavor,
  );

  const handleSubmit = (formData: FormData) => {
    if (!selectedCategory) {
      toast.warning(t.required.categoryRequired);
      return;
    }
    if (!selectedFlavor) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    formData.append("language", tempLang);
    formData.append("selectedC", selectedCategory.id);
    formData.append("selectedF", selectedFlavor.id);
    formData.append("backgroundColor", formDataf.backgroundColor);
    formData.append("patternColor", formDataf.patternColor);
    formData.append("img", key1.img);
    formData.append("img2", key2.img);
    action(formData);
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedCategory) {
      toast.warning(t.required.categoryRequired);
      return;
    }
    if (step === 2 && !selectedFlavor) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    setStep((prev) => Math.min(2, prev + 1));
  };

  const handlePrevStep = () => {
    if (step === 1) setSelectedCategory(undefined);
    else if (step === 2) setSelectedFlavor(undefined);
    setStep((prev) => Math.max(0, prev - 1));
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
    setFormDataf({
      name: "",
      code: "",
      detailes: "",
      patternColor: "#aabbcc",
      backgroundColor: "#aabbcc",
    });

    setKey1({ img: "", key: "" });
    setKey2({ img: "", key: "" });
    setStep(0);
    setSelectedCategory(undefined);
    setSelectedFlavor(undefined);
  };

  const currentCategoryOptions = tempLang === "en" ? catsEn : catsAr;
  const currentFlavorOptions = tempLang === "en" ? flavorEn : flavorAr;
  const isOppositeLanguage = lang !== tempLang;

  return (
    <form
      action={handleSubmit}
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="flex h-full items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <ToggleLang
            user={user}
            t={t}
            isOppositeLanguage={isOppositeLanguage}
            toggleLanguage={toggleLanguage}
            lang={lang}
          ></ToggleLang>

          <div className="flex flex-col justify-center space-y-8 lg:col-span-2">
            <div>
              <h2 className="pb-4 text-xl text-black">{t.steps.title} :</h2>
              <Stepper totalSteps={2} currentStep={step} className="mb-8" />
            </div>

            {step === 0 && (
              <div className="row-span-2">
                <label className="block text-lg font-bold text-black lg:text-xl">
                  {isOppositeLanguage
                    ? t.addProductForm.oppCategory
                    : t.addProductForm.category}
                </label>
                <SearchableSelect
                  options={currentCategoryOptions}
                  selectedOption={selectedCategory}
                  onSelect={setSelectedCategory}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />

                {state && state?.errors?.selectedC && (
                  <p className="mt-3 text-sm/6 text-red-600">
                    {getMessage(state.errors.selectedC[0], lang)}
                  </p>
                )}
              </div>
            )}

            {step === 1 && (
              <div>
                <label className="block text-lg font-bold text-black lg:text-xl">
                  {isOppositeLanguage
                    ? t.addProductForm.oppFlavor
                    : t.addProductForm.flavor}
                </label>
                <SearchableSelect
                  options={currentFlavorOptions}
                  selectedOption={selectedFlavor}
                  onSelect={setSelectedFlavor}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />
                {state && state?.errors?.selectedF && (
                  <p className="mt-3 text-sm/6 text-red-600">
                    {getMessage(state.errors.selectedF[0], lang)}
                  </p>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppName
                      : t.addProductForm.name
                  }
                  placeholder={t.addProductForm.namePlaceHolder}
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
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppCode
                      : t.addProductForm.code
                  }
                  placeholder={t.addProductForm.codePlaceHolder}
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
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppDetailes
                      : t.addProductForm.detailes
                  }
                  placeholder={t.addProductForm.detailesPlaceHolder}
                  value={formDataf.detailes}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, detailes: value })
                  }
                  error={
                    state?.errors?.detailes
                      ? getMessage(state.errors.detailes[0], lang)
                      : ""
                  }
                />
                <FormFileInput
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppImg
                      : t.addProductForm.img
                  }
                  error={
                    state?.errors?.img
                      ? getMessage(state.errors.img[0], lang)
                      : ""
                  }
                  imgName={key1.img}
                  onAction={setAction}
                  toast={toast}
                  setFormDataf={setKey1}
                  formDataf={key1}
                  t={t}
                  alt={t.addProductForm.img}
                />
                <FormFileInput
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppImg2
                      : t.addProductForm.img2
                  }
                  error={
                    state?.errors?.img2
                      ? getMessage(state.errors.img2[0], lang)
                      : ""
                  }
                  imgName={key2.img}
                  onAction={setAction2}
                  toast={toast}
                  setFormDataf={setKey2}
                  formDataf={key2}
                  t={t}
                  alt={t.addProductForm.img2}
                />
                <FormColorInput
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppBackgroundColor
                      : t.addProductForm.backgroundColor
                  }
                  color={formDataf.backgroundColor}
                  setColor={(value) =>
                    setFormDataf({ ...formDataf, backgroundColor: value })
                  }
                />

                <FormColorInput
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppPatternColor
                      : t.addProductForm.patternColor
                  }
                  color={formDataf.patternColor}
                  setColor={(value) =>
                    setFormDataf({ ...formDataf, patternColor: value })
                  }
                />
              </div>
            )}
            <div className="mt-8 flex w-full justify-between">
              <NextPrevButton
                handleStep={handlePrevStep}
                disabled={step === 0}
                text={t.steps.previous}
              />

              {step < 2 ? (
                <NextPrevButton
                  handleStep={handleNextStep}
                  disabled={
                    (step === 0 && !selectedCategory) ||
                    (step === 1 && !selectedFlavor)
                  }
                  text={t.steps.next}
                />
              ) : (
                <SubmitButton
                  proccessing={imgAction || imgAction2}
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
