"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { resetAction } from "../actions/auth";
import { CircleCheck, CirclePlus, Eye, EyeOff } from "lucide-react";
import ErrorPage from "../[lang]/error";
import { useRouter } from "next/navigation";
import Link from "next/link";
//validate on  front
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export function ResetPasswordForm({ t, lang }: { t: any; lang: string }) {
  const [state, action] = useActionState(resetAction, undefined);

  const [validPwd, setValidPwd] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  const [eyeOpen, setEyeOpen] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);
  const router = useRouter();
  if (state?.general)
    return <ErrorPage error={new Error(state.general)}></ErrorPage>;
  return (
    <>
      <form
        className="flex flex-col  gap-8 w-[250px] md:w-[350px]"
        action={(formData: FormData) => {
          if (!validPwd) {
          } else if (validPwd) {
            action(formData);
          }
        }}
      >
        <h1 className="font-bold text-xl md:text-2xl">
          {lang === "en" ? "Reset password" : "إعادة تعيين كلمة السر"} :
        </h1>
        <h2 className="text-pink-800 mb-2 font-bold">{state?.general2}</h2>
        <div className="text-neutral-800 text-sm ">
          <p className={validPwd ? "hidden" : "block text-blue-800 mb-2"}>
            {t.authForm.validateFields}
          </p>
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="flex gap-2 text-lg md:text-xl">
            {t.authForm.password}
            <CircleCheck
              color="#18f231"
              className={
                !state?.errors?.password && validPwd ? "block" : "hidden"
              }
            />
            <CirclePlus
              color="red"
              style={{ transform: "rotate(45deg)" }}
              className={
                password.trim().length > 0 &&
                (state?.errors?.password || !validPwd)
                  ? "block"
                  : "hidden"
              }
            />
          </label>
          <input
            className="p-1 text-sm md:text-lg border-0 border-b-2 border-blue-800"
            id="password"
            name="password"
            placeholder={t.authForm.passwordPlaceHolder}
            type={!eyeOpen ? "password" : "text"}
            value={password}
            required
            aria-invalid={state?.errors?.password ? "false" : "true"}
            aria-errormessage="password-error"
            onChange={(e) => setPassword(e.target.value)}
          />
          {eyeOpen ? (
            <Eye
              className={`absolute ${
                lang === "en" ? "right-0" : "left-0"
              } top-[45px] cursor-pointer`}
              size={20}
              onClick={() => setEyeOpen(false)}
            />
          ) : (
            <EyeOff
              className={`absolute ${
                lang === "en" ? "right-0" : "left-0"
              } top-[45px] cursor-pointer`}
              size={20}
              onClick={() => setEyeOpen(true)}
            />
          )}
        </div>
        {state?.errors?.password ? (
          <div>
            <p
              id="password-error"
              aria-live="assertive"
              className={
                state?.errors?.password
                  ? "block text-sm text-red-600"
                  : "hidden"
              }
            >
              {t.authForm.Epassword}
            </p>
            <ul>
              {state.errors?.password.map((error) => (
                <li key={error} className="text-sm gap-2">
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        ) : !validPwd && password.trim().length > 0 ? (
          <p
            id="password-error"
            aria-live="assertive"
            className={!validPwd ? "block text-sm text-red-600" : "hidden"}
          >
            {t.authForm.Npassword}
          </p>
        ) : (
          <></>
        )}
        <SubmitButton lang={lang} />
      </form>
    </>
  );
}

function SubmitButton({ lang }: { lang: any }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`py-2 px-1 text-sm rounded cursor-pointer md:text-lg ${
        pending ? "bg-neutral-300 text-white " : "bg-blue-300 text-black "
      }`}
      type="submit"
    >
      {lang === "en" ? "Reset password" : "إعادة التعيين "}
    </button>
  );
}
