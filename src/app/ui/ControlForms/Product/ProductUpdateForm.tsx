"use client";
import { UpdateProductAction } from "@/app/actions/productAction";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import { FormFileInput } from "../../FormFileInput";
import SearchableSelect from "../../SelectMenu";
import Stepper from "../../Stepper";
import { Product } from "../../../../../prisma/generated/prisma";
import FormColorInput from "../../FormColorPicker";
import { deleteUTFiles } from "../../../data-access-layer/uploadthingDAL";
import Image from "next/image";
import { categoryType, controlDictionary, flavorType } from "../types";
import useProduct from "./useProduct";
import { getMessage } from "../../../../../helpers/getMessage";
import DeleteImg from "../DeleteImg";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface productFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  product: Product[];
  categories: categoryType[];
  flavors: flavorType[];
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
    backgroundColor: "",
    patternColor: "",
  });
  const [imgAction, setAction] = useState(false);
  const [imgAction2, setAction2] = useState(false);

  const [imgDelete, setImgDelete] = useState(false);

  const [imgDelete2, setImgDelete2] = useState(false);
  const [key1, setKey1] = useState({
    img: "",
    key: "",
  });
  const [key2, setKey2] = useState({
    img: "",
    key: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<
    categoryType | undefined
  >(undefined);
  const [selectedFlavor, setSelectedFlavor] = useState<flavorType | undefined>(
    undefined,
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  );
  const [state, action] = useActionState(UpdateProductAction, undefined);

  const handleSubmit = (formData: FormData) => {
    if (!selectedProduct) {
      toast.warning(t.required.productRequired);
      return;
    }
    if (!selectedCategory) {
      toast.warning(t.required.categoryRequired);
      return;
    }
    if (!selectedFlavor) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    formData.append("language", selectedProduct?.lang);
    formData.append("id", selectedProduct?.id);
    formData.append("selectedC", selectedCategory?.id);
    formData.append("selectedF", selectedFlavor?.id);
    formData.append("backgroundColor", formDataf?.backgroundColor);
    formData.append("patternColor", formDataf?.patternColor);
    formData.append("img", key1.img);
    formData.append("img2", key2.img);
    action(formData);
  };

  const handleNextStep = () => {
    if (!selectedProduct) {
      toast.warning(t.required.productRequired);
      return;
    }
    if (!categories) {
      toast.warning(t.required.categoryRequired);
      return;
    }
    if (!flavors) {
      toast.warning(t.required.flavorRequired);
      return;
    }
    setFormDataf({
      name: selectedProduct?.name,
      code: selectedProduct?.code,
      detailes: selectedProduct?.detailes,
      backgroundColor: selectedProduct?.color,
      patternColor: selectedProduct?.p_color,
    });

    setKey1({
      img: selectedProduct?.img,
      key: selectedProduct?.img.split("/").pop() as string,
    });
    setKey2({
      img: selectedProduct?.secondryImg,
      key: selectedProduct?.secondryImg.split("/").pop() as string,
    });
    const categoryF = categories.find(
      (cat) => cat.id === selectedProduct.categoryId,
    );
    if (!categoryF) {
      toast.warning(t.required.categoryRequired);
      return;
    }
    const flavorF = flavors.find(
      (flav) => flav.id === selectedProduct.flavorId,
    );
    if (!flavorF) {
      toast.warning(t.required.flavorRequired);
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
  useProduct(
    t,
    nameRef,
    lang,
    state,
    setKey1,
    setKey2,
    setFormDataf,
    setStep,
    setSelectedCategory,
    setSelectedFlavor,
    setSelectedProduct,
  );

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
                  {t.choose.product}
                </label>
                <SearchableSelect
                  options={product}
                  selectedOption={selectedProduct}
                  onSelect={setSelectedProduct}
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
                  label={t.addProductForm.name}
                  placeholder={t.addProductForm.namePlaceHolder}
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
                  label={t.addProductForm.code}
                  placeholder={t.addProductForm.codePlaceHolder}
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
                  label={t.addProductForm.detailes}
                  placeholder={t.addProductForm.detailesPlaceHolder}
                  value={formDataf.detailes}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, detailes: value })
                  }
                  error={
                    state?.errors?.detailes
                      ? getMessage(state.errors.detailes[0], lang)
                      : ""
                  }
                />

                <div className="col-span-full">
                  <label className="block text-sm font-medium text-black lg:text-lg">
                    {t.addProductForm.category}
                  </label>
                  <SearchableSelect
                    options={categories}
                    selectedOption={selectedCategory}
                    onSelect={setSelectedCategory}
                    placeholder={t.search.title}
                    noOptions={t.search.noOptions}
                  />
                  {state && state?.errors?.selectedC && (
                    <p className="mt-3 text-sm/6 text-red-600">
                      {getMessage(state.errors.selectedC[0], lang)}
                    </p>
                  )}
                </div>
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

                {!imgDelete ? (
                  <DeleteImg
                    t={t}
                    formDataf={key1}
                    setFormDataf={setKey1}
                    setAction={setAction}
                    setImgDelete={setImgDelete}
                    alt={t.addProductForm.img}
                  />
                ) : imgDelete ? (
                  <FormFileInput
                    label={t.addProductForm.img}
                    error={
                      state?.errors?.img
                        ? getMessage(state.errors.img[0], lang)
                        : ""
                    }
                    imgName={key1.img}
                    onAction={setAction}
                    toast={toast}
                    setFormDataf={setKey1}
                    formDataf={key1}
                    t={t}
                    alt={t.addProductForm.img}
                  />
                ) : (
                  <></>
                )}
                {!imgDelete2 ? (
                  <DeleteImg
                    t={t}
                    formDataf={key2}
                    setFormDataf={setKey2}
                    setAction={setAction2}
                    setImgDelete={setImgDelete2}
                    alt={t.addProductForm.img}
                  />
                ) : imgDelete2 ? (
                  <FormFileInput
                    label={t.addProductForm.img2}
                    error={
                      state?.errors?.img2
                        ? getMessage(state.errors.img2[0], lang)
                        : ""
                    }
                    imgName={key2.img}
                    onAction={setAction2}
                    toast={toast}
                    setFormDataf={setKey2}
                    formDataf={key2}
                    t={t}
                    alt={t.addProductForm.img2}
                  />
                ) : (
                  <></>
                )}

                <FormColorInput
                  label={t.addProductForm.backgroundColor}
                  color={formDataf.backgroundColor}
                  setColor={(value) =>
                    setFormDataf({ ...formDataf, backgroundColor: value })
                  }
                />

                <FormColorInput
                  label={t.addProductForm.patternColor}
                  color={formDataf.patternColor}
                  setColor={(value) =>
                    setFormDataf({ ...formDataf, patternColor: value })
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
                  disabled={!selectedProduct}
                  text={t.steps.next}
                />
              ) : (
                <SubmitButton
                  proccessing={imgAction || imgAction2}
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
