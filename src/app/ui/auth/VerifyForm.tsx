"use client";
import Link from "next/link";
import React, { useActionState, useEffect, useRef, useState } from "react";
import { VerifyCodeAction, VerifyPassAction } from "../../actions/auth";
import { redirect } from "next/navigation";
import SubmitButton from "../SubmitButton";
import { getMessage } from "../../../../helpers/getMessage";

export default function VerifyForm({
  t,
  lang,
  type,
}: {
  t: any;
  lang: "en" | "ar";
  type: string;
}) {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [codes, setCodes] = useState<string[]>(["", "", "", ""]);

  const [state, action] = useActionState(VerifyCodeAction, undefined);
  const [statePass, actionPass] = useActionState(VerifyPassAction, undefined);

  useEffect(() => {
    if (statePass) {
      if (statePass.success) redirect(`/${lang}/PasswordReset`);
    }
  }, [statePass]);

  const handleChange = (index: number, value: string) => {
    if (value && !/^[0-9]$/.test(value)) return;

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, 4);
    const newCodes = [...codes];

    for (let i = 0; i < pasteData.length; i++) {
      if (/^[0-9]$/.test(pasteData[i])) {
        newCodes[i] = pasteData[i];
        if (i < 3) inputRefs[i + 1].current?.focus();
      }
    }

    setCodes(newCodes);
  };

  return (
    <div className="font-inter relative antialiased">
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="flex justify-center">
            <div className="mx-auto max-w-md rounded-xl bg-white px-4 py-10 text-center shadow sm:px-8">
              <header className="mb-8">
                <h1 className="mb-1 text-2xl font-bold">
                  {type === "email"
                    ? t.verifyEmailForm.title
                    : t.verifypasswordForm.title}
                </h1>
                <h2 className="mb-2 font-bold text-pink-800">
                  {getMessage(state?.general2 ? state?.general2 : "", lang)}
                </h2>
                <p className="text-[15px] text-slate-500">
                  {type === "email"
                    ? t.verifyEmailForm.body
                    : t.verifypasswordForm.code}
                </p>
              </header>
              <form
                id="otp-form"
                action={(formData: FormData) => {
                  if (type === "password") actionPass(formData);
                  else action(formData);
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={`code${index + 1}`}
                      ref={inputRefs[index]}
                      name={`code${index + 1}`}
                      type="text"
                      value={codes[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="h-14 w-14 appearance-none rounded border border-transparent bg-slate-100 p-4 text-center text-2xl font-extrabold text-slate-900 outline-none hover:border-slate-200 focus:border-[#ff8b6c] focus:bg-white focus:ring-2 focus:ring-indigo-100"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoFocus={index === 0}
                    />
                  ))}
                </div>

                {statePass?.errors?.code1 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      statePass.errors.code1[0]
                        ? statePass.errors.code1[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}
                {statePass?.errors?.code2 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      statePass.errors.code2[0]
                        ? statePass.errors.code2[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}
                {statePass?.errors?.code3 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      statePass.errors.code3[0]
                        ? statePass.errors.code3[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}
                {statePass?.errors?.code4 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      statePass.errors.code4[0]
                        ? statePass.errors.code4[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}

                {state?.errors?.code1 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      state.errors.code1[0]
                        ? state.errors.code1[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}
                {state?.errors?.code2 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      state.errors.code2[0]
                        ? state.errors.code2[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}
                {state?.errors?.code3 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      state.errors.code3[0]
                        ? state.errors.code3[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}
                {state?.errors?.code4 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {getMessage(
                      state.errors.code4[0]
                        ? state.errors.code4[0]
                        : t.done.error,
                      lang,
                    )}
                  </p>
                )}
                <div className="mx-auto mt-4 max-w-[260px]">
                  <SubmitButton
                    proccessing={false}
                    textProccessing={""}
                    disabled={false}
                    textDisabled={t.submitStatus.waitSubmit}
                    textEnabled={t.submitStatus.submit}
                    className="text-black"
                    classNameDisabled="cursor-not-allowed bg-neutral-300"
                    classNameEnabled="cursor-pointer bg-[#ff8b6c] hover:bg-[#ff8b6c]"
                  />
                </div>
              </form>
              {type === "password" ? (
                <div className="mt-4 text-sm text-slate-500">
                  {t.verifypasswordForm.resend}
                  <Link
                    className="font-medium text-[#ff8b6c] hover:text-[#c5735c]"
                    href={`/${lang}/ForgetPassword`}
                  >
                    {t.verifypasswordForm.click}
                  </Link>
                </div>
              ) : (
                <div className="mt-4 text-sm text-slate-500">
                  {t.verifyEmailForm.signup}
                  <Link
                    className="font-medium text-[#ff8b6c] hover:text-indigo-600"
                    href={`/${lang}/signUp`}
                  >
                    {t.verifyEmailForm.sign}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
