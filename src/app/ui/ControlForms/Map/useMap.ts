import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { controlDictionary, MapFormDataType } from "../types";
import { FormMapState } from "@/app/lib/definitions";
import { Map } from "../../../../../prisma/generated/prisma";
import { getMessage } from "../../../../../helpers/getMessage";
export const useMap = (
  t: controlDictionary,
  nameRef: RefObject<HTMLInputElement | null>,
  lang: "en" | "ar",
  state: FormMapState,
  setFormDataf: Dispatch<SetStateAction<MapFormDataType>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setSelectedMap?: Dispatch<SetStateAction<Map | undefined>>,
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
        if (setSelectedMap) setSelectedMap(undefined);
        setFormDataf({
          name: "",
          details: "",
          img: "",
          key: "",
          markers: [] as Array<{ top: number; left: number; id: string }>,
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.name) {
        toast.error(getMessage(state.errors.name[0], lang));
      } else if (state.errors?.img) {
        toast.error(getMessage(state.errors.img[0], lang));
      } else if (state.errors?.details) {
        toast.error(getMessage(state.errors.details[0], lang));
      } else if (state.errors?.top) {
        toast.error(getMessage(state.errors.top[0], lang));
      } else if (state.errors?.left) {
        toast.error(getMessage(state.errors.left[0], lang));
      }
    }
  }, [state, t]);
};
