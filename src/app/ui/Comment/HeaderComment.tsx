import React from "react";
import { commentDictionary } from "./CommentTypes";

export default function HeaderComment({
  update,
  deleteF,
  t,
}: {
  update: boolean;
  deleteF: boolean;
  t: commentDictionary;
}) {
  return (
    <h1 className="col-span-1 text-2xl font-bold text-black sm:text-3xl lg:col-span-6">
      {update && t.updateComment.title}
      {deleteF && t.deleteComment.title}
      {!deleteF && !update && t.addComment.title}
    </h1>
  );
}
