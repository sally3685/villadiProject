import React, { Dispatch, RefObject, SetStateAction } from "react";
import {
  commentType,
  deleteType,
  commentDictionary,
  updateType,
  userType,
} from "./CommentTypes";
import { PenIcon, ThumbsUp, Trash } from "lucide-react";
import { AddVotesCommentAction } from "@/app/actions/votes";

export default function CommentCard({
  index,
  comment,
  t,
  user,
  setDeleteF,
  formRef,
  textRef,
  setFormDatafDelete,
  setFormDatafUpdate,
  setUpdate,
  formDatafDelete,
}: {
  index: number;
  comment: commentType;
  t: commentDictionary;
  user: userType;
  setDeleteF: Dispatch<SetStateAction<boolean>>;
  formRef: RefObject<HTMLFormElement | null>;
  textRef: RefObject<HTMLTextAreaElement | null>;
  setFormDatafDelete: Dispatch<SetStateAction<deleteType>>;
  setFormDatafUpdate: Dispatch<SetStateAction<updateType>>;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  formDatafDelete: deleteType;
}) {
  return (
    <div
      key={index}
      className="relative min-h-[150px] w-full max-w-2xl rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="mb-4 h-[80px] overflow-y-auto pr-2">
        <p className="text-sm text-gray-800 sm:text-base">{comment.text}</p>
      </div>

      <div className="flex items-center justify-between border-t border-amber-100">
        <div className="text-xs text-amber-600">
          {/* {comment.user.email} */}
          {t.vote.title} : {comment._count.votes ? comment._count.votes : 0}
        </div>

        {comment.user.email === user.email && (
          <div className="flex gap-2">
            <div
              className="rounded-full p-1 text-amber-700 transition-colors hover:bg-amber-100 hover:text-amber-900"
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
              <PenIcon className="h-4 w-4" />
            </div>
            <div className="rounded-full p-1 text-amber-700 transition-colors hover:bg-amber-100 hover:text-amber-900">
              <Trash
                className="h-4 w-4"
                onClick={() => {
                  formRef.current?.scroll(0, 0);
                  textRef.current?.focus();
                  setUpdate(false);
                  setDeleteF(true);
                  setFormDatafDelete({
                    ...formDatafDelete,
                    selectedComment: comment,
                  });
                }}
              />
            </div>
            <div className="rounded-full p-1 text-amber-700 transition-colors hover:bg-amber-100 hover:text-amber-900">
              <ThumbsUp
                className="h-4 w-4"
                onClick={async () => {
                  await AddVotesCommentAction(user.email, comment.id);
                }}
              />
            </div>
            {/*  */}
          </div>
        )}
      </div>
    </div>
  );
}
