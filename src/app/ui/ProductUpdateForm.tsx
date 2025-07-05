"use client";
import { UpdateProductAction } from "../actions/productAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { FormFileInput } from "./FormFileInput";
import SearchableSelect from "./SelectMenu";
import Stepper from "./Stepper";
import { Product } from "../../../prisma/generated/prisma";
import FormColorInput from "./FormColorPicker";

type CategoryType = {
  name: string;
  code: string;
  id: string;
};

type FlavorType = {
  name: string;
  id: string;
};
interface productFormProps {
  t: any;
  lang: string;
  product: Product[];
  categories: CategoryType[];
  flavors: FlavorType[];
}

export default function ProductUpdateForm({
  t,
  lang,
  product,
  categories,
  flavors,
}: productFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    code: "",
    detailes: "",
    img: "",
    img2: "",
    color: "",
    p_color: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorType | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const [state, action] = useActionState(UpdateProductAction, undefined);
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
            ? "Product updated successfully"
            : "تم تعديل الصنف بنجاح",
          {
            position: "top-right",
          }
        );
        window.scroll(0, 0);
        setStep(0);
        setSelectedCategory(null);
        setSelectedFlavor(null);
        setSelectedProduct(undefined);
        // Reset form on successful submission
        setFormDataf({
          name: "",
          code: "",
          detailes: "",
          img: "",
          img2: "",
          color: "",
          p_color: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addProductForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedProduct) {
      toast.warning(t.addProductForm.productRequired);
      return;
    }
    if (!selectedCategory) {
      toast.warning(t.addProductForm.categoryRequired);
      return;
    }
    if (!selectedFlavor) {
      toast.warning(t.addProductForm.flavorRequired);
      return;
    }
    formData.append("language", selectedProduct?.lang);
    formData.append("id", selectedProduct?.id);
    formData.append("selectedC", selectedCategory?.id);
    formData.append("selectedF", selectedFlavor?.id);
    formData.append("backgroundColor", formDataf?.color);
    formData.append("patternColor", formDataf?.p_color);
    action(formData);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedProduct) {
      toast.warning(t.addProductForm.productRequired);
      return;
    }
    if (!selectedProduct) {
      toast.warning(t.addProductForm.productRequired);
      return;
    }
    if (!categories) {
      toast.warning(t.addProductForm.categoryRequired);
      return;
    }
    if (!flavors) {
      toast.warning(t.addProductForm.flavorRequired);
      return;
    }
    setFormDataf({
      name: selectedProduct?.name,
      code: selectedProduct?.code,
      detailes: selectedProduct?.detailes,
      img: selectedProduct?.img,
      img2: selectedProduct?.secondryImg,
      color: selectedProduct?.color,
      p_color: selectedProduct?.p_color,
    });

    const categoryF = categories.find(
      (cat) => cat.id === selectedProduct.categoryId
    );
    if (!categoryF) {
      toast.warning(t.addProductForm.categoryRequired);
      return;
    }
    const flavorF = flavors.find(
      (flav) => flav.id === selectedProduct.flavorId
    );
    if (!flavorF) {
      toast.warning(t.addProductForm.flavorRequired);
      return;
    }
    setSelectedCategory({
      id: selectedProduct?.categoryId,
      name: categoryF.name,
      code: categoryF.code,
    });
    setSelectedFlavor({ id: selectedProduct?.flavorId, name: flavorF.name });
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedProduct(undefined);
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
                {t.addProductForm.steps}:
              </h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {/* Step 0: Flavor Selection */}
            {step === 0 && (
              <div>
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {t.addProductForm.product}
                </label>
                <SearchableSelect
                  options={product}
                  selectedOption={selectedProduct}
                  onSelect={setSelectedProduct}
                />
              </div>
            )}

            {/* Step 1: Recipe Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addProductForm.name}
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
                  label={t.addProductForm.code}
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
                  label={t.addProductForm.detailes}
                  placeholder={t.addProductForm.detailesPlaceHolder}
                  value={formDataf.detailes}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, detailes: value })
                  }
                  error={state?.errors?.detailes}
                />

                <div className="col-span-full">
                  <label className="block text-sm lg:text-lg font-medium text-black">
                    {t.addProductForm.category}
                  </label>
                  <SearchableSelect
                    options={categories}
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
                <FormFileInput
                  id="img"
                  label={t.addProductForm.img}
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
                  label={t.addFlavorForm.img2}
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
                  tempLang={lang}
                />
                <FormColorInput
                  label={t.addProductForm.backgroundColor}
                  color={formDataf.color}
                  setColor={(value) =>
                    setFormDataf({ ...formDataf, color: value })
                  }
                />

                <FormColorInput
                  label={t.addProductForm.patternColor}
                  color={formDataf.p_color}
                  setColor={(value) =>
                    setFormDataf({ ...formDataf, p_color: value })
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

              {step < 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!selectedProduct}
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    !selectedProduct
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
