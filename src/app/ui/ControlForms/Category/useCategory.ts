import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { CategoryFormDataType, controlDictionary } from "../types";
import { getMessage } from "../../../../../helpers/getMessage";
import { FormCategoryState } from "@/app/lib/definitions";
import { Category } from "../../../../../prisma/generated/prisma";

export default function useCategory(
  t: controlDictionary,
  nameRef: RefObject<HTMLInputElement | null>,
  lang: "en" | "ar",
  state: FormCategoryState,
  setFormDataf: Dispatch<SetStateAction<CategoryFormDataType>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setSelectedCategory?: Dispatch<SetStateAction<Category | undefined>>,
) {
  useEffect(() => {
    nameRef.current?.focus();
  }, []);
  useEffect(() => {
    if (state) {
      nameRef.current?.focus();
      if (state.success) {
        toast.success(
          getMessage(state.general ? state.general : t.done.success, lang),
          {
            position: "top-right",
          },
        );
        window.scroll(0, 0);
        if (setStep) setStep(0);
        if (setSelectedCategory) setSelectedCategory(undefined);

        setFormDataf({
          name: "",
          code: "",
          detailes: "",
          img: "",
          key: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.name) {
        toast.error(getMessage(state.errors.name[0], lang));
      } else if (state.errors?.code) {
        toast.error(getMessage(state.errors.code[0], lang));
      } else if (state.errors?.detailes) {
        toast.error(getMessage(state.errors.detailes[0], lang));
      } else if (state.errors?.img) {
        toast.error(getMessage(state.errors.img[0], lang));
      }
    }
  }, [state, t]);
}
