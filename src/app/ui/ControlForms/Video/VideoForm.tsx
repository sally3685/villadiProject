"use client";
import { TriangleAlert } from "lucide-react";
import { AddVideoAction } from "@/app/actions/videoAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import Stepper from "../../Stepper";
import SearchableSelect from "../../SelectMenu";
import { FormInput } from "../../FormInput";
import { FormFileInput } from "../../FormFileInput";
import { controlDictionary, productType, userType } from "../types";
import { UseVideo } from "./useVideo";
import ToggleLang from "../ToggleLang";
import { getMessage } from "../../../../../helpers/getMessage";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface ProductFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  user: userType;
  productEn: productType[];
  productAr: productType[];
}

export default function VideoForm({
  t,
  productEn,
  productAr,
  lang,
  user,
}: ProductFormProps) {
  const [step, setStep] = useState(0);
  const [formDataf, setFormDataf] = useState({
    name: "",
    embededLink: "",
    productId: "",
    img: "",
    key: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<
    productType | undefined
  >(undefined);
  const [tempLang, setTempLang] = useState<string>(lang);

  const [state, action] = useActionState(AddVideoAction, undefined);
  const [imgAction, setAction] = useState(false);

  UseVideo(t, nameRef, lang, state, setFormDataf, setStep, setSelectedProduct);

  const handleSubmit = (formData: FormData) => {
    if (!formDataf.img) {
      toast.warning(t.required.coverImgRequired);
      return;
    }
    if (!selectedProduct) {
      toast.warning(t.required.productRequired);
      return;
    }

    formData.append("coverImg", formDataf.img);

    formData.append("selectedProduct", selectedProduct.id);
    formData.append("language", tempLang);
    formData.append("name", formDataf.name);
    formData.append("embededLink", formDataf.embededLink);

    action(formData);
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
    setFormDataf({
      name: "",
      embededLink: "",
      productId: "",
      img: "",
      key: "",
    });
    setStep(0);
    setSelectedProduct(undefined);
  };

  const handleNextStep = () => {
    if (!selectedProduct) {
      toast.warning(t.required.productRequired);
      return;
    }
    if (!formDataf.img) {
      toast.warning(t.required.coverImgRequired);
      return;
    }

    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
  };

  const currentProducts = tempLang === "en" ? productEn : productAr;
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
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {step === 0 && (
              <div>
                <label className="block text-lg font-bold text-black lg:text-xl">
                  {isOppositeLanguage
                    ? t.addVideoForm.oppProduct
                    : t.addVideoForm.product}
                </label>
                <SearchableSelect
                  options={currentProducts}
                  selectedOption={selectedProduct}
                  onSelect={setSelectedProduct}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />
                <FormFileInput
                  label={
                    isOppositeLanguage
                      ? t.addVideoForm.oppImg
                      : t.addVideoForm.img
                  }
                  error={
                    state?.errors?.coverImg
                      ? getMessage(state.errors.coverImg[0], lang)
                      : ""
                  }
                  imgName={formDataf.img}
                  onAction={setAction}
                  toast={toast}
                  setFormDataf={setFormDataf}
                  formDataf={formDataf}
                  t={t}
                  alt={t.addVideoForm.img}
                />
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={
                    isOppositeLanguage
                      ? t.addVideoForm.oppName
                      : t.addVideoForm.name
                  }
                  placeholder={t.addVideoForm.namePlaceHolder}
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
                  id="embededLink"
                  label={
                    isOppositeLanguage
                      ? t.addVideoForm.oppEmbededLink
                      : t.addVideoForm.embededLink
                  }
                  placeholder={t.addVideoForm.embededLinkPlaceHolder}
                  value={formDataf.embededLink}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, embededLink: value })
                  }
                  error={
                    state?.errors?.embededLink
                      ? getMessage(state.errors.embededLink[0], lang)
                      : ""
                  }
                  required
                />
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
                  disabled={!selectedProduct || !formDataf.img || imgAction}
                  text={t.steps.next}
                />
              ) : (
                <SubmitButton
                  proccessing={false}
                  textProccessing={""}
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
