"use client";
import { UpdateRecipeAction } from "../../../actions/recipyAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import SearchableSelect from "../../SelectMenu";
import Stepper from "../../Stepper";
import { Recipy } from "../../../../../prisma/generated/prisma";
import { controlDictionary, flavorType, userType } from "../types";
import { useRecipe } from "./useRecipe";
import { getMessage } from "../../../../../helpers/getMessage";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface recipeFormProps {
  t: controlDictionary;
  lang: "ar" | "en";
  recipe: Recipy[];
  flavors: flavorType[];
}

export default function RecipeUpdateForm({
  t,
  lang,
  recipe,
  flavors,
}: recipeFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    details: "",
    code: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);

  const [selectedFlavor, setSelectedFlavor] = useState<flavorType | undefined>(
    undefined,
  );
  const [selectedRecipe, setSelectedRecipe] = useState<Recipy | undefined>(
    undefined,
  );
  const [state, action] = useActionState(UpdateRecipeAction, undefined);

  useRecipe(
    t,
    nameRef,
    lang,
    state,
    setFormDataf,
    setStep,
    setSelectedFlavor,
    setSelectedRecipe,
  );

  const handleSubmit = (formData: FormData) => {
    if (!selectedRecipe) {
      toast.warning(t.required.recipeRequired);
      return;
    }
    if (!selectedFlavor) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    formData.append("language", selectedRecipe?.lang);
    formData.append("id", selectedRecipe?.id);
    formData.append("selectedF", selectedFlavor?.id);
    action(formData);
  };

  const handleNextStep = () => {
    if (!selectedRecipe) {
      toast.warning(t.required.recipeRequired);
      return;
    }
    if (!flavors) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    setFormDataf({
      name: selectedRecipe?.name,
      details: selectedRecipe?.detailes,
      code: selectedRecipe?.code,
    });

    const flavorF = flavors.find((flav) => flav.id === selectedRecipe.flavorId);
    if (!flavorF) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    setSelectedFlavor({
      id: selectedRecipe?.flavorId,
      name: flavorF.name,
    });
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedRecipe(undefined);
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
                  {t.updateRecipyForm.title}
                </label>
                <SearchableSelect
                  options={recipe}
                  selectedOption={selectedRecipe}
                  onSelect={setSelectedRecipe}
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
                  label={t.addRecipyForm.name}
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
                  id="detailes"
                  label={t.addRecipyForm.details}
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
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-black lg:text-lg">
                    {t.addProductForm.flavor}
                  </label>
                  <SearchableSelect
                    options={flavors}
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
                  disabled={!selectedRecipe}
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
