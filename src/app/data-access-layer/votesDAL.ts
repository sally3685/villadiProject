"server only";
import prisma from "../lib/db";
import { cache } from "react";
import { Video } from "../../../prisma/generated/prisma";
import { revalidatePath } from "next/cache";
import { getSession } from "../lib/session";

export const AddVote = async (userEmail: string, recipeId: string) => {
  try {
    const result = await getSession();
    if (result.status !== 200) {
      return {
        status: 500,
      };
    }
    const existingUser = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });
    if (!existingUser) {
      return {
        status: 404,
        messageEn: "user email not found ",
        messageAr: "لم يتم إيجاد ايميل المستخدم",
      };
    }
    const existingVote = await prisma.voteOnRecipy.findFirst({
      where: {
        userId: existingUser.id,
        RecipyId: recipeId,
      },
    });
    if (existingVote) {
      return {
        status: 409,
        messageEn: "you can only vote once ♡",
        messageAr: "يمكنك التصويت مرة واحدة فقط ♡",
      };
    }

    const newVote = await prisma.voteOnRecipy.create({
      data: {
        userId: existingUser.id,
        RecipyId: recipeId,
      },
    });

    if (!newVote) {
      return {
        status: 500,
        messageEn: "Failed to vote 😔",
        messageAr: "فشل التصويت 😔",
      };
    }

    revalidatePath(`/en/Recipes`);
    revalidatePath(`/ar/Recipes`);

    return {
      status: 201,
      messageEn: "voted successfully ♡",
      messageAr: "تم التصويت بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الداخلي 😔",
    };
  }
};
export const AddCommentVote = async (userEmail: string, commentId: string) => {
  try {
    const result = await getSession();
    if (result.status !== 200) {
      return {
        status: 500,
      };
    }
    const existingUser = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });
    if (!existingUser) {
      return {
        status: 404,
        messageEn: "user email not found ",
        messageAr: "لم يتم إيجاد ايميل المستخدم",
      };
    }
    const existingVote = await prisma.voteOnComment.findFirst({
      where: {
        userId: existingUser.id,
        commentId: commentId,
      },
    });
    if (existingVote) {
      return {
        status: 409,
        messageEn: "you can only vote once ♡",
        messageAr: "يمكنك التصويت مرة واحدة فقط ♡",
      };
    }

    const newVote = await prisma.voteOnComment.create({
      data: {
        userId: existingUser.id,
        commentId: commentId,
      },
    });

    if (!newVote) {
      return {
        status: 500,
        messageEn: "Failed to vote 😔",
        messageAr: "فشل التصويت 😔",
      };
    }

    revalidatePath(`/en/Opinion`);
    revalidatePath(`/ar/Opinion`);

    return {
      status: 201,
      messageEn: "voted successfully ♡",
      messageAr: "تم التصويت بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الداخلي 😔",
    };
  }
};
