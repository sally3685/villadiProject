"use client";
import { TriangleAlert } from "lucide-react";
import { AddVideoAction } from "../actions/videoAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import Stepper from "./Stepper";
import SearchableSelect from "./SelectMenu";
import { FormInput } from "./FormInput";
import { FormFileInput } from "./FormFileInput";

interface ProductType {
  name: string;
  id: string;
}

interface User {
  name: string;
  email: string;
  role: string;
}

interface ProductFormProps {
  t: any;
  lang: string;
  user: User | null;
  productEn: ProductType[] | undefined;
  productAr: ProductType[] | undefined;
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
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [tempLang, setTempLang] = useState<string>(lang);

  const [state, action] = useActionState(AddVideoAction, undefined);
  const [imgAction, setAction] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);
      nameRef.current?.focus();

      if (state.success) {
        toast.success(t.addVideoForm.doneSubmit, { position: "top-right" });
        setFormDataf({
          name: "",
          embededLink: "",
          productId: "",
          img: "",
          key: "",
        });
        setStep(0);
        setSelectedProduct(null);
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addVideoForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedProduct || !formDataf.img) {
      toast.warning(
        lang === "en"
          ? "Please select a product and a cover image to continue"
          : "الرجاء اختيار منتج وصورة غلاف للمتابعة"
      );
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
    setSelectedProduct(null);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedProduct && !formDataf.img) {
      toast.warning(t.addVideoForm.productRequired);
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
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 w-full">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8 flex justify-center flex-col">
            <div className="flex flex-col gap-8 mx-4">
              <h2 className="text-black text-lg lg:text-xl font-bold">
                {t.addVideoForm.admin} {user?.name}
              </h2>
              <p className="mt-1 text-xs lg:text-sm text-black flex gap-2">
                <TriangleAlert color="#da9a40" size={50} />
                {t.addVideoForm.adminWarning}
              </p>

              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-xl bg-[#da9a40] w-[fit-content] text-sm lg:text-lg text-white"
                onClick={toggleLanguage}
              >
                {isOppositeLanguage
                  ? t.addVideoForm.langButton
                  : t.addVideoForm.opplangButton}
              </button>
            </div>

            <hr
              className={`bg-[#7abc43] h-[2px] lg:rotate-90 ${lang === "en" ? "lg:left-[50%]" : "right-[50%]"} relative lg:top-[-20%]`}
            />
          </div>

          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-8 flex justify-center flex-col">
            <div>
              <h2 className="text-black text-xl pb-4">
                {t.addVideoForm.steps}:
              </h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {/* Step 0: product Selection */}
            {step === 0 && (
              <div>
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {isOppositeLanguage
                    ? t.addVideoForm.oppProduct
                    : t.addVideoForm.product}
                </label>
                <SearchableSelect
                  options={currentProducts}
                  selectedOption={selectedProduct}
                  onSelect={setSelectedProduct}
                />
                <FormFileInput
                  label={
                    isOppositeLanguage
                      ? t.addVideoForm.oppImg
                      : t.addVideoForm.img
                  }
                  error={state?.errors?.coverImg}
                  imgName={formDataf.img}
                  onAction={setAction}
                  toast={toast}
                  setFormDataf={setFormDataf}
                  formDataf={formDataf}
                  lang={lang}
                  alt={lang === "en" ? "flavor img" : "صورة النكهة"}
                />
              </div>
            )}

            {/* Step 1: Video Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
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
                  error={state?.errors?.name}
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
                  error={state?.errors?.embededLink}
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
                {t.addVideoForm.previous}
              </button>

              {step < 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!selectedProduct || !formDataf.img || imgAction}
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    !selectedProduct || !formDataf.img || imgAction
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-800"
                  }`}
                >
                  {t.addVideoForm.next}
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
      {pending ? t.addVideoForm.waitSubmit : t.addVideoForm.submit}
    </button>
  );
}
