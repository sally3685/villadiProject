"use client";
import { useEffect, useRef } from "react";
import { Comment } from "../../../../prisma/generated/prisma";
import Sauces from "../Sauces";
import { commentDictionary, userType } from "./CommentTypes";
import { useAddComment } from "./useAddComment";
import { useUpdateComment } from "./useUpdateComment";
import { useDeleteComment } from "./useDeleteComment";
import HeaderComment from "./HeaderComment";
import ContentComment from "./ContentComment";
import CommentCard from "./CommentCard";
import SubmitButton from "../SubmitButton";

interface CommentFormProps {
  t: commentDictionary;
  comments: Comment[];
  lang: "en" | "ar";
  user: userType;
}

export default function LeaveAcomment({
  t,
  lang,
  comments,
  user,
}: CommentFormProps) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { formDataf, setFormDataf, state, handleSubmit } = useAddComment({
    textRef,
    t,
    lang,
  });
  const {
    formDatafUpdate,
    setFormDatafUpdate,
    setUpdate,
    handleSubmitUpdate,
    update,
  } = useUpdateComment({
    textRef,
    t,
    lang,
  });
  const {
    formDatafDelete,
    setFormDatafDelete,
    deleteF,
    setDeleteF,
    handleSubmitDelete,
  } = useDeleteComment({
    user,
    t,
  });

  useEffect(() => {
    textRef.current?.focus();
  }, []);

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
        className="relative z-[1] mb-8 h-[90%] w-full max-w-6xl overflow-auto rounded-[50px] bg-white p-12 lg:w-[95%] xl:w-[97%] 2xl:w-full"
      >
        <div className="flex h-auto items-center justify-center border-b border-gray-900/10 pb-12">
          <div className="relative z-[2] mt-10 grid w-[80%] grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
            <div className="flex w-full flex-col justify-center space-y-8 lg:col-span-3">
              <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:col-span-2 lg:grid-cols-6">
                <HeaderComment
                  update={update}
                  deleteF={deleteF}
                  t={t}
                ></HeaderComment>
                <ContentComment
                  update={update}
                  deleteF={deleteF}
                  t={t}
                  lang={lang}
                  setFormDatafUpdate={setFormDatafUpdate}
                  formDatafUpdate={formDatafUpdate}
                  state={state}
                  formDatafDelete={formDatafDelete}
                  setFormDatafDelete={setFormDatafDelete}
                  formDataf={formDataf}
                  setFormDataf={setFormDataf}
                ></ContentComment>
              </div>

              <div className="mt-8 flex w-full justify-start gap-4">
                <SubmitButton
                  disabled={false}
                  classNameDisabled={"bg-neutral-300 cursor-not-allowed"}
                  classNameEnabled={
                    "bg-[#bc7743] hover:bg-[#bc7743] cursor-pointer"
                  }
                  className="text-white"
                  textDisabled={t.submitStatus.waitSubmit}
                  textEnabled={t.submitStatus.submit}
                  proccessing={false}
                  textProccessing=""
                />
                {update || deleteF ? (
                  <div
                    className={`cursor-pointer rounded bg-[#bc7743] px-2 py-3 text-sm text-white hover:bg-[#bc7743] lg:text-lg`}
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

        <Sauces lang={lang}></Sauces>
        <div className="flex h-full w-full flex-col items-center gap-6 overflow-y-auto px-4 py-12">
          {comments?.map((comment: any, index: any) => (
            <CommentCard
              key={index}
              index={index}
              comment={comment}
              t={t}
              user={user}
              setDeleteF={setDeleteF}
              formRef={formRef}
              textRef={textRef}
              setFormDatafDelete={setFormDatafDelete}
              setFormDatafUpdate={setFormDatafUpdate}
              setUpdate={setUpdate}
              formDatafDelete={formDatafDelete}
            ></CommentCard>
          ))}
        </div>
      </form>
    </>
  );
}
