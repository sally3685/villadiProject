"use client";
import { TriangleAlert } from "lucide-react";
import { AddProductAction } from "../actions/productAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import FormColorInput from "./FormColorPicker";
import Stepper from "./Stepper";
import SearchableSelect from "./SelectMenu";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { FormFileInput } from "./FormFileInput";

type CategoryType = {
  name: string;
  code: string;
  id: string;
};

type FlavorType = {
  name: string;
  id: string;
};

type UserType = {
  name: string;
  email: string;
  role: string;
};

interface ProductFormProps {
  t: any;
  lang: string;
  user: UserType;
  catsEn: CategoryType[];
  catsAr: CategoryType[];
  flavorAr: FlavorType[];
  flavorEn: FlavorType[];
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
  const [step, setStep] = useState(0);
  const [formDataf, setFormDataf] = useState({
    name: "",
    code: "",
    detailes: "",
    img: "",
    img2: "",
    patternColor: "#aabbcc",
    backgroundColor: "#aabbcc",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorType | null>(null);
  const [tempLang, setTempLang] = useState<string>(lang);

  const [state, action] = useActionState(AddProductAction, undefined);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);
      nameRef.current?.focus();

      if (state.success) {
        toast.success(t.addProductForm.doneSubmit, { position: "top-right" });
        setFormDataf({
          name: "",
          code: "",
          detailes: "",
          img: "",
          img2: "",
          patternColor: "#aabbcc",
          backgroundColor: "#aabbcc",
        });
        setSelectedCategory(null);
        setSelectedFlavor(null);
        setStep(0);
      } else if (state.general) {
        toast.error(state.general);
      } else {
        toast.error(t.addProductForm.generalError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedCategory || !selectedFlavor) {
      toast.warning(
        lang === "en"
          ? "Choose category and flavor to complete"
          : "اختر الصنف والنكهة للاستمرار"
      );
      return;
    }

    formData.append("selectedC", selectedCategory.id);
    formData.append("selectedF", selectedFlavor.id);
    formData.append("backgroundColor", formDataf.backgroundColor);
    formData.append("patternColor", formDataf.patternColor);

    action(formData);
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedCategory) {
      toast.warning(t.addProductForm.categoryRequired);
      return;
    }
    if (step === 2 && !selectedFlavor) {
      toast.warning(t.addProductForm.flavorRequired);
      return;
    }
    setStep((prev) => Math.min(2, prev + 1));
  };

  const handlePrevStep = () => {
    if (step === 1) setSelectedCategory(null);
    else if (step === 2) setSelectedFlavor(null);
    setStep((prev) => Math.max(0, prev - 1));
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
    setFormDataf({
      name: "",
      code: "",
      detailes: "",
      img: "",
      img2: "",
      patternColor: "#aabbcc",
      backgroundColor: "#aabbcc",
    });
    setStep(0);
    setSelectedCategory(null);
    setSelectedFlavor(null);
  };

  const currentCategoryOptions = tempLang === "en" ? catsEn : catsAr;
  const currentFlavorOptions = tempLang === "en" ? flavorEn : flavorAr;
  const isOppositeLanguage = lang !== tempLang;

  return (
    <form
      action={handleSubmit}
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8 flex justify-center flex-col">
            <div className="flex flex-col gap-8 mx-4">
              <h2 className="text-black text-lg lg:text-xl font-bold">
                {t.addProductForm.admin} {user?.name}
              </h2>
              <p className="mt-1 text-xs lg:text-sm text-black flex gap-2">
                <TriangleAlert color="#da9a40" size={50} />
                {t.addProductForm.adminWarning}
              </p>

              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-xl bg-[#da9a40] w-[fit-content] text-sm lg:text-lg text-white"
                onClick={toggleLanguage}
              >
                {isOppositeLanguage
                  ? t.addProductForm.langButton
                  : t.addProductForm.opplangButton}
              </button>
            </div>

            <hr className="bg-[#7abc43] h-[2px] lg:rotate-90 lg:left-[50%] relative lg:top-[-20%]" />
          </div>

          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-8 flex justify-center flex-col">
            <div>
              <h2 className="text-black text-xl pb-4">
                {t.addProductForm.steps}:
              </h2>
              <Stepper totalSteps={2} currentStep={step} className="mb-8" />
            </div>

            {/* Step 0: Category Selection */}
            {step === 0 && (
              <div className="row-span-2">
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {isOppositeLanguage
                    ? t.addProductForm.oppCategory
                    : t.addProductForm.category}
                </label>
                <SearchableSelect
                  options={currentCategoryOptions}
                  selectedOption={selectedCategory}
                  onSelect={setSelectedCategory}
                  placeholder={t.addProductForm.categoryPlaceholder}
                />
                {state && state?.errors?.selectedC && (
                  <p className="mt-3 text-sm/6 text-red-600">
                    {state?.errors?.selectedC}
                  </p>
                )}
              </div>
            )}

            {/* Step 1: Flavor Selection */}
            {step === 1 && (
              <div>
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {isOppositeLanguage
                    ? t.addProductForm.oppFlavor
                    : t.addProductForm.flavor}
                </label>
                <SearchableSelect
                  options={currentFlavorOptions}
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
            )}

            {/* Step 2: Product Details */}
            {step === 2 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
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
                  error={state?.errors?.name}
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
                  error={state?.errors?.code}
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
                  error={state?.errors?.detailes}
                />

                <FormFileInput
                  id="img"
                  label={
                    isOppositeLanguage
                      ? t.addProductForm.oppImg
                      : t.addProductForm.img
                  }
                  addText={t.addProductForm.addimg}
                  selectedText={t.addProductForm.imgselected}
                  detailsText={t.addProductForm.imgdetailes}
                  value={formDataf.img}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, img: value })
                  }
                  error={state?.errors?.img}
                  showLanguageInput
                  lang={lang}
                  tempLang={tempLang}
                />
                <FormFileInput
                  id="img2"
                  label={
                    isOppositeLanguage
                      ? t.addFlavorForm.oppImg2
                      : t.addFlavorForm.img2
                  }
                  addText={t.addFlavorForm.addimg2}
                  selectedText={t.addFlavorForm.imgselected}
                  detailsText={t.addFlavorForm.imgdetailes}
                  value={formDataf.img2}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, img2: value })
                  }
                  error={state?.errors?.img2}
                  showLanguageInput
                  lang={lang}
                  tempLang={tempLang}
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
                {t.addProductForm.previous}
              </button>

              {step < 2 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={
                    (step === 0 && !selectedCategory) ||
                    (step === 1 && !selectedFlavor)
                  }
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    (step === 0 && !selectedCategory) ||
                    (step === 1 && !selectedFlavor)
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-800"
                  }`}
                >
                  {t.addProductForm.next}
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
      {pending ? t.addProductForm.waitSubmit : t.addProductForm.submit}
    </button>
  );
}
