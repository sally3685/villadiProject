"use client";
import { UpdateSocialAction } from "../../../actions/videoAction";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import SearchableSelect from "../../SelectMenu";
import Stepper from "../../Stepper";
import { social } from "../../../../../prisma/generated/prisma";
import { controlDictionary } from "../types";
import { useSocialUpdate } from "./useSocialUpdate";
import { getMessage } from "../../../../../helpers/getMessage";
import NextPrevButton from "../NextPrevButton";
import SubmitButton from "../../SubmitButton";

interface MediaFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  socialItems: social[];
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
    undefined,
  );
  const [state, action] = useActionState(UpdateSocialAction, undefined);

  useSocialUpdate(
    t,
    nameRef,
    lang,
    state,
    setFormDataf,
    setStep,
    setSelectedSocial,
  );

  const handleSubmit = (formData: FormData) => {
    if (!selectedSocial) {
      toast.warning(t.required.socialAppRequired);
      return;
    }

    formData.append("id", selectedSocial?.id);
    formData.append("name", selectedSocial?.name);
    formData.append("language", lang);
    action(formData);
  };

  const handleNextStep = () => {
    if (!selectedSocial) {
      toast.warning(t.required.socialAppRequired);
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
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="flex h-full items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <div className="flex flex-col justify-center space-y-8 lg:col-span-2">
            <div>
              <h2 className="pb-4 text-xl text-black">{t.steps.title}:</h2>
              <Stepper totalSteps={1} currentStep={step} className="mb-8" />
            </div>

            {step === 0 && (
              <div>
                <label className="block text-lg font-bold text-black lg:text-xl">
                  {t.choose.social}
                </label>
                <SearchableSelect
                  options={socialItems}
                  selectedOption={selectedSocial}
                  onSelect={setSelectedSocial}
                  placeholder={t.search.title}
                  noOptions={t.search.noOptions}
                />
              </div>
            )}

            {step === 1 && (
              <div className="flex w-full flex-col gap-x-6 gap-y-8">
                <h1 className="text-xl sm:text-3xl xl:text-4xl">
                  {selectedSocial?.name}
                </h1>
                <div className="space-y-2">
                  {selectedSocial?.name === "instagram" ? (
                    <>
                      <h3 className="text-lg sm:text-xl">
                        {t.updateSocial.instagram.title}
                      </h3>
                      {t.updateSocial.instagram.steps.map((step, index) => (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: step ? step : "",
                          }}
                        ></p>
                      ))}
                    </>
                  ) : selectedSocial?.name === "facebook" ? (
                    <>
                      <h3 className="text-lg sm:text-xl">
                        {t.updateSocial.facebook.title}
                      </h3>
                      {t.updateSocial.facebook.steps.map((step, index) => (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: step ? step : "",
                          }}
                        ></p>
                      ))}
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg sm:text-xl">
                        {t.updateSocial.youtube.title}
                      </h3>
                      {t.updateSocial.youtube.steps.map((step, index) => (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: step ? step : "",
                          }}
                        ></p>
                      ))}
                    </>
                  )}
                </div>
                <FormInput
                  ref={nameRef}
                  id="channelLink"
                  label={t.updateSocial.channelLink}
                  placeholder={"https://www.facebook.com/Villadi/"}
                  value={formDataf.channelLink}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, channelLink: value })
                  }
                  error={
                    state?.errors?.channelLink
                      ? getMessage(state.errors?.channelLink[0], lang)
                      : ""
                  }
                  required
                />
                <FormInput
                  id="embededLink"
                  label={
                    selectedSocial?.name === "facebook"
                      ? t.updateSocial.facebook.embededLink
                      : selectedSocial?.name === "instagram"
                        ? t.updateSocial.instagram.embededLink
                        : t.updateSocial.youtube.embededLink
                  }
                  placeholder={t.updateSocial.embeddedLinkPlaceHolder}
                  value={formDataf.embededlink}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, embededlink: value })
                  }
                  error={
                    state?.errors?.embededLink
                      ? getMessage(state.errors?.embededLink[0], lang)
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
                  disabled={!selectedSocial}
                  text={t.steps.next}
                />
              ) : (
                <SubmitButton
                  proccessing={false}
                  textProccessing={""}
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
