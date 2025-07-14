import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { controlDictionary, productType, VideoFormType } from "../types";
import { FormVideoState } from "@/app/lib/definitions";
import { Video } from "../../../../../prisma/generated/prisma";
import { toast } from "react-toastify";
import { getMessage } from "../../../../../helpers/getMessage";

export const UseVideo = (
  t: controlDictionary,
  nameRef: RefObject<HTMLInputElement | null>,
  lang: "en" | "ar",
  state: FormVideoState,
  setFormDataf: Dispatch<SetStateAction<VideoFormType>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setSelectedProduct?: Dispatch<SetStateAction<productType | undefined>>,
  setSelectedVideo?: Dispatch<SetStateAction<Video | undefined>>,
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
        if (setSelectedVideo) setSelectedVideo(undefined);
        if (setSelectedProduct) setSelectedProduct(undefined);
        setFormDataf({
          name: "",
          embededLink: "",
          productId: "",
          img: "",
          key: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.name) {
        toast.error(getMessage(state.errors.name[0], lang));
      } else if (state.errors?.coverImg) {
        toast.error(getMessage(state.errors?.coverImg[0], lang));
      } else if (state.errors?.embededLink) {
        toast.error(getMessage(state.errors?.embededLink[0], lang));
      }
    }
  }, [state, t]);
};
