"use client";
import { UpdateFlavorAction } from "@/app/actions/flavorAction";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import { FormFileInput } from "../../FormFileInput";
import SearchableSelect from "../../SelectMenu";
import Stepper from "../../Stepper";
import { Flavor } from "../../../../../prisma/generated/prisma";
import Image from "next/image";
import { deleteUTFiles } from "@/app/data-access-layer/uploadthingDAL";
import { useFlavor } from "./useFlavor";
import { controlDictionary } from "../types";
import { getMessage } from "../../../../../helpers/getMessage";
import SubmitButton from "../../SubmitButton";
import NextPrevButton from "../NextPrevButton";
import DeleteImg from "../DeleteImg";

interface flavorFormProps {
  t: controlDictionary;
  flavor: Flavor[];
  lang: "en" | "ar";
}

export default function FlavorUpdateForm({ t, flavor, lang }: flavorFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    img: "",
    key: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);
  const [imgDelete, setImgDelete] = useState(false);
  const [imgAction, setAction] = useState(false);

  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | undefined>(
    undefined,
  );
  const [state, action] = useActionState(UpdateFlavorAction, undefined);
  useFlavor(t, nameRef, lang, state, setFormDataf, setStep, setSelectedFlavor);
  const handleSubmit = (formData: FormData) => {
    if (!selectedFlavor) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    formData.append("language", selectedFlavor?.lang);
    formData.append("img", formDataf.img);
    formData.append("id", selectedFlavor?.id);
    action(formData);
  };

  const handleNextStep = () => {
    if (!selectedFlavor) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    setFormDataf({
      name: selectedFlavor?.name,
      img: selectedFlavor?.primaryImg,
      key: selectedFlavor.primaryImg.split("/").pop() as string,
    });
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedFlavor(undefined);
  };

  return (
    <form
      action={handleSubmit}
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="flex h-full items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          {/* Main Form Content */}
          <div className="flex flex-col justify-center space-y-8 lg:col-span-2">
            <div>
              <h2 className="pb-4 text-xl text-black">{t.steps.title}:</h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {step === 0 && (
              <div>
                <label className="block text-lg font-bold text-black lg:text-xl">
                  {t.choose.flavor}
                </label>
                <SearchableSelect
                  options={flavor}
                  selectedOption={selectedFlavor}
                  onSelect={setSelectedFlavor}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />
                {state?.general && (
                  <p className="mt-3 text-sm/6 text-red-600">
                    {state?.general}
                  </p>
                )}
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addFlavorForm.name}
                  placeholder={t.addFlavorForm.namePlaceHolder}
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
                {!imgDelete && formDataf.img && (
                  <DeleteImg
                    t={t}
                    formDataf={formDataf}
                    setFormDataf={setFormDataf}
                    setAction={setAction}
                    setImgDelete={setImgDelete}
                    alt={t.addFlavorForm.img}
                  />
                )}
                {imgDelete && (
                  <FormFileInput
                    label={t.addFlavorForm.img}
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
                    alt={t.addFlavorForm.img}
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
                  disabled={!selectedFlavor}
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
