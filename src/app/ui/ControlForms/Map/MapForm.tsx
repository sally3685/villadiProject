"use client";
import { AddMapAction } from "@/app/actions/mapAtion";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import Stepper from "../../Stepper";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import { FormFileInput } from "../../FormFileInput";
import InteractiveImageMarker from "../../InteractiveImageMarker";
import ToggleLang from "../ToggleLang";
import { controlDictionary, userType } from "../types";
import { useMap } from "./useMap";
import { getMessage } from "../../../../../helpers/getMessage";
import SubmitButton from "../../SubmitButton";
import NextPrevButton from "../NextPrevButton";

interface MapFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  user: userType;
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
  const [state, action] = useActionState(AddMapAction, undefined);

  useMap(t, nameRef, lang, state, setFormDataf, setStep);
  const handleNextStep = () => {
    if (!formDataf.img) {
      toast.warning(t.required.image);
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
  const handleSubmit = (formData: FormData) => {
    if (formDataf.markers.length === 0) {
      toast.error(t.required.pinMark);
      return;
    }

    formDataf.markers.forEach((marker) => {
      formData.append(`left`, marker.left.toString());
      formData.append(`top`, marker.top.toString());
    });

    formData.append("name", formDataf.name);
    formData.append("details", formDataf.details);
    formData.append("img", formDataf.img);
    formData.append("language", tempLang);

    action(formData);
  };
  const isOppositeLanguage = lang !== tempLang;

  return (
    <div className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full">
      <div className="flex h-full items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <ToggleLang
            user={user}
            t={t}
            isOppositeLanguage={isOppositeLanguage}
            toggleLanguage={toggleLanguage}
            lang={lang}
          ></ToggleLang>

          <div className="flex flex-col justify-center space-y-8 lg:col-span-2">
            <div>
              <h2 className="pb-4 text-xl text-black">{t.steps.title}:</h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {step === 0 && (
              <>
                <FormFileInput
                  className={"rounded-2xl bg-[#6aab3a] text-center text-white"}
                  label={
                    isOppositeLanguage ? t.addMapForm.oppImg : t.addMapForm.img
                  }
                  error={
                    state?.errors?.img
                      ? getMessage(state.errors.img[0], lang)
                      : ""
                  }
                  imgName={formDataf.img}
                  onAction={setAction}
                  toast={toast}
                  setFormDataf={setFormDataf}
                  formDataf={formDataf}
                  t={t}
                  alt={t.addMapForm.img}
                />
                <div className="mt-8 flex w-full justify-between lg:col-span-6">
                  <NextPrevButton
                    handleStep={handlePrevStep}
                    disabled={step === 0}
                    text={t.steps.previous}
                  />
                  <NextPrevButton
                    handleStep={handleNextStep}
                    disabled={!formDataf.img}
                    text={t.steps.next}
                  />
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <form
                  action={handleSubmit}
                  className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6"
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
                    error={
                      state?.errors?.name
                        ? getMessage(state.errors.name[0], lang)
                        : ""
                    }
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
                    error={
                      state?.errors?.details
                        ? getMessage(state.errors.details[0], lang)
                        : ""
                    }
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
                      error={
                        state?.errors?.left
                          ? getMessage(state.errors.left[0], lang)
                          : state?.errors?.top
                            ? getMessage(state.errors.top[0], lang)
                            : ""
                      }
                    />
                  </div>
                  <div className="mt-8 flex w-full justify-between lg:col-span-6">
                    <NextPrevButton
                      handleStep={handlePrevStep}
                      disabled={false}
                      text={t.steps.previous}
                    />
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
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
