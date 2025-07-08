"use client";
import { TriangleAlert } from "lucide-react";
import { UpdateMapAction } from "../actions/mapAtion";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import Stepper from "./Stepper";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { FormFileInput } from "./FormFileInput";
import InteractiveImageMarker from "./InteractiveImageMarker";
import { Map } from "../../../prisma/generated/prisma";
import SearchableSelect from "./SelectMenu";
import Image from "next/image";
import { deleteUTFiles } from "../data-access-layer/uploadthingDAL";
type UserType = {
  name: string;
  email: string;
  role: string;
};

interface MapFormProps {
  t: any;
  lang: string;
  user: UserType | null;
  map: Map[] | undefined;
}

export default function MapUpdateForm({ t, lang, user, map }: MapFormProps) {
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
  const [tempLang, setTempLang] = useState<string>(lang);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [selectedMap, setSelectedMap] = useState<Map | undefined>(undefined);
  // Separate states for each form's submission

  const [finalState, finalAction] = useActionState(UpdateMapAction, undefined);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (finalState) {
      window.scroll(0, 0);
      nameRef.current?.focus();

      if (finalState.success) {
        toast.success(
          lang === "en"
            ? "Map updated successfully"
            : "تم تعديل الخريطة بنجاح ",
          { position: "top-right" }
        );
        // Reset form on success
        setFormDataf({
          name: "",
          details: "",
          img: "",
          key: "",
          markers: [] as Array<{ top: number; left: number; id: string }>,
        });
        setImageUploaded(false);
        setSelectedMap(undefined);
        setStep(0);
      } else if (finalState.general) {
        toast.error(finalState.general);
      } else if (finalState.errors) {
        toast.error(t.addMapForm.validationError);
      }
    }
  }, [finalState, t]);

  const handleNextStep = () => {
    if (step === 0 && !selectedMap) {
      toast.warning(t.addMapForm.mapRequired);
      return;
    } else if (step === 0 && selectedMap) {
      setFormDataf({
        name: selectedMap.name,
        details: selectedMap?.details,
        img: selectedMap?.img,
        key: selectedMap?.img.split("/").pop() as string,
        markers: selectedMap.left.map((leftValue, index) => ({
          left: parseFloat(leftValue), // Convert string to number
          top: parseFloat(selectedMap.top[index]), // Convert string to number
          id: `marker-${index}-${Date.now()}`, // unique ID
        })),
      });
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setImageUploaded(false);
      setStep(1);
    } else if (step === 1) {
      setSelectedMap(undefined);
      setStep(0);
    }
  };

  return (
    <div className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]">
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 w-full">
          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-8 flex justify-center flex-col">
            <div>
              <h2 className="text-black text-xl pb-4">{t.addMapForm.steps}:</h2>
              <Stepper totalSteps={2} currentStep={step} className="mb-8" />
            </div>

            {/* Step 0: Image Upload Form */}
            {step === 0 && (
              <div>
                <label className="block text-black text-lg lg:text-xl font-bold">
                  {t.addMapForm.map}
                </label>
                <SearchableSelect
                  options={map}
                  selectedOption={selectedMap}
                  onSelect={setSelectedMap}
                />
              </div>
            )}

            {/* Step 1: Image Upload Form */}
            {step === 1 && (
              <>
                {!imgDelete && formDataf.img && (
                  <div className="flex flex-col gap-2 col-span-full bg-[#6aab3a] rounded-2xl text-center text-white">
                    <p className="text:sm lg:text-lg font-semibold">
                      {lang === "en"
                        ? "click on the image to delete and reupload"
                        : "اضغط على الصورة لحذفها وإعادة الادخال"}
                    </p>
                    <p className="text:xs lg:text-sm ">
                      {lang === "en"
                        ? "if image is not here it is a network error . you can still click and delete it "
                        : "اذا لم تظهر الصورة فهي مشكلة بالانترنت لازال بامكانك الضغط لحذفها"}
                    </p>
                    <Image
                      src={formDataf.img}
                      width={500}
                      height={200}
                      alt="map img"
                      className="object-contain cursor-pointer h-[200px]"
                      onClick={async () => {
                        setAction(true);
                        const key = formDataf.img.split("/").pop();
                        const res = await deleteUTFiles(key as string);
                        if (res.status === 200) {
                          toast.success(
                            lang === "en" ? "image deleted" : "تم حذف الصورة"
                          );
                          setFormDataf({ ...formDataf, img: "", key: "" });
                          setImgDelete(true);
                        } else
                          toast.error(
                            lang === "en" ? "deletion failed" : "فشل الحذف"
                          );
                        if (res) setAction(false);
                      }}
                    ></Image>
                  </div>
                )}
                {imgDelete && (
                  <FormFileInput
                    className={
                      "bg-[#6aab3a] rounded-2xl text-center text-white"
                    }
                    label={t.addMapForm.img}
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
              </>
            )}

            {/* Step 2: Details and Marker Form */}
            {step === 2 && (
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
                    if (!selectedMap) {
                      toast.warning(t.addMapForm.mapRequired);
                      return;
                    }
                    formData.append("img", formDataf.img);
                    formData.append("language", tempLang);
                    formData.append("id", selectedMap.id);
                    finalAction(formData);
                  }}
                  className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2"
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
                    error={finalState?.errors?.name}
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
                    error={finalState?.errors?.details}
                  />

                  <div className="lg:col-span-6">
                    <InteractiveImageMarker
                      imageUrl={formDataf.img}
                      markers={formDataf.markers}
                      setMarkers={(markers) =>
                        setFormDataf({ ...formDataf, markers })
                      }
                      label={t.addMapForm.selectPosition}
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
            {((step === 1 && formDataf.img) || step === 0) && (
              <div
                className={
                  step === 0
                    ? "flex justify-end mt-4"
                    : "flex w-full justify-between mt-8 lg:col-span-6"
                }
              >
                {step === 1 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-800"
                  >
                    {t.addMapForm.previous}
                  </button>
                )}
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
