import { TriangleAlert } from "lucide-react";
import React from "react";
import { controlDictionary, userType } from "./types";

export default function ToggleLang({
  user,
  t,
  isOppositeLanguage,
  toggleLanguage,
  lang,
}: {
  user: userType;
  t: controlDictionary;
  isOppositeLanguage: boolean;
  toggleLanguage: () => void;
  lang: "en" | "ar";
}) {
  return (
    <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
      <div className="mx-4 flex flex-col gap-8">
        <h2 className="text-lg font-bold text-black lg:text-xl">
          {t.addAdminForm.helloAdmin} {user?.name}
        </h2>
        <p className="mt-1 flex gap-2 text-xs text-black lg:text-sm">
          <TriangleAlert color="#da9a40" size={50} />
          {t.addAdminForm.adminWarning}
        </p>

        <button
          type="button"
          className="w-[fit-content] cursor-pointer rounded-xl bg-[#da9a40] px-4 py-2 text-sm text-white lg:text-lg"
          onClick={toggleLanguage}
        >
          {isOppositeLanguage
            ? t.Templang.langButton
            : t.Templang.opplangButton}
        </button>
      </div>

      <hr
        className={`h-[2px] bg-[#7abc43] lg:rotate-90 ${lang === "en" ? "lg:left-[50%]" : "lg:right-[50%]"} relative right-0 left-0 lg:top-[-20%]`}
      />
    </div>
  );
}
