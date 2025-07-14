import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import {
  ProductFormType,
  categoryType,
  controlDictionary,
  flavorType,
} from "../types";
import { getMessage } from "../../../../../helpers/getMessage";
import { FormProductState } from "@/app/lib/definitions";
import { Product } from "../../../../../prisma/generated/prisma";

export default function useProduct(
  t: controlDictionary,
  nameRef: RefObject<HTMLInputElement | null>,
  lang: "en" | "ar",
  state: FormProductState,
  setKey1: Dispatch<SetStateAction<{ img: string; key: string }>>,
  setKey2: Dispatch<SetStateAction<{ img: string; key: string }>>,
  setFormDataf: Dispatch<SetStateAction<ProductFormType>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setSelectedCategory?: Dispatch<SetStateAction<categoryType | undefined>>,
  setSelectedFlavor?: Dispatch<SetStateAction<flavorType | undefined>>,
  setSelectedProduct?: Dispatch<SetStateAction<Product | undefined>>,
) {
  useEffect(() => {
    nameRef.current?.focus();
  }, []);
  useEffect(() => {
    if (state) {
      nameRef.current?.focus();
      if (state.success) {
        console.log(state, "Ssss");
        toast.success(
          getMessage(state.general ? state.general : t.done.success, lang),
          {
            position: "top-right",
          },
        );
        window.scroll(0, 0);
        if (setStep) setStep(0);
        if (setSelectedProduct) setSelectedProduct(undefined);
        if (setSelectedFlavor) setSelectedFlavor(undefined);
        if (setSelectedCategory) setSelectedCategory(undefined);
        setFormDataf({
          name: "",
          code: "",
          detailes: "",
          patternColor: "#aabbcc",
          backgroundColor: "#aabbcc",
        });

        setKey1({ img: "", key: "" });
        setKey2({ img: "", key: "" });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.backgroundColor) {
        toast.error(getMessage(state.errors.backgroundColor[0], lang));
      } else if (state.errors?.code) {
        toast.error(getMessage(state.errors.code[0], lang));
      } else if (state.errors?.detailes) {
        toast.error(getMessage(state.errors.detailes[0], lang));
      } else if (state.errors?.img2) {
        toast.error(getMessage(state.errors.img2[0], lang));
      } else if (state.errors?.img) {
        toast.error(getMessage(state.errors.img[0], lang));
      } else if (state.errors?.name) {
        toast.error(getMessage(state.errors.name[0], lang));
      } else if (state.errors?.patternColor) {
        toast.error(getMessage(state.errors.patternColor[0], lang));
      } else if (state.errors?.selectedC) {
        toast.error(getMessage(state.errors.selectedC[0], lang));
      } else if (state.errors?.selectedF) {
        toast.error(getMessage(state.errors.selectedF[0], lang));
      }
    }
  }, [state, t]);
}
