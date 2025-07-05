"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { ResendCodeAction } from "../actions/auth";
import { CircleCheck, CirclePlus, Eye, EyeOff } from "lucide-react";

import ErrorPage from "../[lang]/error";
import { useRouter } from "next/navigation";
import Link from "next/link";
//validate on  front
const USER_REGEX = /^[A-z][A-z0-9-_]{1,23}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export function ResendCode({ t, lang }: { t: any; lang: string }) {
  const [state, action] = useActionState(ResendCodeAction, undefined);

  const [emailAddress, setEmailAddress] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(emailAddress));
  }, [emailAddress]);

  const emailRef = useRef<HTMLInputElement>(null);

  const [emailFocus, setEmailFocus] = useState(false);
  useEffect(() => {
    emailRef.current?.focus();
  }, []);
  const router = useRouter();
  console.log(state, "state");

  if (state?.general)
    return <ErrorPage error={new Error(state.general)}></ErrorPage>;
  return (
    <>
      <form
        className="flex flex-col  gap-8 w-[250px] md:w-[350px]"
        action={(formData: FormData) => {
          if (validEmail) {
            action(formData);
          }
        }}
      >
        <h1 className="font-bold text-xl md:text-2xl">
          {" "}
          {lang === "en"
            ? "Resend verification code :"
            : "إعادة إرسال كود التحقق"}{" "}
          :
        </h1>
        <div className="text-neutral-800 text-sm ">
          <p className={validEmail ? "hidden" : "block text-pink-800 mb-2"}>
            {t.authForm.validateFields}
          </p>

          <p id="emailnotes" className={!emailFocus ? "hidden" : "block"}>
            <span className="text-pink-800">
              {t.SignUp.validationTips.email.title} :<br />
            </span>
            {t.SignUp.validationTips.email.rules.map(
              (rule: string, index: any) => (
                <span key={index}>
                  {rule} <br />
                </span>
              )
            )}
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
            ref={emailRef}
            className="p-1 text-sm md:text-lg border-0 border-b-2 border-pink-800"
            id="email"
            name="email"
            placeholder={t.authForm.emailPlaceHolder}
            type="email"
            value={emailAddress}
            aria-describedby="emailnote"
            required
            aria-invalid={state?.errors?.email ? "false" : "true"}
            aria-errormessage="email-error"
            onChange={(e) => setEmailAddress(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </div>
        {state?.errors?.email && (
          <p
            id="email-error"
            aria-live="assertive"
            className={
              state?.errors?.email ? "block text-sm text-red-600" : "hidden"
            }
          >
            {state.errors.email}
            {state.errors.email[0] === "Email Already Verified , click on " ? (
              <Link
                className={`py-2 px-1 text-sm rounded cursor-pointer md:text-lg text-black`}
                href={`/${lang}/signIn`}
              >
                Sign in
              </Link>
            ) : state.errors.email[0] === "Email not found , click on " ? (
              <Link
                className={`py-2 px-1 text-sm rounded cursor-pointer md:text-lg text-black`}
                href={`/${lang}/signUp`}
              >
                Sign up
              </Link>
            ) : (
              <></>
            )}
          </p>
        )}

        <SubmitButton t={t} lang={lang} />
      </form>
    </>
  );
}

function SubmitButton({ t, lang }: { t: any; lang: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`py-2 px-1 text-sm rounded md:text-lg cursor-pointer ${
        pending ? "bg-neutral-300 text-white " : "bg-pink-300 text-black "
      }`}
      type="submit"
    >
      {lang === "en" ? "Send Code to email" : "أرسل كود التحقق"}
    </button>
  );
}
