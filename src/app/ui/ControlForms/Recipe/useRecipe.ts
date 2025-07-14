import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { controlDictionary, flavorType, RecipeFormType } from "../types";
import { FormRecipeState } from "@/app/lib/definitions";
import { Map, Recipy } from "../../../../../prisma/generated/prisma";
import { getMessage } from "../../../../../helpers/getMessage";
export const useRecipe = (
  t: controlDictionary,
  nameRef: RefObject<HTMLInputElement | null>,
  lang: "en" | "ar",
  state: FormRecipeState,
  setFormDataf: Dispatch<SetStateAction<RecipeFormType>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setSelectedFlvaor?: Dispatch<SetStateAction<flavorType | undefined>>,
  setSelectedRecipe?: Dispatch<SetStateAction<Recipy | undefined>>,
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
        if (setSelectedFlvaor) setSelectedFlvaor(undefined);
        if (setSelectedRecipe) setSelectedRecipe(undefined);
        setFormDataf({
          name: "",
          details: "",
          code: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.name) {
        toast.error(getMessage(state.errors.name[0], lang));
      } else if (state.errors?.code) {
        toast.error(getMessage(state.errors?.code[0], lang));
      } else if (state.errors?.details) {
        toast.error(getMessage(state.errors?.details[0], lang));
      } else if (state.errors?.selectedF) {
        toast.error(getMessage(state.errors?.selectedF[0], lang));
      }
    }
  }, [state, t]);
};
