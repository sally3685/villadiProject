"use client";
import SearchableSelect from "../../SelectMenu";
import { controlDictionary, userType } from "../types";
import { useAdminForm } from "./useAdminForm";
import SubmitButton from "../../SubmitButton";

interface AdminFormProps {
  t: controlDictionary;
  lang: "en" | "ar";
  user: userType | undefined;
  users: userType[];
}

export default function AdminForm({ t, users, user, lang }: AdminFormProps) {
  const { selectedUser, setSelectedUser, handleSubmit } = useAdminForm(lang, t);

  return (
    <form
      action={handleSubmit}
      className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
    >
      <div className="flex h-[90%] items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 flex w-full max-w-md flex-col gap-6">
          <h2 className="text-lg font-bold text-black lg:text-xl">
            {t.addAdminForm.helloAdmin} {user?.name}
          </h2>
          <hr className="h-[2px] bg-[#7abc43]" />
          <label className="block text-lg font-bold text-black lg:text-xl">
            {t.addAdminForm.chooseAdmin}
          </label>
          <SearchableSelect
            options={users}
            selectedOption={selectedUser}
            onSelect={setSelectedUser}
            placeholder={t.search.title}
            noOptions={t.search.noOptions}
          />
        </div>
      </div>

      <SubmitButton
        disabled={!selectedUser}
        className="text-white"
        classNameDisabled="cursor-not-allowed bg-neutral-300"
        classNameEnabled="bg-[#7abc43] hover:bg-[#6aab3a]"
        textDisabled={t.submitStatus.waitSubmit}
        textEnabled={t.submitStatus.submit}
        proccessing={false}
        textProccessing=""
      />
    </form>
  );
}
