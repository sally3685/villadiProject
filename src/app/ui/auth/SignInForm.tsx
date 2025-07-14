"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { SignInAction } from "../../actions/auth";
import { CircleCheck, CirclePlus, Eye, EyeOff } from "lucide-react";
import ErrorPage from "../../[lang]/error";
import Link from "next/link";
import SubmitButton from "../SubmitButton";
import { getMessage } from "../../../../helpers/getMessage";
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export function SignInForm({ t, lang }: { t: any; lang: string }) {
  const [state, action] = useActionState(SignInAction, undefined);

  const [validPwd, setValidPwd] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  const [eyeOpen, setEyeOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(emailAddress));
  }, [emailAddress]);

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);
  if (state?.general)
    return (
      <ErrorPage
        error={new Error(getMessage(state.general, lang as "en" | "ar"))}
      ></ErrorPage>
    );
  return (
    <>
      <form
        className="flex w-[250px] flex-col gap-8 md:w-[350px]"
        action={(formData: FormData) => {
          if (!validEmail || !validPwd) {
          } else if (validEmail && validPwd) {
            action(formData);
          }
        }}
      >
        <h1 className="text-xl font-bold md:text-2xl">{t.SignIn.title} :</h1>
        {state?.general2 && (
          <h2 className="mb-2 font-bold text-pink-800">
            {getMessage(state?.general2, lang as "en" | "ar")}
          </h2>
        )}
        <div className="text-sm text-neutral-800">
          <p
            className={
              validEmail && validPwd ? "hidden" : "mb-2 block text-blue-800"
            }
          >
            {t.authForm.validateFields}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex gap-2 text-lg md:text-xl">
            {t.authForm.email}
            <CircleCheck
              color="#18f231"
              className={
                !state?.errors?.email && validEmail ? "block" : "hidden"
              }
            />
            <CirclePlus
              color="red"
              style={{ transform: "rotate(45deg)" }}
              className={
                emailAddress.trim().length > 0 &&
                (state?.errors?.email || !validEmail)
                  ? "block"
                  : "hidden"
              }
            />
          </label>
          <input
            className="border-0 border-b-2 border-blue-800 p-1 text-sm md:text-lg"
            id="email"
            name="email"
            autoFocus={true}
            ref={emailRef}
            placeholder={t.authForm.emailPlaceHolder}
            type="email"
            value={emailAddress}
            required
            aria-invalid={state?.errors?.email ? "false" : "true"}
            aria-errormessage="email-error"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        {state?.errors?.email ? (
          <p
            id="email-error"
            aria-live="assertive"
            className={
              state?.errors?.email ? "block text-sm text-red-600" : "hidden"
            }
          >
            {getMessage(state.errors.email[0], lang as "en" | "ar")}
          </p>
        ) : !validEmail && emailAddress.trim().length > 0 ? (
          <p
            id="email-error"
            aria-live="assertive"
            className={!validEmail ? "block text-sm text-red-600" : "hidden"}
          >
            {t.authForm.NEmail}
          </p>
        ) : (
          <></>
        )}
        <div className="relative flex flex-col gap-2">
          <label htmlFor="password" className="flex gap-2 text-lg md:text-xl">
            {t.authForm.password}
            <CircleCheck
              color="#18f231"
              className={!state?.password && validPwd ? "block" : "hidden"}
            />
            <CirclePlus
              color="red"
              style={{ transform: "rotate(45deg)" }}
              className={
                password.trim().length > 0 && (state?.password || !validPwd)
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
            aria-invalid={state?.password ? "false" : "true"}
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
        {state?.password ? (
          <div>
            <p
              id="password-error"
              aria-live="assertive"
              className={
                state?.password ? "block text-sm text-red-600" : "hidden"
              }
            >
              {t.authForm.Epassword}
            </p>
            <ul>
              {state.password.map((error) => (
                <li key={error} className="gap-2 text-sm">
                  -{getMessage(error[0], lang as "en" | "ar")}
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
          disabled={false}
          classNameDisabled={"bg-neutral-300 cursor-not-allowed"}
          classNameEnabled={
            "bg-blue-300 text-black hover:bg-blue-400 cursor-pointer"
          }
          className="text-white"
          textDisabled={t.submitStatus.waitSubmit}
          textEnabled={t.submitStatus.submit}
          proccessing={false}
          textProccessing=""
        />
      </form>
      <Link
        className={`cursor-pointer rounded px-1 py-2 text-sm text-black md:text-lg`}
        href={`/${lang}/signUp`}
      >
        {t.SignUp.question}
      </Link>
      <Link
        className={`cursor-pointer rounded px-1 py-2 text-sm text-black md:text-lg`}
        href={`/${lang}/ForgetPassword`}
      >
        {lang === "en" ? "Forget Password ?" : "نسيت كلمة المرور ؟"}
      </Link>
      <Link
        className={`cursor-pointer rounded px-1 py-2 text-sm text-black md:text-lg`}
        href={`/${lang}/VerifyEmail`}
      >
        {lang === "en"
          ? "Didnt verify your email ? click to verify"
          : "لم تؤكد حسابك ؟ اضغط لتحقيق الحساب"}
      </Link>
    </>
  );
}
