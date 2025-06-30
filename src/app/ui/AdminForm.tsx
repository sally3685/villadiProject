"use client";
import { AddAdminAction } from "../actions/adminAction";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import SearchableSelect from "./SelectMenu";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AdminFormProps {
  t: any;
  lang: string;
  user: {
    name: string;
    email: string;
    role: string;
  } | null;
  users: User[];
}

export default function AdminForm({ t, users, lang, user }: AdminFormProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [state, action] = useActionState(AddAdminAction, undefined);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);

      if (state.success) {
        toast.success(t.addAdminForm.doneSubmit, {
          position: "top-right",
        });
        setSelectedUser(null);
      } else if (state.general) {
        toast.error(state.general);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedUser) {
      toast.warning(t.addAdminForm.generalWarn);
      return;
    }

    formData.append("selectedUser", selectedUser.id);
    action(formData);
  };

  return (
    <form
      action={handleSubmit}
      className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
    >
      <div className="h-[90%] flex items-center justify-center border-b border-gray-900/10 pb-12">
        <div className="mt-10 flex flex-col gap-6 w-full max-w-md">
          <h2 className="text-black text-lg lg:text-xl font-bold">
            {t.addAdminForm.admin} {user?.name}
          </h2>

          <hr className="bg-[#7abc43] h-[2px]" />

          <label className="block text-black text-lg lg:text-xl font-bold">
            {t.addAdminForm.chooseAdmin}
          </label>

          <SearchableSelect
            options={users}
            selectedOption={selectedUser}
            onSelect={setSelectedUser}
            placeholder={t.addAdminForm.selectPlaceholder}
          />
        </div>
      </div>

      <SubmitButton t={t} disabled={!selectedUser} />
    </form>
  );
}

interface SubmitButtonProps {
  t: any;
  disabled?: boolean;
}

function SubmitButton({ t, disabled = false }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || disabled}
      className={`py-3 px-2 text-sm rounded cursor-pointer lg:text-lg text-white ${
        pending
          ? "bg-neutral-300 cursor-not-allowed"
          : "bg-[#7abc43] hover:bg-[#6aab3a]"
      } ${disabled ? "opacity-50 cursor-not-allowed!" : ""}`}
      type="submit"
    >
      {pending ? t.addAdminForm.waitSubmit : t.addAdminForm.submit}
    </button>
  );
}
