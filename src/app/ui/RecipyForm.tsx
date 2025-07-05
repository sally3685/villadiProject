"use client";
import { TriangleAlert } from "lucide-react";
import { AddRecipeAction } from "../actions/recipyAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import Stepper from "./Stepper";
import SearchableSelect from "./SelectMenu";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

interface FlavorType {
  name: string;
  id: string;
}

interface User {
  name: string;
  email: string;
  role: string;
}

interface RecipeFormProps {
  t: any;
  lang: string;
  user: User | null;
  flavorEn: FlavorType[] | undefined;
  flavorAr: FlavorType[] | undefined;
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
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorType | null>(null);
  const [tempLang, setTempLang] = useState<string>(lang);

  const [state, action] = useActionState(AddRecipeAction, undefined);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);
      nameRef.current?.focus();

      if (state.success) {
        toast.success(t.addRecipyForm.doneSubmit, { position: "top-right" });
        // Reset form on success
        setFormDataf({ name: "", details: "", code: "" });
        setStep(0);
        setSelectedFlavor(null);
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addRecipyForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedFlavor) {
      toast.warning(
        lang === "en"
          ? "Please select a flavor to continue"
          : "الرجاء اختيار نكهة للمتابعة"
      );
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
    setSelectedFlavor(null);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedFlavor) {
      toast.warning(t.addRecipyForm.flavorRequired);
      return;
    }
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedFlavor(null);
  };

  const currentFlavors = tempLang === "en" ? flavorEn : flavorAr;
  const isOppositeLanguage = lang !== tempLang;

  return (
    <form
      action={handleSubmit}
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 w-full">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8 flex justify-center flex-col">
            <div className="flex flex-col gap-8 mx-4">
              <h2 className="text-black text-lg lg:text-xl font-bold">
                {t.addRecipyForm.admin} {user?.name}
              </h2>
              <p className="mt-1 text-xs lg:text-sm text-black flex gap-2">
                <TriangleAlert color="#da9a40" size={50} />
                {t.addRecipyForm.adminWarning}
              </p>

              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-xl bg-[#da9a40] w-[fit-content] text-sm lg:text-lg text-white"
                onClick={toggleLanguage}
              >
                {isOppositeLanguage
                  ? t.addRecipyForm.langButton
                  : t.addRecipyForm.opplangButton}
              </button>
            </div>

            <hr className="bg-[#7abc43] h-[2px] lg:rotate-90 lg:left-[50%] relative lg:top-[-20%]" />
          </div>

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
                  {isOppositeLanguage
                    ? t.addRecipyForm.oppFlavor
                    : t.addRecipyForm.flavor}
                </label>
                <SearchableSelect
                  options={currentFlavors}
                  selectedOption={selectedFlavor}
                  onSelect={setSelectedFlavor}
                  placeholder={t.addRecipyForm.flavorPlaceholder}
                />
              </div>
            )}

            {/* Step 1: Recipe Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
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
                  error={state?.errors?.details}
                />
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
                  disabled={!selectedFlavor}
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    !selectedFlavor
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
