"use client";
import { UpdateMapAction } from "@/app/actions/mapAtion";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import Stepper from "../../Stepper";
import { FormInput } from "../../FormInput";
import { FormTextarea } from "../../FormTextarea";
import { FormFileInput } from "../../FormFileInput";
import InteractiveImageMarker from "../../InteractiveImageMarker";
import { Map } from "../../../../../prisma/generated/prisma";
import SearchableSelect from "../../SelectMenu";
import { controlDictionary } from "../types";
import { useMap } from "./useMap";
import DeleteImg from "../DeleteImg";
import { getMessage } from "../../../../../helpers/getMessage";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface MapFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  map: Map[];
}

export default function MapUpdateForm({ t, lang, map }: MapFormProps) {
  const [step, setStep] = useState(0);
  const [imgDelete, setImgDelete] = useState(false);
  const [imgAction, setAction] = useState(false);
  const [formDataf, setFormDataf] = useState({
    name: "",
    details: "",
    img: "",
    key: "",
    markers: [] as Array<{ top: number; left: number; id: string }>,
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [selectedMap, setSelectedMap] = useState<Map | undefined>(undefined);

  const [state, action] = useActionState(UpdateMapAction, undefined);
  useMap(t, nameRef, lang, state, setFormDataf, setStep, setSelectedMap);

  const handleNextStep = () => {
    if (!selectedMap) {
      toast.warning(t.required.mapRequired);
      return;
    }
    if (step === 0 && selectedMap) {
      setFormDataf({
        name: selectedMap.name,
        details: selectedMap?.details,
        img: selectedMap?.img,
        key: selectedMap?.img.split("/").pop() as string,
        markers: selectedMap.left.map((leftValue, index) => ({
          left: parseFloat(leftValue),
          top: parseFloat(selectedMap.top[index]),
          id: `marker-${index}-${Date.now()}`,
        })),
      });
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 1) {
      setSelectedMap(undefined);
      setStep(0);
    }
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
    if (!selectedMap) {
      toast.warning(t.required.mapRequired);
      return;
    }
    formData.append("img", formDataf.img);
    formData.append("language", selectedMap.lang);
    formData.append("id", selectedMap.id);
    action(formData);
  };
  return (
    <div className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full">
      <div className="flex h-full items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <div className="flex flex-col justify-center space-y-8 lg:col-span-2">
            <div>
              <h2 className="pb-4 text-xl text-black">{t.steps.title}:</h2>
              <Stepper totalSteps={2} currentStep={step} className="mb-8" />
            </div>

            {step === 0 && (
              <div>
                <label className="block text-lg font-bold text-black lg:text-xl">
                  {t.choose.map}
                </label>
                <SearchableSelect
                  options={map}
                  selectedOption={selectedMap}
                  onSelect={setSelectedMap}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />
              </div>
            )}

            {step === 1 && (
              <>
                {!imgDelete && formDataf.img && (
                  <DeleteImg
                    t={t}
                    formDataf={formDataf}
                    setFormDataf={setFormDataf}
                    setAction={setAction}
                    setImgDelete={setImgDelete}
                    alt={t.addMapForm.img}
                  />
                )}
                {imgDelete && (
                  <FormFileInput
                    className={
                      "rounded-2xl bg-[#6aab3a] text-center text-white"
                    }
                    label={t.addMapForm.img}
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
                    alt={t.addCategoryForm.img}
                  />
                )}
              </>
            )}

            {step === 2 && (
              <>
                <form
                  action={handleSubmit}
                  className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6"
                >
                  <FormInput
                    ref={nameRef}
                    id="name"
                    label={t.addMapForm.name}
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
                    label={t.addMapForm.detailes}
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
                      label={t.addMapForm.selectPosition}
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

            {((step === 1 && formDataf.img) || step === 0) && (
              <div
                className={
                  step === 0
                    ? "mt-4 flex justify-end"
                    : "mt-8 flex w-full justify-between lg:col-span-6"
                }
              >
                {step === 1 && (
                  <NextPrevButton
                    handleStep={handlePrevStep}
                    disabled={false}
                    text={t.steps.previous}
                  />
                )}
                <NextPrevButton
                  handleStep={handleNextStep}
                  disabled={imgAction}
                  text={t.steps.next}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
