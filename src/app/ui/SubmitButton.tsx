"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  disabled,
  classNameDisabled,
  classNameEnabled,
  className,
  textDisabled,
  textEnabled,
  proccessing,
  textProccessing,
}: {
  disabled: boolean;
  proccessing: boolean;
  classNameDisabled: string;
  classNameEnabled: string;
  className: string;
  textDisabled: string;
  textProccessing: string;
  textEnabled: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || disabled || proccessing}
      className={`rounded px-2 py-3 text-sm ${className} lg:text-lg ${
        pending || disabled || proccessing
          ? classNameDisabled
          : classNameEnabled
      }`}
      type="submit"
    >
      {pending ? textDisabled : proccessing ? textProccessing : textEnabled}
    </button>
  );
}
