"use client";
import { SuggestFlavorAction } from "../actions/flavorAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormTextarea } from "./FormTextarea";
import Sauces from "./Sauces";
import SubmitButton from "./SubmitButton";
import { suggestDictionary } from "../[lang]/SuggestAFlavor/types";
import { getMessage } from "../../../helpers/getMessage";

interface SuggestFlavorFormProps {
  t: suggestDictionary;
  lang: "en" | "ar";
}

export default function SuggestAFlavor({ t, lang }: SuggestFlavorFormProps) {
  const [formDataf, setFormDataf] = useState({
    details: "",
  });
  const detailsRef = useRef<HTMLTextAreaElement>(null);
  const [state, action] = useActionState(SuggestFlavorAction, undefined);

  useEffect(() => {
    detailsRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);
      detailsRef.current?.focus();

      if (state.success) {
        toast.success(
          getMessage(state.general ? state.general : t.done.success, lang),
          {
            position: "top-right",
          },
        );
        setFormDataf({ details: "" });
      } else if (state.general) {
        toast.error(state.general);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    formData.append("lang", lang);
    action(formData);
  };

  return (
    <>
      <form
        action={handleSubmit}
        className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
      >
        <div className="flex h-auto items-center justify-center border-b border-gray-900/10 pb-12">
          <div className="relative z-[2] mt-10 grid w-[80%] grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
            <div className="flex w-full flex-col justify-center space-y-8 lg:col-span-3">
              <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
                <h1 className="col-span-1 text-2xl font-bold text-black sm:text-3xl lg:col-span-6">
                  {t.suggestAFlavor.title}
                </h1>
                <FormTextarea
                  id="details"
                  label={t.suggestAFlavor.label}
                  placeholder={t.suggestAFlavor.placeHolder}
                  value={formDataf.details}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, details: value })
                  }
                />
              </div>

              <div className="mt-8 flex w-full justify-between">
                <SubmitButton
                  disabled={false}
                  classNameDisabled={"bg-neutral-300 cursor-not-allowed"}
                  classNameEnabled={
                    "bg-[#bc7743] hover:bg-[#bc7743] cursor-pointer"
                  }
                  className="text-white"
                  textDisabled={t.submitStatus.waitSubmit}
                  textEnabled={t.submitStatus.submit}
                  proccessing={false}
                  textProccessing=""
                />
              </div>
            </div>
          </div>
        </div>
        <Sauces lang={lang}></Sauces>
      </form>
    </>
  );
}
