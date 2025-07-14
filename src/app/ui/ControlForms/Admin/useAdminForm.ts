import { useActionState, useEffect, useState } from "react";
import { controlDictionary, userType } from "../types";
import { AddAdminAction } from "@/app/actions/adminAction";
import { toast } from "react-toastify";

export const useAdminForm = (lang: "en" | "ar", t: controlDictionary) => {
  const [selectedUser, setSelectedUser] = useState<userType | null>(null);
  const [state, action] = useActionState(AddAdminAction, undefined);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);

      if (state.status === 200) {
        toast.success(lang === "en" ? state.messageEn : state.messageAr, {
          position: "top-right",
        });
        setSelectedUser(null);
      } else {
        toast.error(lang === "en" ? state.messageEn : state.messageAr);
      }
    }
  }, [state, t]);

  const handleSubmit = (formData: FormData) => {
    if (!selectedUser) {
      toast.warning(t.addAdminForm.selectWarn);
      return;
    }

    formData.append("selectedUser", selectedUser.id);
    action(formData);
  };
  return {
    selectedUser,
    setSelectedUser,
    handleSubmit,
  };
};
