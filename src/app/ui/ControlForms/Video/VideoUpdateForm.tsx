"use client";
import { UpdateVideoAction } from "@/app/actions/videoAction";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import { FormFileInput } from "../../FormFileInput";
import SearchableSelect from "../../SelectMenu";
import Stepper from "../../Stepper";
import { Video } from "../../../../../prisma/generated/prisma";
import { controlDictionary, productType } from "../types";
import { UseVideo } from "./useVideo";
import DeleteImg from "../DeleteImg";
import { getMessage } from "../../../../../helpers/getMessage";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface videoFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  video: Video[];
  products: productType[];
}

export default function VideoUpdateForm({
  t,
  lang,
  video,
  products,
}: videoFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    embededLink: "",
    productId: "",
    img: "",
    key: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);
  const [imgAction, setAction] = useState(false);
  const [imgDelete, setImgDelete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    productType | undefined
  >(undefined);
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>(
    undefined,
  );
  const [state, action] = useActionState(UpdateVideoAction, undefined);

  UseVideo(
    t,
    nameRef,
    lang,
    state,
    setFormDataf,
    setStep,
    setSelectedProduct,
    setSelectedVideo,
  );

  const handleSubmit = (formData: FormData) => {
    if (!selectedProduct) {
      toast.warning(t.required.productRequired);
      return;
    }
    if (!selectedVideo) {
      toast.warning(t.required.videoRequired);
      return;
    }
    formData.append("language", selectedVideo?.lang);
    formData.append("id", selectedVideo?.id);
    formData.append("coverImg", formDataf.img);

    formData.append("selectedProduct", selectedProduct.id);
    action(formData);
  };

  const handleNextStep = () => {
    if (!selectedVideo) {
      toast.warning(t.required.videoRequired);
      return;
    }
    if (!products) {
      toast.warning(t.required.productRequired);
      return;
    }
    setFormDataf({
      name: selectedVideo.name,
      embededLink: selectedVideo.embededLink,
      productId: selectedVideo.productId,
      img: selectedVideo.coverImg,
      key: selectedVideo.coverImg.split("/").pop() as string,
    });

    const productF = products.find(
      (prod) => prod.id === selectedVideo.productId,
    );
    if (!productF) {
      toast.warning(t.required.productRequired);
      return;
    }
    setSelectedProduct({ id: selectedVideo?.productId, name: productF.name });
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedVideo(undefined);
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
                  {t.choose.video}
                </label>
                <SearchableSelect
                  options={video}
                  selectedOption={selectedVideo}
                  onSelect={setSelectedVideo}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-black lg:text-lg">
                    {t.addVideoForm.product}
                  </label>
                  <SearchableSelect
                    options={products}
                    selectedOption={selectedProduct}
                    onSelect={setSelectedProduct}
                    placeholder={t.search.title}
                    noOptions={t.search.noOptions}
                  />
                </div>
                {!imgDelete && formDataf.img && (
                  <DeleteImg
                    t={t}
                    formDataf={formDataf}
                    setFormDataf={setFormDataf}
                    setAction={setAction}
                    setImgDelete={setImgDelete}
                    alt={t.addVideoForm.img}
                  />
                )}
                {imgDelete && (
                  <FormFileInput
                    label={t.addVideoForm.img}
                    error={
                      state?.errors?.coverImg
                        ? getMessage(state.errors.coverImg[0], lang)
                        : ""
                    }
                    imgName={formDataf.img}
                    onAction={setAction}
                    toast={toast}
                    setFormDataf={setFormDataf}
                    formDataf={formDataf}
                    t={t}
                    alt={t.addVideoForm.img}
                  />
                )}
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addVideoForm.name}
                  placeholder={t.addVideoForm.namePlaceHolder}
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
                  id="embededLink"
                  label={t.addVideoForm.embededLink}
                  placeholder={t.addVideoForm.embededLinkPlaceHolder}
                  value={formDataf.embededLink}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, embededLink: value })
                  }
                  error={
                    state?.errors?.embededLink
                      ? getMessage(state.errors.embededLink[0], lang)
                      : ""
                  }
                  required
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
                  disabled={!selectedVideo}
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
