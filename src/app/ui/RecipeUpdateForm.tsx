"use client";
import { UpdateRecipeAction } from "../actions/recipyAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import SearchableSelect from "./SelectMenu";
import Stepper from "./Stepper";
import { Recipy } from "../../../prisma/generated/prisma";

interface User {
  name: string;
  email: string;
  role: string;
}

type FlavorType = {
  name: string;
  id: string;
};
interface recipeFormProps {
  t: any;
  lang: string;
  user: User | null;
  recipe: Recipy[] | undefined;
  flavors: FlavorType[] | undefined;
}

export default function RecipeUpdateForm({
  t,
  lang,
  user,
  recipe,
  flavors,
}: recipeFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    detailes: "",
    code: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);
  const [step, setStep] = useState(0);

  const [selectedFlavor, setSelectedFlavor] = useState<FlavorType | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipy | undefined>(
    undefined
  );
  const [state, action] = useActionState(UpdateRecipeAction, undefined);
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
            ? "Recipe updated successfully"
            : "تم تعديل الوصفة بنجاح",
          {
            position: "top-right",
          }
        );
        window.scroll(0, 0);
        setStep(0);
        setSelectedFlavor(null);
        setSelectedRecipe(undefined);
        // Reset form on successful submission
        setFormDataf({
          name: "",
          detailes: "",
          code: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addRecipyForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedRecipe) {
      toast.warning(t.addRecipyForm.recipeRequired);
      return;
    }
    if (!selectedRecipe) {
      toast.warning(t.addRecipyForm.recipeRequired);
      return;
    }
    if (!selectedFlavor) {
      toast.warning(t.addRecipyForm.flavor);
      return;
    }
    formData.append("language", selectedRecipe?.lang);
    formData.append("id", selectedRecipe?.id);
    formData.append("selectedF", selectedFlavor?.id);
    action(formData);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedRecipe) {
      toast.warning(t.addRecipyForm.recipeRequired);
      return;
    }
    if (!selectedRecipe) {
      toast.warning(t.addRecipyForm.recipeRequired);
      return;
    }
    if (!flavors) {
      toast.warning(t.addRecipyForm.flavor);
      return;
    }
    setFormDataf({
      name: selectedRecipe?.name,
      detailes: selectedRecipe?.detailes,
      code: selectedRecipe?.code,
    });

    const flavorF = flavors.find((flav) => flav.id === selectedRecipe.flavorId);
    if (!flavorF) {
      toast.warning(t.addRecipyForm.flavor);
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
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 w-full">
          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-8 flex justify-center flex-col">
            <div>
              <h2 className="text-black text-xl pb-4">
                {t.addRecipyForm.steps}:
              </h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {/* Step 0: Flavor Selection */}
            {step === 0 && (
              <div>
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {t.addRecipyForm.recipe}
                </label>
                <SearchableSelect
                  options={recipe}
                  selectedOption={selectedRecipe}
                  onSelect={setSelectedRecipe}
                />
              </div>
            )}

            {/* Step 1: Recipe Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addRecipyForm.name}
                  placeholder={t.addRecipyForm.namePlaceHolder}
                  value={formDataf.name}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, name: value })
                  }
                  error={state?.errors?.name}
                  required
                />
                <FormInput
                  id="code"
                  label={lang === "en" ? "recipe code" : "كود الوصفة"}
                  placeholder={lang === "en" ? "456-z" : "451-z"}
                  value={formDataf.code}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, code: value })
                  }
                  error={state?.errors?.code}
                  required
                />
                <FormTextarea
                  id="detailes"
                  label={t.addRecipyForm.details}
                  placeholder={t.addRecipyForm.detailsPlaceHolder}
                  value={formDataf.detailes}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, detailes: value })
                  }
                  error={state?.errors?.details}
                />
                <div className="col-span-full">
                  <label className="block text-sm lg:text-lg font-medium text-black">
                    {t.addProductForm.flavor}
                  </label>
                  <SearchableSelect
                    options={flavors}
                    selectedOption={selectedFlavor}
                    onSelect={setSelectedFlavor}
                    placeholder={t.addProductForm.flavorPlaceholder}
                  />
                  {state && state?.errors?.selectedF && (
                    <p className="mt-3 text-sm/6 text-red-600">
                      {state?.errors?.selectedF}
                    </p>
                  )}
                </div>
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
                {t.addRecipyForm.previous}
              </button>

              {step < 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!selectedRecipe}
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    !selectedRecipe
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-800"
                  }`}
                >
                  {t.addRecipyForm.next}
                </button>
              ) : (
                <SubmitButton t={t} />
              )}
            </div>
          </div>
        </div>
      </div>
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
      {pending ? t.addRecipyForm.waitSubmit : t.addRecipyForm.submit}
    </button>
  );
}
