import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { controlDictionary, socialFormType } from "../types";
import { FormSocialState } from "@/app/lib/definitions";
import { social } from "../../../../../prisma/generated/prisma";
import { getMessage } from "../../../../../helpers/getMessage";
export const useSocialUpdate = (
  t: controlDictionary,
  nameRef: RefObject<HTMLInputElement | null>,
  lang: "en" | "ar",
  state: FormSocialState,
  setFormDataf: Dispatch<SetStateAction<socialFormType>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setSelectedSocial?: Dispatch<SetStateAction<social | undefined>>,
) => {
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);
      nameRef.current?.focus();
      if (state.success) {
        toast.success(
          getMessage(state.general ? state.general : t.done.success, lang),
          {
            position: "top-right",
          },
        );

        if (setStep) setStep(0);
        if (setSelectedSocial) setSelectedSocial(undefined);
        setFormDataf({
          name: "",
          embededlink: "",
          channelLink: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.channelLink) {
        toast.error(getMessage(state.errors?.channelLink[0], lang));
      } else if (state.errors?.embededLink) {
        toast.error(getMessage(state.errors?.embededLink[0], lang));
      }
    }
  }, [state, t]);
};
