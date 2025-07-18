"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Comment } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";

export const AddComment = async (text: string, language: string) => {
  try {
    const session = await getSession();
    if (session.status !== 200) {
      return {
        status: session.status,
        message: session.messageEn + " / " + session.messageAr,
      };
    }
    const existingUser = await prisma.user.findFirst({
      where: {
        email: session.user?.email,
      },
    });

    if (!existingUser) {
      return {
        status: 404,
        message:
          "user with this email not found / لم يتم إيجاد مستخدم مرتبط بهذا البريد الالكتروني",
      };
    }

    const newComment = await prisma.comment.create({
      data: {
        userId: existingUser.id,
        text: text,
      },
    });

    if (!newComment) {
      return {
        status: 500,
        message: "Failed to create comment / فشل في إنشاء تعليق",
      };
    }

    revalidatePath("/en/Opinion", "page");
    revalidatePath("/ar/Opinion", "page");

    return {
      status: 201,
      message: "Comment added successfully ♡ / تم إضافة التعليق بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};

export const getAllComments = cache(async () => {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        user: { select: { email: true } },
        _count: {
          select: {
            votes: true,
          },
        },
      },
    });
    if (!comments) {
      return {
        status: 404,
        messageEn: "No Comments found 😔",
        messageAr: "لم يتم إيجاد أي تعليق 😔",
        comments: [],
      };
    }
    return {
      status: 200,
      messageEn: "Comments retrieved successfully ♡",
      messageAr: "تم إحضار التعليقات بنجاح ♡",
      comments,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      comments: [],
    };
  }
});
export const updateComments = async (
  text: string,
  userId: string,
  id: string,
) => {
  try {
    const session = await getSession();
    if (session.status !== 200) {
      return {
        status: session.status,
        message: session.messageEn + " / " + session.messageAr,
      };
    }
    const existingUser = await prisma.user.findFirst({
      where: {
        email: session.user?.email,
      },
    });

    if (!existingUser) {
      return {
        status: 404,
        message:
          "user with this email not found / لم يتم إيجاد مستخدم مرتبط بهذا البريد الالكتروني",
      };
    }

    if (userId !== existingUser.id) {
      return {
        status: 403,
        message:
          "Un Authorized to update comment / هذا التعليق غير عائد لك ولا تستطيع تعديله",
      };
    }

    const item = await prisma.comment.update({
      where: { id: id },
      data: {
        text: text,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "Failed to update comment / فشل في تعديل التعليق",
      };
    }
    revalidatePath("/en/Opinion", "page");
    revalidatePath("/ar/Opinion", "page");
    return {
      status: 200,
      message: "Comment updated successfully ♡ / تم تعديل التعليق بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const deleteComment = async (
  deleteAll: boolean,
  comment: Comment | null,
) => {
  try {
    const result = await getSession();
    if (result.status !== 200) {
      return {
        status: 500,
      };
    }
    const existingUser = await prisma.user.findFirst({
      where: {
        email: result.user?.email,
      },
    });

    if (!existingUser) {
      return {
        status: 404,
      };
    }
    let item;
    if (deleteAll) {
      item = await prisma.$transaction([
        prisma.voteOnComment.deleteMany({
          where: { userId: existingUser.id },
        }),
        prisma.comment.deleteMany({
          where: { userId: existingUser.id },
        }),
      ]);
    } else {
      if (!comment) {
        return {
          status: 500,
        };
      }

      const existingcomment = await prisma.comment.findFirst({
        where: { id: comment.id },
      });

      if (!existingcomment) {
        return {
          status: 404,
        };
      }
      item = await prisma.$transaction([
        prisma.voteOnComment.deleteMany({
          where: {
            commentId: comment?.id,
          },
        }),
        prisma.comment.delete({
          where: { id: comment.id },
        }),
      ]);
      if (!item) {
        return {
          status: 500,
        };
      }
    }

    revalidatePath("/en/Opinion");
    revalidatePath("/ar/Opinion");
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};
