import { UpdateCommentAction } from "@/app/actions/commentAction";
import { RefObject, useActionState, useEffect, useState } from "react";
import { commentDictionary } from "./CommentTypes";
import { toast } from "react-toastify";
import { getMessage } from "../../../../helpers/getMessage";

export const useUpdateComment = ({
  textRef,
  t,
  lang,
}: {
  textRef: RefObject<HTMLTextAreaElement | null>;
  t: commentDictionary;
  lang: "en" | "ar";
}) => {
  const [formDatafUpdate, setFormDatafUpdate] = useState({
    text: "",
    id: "",
    userId: "",
  });

  const [update, setUpdate] = useState(false);
  const [stateUpdate, actionUpdate] = useActionState(
    UpdateCommentAction,
    undefined,
  );

  useEffect(() => {
    if (stateUpdate && formDatafUpdate.text != "") {
      window.scroll(0, 0);
      textRef.current?.focus();

      if (stateUpdate.success) {
        toast.success(
          getMessage(
            stateUpdate.general ? stateUpdate.general : t.done.success,
            lang,
          ),
          {
            position: "top-right",
          },
        );
        setFormDatafUpdate({ text: "", id: "", userId: "" });
        setUpdate(false);
      } else if (stateUpdate.general) {
        toast.error(stateUpdate.general);
      } else if (stateUpdate.errors?.text) {
        toast.error(getMessage(stateUpdate.errors.text[0], lang));
      }
    }
  }, [stateUpdate]);

  const handleSubmitUpdate = (formData: FormData) => {
    toast.dismiss();
    formData.append("id", formDatafUpdate.id);
    formData.append("userId", formDatafUpdate.userId);
    actionUpdate(formData);
  };

  return {
    formDatafUpdate,
    setFormDatafUpdate,
    setUpdate,
    handleSubmitUpdate,
    update,
  };
};
