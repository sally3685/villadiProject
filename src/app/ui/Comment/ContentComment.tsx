import React, { Dispatch, SetStateAction } from "react";
import {
  deleteType,
  commentDictionary,
  stateAddType,
  updateType,
} from "./CommentTypes";
import { FormTextarea } from "../FormTextarea";
import { getMessage } from "../../../../helpers/getMessage";
export default function ContentComment({
  update,
  deleteF,
  t,
  lang,
  setFormDatafUpdate,
  formDatafUpdate,
  state,
  formDatafDelete,
  setFormDatafDelete,
  formDataf,
  setFormDataf,
}: {
  update: boolean;
  deleteF: boolean;
  t: commentDictionary;
  setFormDatafUpdate: Dispatch<SetStateAction<updateType>>;
  formDatafUpdate: updateType;
  state: stateAddType | undefined;
  formDatafDelete: deleteType;
  setFormDatafDelete: Dispatch<SetStateAction<deleteType>>;
  formDataf: {
    text: string;
  };
  setFormDataf: Dispatch<
    SetStateAction<{
      text: string;
    }>
  >;
  lang: "en" | "ar";
}) {
  return (
    <>
      {update ? (
        <FormTextarea
          id="text"
          label={""}
          placeholder={t.addComment.placeHolder}
          value={formDatafUpdate.text}
          onChange={(value) =>
            setFormDatafUpdate({ ...formDatafUpdate, text: value })
          }
          error={
            state?.errors?.text ? getMessage(state.errors.text[0], lang) : ""
          }
        />
      ) : deleteF ? (
        <>
          <div className="relative col-span-full min-h-[150px] w-full max-w-2xl rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="mb-4 h-[80px] overflow-y-auto pr-2">
              <p className="text-sm text-gray-800 sm:text-base">
                {(formDatafDelete.selectedComment as any).text}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-amber-100">
              <div className="text-xs text-amber-600">
                {(formDatafDelete.selectedComment as any).user.email}
              </div>
            </div>
          </div>
          <div className="col-span-full mt-6 flex items-center gap-4">
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
            <label htmlFor="checkbox">{t.deleteComment.check}</label>
          </div>
        </>
      ) : (
        <FormTextarea
          id="text"
          label={t.addComment.label}
          placeholder={t.addComment.placeHolder}
          value={formDataf.text}
          onChange={(value) => setFormDataf({ ...formDataf, text: value })}
          error={
            state?.errors?.text ? getMessage(state.errors.text[0], lang) : ""
          }
        />
      )}{" "}
    </>
  );
}
