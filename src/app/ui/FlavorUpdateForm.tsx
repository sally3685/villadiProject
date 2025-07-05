"use client";
import { UpdateFlavorAction } from "../actions/flavorAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import { FormFileInput } from "./FormFileInput";
import SearchableSelect from "./SelectMenu";
import Stepper from "./Stepper";
import { Flavor } from "../../../prisma/generated/prisma";

interface User {
  name: string;
  email: string;
  role: string;
}

interface flavorFormProps {
  t: any;
  flavor: Flavor[];
}

export default function FlavorUpdateForm({ t, flavor }: flavorFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    img: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);

  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | undefined>(
    undefined
  );
  const [state, action] = useActionState(UpdateFlavorAction, undefined);
  //   const currentCategories = tempLang === "en" ? categoryEn : categoryAr;

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log(state);
    if (state) {
      nameRef.current?.focus();

      if (state.success) {
        toast.success(t.addFlavorForm.doneUpdate, {
          position: "top-right",
        });
        window.scroll(0, 0);
        setStep(0);
        setSelectedFlavor(undefined);
        // Reset form on successful submission
        setFormDataf({
          name: "",
          img: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addFlavorForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedFlavor) {
      toast.warning(t.addFlvorForm.flavor);
      return;
    }
    formData.append("language", selectedFlavor?.lang);
    formData.append("id", selectedFlavor?.id);
    action(formData);
  };

  const handleNextStep = () => {
    if (!selectedFlavor) {
      toast.warning(t.addFlavorForm.flavor);
      return;
    }
    setFormDataf({
      name: selectedFlavor?.name,
      img: selectedFlavor?.primaryImg,
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
                  {t.addFlavorForm.flavor}
                </label>
                <SearchableSelect
                  options={flavor}
                  selectedOption={selectedFlavor}
                  onSelect={setSelectedFlavor}
                />
                {state?.general && (
                  <p className="mt-3 text-sm/6 text-red-600">
                    {state?.general}
                  </p>
                )}
              </div>
            )}

            {/* Step 1: Recipe Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addFlavorForm.name}
                  placeholder={t.addFlavorForm.namePlaceHolder}
                  value={formDataf.name}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, name: value })
                  }
                  error={state?.errors?.name}
                  required
                />

                <FormFileInput
                  id="img"
                  label={t.addFlavorForm.img}
                  addText={t.addFlavorForm.addimg}
                  selectedText={t.addFlavorForm.imgselected}
                  detailsText={t.addFlavorForm.imgdetailes}
                  value={formDataf.img}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, img: value })
                  }
                  error={state?.errors?.img}
                  required
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
