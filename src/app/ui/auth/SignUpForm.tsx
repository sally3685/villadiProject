"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { SignUpAction } from "../../actions/auth";
import { CircleCheck, CirclePlus, Eye, EyeOff } from "lucide-react";

import ErrorPage from "../../[lang]/error";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SubmitButton from "../SubmitButton";
import { getMessage } from "../../../../helpers/getMessage";
//validate on  front
const USER_REGEX = /^[A-z][A-z0-9-_]{1,23}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export function SignUpForm({ t, lang }: { t: any; lang: string }) {
  const [state, action] = useActionState(SignUpAction, undefined);

  const [validName, setValidName] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  const [validPwd, setValidPwd] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  const [emailAddress, setEmailAddress] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(emailAddress));
  }, [emailAddress]);

  const nameRef = useRef<HTMLInputElement>(null);

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);
  useEffect(() => {
    nameRef.current?.focus();
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
          if (!validEmail || !validPwd || !validName) {
          } else if (validEmail && validPwd) {
            formData.append("lang", lang);
            action(formData);
          }
        }}
      >
        <h1 className="text-xl font-bold md:text-2xl"> {t.SignUp.title} :</h1>
        {state?.general2 && (
          <h2 className="mb-2 font-bold text-pink-800">
            {" "}
            {getMessage(state?.general2, lang as "en" | "ar")}
          </h2>
        )}
        <div className="text-sm text-neutral-800">
          <p
            className={
              !validEmail &&
              emailAddress != "" &&
              !validPwd &&
              password != "" &&
              !validName &&
              username != ""
                ? "mb-2 block text-pink-800"
                : "hidden"
            }
          >
            {t.authForm.validateFields}
          </p>
          <p id="usernote" className={!nameFocus ? "hidden" : "block"}>
            <span className="text-pink-800">
              {t.SignUp.validationTips.name.title} :<br />
            </span>
            {t.SignUp.validationTips.name.rules.map(
              (rule: string, index: any) => (
                <span key={index}>
                  {rule} <br />
                </span>
              ),
            )}
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
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="flex gap-2 text-lg md:text-xl">
            {t.authForm.name}
            <CircleCheck
              color="#18f231"
              className={!state?.errors?.name && validName ? "block" : "hidden"}
            />
            <CirclePlus
              color="red"
              style={{ transform: "rotate(45deg)" }}
              className={
                username.trim().length > 0 &&
                (state?.errors?.name || !validName)
                  ? "block"
                  : "hidden"
              }
            />
          </label>
          <input
            className="border-0 border-b-2 border-pink-800 p-1 text-sm md:text-lg"
            id="name"
            name="name"
            placeholder={t.authForm.namePlaceHolder}
            ref={nameRef}
            autoComplete="off"
            type="text"
            value={username}
            aria-describedby="usernote"
            required
            aria-invalid={state?.errors?.name ? "false" : "true"}
            aria-errormessage="username-error"
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
          />
        </div>
        {state?.errors?.name && (
          <p
            id="username-error"
            aria-live="assertive"
            className={
              state?.errors?.name ? "block text-sm text-red-600" : "hidden"
            }
          >
            {getMessage(state.errors.name[0], lang as "en" | "ar")}
          </p>
        )}

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
            className="border-0 border-b-2 border-pink-800 p-1 text-sm md:text-lg"
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
            {getMessage(state.errors.email[0], lang as "en" | "ar")}
          </p>
        )}

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
            className="border-0 border-b-2 border-pink-800 p-1 text-sm md:text-lg"
            id="password"
            name="password"
            type={!eyeOpen ? "password" : "text"}
            // type="password"
            value={password}
            placeholder={t.authForm.passwordPlaceHolder}
            aria-describedby="passwordnote"
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
        {state?.errors?.password && (
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
            <ul className="gap-2 text-sm">
              {state.errors.password.map((error) => (
                <li key={error}>
                  -{getMessage(error[0], lang as "en" | "ar")}
                </li>
              ))}
            </ul>
          </div>
        )}
        <SubmitButton
          disabled={false}
          classNameDisabled={"bg-neutral-300 cursor-not-allowed"}
          classNameEnabled={
            "bg-pink-300 text-black hover:bg-pink-400 cursor-pointer"
          }
          className="text-black"
          textDisabled={t.submitStatus.waitSubmit}
          textEnabled={t.submitStatus.submit}
          proccessing={false}
          textProccessing=""
        />
      </form>
      <Link
        className={`cursor-pointer rounded px-1 py-2 text-sm text-black md:text-lg`}
        href={`/${lang}/signIn`}
      >
        {t.SignIn.question}
      </Link>
      <Link
        className={`cursor-pointer rounded px-1 py-2 text-sm text-black md:text-lg`}
        href={`/${lang}/VerifyEmail`}
      >
        {lang === "en"
          ? "Already Signed up ? click to verify"
          : "أنشأت حساب ؟ اضغط لتحقيق الحساب"}
      </Link>
    </>
  );
}
