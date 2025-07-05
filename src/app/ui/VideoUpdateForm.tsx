"use client";
import { UpdateVideoAction } from "../actions/videoAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import { FormFileInput } from "./FormFileInput";
import SearchableSelect from "./SelectMenu";
import Stepper from "./Stepper";
import { Video } from "../../../prisma/generated/prisma";

interface User {
  name: string;
  email: string;
  role: string;
}

type ProductType = {
  name: string;
  id: string;
};
interface videoFormProps {
  t: any;
  lang: string;
  user: User | null;
  video: Video[] | undefined;
  products: ProductType[] | undefined;
}

export default function VideoUpdateForm({
  t,
  lang,
  user,
  video,
  products,
}: videoFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    embededLink: "",
    productId: "",
    coverImg: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>(
    undefined
  );
  const [state, action] = useActionState(UpdateVideoAction, undefined);
  //   const currentCategories = tempLang === "en" ? categoryEn : categoryAr;

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log(state);
    if (state) {
      nameRef.current?.focus();

      if (state.success) {
        toast.success(
          lang === "en"
            ? "Video updated successfully"
            : "تم تعديل الفيديو بنجاح",
          {
            position: "top-right",
          }
        );
        window.scroll(0, 0);
        setStep(0);
        setSelectedProduct(null);
        setSelectedVideo(undefined);
        // Reset form on successful submission
        setFormDataf({
          name: "",
          embededLink: "",
          productId: "",
          coverImg: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        console.log(state.errors);
        toast.error(t.addVideoForm.validationError);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedProduct) {
      toast.warning(t.addVideoForm.productRequired);
      return;
    }
    if (!selectedVideo) {
      toast.warning(t.addVideoForm.videoRequired);
      return;
    }
    formData.append("language", selectedVideo?.lang);
    formData.append("id", selectedVideo?.id);
    formData.append("selectedProduct", selectedProduct.id);
    action(formData);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedVideo) {
      toast.warning(t.addVideoForm.video);
      return;
    }
    if (!selectedVideo) {
      toast.warning(t.addVideoForm.video);
      return;
    }
    if (!products) {
      toast.warning(t.addVideoForm.productRequired);
      return;
    }
    setFormDataf({
      name: selectedVideo.name,
      embededLink: selectedVideo.embededLink,
      productId: selectedVideo.productId,
      coverImg: selectedVideo.coverImg,
    });

    const productF = products.find(
      (prod) => prod.id === selectedVideo.productId
    );
    if (!productF) {
      toast.warning(t.addVideoForm.productRequired);
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

            {/* Step 0: video Selection */}
            {step === 0 && (
              <div>
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {lang === "en" ? "Choose video" : "اختر فيديو"}
                </label>
                <SearchableSelect
                  options={video}
                  selectedOption={selectedVideo}
                  onSelect={setSelectedVideo}
                />
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
                <div className="col-span-full">
                  <label className="block text-sm lg:text-lg font-medium text-black">
                    {t.addVideoForm.product}
                  </label>
                  <SearchableSelect
                    options={products}
                    selectedOption={selectedProduct}
                    onSelect={setSelectedProduct}
                  />
                  {/* {state && state?.errors?.productId && (
                    <p className="mt-3 text-sm/6 text-red-600">
                      {state?.errors?.productId}
                    </p>
                  )} */}
                </div>
                <FormFileInput
                  id="coverImg"
                  label={t.addVideoForm.img}
                  addText={t.addVideoForm.addimg}
                  selectedText={t.addVideoForm.imgselected}
                  detailsText={t.addVideoForm.imgdetailes}
                  value={formDataf.coverImg}
                  onChange={(value) => {
                    setFormDataf({ ...formDataf, coverImg: value });
                  }}
                  error={state?.errors?.coverImg}
                  showLanguageInput
                  lang={lang}
                  tempLang={lang}
                />
                <FormInput
                  ref={nameRef}
                  id="name"
                  label={t.addVideoForm.name}
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
                  label={t.addVideoForm.embededLink}
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
                {t.addRecipyForm.previous}
              </button>

              {step < 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!selectedVideo}
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    !selectedVideo
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
