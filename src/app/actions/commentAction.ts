"use server";

import { FormCommentState, CommentFormSchema } from "../lib/definitions";
import {
  AddComment,
  deleteComment,
  updateComments,
} from "../data-access-layer/commentDAL";

export async function AddCommentAction(
  state: FormCommentState,
  formData: FormData,
): Promise<FormCommentState> {
  try {
    const result = CommentFormSchema.safeParse({
      text: formData.get("text"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { text } = result.data;
    const language = formData.get("language")?.toString() || "en";

    const { status, message } = await AddComment(text, language);

    if (status !== 201) {
      return {
        general: message || "Failed to create comment / فشل في إنشاء التعليق",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function UpdateCommentAction(
  state: FormCommentState,
  formData: FormData,
): Promise<FormCommentState> {
  try {
    const result = CommentFormSchema.safeParse({
      text: formData.get("text"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { text } = result.data;
    const userId = formData.get("userId")?.toString()!;
    const id = formData.get("id")?.toString()!;

    const { status, message } = await updateComments(text, userId, id);

    if (status !== 200) {
      return {
        general: message || "Failed to update comment / فشل في تعديل التعليق",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}

export async function DeleteCommentAction(
  deleteAll: string,
  selectedField: any,
) {
  try {
    // Validate required fields
    const { status } = await deleteComment(
      deleteAll === "on" ? true : false,
      selectedField,
    );
    if (status !== 200) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
