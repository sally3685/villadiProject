import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { controlDictionary, FlavorFormDataType } from "../types";
import { FormFlavorState } from "@/app/lib/definitions";
import { Flavor } from "../../../../../prisma/generated/prisma";
import { toast } from "react-toastify";
import { getMessage } from "../../../../../helpers/getMessage";

export const useFlavor = (
  t: controlDictionary,
  nameRef: RefObject<HTMLInputElement | null>,
  lang: "en" | "ar",
  state: FormFlavorState,
  setFormDataf: Dispatch<SetStateAction<FlavorFormDataType>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setSelectedFlavor?: Dispatch<SetStateAction<Flavor | undefined>>,
) => {
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
        if (setSelectedFlavor) setSelectedFlavor(undefined);

        setFormDataf({
          name: "",
          img: "",
          key: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.name) {
        toast.error(getMessage(state.errors.name[0], lang));
      } else if (state.errors?.img) {
        toast.error(getMessage(state.errors.img[0], lang));
      }
    }
  }, [state, t]);
};
