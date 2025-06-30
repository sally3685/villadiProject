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
  const parentPath = pathname?.replace(/\/FAQ$/, "") || `/${lang}`;
  const router = useRouter();
  return (
    <div className="flex justify-between items-center p-6 border-b">
      <h1 className="text-xl sm:text-2xl font-bold w-full text-center">
        {title}
      </h1>
      <button
        onClick={() => {
          router.back();
        }}
        className="text-2xl hover:text-gray-500 cursor-pointer"
        aria-label="Close FAQ"
      >
        &times;
      </button>
    </div>
  );
}
