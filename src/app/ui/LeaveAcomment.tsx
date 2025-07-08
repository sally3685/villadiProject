"use client";
import { SuggestFlavorAction } from "../actions/flavorAction";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { FormTextarea } from "./FormTextarea";
import Image from "next/image";
import {
  AddCommentAction,
  UpdateCommentAction,
} from "../actions/commentAction";
import { Comment } from "../../../prisma/generated/prisma";
import { PenIcon, ThumbsUp, Trash } from "lucide-react";
import { DeleteAction } from "../actions/deleteAction";
import { AddVotesCommentAction } from "../actions/votes";

interface CommentFormProps {
  t: any;
  comments: Comment[] | null;
  lang: string;
  user: any;
}

export default function LeaveAcomment({
  t,
  lang,
  comments,
  user,
}: CommentFormProps) {
  const [formDataf, setFormDataf] = useState({
    text: "",
  });
  const [formDatafUodate, setFormDatafUpdate] = useState({
    text: "",
    id: "",
    userId: "",
  });
  const [formDatafDelete, setFormDatafDelete] = useState({
    deleteAll: false,
    readyCheckBox: false,
    selectedField: {},
  });
  const [update, setUpdate] = useState(false);
  const [deleteF, setDeleteF] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [state, action] = useActionState(AddCommentAction, undefined);
  const [stateUpdate, actionUpdate] = useActionState(
    UpdateCommentAction,
    undefined
  );
  const [stateDelete, actionDelete] = useActionState(DeleteAction, undefined);

  useEffect(() => {
    textRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state) {
      window.scroll(0, 0);
      textRef.current?.focus();

      if (state.success) {
        toast.success(
          lang === "en" ? "Comment added successfully" : "تم إضافة تعليق",
          { position: "top-right" }
        );
        // Reset form on success
        setFormDataf({ text: "" });
      } else if (state.general) {
        toast.error(state.general);
      }
    }
  }, [state, t]);
  useEffect(() => {
    if (stateUpdate) {
      window.scroll(0, 0);
      textRef.current?.focus();

      if (stateUpdate.success) {
        toast.success(
          lang === "en" ? "Comment updated successfully" : "تم إضافة تعليق",
          { position: "top-right" }
        );
        // Reset form on success
        setFormDatafUpdate({ text: "", id: "", userId: "" });
        setUpdate(false);
      } else if (stateUpdate.general) {
        toast.error(stateUpdate.general);
      }
    }
  }, [stateUpdate, t]);
  useEffect(() => {
    if (stateDelete) {
      if (stateDelete.success) {
        toast.success(lang === "en" ? "Deletion successful" : "تم الحذف بنجاح");

        setFormDatafDelete({
          deleteAll: false,
          readyCheckBox: false,
          selectedField: {},
        });
        setDeleteF(false);
        window.scroll(0, 0);
      } else {
        toast.error(lang === "en" ? "Deletion failed" : "فشل الحذف");
      }
    }
  }, [stateDelete, t]);

  const handleSubmit = (formData: FormData) => {
    action(formData);
  };
  const handleSubmitUpdate = (formData: FormData) => {
    formData.append("id", formDatafUodate.id);
    formData.append("userId", formDatafUodate.userId);

    actionUpdate(formData);
  };
  const handleSubmitDelete = async (formData: FormData) => {
    if (!formDatafDelete.readyCheckBox) {
      toast.warning(
        lang === "en"
          ? "make sure to check the delete warning"
          : "تأكد من اختيار تأكيد الحذف "
      );
      return;
    }
    if (!user || user.role === "User") {
      toast.warning(
        lang === "en" ? "noPermissionText.en" : "noPermissionText.ar"
      );
      return;
    }
    if (
      formDatafDelete.deleteAll === false &&
      formDatafDelete.selectedField === undefined
    ) {
      toast.warning(
        lang === "en" ? "noSelectionText.en" : "noSelectionText.ar"
      );
      return;
    }
    formData.append(
      "selectedField",
      JSON.stringify(formDatafDelete.selectedField)
    );
    formData.append("type", "comment");
    actionDelete(formData);

    setFormDatafDelete({
      deleteAll: false,
      readyCheckBox: false,
      selectedField: {},
    });
    setDeleteF(false);
  };
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      <form
        ref={formRef}
        action={
          update
            ? handleSubmitUpdate
            : deleteF
              ? handleSubmitDelete
              : handleSubmit
        }
        className="z-[1] relative bg-white mb-8 p-12 max-w-6xl w-full lg:w-[95%] xl:w-[97%] 2xl:w-full overflow-auto h-[90%] rounded-[50px]"
      >
        <div className="h-auto flex items-center justify-center border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 z-[2] relative w-[80%]">
            <div className="lg:col-span-3 w-full space-y-8 flex justify-center flex-col ">
              <div className="grid grid-cols-1  w-full  gap-x-6 gap-y-8 lg:grid-cols-6 lg:col-span-2 ">
                <h1 className="font-bold text-2xl sm:text-3xl text-black col-span-1 lg:col-span-6">
                  {update &&
                    (lang === "en"
                      ? "Update this comment ?"
                      : "أتريد تعديل التعليق ؟")}
                  {deleteF &&
                    (lang === "en"
                      ? "delete this comment ?"
                      : "أتريد حذف التعليق ؟")}
                  {!deleteF &&
                    !update &&
                    (lang === "en"
                      ? "Leave a comment ?"
                      : "أتريد إضافة تعليق ؟")}
                </h1>
                {update ? (
                  <FormTextarea
                    id="text"
                    label={
                      !update && !deleteF
                        ? lang == "en"
                          ? "Share your opinion with us"
                          : "شاركنا رأيك"
                        : ""
                    }
                    placeholder={
                      lang == "en"
                        ? "Best product is ketchup potatos"
                        : " افضل منتج هو بطاطس الذرة "
                    }
                    value={formDatafUodate.text}
                    onChange={(value) =>
                      setFormDatafUpdate({ ...formDatafUodate, text: value })
                    }
                    error={state?.errors?.text}
                  />
                ) : deleteF ? (
                  <>
                    <div className="col-span-full w-full max-w-2xl min-h-[150px] rounded-xl p-6 bg-amber-50 border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                      {/* Comment text with smooth scrolling */}
                      <div className="h-[80px] overflow-y-auto pr-2 mb-4">
                        <p className="text-gray-800 text-sm sm:text-base">
                          {(formDatafDelete.selectedField as any).text}
                        </p>
                      </div>

                      {/* User info and actions */}
                      <div className="flex justify-between items-center border-t border-amber-100 ">
                        <div className="text-xs text-amber-600">
                          {(formDatafDelete.selectedField as any).user.email}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 gap-4 col-span-full flex items-center">
                      <input
                        id="checkbox"
                        type="checkbox"
                        checked={formDatafDelete.readyCheckBox}
                        onChange={(e) =>
                          setFormDatafDelete({
                            ...formDatafDelete,
                            readyCheckBox: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-200"
                      />
                      <label htmlFor="checkbox">
                        {lang === "en"
                          ? "Are you sure you want to delete ?"
                          : "هل أنت متأكد أنك تريد حذف التعليق ؟"}
                      </label>
                    </div>
                  </>
                ) : (
                  <FormTextarea
                    id="text"
                    label={
                      lang == "en"
                        ? "Share your opinion with us"
                        : "شاركنا رأيك"
                    }
                    placeholder={
                      lang == "en"
                        ? "Best product is ketchup potatos"
                        : " افضل منتج هو بطاطس الذرة "
                    }
                    value={formDataf.text}
                    onChange={(value) =>
                      setFormDataf({ ...formDataf, text: value })
                    }
                    error={state?.errors?.text}
                  />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex w-full justify-start gap-4 mt-8">
                <SubmitButton t={t} />
                {update || deleteF ? (
                  <div
                    className={`py-3 px-2 text-sm rounded cursor-pointer lg:text-lg text-white bg-[#bc7743] hover:bg-[#bc7743]`}
                    onClick={() => {
                      setDeleteF(false);
                      setUpdate(false);
                    }}
                  >
                    {lang === "en" ? "Back to Comment" : "الرجوع لكتابة تعليق"}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-[1] top-[10%] rotate-[-60deg] left-[70%] flex flex-col gap-[40px]">
          <Image
            src={"/mayo.png"}
            alt={`Cover for `}
            width={100}
            height={100}
            className="object-contain rounded-3xl w-[50px]! h-[50px]! "
            priority
          />
          <Image
            src={"/mayo1.png"}
            alt={`Cover for `}
            width={100}
            height={100}
            className="object-contain rounded-3xl left-[50px] relative w-[50px]! h-[50px]! "
            priority
          />
          <Image
            src={"/mayo3.png"}
            alt={`Cover for `}
            width={100}
            height={100}
            className="object-contain rounded-3xl w-[50px]! h-[50px]! "
            priority
          />
        </div>
        <div className="h-full w-full flex flex-col items-center gap-6 py-12 px-4 overflow-y-auto">
          {comments?.map((comment: any, index: any) => (
            <div
              key={index}
              className="w-full max-w-2xl min-h-[150px] rounded-xl p-6 bg-amber-50 border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Comment text with smooth scrolling */}
              <div className="h-[80px] overflow-y-auto pr-2 mb-4">
                <p className="text-gray-800 text-sm sm:text-base">
                  {comment.text}
                </p>
              </div>

              {/* User info and actions */}
              <div className="flex justify-between items-center border-t border-amber-100 ">
                <div className="text-xs text-amber-600">
                  {/* {comment.user.email} */}
                  {lang === "en" ? "Votes : " : "التصويتات : "}
                  {comment._count.votes ? comment._count.votes : 0}
                </div>

                {/* Action buttons (only show for comment owner) */}
                {comment.user.email === user.email && (
                  <div className="flex gap-2">
                    <div
                      className="p-1 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-full transition-colors"
                      onClick={() => {
                        setDeleteF(false);
                        formRef.current?.scroll(0, 0);
                        textRef.current?.focus();
                        setFormDatafUpdate({
                          text: comment.text,
                          id: comment.id,
                          userId: comment.userId,
                        });
                        setUpdate(true);
                      }}
                    >
                      <PenIcon className="w-4 h-4" />
                    </div>
                    <div className="p-1 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-full transition-colors">
                      <Trash
                        className="w-4 h-4"
                        onClick={() => {
                          formRef.current?.scroll(0, 0);
                          textRef.current?.focus();
                          setUpdate(false);
                          setDeleteF(true);
                          setFormDatafDelete({
                            ...formDatafDelete,
                            selectedField: comment,
                          });
                        }}
                      />
                    </div>
                    <div className="p-1 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-full transition-colors">
                      <ThumbsUp
                        className="w-4 h-4"
                        onClick={async () => {
                          await AddVotesCommentAction(user.email, comment.id);
                        }}
                      />
                    </div>
                    {/*  */}
                  </div>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-300 rounded-bl-xl" />
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

function SubmitButton({ t }: { t: any }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`py-3 px-2 text-sm rounded cursor-pointer lg:text-lg text-white ${
        pending ? "bg-neutral-300" : "bg-[#bc7743] hover:bg-[#bc7743]"
      }`}
      type="submit"
    >
      {pending ? t.addRecipyForm.waitSubmit : t.addRecipyForm.submit}
    </button>
  );
}
