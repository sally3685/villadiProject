import { DeleteAction } from "@/app/actions/deleteAction";
import { RefObject, useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { commentDictionary, userType } from "./CommentTypes";
export const useDeleteComment = ({
  user,
  t,
}: {
  user: userType;
  t: commentDictionary;
}) => {
  const [formDatafDelete, setFormDatafDelete] = useState({
    readyCheckBox: false,
    selectedComment: {
      id: "",
      text: "",
      createdAt: new Date(),
      userId: "",
    },
  });
  const [deleteF, setDeleteF] = useState(false);
  const [stateDelete, actionDelete] = useActionState(DeleteAction, undefined);
  useEffect(() => {
    if (stateDelete && deleteF) {
      if (stateDelete.success) {
        toast.success(t.deleteComment.doneSubmit);

        setFormDatafDelete({
          readyCheckBox: false,
          selectedComment: {
            id: "",
            text: "",
            createdAt: new Date(),
            userId: "",
          },
        });
        setDeleteF(false);
        window.scroll(0, 0);
      } else {
        toast.error(t.deleteComment.error);
      }
    }
  }, [stateDelete, t]);

  const handleSubmitDelete = async (formData: FormData) => {
    if (!formDatafDelete.readyCheckBox) {
      toast.warning(t.deleteComment.checkWarn);
      return;
    }
    if (!user || user.role === "User") {
      toast.warning(t.deleteComment.noPermission);
      return;
    }
    if (formDatafDelete.selectedComment === undefined) {
      toast.warning(t.deleteComment.noComment);
      return;
    }
    formData.append(
      "selectedField",
      JSON.stringify(formDatafDelete.selectedComment),
    );
    formData.append("type", "comment");
    actionDelete(formData);

    setFormDatafDelete({
      readyCheckBox: false,
      selectedComment: {
        id: "",
        text: "",
        createdAt: new Date(),
        userId: "",
      },
    });
    setDeleteF(false);
  };
  return {
    formDatafDelete,
    setFormDatafDelete,
    deleteF,
    setDeleteF,
    handleSubmitDelete,
  };
};
