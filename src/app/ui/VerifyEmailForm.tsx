"use client";
import Link from "next/link";
import React, { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { VerifyCodeAction } from "../actions/auth";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function VerifyEmailForm({
  res,
  t,
  lang,
}: {
  res: any;
  t: any;
  lang: string;
}) {
  const [state, action] = useActionState(VerifyCodeAction, undefined);
  const router = useRouter();
  useEffect(() => {
    if (!res) router.refresh();
  }, [res]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const [codes, setCodes] = useState<string[]>(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^[0-9]$/.test(value)) return;

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Auto-focus next input if a number was entered
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
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
              <header className="mb-8">
                <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
                <h2 className="text-pink-800 mb-2 font-bold">
                  {state?.general2}
                </h2>
                <p className="text-[15px] text-slate-500">
                  Enter the 4-digit verification code that was sent to your
                  Email.
                </p>
              </header>
              <form id="otp-form" action={action}>
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
                      className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-[#ff8b6c] focus:ring-2 focus:ring-indigo-100"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoFocus={index === 0}
                    />
                  ))}
                </div>
                {state?.errors?.code1 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {state.errors.code1}
                  </p>
                )}
                {state?.errors?.code2 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {state.errors.code2}
                  </p>
                )}
                {state?.errors?.code3 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {state.errors.code3}
                  </p>
                )}
                {state?.errors?.code4 && (
                  <p className="text-[15px] text-[#ff8b6c]">
                    {state.errors.code4}
                  </p>
                )}
                <div className="max-w-[260px] mx-auto mt-4">
                  <SubmitButton t={t} />
                </div>
              </form>
              <div className="text-sm text-slate-500 mt-4">
                Haven't signed up yet ?
                <Link
                  className="font-medium text-[#ff8b6c] hover:text-indigo-600"
                  href={`/${lang}/signUp`}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SubmitButton({ t }: { t: any }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`py-2 px-1 text-sm rounded md:text-lg cursor-pointer ${
        pending ? "bg-neutral-300 text-white " : "bg-[#ff8b6c] text-black "
      }`}
      type="submit"
    >
      {t.SignUp.title}
    </button>
  );
}
