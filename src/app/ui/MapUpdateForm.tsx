"use client";
import { TriangleAlert } from "lucide-react";
import { UpdateMapAction, AddMapImageAction } from "../actions/mapAtion";
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
  const [changeImg, setChangeImg] = useState(false);
  const [formDataf, setFormDataf] = useState({
    name: "",
    details: "",
    image: "",
    markers: [] as Array<{ top: number; left: number; id: string }>,
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [selectedMap, setSelectedMap] = useState<Map | undefined>(undefined);
  // Separate states for each form's submission
  const [imageState, imageAction] = useActionState(
    AddMapImageAction,
    undefined
  );
  const [finalState, finalAction] = useActionState(UpdateMapAction, undefined);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  // Handle image upload response
  useEffect(() => {
    if (imageState) {
      if (imageState.success) {
        setImageUploaded(true);
        toast.success(t.addMapForm.imageUploadSuccess, {
          position: "top-right",
        });
      } else if (imageState.errors) {
        toast.error(t.addMapForm.validationError);
      } else if (imageState.general) {
        toast.error(imageState.general);
      }
    }
  }, [imageState, t]);

  // Handle final submission response
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
          image: "",
          markers: [] as Array<{ top: number; left: number; id: string }>,
        });
        setImageUploaded(false);
        setSelectedMap(undefined);
        setStep(0);
      } else if (finalState.general) {
        toast.error(finalState.general);
      } else if (finalState.errors) {
        console.log(finalState.errors);
        toast.error(t.addMapForm.validationError);
      }
    }
  }, [finalState, t]);

  const handleNextStep = () => {
    if (step === 0 && !selectedMap) {
      toast.warning(t.addMapForm.mapRequired);
      return;
    } else if (step === 0 && selectedMap) {
      setStep(1);
    } else if (step === 1) {
      if (!changeImg) {
        if (!selectedMap) {
          toast.warning(t.addMapForm.map);
          return;
        }
        setFormDataf({
          name: selectedMap.name,
          details: selectedMap?.details,
          image: selectedMap?.img,
          markers: selectedMap.left.map((leftValue, index) => ({
            left: parseFloat(leftValue), // Convert string to number
            top: parseFloat(selectedMap.top[index]), // Convert string to number
            id: `marker-${index}-${Date.now()}`, // unique ID
          })),
        });
        setStep(2);
      }
      if (changeImg) {
        if (!imageUploaded) {
          toast.warning(
            lang === "en"
              ? "Please upload an image first"
              : "الرجاء رفع صورة أولاً"
          );
          return;
        }
        if (!selectedMap) {
          toast.warning(t.addMapForm.map);
          return;
        }
        setFormDataf({
          name: selectedMap.name,
          details: selectedMap?.details,
          image: formDataf?.image,
          markers: [] as Array<{ top: number; left: number; id: string }>,
        });

        setStep(2);
      }
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setFormDataf({ ...formDataf, image: "" });
      setImageUploaded(false);
      setStep(1);
    } else if (step === 1) {
      setSelectedMap(undefined);
      setStep(0);
    }
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]">
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
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
              <form
                action={imageAction}
                className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2"
              >
                <div className="flex items-center gap-2 lg:col-span-6">
                  <input
                    type="checkbox"
                    id="changeImage"
                    checked={changeImg}
                    onChange={(e) => setChangeImg(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="changeImage"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t.addMapForm.changeImage}
                  </label>
                </div>
                {changeImg && (
                  <div className="lg:col-span-6">
                    <FormFileInput
                      id="img"
                      label={t.addMapForm.img}
                      addText={t.addMapForm.addimg}
                      selectedText={t.addMapForm.imgselected}
                      detailsText={t.addMapForm.imgdetailes}
                      value={formDataf.image}
                      onChange={(value) =>
                        setFormDataf({ ...formDataf, image: value })
                      }
                      error={imageState?.errors?.img}
                      showLanguageInput
                      lang={lang}
                      tempLang={tempLang}
                      required
                    />
                  </div>
                )}

                {changeImg && !imageUploaded ? (
                  <div className="flex justify-end lg:col-span-6">
                    <button
                      type="submit"
                      disabled={!formDataf.image}
                      className={`px-4 py-2  rounded text-white hover:bg-blue-800 ${
                        !formDataf.image
                          ? "cursor-not-allowed! bg-blue-400!"
                          : "cursor-pointer bg-blue-700"
                      }`}
                    >
                      {t.addMapForm.upload}
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </form>
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
                    formData.append("img", formDataf.image);
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
                      imageUrl={formDataf.image}
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
            {((step === 1 && imageUploaded) ||
              step === 0 ||
              (step === 1 && !changeImg)) && (
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-green-600 rounded text-white hover:bg-green-700"
                >
                  {t.addMapForm.next}
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
