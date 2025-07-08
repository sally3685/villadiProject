"use client";
import { Key, TriangleAlert } from "lucide-react";
import { AddMapAction } from "../actions/mapAtion";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import Stepper from "./Stepper";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { FormFileInput } from "./FormFileInput";
import InteractiveImageMarker from "./InteractiveImageMarker";

type UserType = {
  name: string;
  email: string;
  role: string;
};

interface MapFormProps {
  t: any;
  lang: string;
  user: UserType | null;
}

export default function MapForm({ t, lang, user }: MapFormProps) {
  const [step, setStep] = useState(0);
  const [formDataf, setFormDataf] = useState({
    name: "",
    details: "",
    img: "",
    key: "",
    markers: [] as Array<{ top: number; left: number; id: string }>,
  });
  const [imgAction, setAction] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);

  // Separate states for each form's submission

  const [finalState, finalAction] = useActionState(AddMapAction, undefined);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  // Handle final submission response
  useEffect(() => {
    if (finalState) {
      window.scroll(0, 0);
      nameRef.current?.focus();

      if (finalState.success) {
        toast.success(t.addMapForm.doneSubmit, { position: "top-right" });
        // Reset form on success
        setFormDataf({
          name: "",
          details: "",
          img: "",
          key: "",
          markers: [] as Array<{ top: number; left: number; id: string }>,
        });
        setStep(0);
      } else if (finalState.general) {
        toast.error(finalState.general);
      } else if (finalState.errors) {
        toast.error(t.addMapForm.validationError);
      }
    }
  }, [finalState, t]);

  // const handleFinalSubmit = (formData: FormData) => {
  //   if (!formData.markerPosition) {
  //     toast.warning(
  //       lang === "en" ? "Please select a position" : "الرجاء تحديد موقع"
  //     );
  //     return;
  //   }

  //   formData.append("name", formData.name);
  //   formData.append("details", formData.details);
  //   formData.append("image", formData.image);
  //   formData.append("left", formData.markerPosition.left.toString());
  //   formData.append("top", formData.markerPosition.top.toString());
  //   formData.append("language", tempLang);

  //   finalAction(formData);
  // };

  const handleNextStep = () => {
    if (!formDataf.img) {
      toast.warning(
        lang === "en" ? "Please upload an image first" : "الرجاء رفع صورة أولاً"
      );
      return;
    }
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const isOppositeLanguage = lang !== tempLang;

  return (
    <div className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]">
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          {/* Left Sidebar - Visible in both steps */}
          <div className="lg:col-span-1 space-y-8 flex justify-center flex-col">
            <div className="flex flex-col gap-8 mx-4">
              <h2 className="text-black text-lg lg:text-xl font-bold">
                {t.addMapForm.admin} {user?.name}
              </h2>
              <p className="mt-1 text-xs lg:text-sm text-black flex gap-2">
                <TriangleAlert color="#da9a40" size={50} />
                {t.addMapForm.adminWarning}
              </p>

              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-xl bg-[#da9a40] w-[fit-content] text-sm lg:text-lg text-white"
                onClick={toggleLanguage}
              >
                {isOppositeLanguage
                  ? t.addMapForm.langButton
                  : t.addMapForm.opplangButton}
              </button>
            </div>
            <hr
              className={`bg-[#7abc43] h-[2px] lg:rotate-90 ${lang === "en" ? "lg:left-[50%]" : "right-[50%]"} relative lg:top-[-20%]`}
            />
          </div>

          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-8 flex justify-center flex-col">
            <div>
              <h2 className="text-black text-xl pb-4">{t.addMapForm.steps}:</h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {/* Step 0: Image Upload Form */}
            {step === 0 && (
              <FormFileInput
                className={"bg-[#6aab3a] rounded-2xl text-center text-white"}
                label={
                  isOppositeLanguage ? t.addMapForm.oppImg : t.addMapForm.img
                }
                error={finalState?.errors?.img}
                imgName={formDataf.img}
                onAction={setAction}
                toast={toast}
                setFormDataf={setFormDataf}
                formDataf={formDataf}
                lang={lang}
                alt={lang === "en" ? "map img" : "صورة الخريطة"}
              />
            )}

            {/* Step 1: Details and Marker Form */}
            {step === 1 && (
              <>
                <form
                  action={(formData) => {
                    if (formDataf.markers.length === 0) {
                      toast.error(
                        lang === "en"
                          ? "Please add at least one marker"
                          : "الرجاء إضافة علامة واحدة على الأقل"
                      );
                      return;
                    }

                    // Append all markers
                    formDataf.markers.forEach((marker, index) => {
                      formData.append(`left`, marker.left.toString());
                      formData.append(`top`, marker.top.toString());
                    });

                    // Append other fields
                    formData.append("name", formDataf.name);
                    formData.append("details", formDataf.details);
                    formData.append("img", formDataf.img);
                    formData.append("language", tempLang);

                    finalAction(formData);
                  }}
                  className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2"
                >
                  <FormInput
                    ref={nameRef}
                    id="name"
                    label={
                      isOppositeLanguage
                        ? t.addMapForm.oppName
                        : t.addMapForm.name
                    }
                    placeholder={t.addMapForm.namePlaceHolder}
                    value={formDataf.name}
                    onChange={(value) =>
                      setFormDataf({ ...formDataf, name: value })
                    }
                    error={finalState?.errors?.name}
                    required
                  />

                  <FormTextarea
                    id="details"
                    label={
                      isOppositeLanguage
                        ? t.addMapForm.oppDetailes
                        : t.addMapForm.detailes
                    }
                    placeholder={t.addMapForm.detailesPlaceHolder}
                    value={formDataf.details}
                    onChange={(value) =>
                      setFormDataf({ ...formDataf, details: value })
                    }
                    error={finalState?.errors?.details}
                  />

                  <div className="lg:col-span-6">
                    <InteractiveImageMarker
                      imageUrl={formDataf.img}
                      markers={formDataf.markers}
                      setMarkers={(markers) =>
                        setFormDataf({ ...formDataf, markers })
                      }
                      label={
                        isOppositeLanguage
                          ? t.addMapForm.selectPosition
                          : t.addMapForm.selectPosition
                      }
                      error={finalState?.errors?.left}
                    />
                  </div>

                  <div className="flex w-full justify-between mt-8 lg:col-span-6">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-800"
                    >
                      {t.addMapForm.previous}
                    </button>

                    <SubmitButton t={t} />
                  </div>
                </form>
              </>
            )}

            {/* Next button (shown only after successful image upload) */}
            {step === 0 && formDataf.img && (
              <div className="flex justify-end mt-4">
                <button
                  disabled={imgAction}
                  type="button"
                  onClick={handleNextStep}
                  className={`px-4 py-2  rounded text-white  ${
                    imgAction
                      ? "bg-neutral-300 cursor-not-allowed"
                      : "bg-[#7abc43] hover:bg-[#6aab3a]  cursor-pointer"
                  }`}
                >
                  {imgAction && lang === "en"
                    ? "proccessing"
                    : imgAction && lang === "ar"
                      ? "يتم المعالجة"
                      : t.addMapForm.next}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
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
      {pending ? t.addMapForm.waitSubmit : t.addMapForm.submit}
    </button>
  );
}
