"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { resetAction } from "../../actions/auth";
import { CircleCheck, CirclePlus, Eye, EyeOff } from "lucide-react";
import ErrorPage from "../../[lang]/error";
import { useRouter } from "next/navigation";
import SubmitButton from "../SubmitButton";
import { authTypes } from "./authTypes";
import { getMessage } from "../../../../helpers/getMessage";
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;
export function ResetPasswordForm({
  t,
  lang,
}: {
  t: authTypes;
  lang: "en" | "ar";
}) {
  const [state, action] = useActionState(resetAction, undefined);

  const [validPwd, setValidPwd] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  const [eyeOpen, setEyeOpen] = useState(false);

  const [passwordFocus, setPasswordFocus] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);
  if (state?.general)
    return (
      <ErrorPage
        error={
          new Error(getMessage(state?.general ? state?.general : "", lang))
        }
      ></ErrorPage>
    );
  return (
    <>
      <form
        className="flex w-[250px] flex-col gap-8 md:w-[350px]"
        action={(formData: FormData) => {
          if (validPwd) {
            action(formData);
          }
        }}
      >
        <h1 className="text-xl font-bold md:text-2xl">
          {t.resetPasswordForm.title} :
        </h1>
        {state?.general2 && (
          <h2 className="mb-2 font-bold text-pink-800">
            {getMessage(state?.general2 ? state?.general2 : "", lang)}
          </h2>
        )}
        <p id="passwordnotes" className={!passwordFocus ? "hidden" : "block"}>
          <span className="text-pink-800">
            {t.SignUp.validationTips.password.title} :<br />
          </span>
          {t.SignUp.validationTips.password.rules.map(
            (rule: string, index: any) => (
              <span key={index}>
                {rule} <br />
              </span>
            ),
          )}
        </p>
        <div className="text-sm text-neutral-800">
          <p
            className={
              !validPwd && password !== ""
                ? "mb-2 block text-blue-800"
                : "hidden"
            }
          >
            {t.authForm.validateFields}
          </p>
        </div>
        <div className="relative flex flex-col gap-2">
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
            className="border-0 border-b-2 border-blue-800 p-1 text-sm md:text-lg"
            id="password"
            name="password"
            placeholder={t.authForm.passwordPlaceHolder}
            type={!eyeOpen ? "password" : "text"}
            value={password}
            required
            aria-invalid={state?.errors?.password ? "false" : "true"}
            aria-errormessage="password-error"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
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
                <li key={error} className="gap-2 text-sm">
                  - {getMessage(error ? error : "", lang)}
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

        <SubmitButton
          proccessing={false}
          textProccessing={""}
          disabled={false}
          textDisabled={t.submitStatus.waitSubmit}
          textEnabled={t.submitStatus.submit}
          className="text-black"
          classNameDisabled="cursor-not-allowed bg-neutral-300"
          classNameEnabled="cursor-pointer bg-blue-800 hover:bg-blue-400"
        />
      </form>
    </>
  );
}
