"use client";
import { TriangleAlert } from "lucide-react";
import { AddRecipeAction } from "../../../actions/recipyAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import Stepper from "../../Stepper";
import SearchableSelect from "../../SelectMenu";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import { controlDictionary, flavorType, userType } from "../types";
import { useRecipe } from "./useRecipe";
import ToggleLang from "../ToggleLang";
import { getMessage } from "../../../../../helpers/getMessage";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface RecipeFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  user: userType;
  flavorEn: flavorType[] | undefined;
  flavorAr: flavorType[] | undefined;
}

export default function RecipeForm({
  t,
  flavorEn,
  flavorAr,
  lang,
  user,
}: RecipeFormProps) {
  const [step, setStep] = useState(0);
  const [formDataf, setFormDataf] = useState({
    name: "",
    details: "",
    code: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<flavorType | undefined>(
    undefined,
  );
  const [tempLang, setTempLang] = useState<string>(lang);

  const [state, action] = useActionState(AddRecipeAction, undefined);

  useRecipe(t, nameRef, lang, state, setFormDataf, setStep, setSelectedFlavor);

  const handleSubmit = (formData: FormData) => {
    if (!selectedFlavor) {
      toast.warning(t.required.recipeRequired);
      return;
    }

    formData.append("selectedF", selectedFlavor.id);
    formData.append("language", tempLang);

    action(formData);
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
    setFormDataf({ name: "", details: "", code: "" });
    setStep(0);
    setSelectedFlavor(undefined);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedFlavor) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedFlavor(undefined);
  };

  const currentFlavors = tempLang === "en" ? flavorEn : flavorAr;
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
                    ? t.addRecipyForm.oppFlavor
                    : t.addRecipyForm.flavor}
                </label>
                <SearchableSelect
                  options={currentFlavors}
                  selectedOption={selectedFlavor}
                  onSelect={setSelectedFlavor}
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
                  label={
                    isOppositeLanguage
                      ? t.addRecipyForm.oppName
                      : t.addRecipyForm.name
                  }
                  placeholder={t.addRecipyForm.namePlaceHolder}
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
                  label={t.addRecipyForm.code}
                  placeholder={t.addRecipyForm.codePlaceHolder}
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
                  id="details"
                  label={
                    isOppositeLanguage
                      ? t.addRecipyForm.oppDetails
                      : t.addRecipyForm.details
                  }
                  placeholder={t.addRecipyForm.detailsPlaceHolder}
                  value={formDataf.details}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, details: value })
                  }
                  error={
                    state?.errors?.details
                      ? getMessage(state.errors.details[0], lang)
                      : ""
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

              {step < 1 ? (
                <NextPrevButton
                  handleStep={handleNextStep}
                  disabled={!selectedFlavor}
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
