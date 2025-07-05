"use client";
import { UpdateSocialAction, UpdateVideoAction } from "../actions/videoAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import SearchableSelect from "./SelectMenu";
import Stepper from "./Stepper";
import { social, Video } from "../../../prisma/generated/prisma";

interface MediaFormProps {
  t: any;
  lang: string;
  socialItems: any;
}

export default function SocialUpdateForm({
  t,
  lang,
  socialItems,
}: MediaFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    embededlink: "",
    channelLink: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);

  const [selectedSocial, setSelectedSocial] = useState<social | undefined>(
    undefined
  );
  const [state, action] = useActionState(UpdateSocialAction, undefined);
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
            ? "Social is updated successfully"
            : "تم تعديل روابط التواصل",
          {
            position: "top-right",
          }
        );
        window.scroll(0, 0);
        setStep(0);
        setSelectedSocial(undefined);
        // Reset form on successful submission
        setFormDataf({
          name: "",
          embededlink: "",
          channelLink: "",
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
    if (!selectedSocial) {
      toast.warning(
        lang === "en" ? "you should choose an item" : "يجب أن تختار عنصر"
      );
      return;
    }

    formData.append("id", selectedSocial?.id);
    formData.append("name", selectedSocial?.name);
    action(formData);
  };

  const handleNextStep = () => {
    if (step === 0 && !selectedSocial) {
      toast.warning(
        lang === "en" ? "you should choose an item" : "يجب أن تختار عنصر"
      );
      return;
    }
    if (!selectedSocial) {
      toast.warning(
        lang === "en" ? "you should choose an item" : "يجب أن تختار عنصر"
      );
      return;
    }
    setFormDataf({
      name: selectedSocial.name,
      embededlink: selectedSocial.embededlink,
      channelLink: selectedSocial.channelLink,
    });
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep(0);
    setSelectedSocial(undefined);
  };

  return (
    <form
      action={handleSubmit}
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 flex gap-x-6 flex-col w-full">
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
                  {lang === "en" ? "Choose social app" : "اختر تطبيق التواصل "}
                </label>
                <SearchableSelect
                  options={socialItems}
                  selectedOption={selectedSocial}
                  onSelect={setSelectedSocial}
                />
              </div>
            )}

            {step === 1 && (
              <div className=" gap-x-6 gap-y-8 flex flex-col w-full ">
                <h1 className="text-xl sm:text-3xl xl:text-4xl">
                  {selectedSocial?.name}
                </h1>
                <div className="space-y-2">
                  {selectedSocial?.name === "instagram" ? (
                    <>
                      <h3 className="text-lg sm:text-xl">
                        To get the instagram post id :
                      </h3>
                      <p>
                        Open a post in a browser window and copy the URL from
                        the address bar.{" "}
                      </p>
                      <p>
                        {" "}
                        The URL should be in the format:
                        https://www.instagram.com/p/
                        <span className="bg-[#7abc43]">abc123xyzAB</span>/
                      </p>
                      <p>
                        Copy its id . it will be like the highlighted text above
                      </p>
                    </>
                  ) : selectedSocial?.name === "facebook" ? (
                    <>
                      <h3 className="text-lg sm:text-xl">
                        To get the Facebook page name associated to the link:
                      </h3>
                      <p>
                        Get the page link it will be like this :
                        www.facebook.com/
                        <span className="bg-[#7abc43]">Villade11</span>?...
                      </p>
                      <p>
                        Copy its name . it will be like the highlighted text
                        above
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg sm:text-xl">
                        To get the Youtube video link:
                      </h3>
                      <p>
                        Open a video in a browser window and copy the URL from
                        the address bar.{" "}
                      </p>
                      <p>
                        {" "}
                        The URL should be in the format:
                        https://www.youtube.com/watch?v=
                        <span className="bg-[#7abc43]">K4xCjdwNKlA</span>/
                      </p>
                      <p>
                        Copy its id . it will be like the highlighted text above
                      </p>
                    </>
                  )}
                </div>
                <FormInput
                  ref={nameRef}
                  id="channelLink"
                  label={lang === "en" ? "Channel Link" : "رابط القناة"}
                  placeholder={"https://www.facebook.com/Villadi/"}
                  value={formDataf.channelLink}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, channelLink: value })
                  }
                  error={state?.errors?.channelLink}
                  required
                />
                <FormInput
                  id="embededLink"
                  label={
                    selectedSocial?.name === "facebook"
                      ? "Page link"
                      : selectedSocial?.name === "instagram"
                        ? "Post id"
                        : "Video id"
                  }
                  placeholder={
                    lang === "en"
                      ? "Look at the instructions above"
                      : "انظر الى التعليمات فوق"
                  }
                  value={formDataf.embededlink}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, embededlink: value })
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
                  disabled={!selectedSocial}
                  className={`px-4 py-2 bg-blue-700 rounded text-white ${
                    !selectedSocial
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
