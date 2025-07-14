"use client";
import { AddFlavorAction } from "../../../actions/flavorAction";
import { useActionState, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormInput } from "../../FormInput";
import { FormFileInput } from "../../FormFileInput";
import { useFlavor } from "./useFlavor";
import { controlDictionary, userType } from "../types";
import ToggleLang from "../ToggleLang";
import { getMessage } from "../../../../../helpers/getMessage";
import SubmitButton from "../../SubmitButton";

interface FlavorFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  user: userType;
}

export default function FlavorForm({ t, lang, user }: FlavorFormProps) {
  const [formDataf, setFormDataf] = useState({
    name: "",
    img: "",
    key: "",
  });
  const [imgAction, setAction] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const [tempLang, setTempLang] = useState<string>(lang);
  const [state, action] = useActionState(AddFlavorAction, undefined);
  useFlavor(t, nameRef, lang, state, setFormDataf);

  const handleSubmit = (formData: FormData) => {
    formData.append("img", formDataf.img);
    formData.append("language", tempLang);
    action(formData);
  };

  const toggleLanguage = () => {
    setTempLang((prev) => (prev === "en" ? "ar" : "en"));
    setFormDataf({
      name: "",
      img: "",
      key: "",
    });
  };

  const isOppositeLanguage = lang !== tempLang;

  return (
    <form
      action={handleSubmit}
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <ToggleLang
            user={user}
            t={t}
            isOppositeLanguage={isOppositeLanguage}
            toggleLanguage={toggleLanguage}
            lang={lang}
          ></ToggleLang>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
            <FormInput
              ref={nameRef}
              id="name"
              label={
                isOppositeLanguage
                  ? t.addFlavorForm.oppName
                  : t.addFlavorForm.name
              }
              placeholder={t.addFlavorForm.namePlaceHolder}
              value={formDataf.name}
              onChange={(value) => setFormDataf({ ...formDataf, name: value })}
              error={
                state?.errors?.name
                  ? getMessage(state.errors.name[0], lang)
                  : ""
              }
              required
            />
            <FormFileInput
              label={
                isOppositeLanguage
                  ? t.addFlavorForm.oppImg
                  : t.addFlavorForm.img
              }
              error={
                state?.errors?.img ? getMessage(state.errors.img[0], lang) : ""
              }
              imgName={formDataf.img}
              onAction={setAction}
              toast={toast}
              setFormDataf={setFormDataf}
              formDataf={formDataf}
              t={t}
              alt={t.addFlavorForm.img}
            />
          </div>
        </div>
      </div>

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
    </form>
  );
}
