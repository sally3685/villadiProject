"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ResendCodeAction, ResendCodePassAction } from "../../actions/auth";
import { CircleCheck, CirclePlus } from "lucide-react";
import ErrorPage from "../../[lang]/error";
import { redirect } from "next/navigation";
import SubmitButton from "../SubmitButton";
import { getMessage } from "../../../../helpers/getMessage";
import { authTypes } from "./authTypes";
import { usePathname } from "next/navigation";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export function ResendCode({
  t,
  lang,
  type,
}: {
  t: authTypes;
  lang: "en" | "ar";
  type: "password" | "email";
}) {
  const pathname = usePathname();
  const [state, action] = useActionState(ResendCodeAction, undefined);
  const [statepassword, actionPassword] = useActionState(
    ResendCodePassAction,
    undefined,
  );
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
  useEffect(() => {
    if (statepassword) {
      if (statepassword.success) {
        redirect(`${lang}/VerifyPasswordCode`);
      }
    }
  }, [statepassword]);

  if (state?.general)
    return (
      <ErrorPage
        error={
          new Error(getMessage(state?.general ? state?.general : "", lang))
        }
      ></ErrorPage>
    );
  if (statepassword?.general)
    return (
      <ErrorPage
        error={
          new Error(
            getMessage(
              statepassword?.general ? statepassword?.general : "",
              lang,
            ),
          )
        }
      ></ErrorPage>
    );
  return (
    <>
      <form
        className="flex w-[250px] flex-col gap-8 md:w-[350px]"
        action={(formData: FormData) => {
          if (validEmail) {
            if (type === "email") {
              formData.append("lang", lang);
              action(formData);
            } else {
              formData.append("lang", lang);
              actionPassword(formData);
            }
          }
        }}
      >
        <h1 className="text-xl font-bold md:text-2xl">
          {" "}
          {type === "email"
            ? t.resendCodeForm.email
            : t.resendCodeForm.password}
        </h1>
        <div className="text-sm text-neutral-800">
          <p
            className={
              !validEmail && emailAddress !== ""
                ? "mb-2 block text-pink-800"
                : "hidden"
            }
          >
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
              ),
            )}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex gap-2 text-lg md:text-xl">
            {t.authForm.email}

            {pathname.includes("VerifyEmail") ? (
              <>
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
              </>
            ) : (
              <>
                <CircleCheck
                  color="#18f231"
                  className={
                    !statepassword?.errors?.email && validEmail
                      ? "block"
                      : "hidden"
                  }
                />
                <CirclePlus
                  color="red"
                  style={{ transform: "rotate(45deg)" }}
                  className={
                    emailAddress.trim().length > 0 &&
                    (statepassword?.errors?.email || !validEmail)
                      ? "block"
                      : "hidden"
                  }
                />
              </>
            )}
          </label>
          <input
            ref={emailRef}
            className="border-0 border-b-2 border-pink-800 p-1 text-sm md:text-lg"
            id="email"
            name="email"
            placeholder={t.authForm.emailPlaceHolder}
            type="email"
            value={emailAddress}
            aria-describedby="emailnote"
            required
            aria-invalid={
              state?.errors?.email || statepassword?.errors?.email
                ? "false"
                : "true"
            }
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
            {getMessage(
              state?.errors.email[0] ? state?.errors.email[0] : "",
              lang,
            )}
          </p>
        )}
        {statepassword?.errors?.email && (
          <p
            id="email-error"
            aria-live="assertive"
            className={
              statepassword?.errors?.email
                ? "block text-sm text-red-600"
                : "hidden"
            }
          >
            {getMessage(
              statepassword?.errors?.email[0]
                ? statepassword?.errors?.email[0]
                : "",
              lang,
            )}
          </p>
        )}
        <SubmitButton
          proccessing={false}
          textProccessing={""}
          disabled={false}
          textDisabled={t.submitStatus.waitSubmit}
          textEnabled={t.submitStatus.submit}
          className="text-black"
          classNameDisabled="cursor-not-allowed bg-neutral-300"
          classNameEnabled="cursor-pointer bg-[#ff8b6c] hover:bg-pink-300"
        />
      </form>
    </>
  );
}
