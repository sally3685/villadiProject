"use client";
import React from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
export default function CloseBtn({
  lang,
  title,
}: {
  lang: string;
  title: any;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between border-b p-6">
      <h1
        dangerouslySetInnerHTML={{
          __html: title,
        }}
        className="w-full text-center text-xl font-bold sm:text-2xl"
      ></h1>
      <button
        onClick={() => {
          router.back();
        }}
        className="cursor-pointer text-2xl hover:text-gray-500"
        aria-label="Close FAQ"
      >
        &times;
      </button>
    </div>
  );
}
