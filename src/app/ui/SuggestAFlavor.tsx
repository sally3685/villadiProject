"use client";
import { SuggestFlavorAction } from "../actions/flavorAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormTextarea } from "./FormTextarea";
import Image from "next/image";

interface User {
  name: string;
  email: string;
  role: string;
}

interface RecipeFormProps {
  t: any;
  user: User | null;
  lang: string;
}

export default function SuggestAFlavor({ t, user, lang }: RecipeFormProps) {
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
          lang === "en" ? "Flavor suggested successfully" : "تم إضافة اقتراحك",
          { position: "top-right" }
        );
        // Reset form on success
        setFormDataf({ details: "" });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.user) {
        toast.error(state.user);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    formData.append("access_key", "b5e8ae19-24f4-4d9a-bbdb-7b086a08e08c");

    action(formData);
  };

  const toggleLanguage = () => {
    setFormDataf({ details: "" });
  };

  return (
    <>
      <form
        action={handleSubmit}
        className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
      >
        <div className="h-full flex items-center justify-center border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 z-[2] relative w-[80%]">
            <div className="lg:col-span-3 w-full space-y-8 flex justify-center flex-col ">
              <div className="grid grid-cols-1  w-full  gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2 ">
                <h1 className="font-bold text-2xl sm:text-3xl text-black col-span-1 lg:col-span-6">
                  {lang === "en" ? "Suggest a flavor ?" : "أتريد اقتراح نكهة ؟"}
                </h1>
                <FormTextarea
                  id="details"
                  label={
                    lang == "en"
                      ? "write the message of you suggestion  "
                      : " الاكتب رسالة لوصف اقتراح "
                  }
                  placeholder={
                    lang == "en"
                      ? "What about lemon with ketchup ?"
                      : "ماذا عن نكهة الكتشب مع الليمون ؟"
                  }
                  value={formDataf.details}
                  onChange={(value) =>
                    setFormDataf({ ...formDataf, details: value })
                  }
                  // error={state?.errors?.details}
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex w-full justify-between mt-8">
                <SubmitButton t={t} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-[1] top-[10%] rotate-[-60deg] left-[70%] flex flex-col gap-[40px]">
          <Image
            src={"/mayo.png"}
            alt={`Cover for `}
            width={100}
            height={100}
            className="object-contain rounded-3xl w-[50px]! h-[50px]! "
            priority
          />
          <Image
            src={"/mayo1.png"}
            alt={`Cover for `}
            width={100}
            height={100}
            className="object-contain rounded-3xl left-[50px] relative w-[50px]! h-[50px]! "
            priority
          />
          <Image
            src={"/mayo3.png"}
            alt={`Cover for `}
            width={100}
            height={100}
            className="object-contain rounded-3xl w-[50px]! h-[50px]! "
            priority
          />
        </div>
      </form>
    </>
  );
}

function SubmitButton({ t }: { t: any }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`py-3 px-2 text-sm rounded cursor-pointer lg:text-lg text-white ${
        pending ? "bg-neutral-300" : "bg-[#bc7743] hover:bg-[#bc7743]"
      }`}
      type="submit"
    >
      {pending ? t.addRecipyForm.waitSubmit : t.addRecipyForm.submit}
    </button>
  );
}
