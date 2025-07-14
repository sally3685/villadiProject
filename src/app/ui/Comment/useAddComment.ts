import { AddCommentAction } from "@/app/actions/commentAction";
import { RefObject, useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { commentDictionary } from "./CommentTypes";
import { getMessage } from "../../../../helpers/getMessage";

export const useAddComment = ({
  textRef,
  t,
  lang,
}: {
  textRef: RefObject<HTMLTextAreaElement | null>;
  t: commentDictionary;
  lang: "en" | "ar";
}) => {
  const [formDataf, setFormDataf] = useState({
    text: "",
  });
  const [state, action] = useActionState(AddCommentAction, undefined);
  useEffect(() => {
    if (state && formDataf.text != "") {
      window.scroll(0, 0);
      textRef.current?.focus();

      if (state.success) {
        toast.success(
          getMessage(state.general ? state.general : t.done.success, lang),
          {
            position: "top-right",
          },
        );

        setFormDataf({ text: "" });
      } else if (state.general) {
        toast.error(state.general);
      } else if (state.errors?.text) {
        toast.error(getMessage(state.errors.text[0], lang));
      }
    }
  }, [state]);

  const handleSubmit = (formData: FormData) => {
    toast.dismiss();
    action(formData);
  };
  return {
    formDataf,
    setFormDataf,
    state,
    handleSubmit,
  };
};
