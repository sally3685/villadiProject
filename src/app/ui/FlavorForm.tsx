"use client";
import { TriangleAlert } from "lucide-react";
import { AddFlavorAction } from "../actions/flavorAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";
import { FormFileInput } from "./FormFileInput";

interface User {
  name: string;
  email: string;
  role: string;
}

interface FlavorFormProps {
  t: any;
  lang: string;
  user: User;
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

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);
      nameRef.current?.focus();

      if (state.success) {
        toast.success(t.addFlavorForm.doneSubmit, { position: "top-right" });
        // Reset form on successful submission
        setFormDataf({
          name: "",
          img: "",
          key: "",
        });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors) {
        toast.error(t.addFlavorForm.validationError);
      }
    }
  }, [state, t]);

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
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8 flex justify-center flex-col">
            <div className="flex flex-col gap-8 mx-4">
              <h2 className="text-black text-lg lg:text-xl font-bold">
                {t.addFlavorForm.admin} {user?.name}
              </h2>
              <p className="mt-1 text-xs lg:text-sm text-black flex gap-2">
                <TriangleAlert color="#da9a40" size={50} />
                {t.addFlavorForm.adminWarning}
              </p>

              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-xl bg-[#da9a40] w-[fit-content] text-sm lg:text-lg text-white"
                onClick={toggleLanguage}
              >
                {isOppositeLanguage
                  ? t.addFlavorForm.langButton
                  : t.addFlavorForm.opplangButton}
              </button>
            </div>

            <hr
              className={`bg-[#7abc43] h-[2px] lg:rotate-90 ${lang === "en" ? "lg:left-[50%]" : "right-[50%]"} relative lg:top-[-20%]`}
            />
          </div>

          {/* Main Form Content */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2">
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
              error={state?.errors?.name}
              required
            />
            <FormFileInput
              label={
                isOppositeLanguage
                  ? t.addFlavorForm.oppImg
                  : t.addFlavorForm.img
              }
              error={state?.errors?.img}
              imgName={formDataf.img}
              onAction={setAction}
              toast={toast}
              setFormDataf={setFormDataf}
              formDataf={formDataf}
              lang={lang}
              alt={lang === "en" ? "flavor img" : "صورة النكهة"}
            />
          </div>
        </div>
      </div>

      <SubmitButton t={t} imgAction={imgAction} lang={lang} />
    </form>
  );
}

function SubmitButton({
  t,
  lang,
  imgAction,
}: {
  t: any;
  lang: string;
  imgAction: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || imgAction}
      className={`py-3 px-2 text-sm rounded cursor-pointer lg:text-lg text-white ${
        pending || imgAction
          ? "bg-neutral-300"
          : "bg-[#7abc43] hover:bg-[#6aab3a]"
      }`}
      type="submit"
    >
      {pending
        ? t.addFlavorForm.waitSubmit
        : imgAction && lang === "en"
          ? "proccessing"
          : imgAction && lang === "ar"
            ? "يتم المعالجة"
            : t.addFlavorForm.submit}
    </button>
  );
}
