"server only";
import prisma from "../lib/db";
import { cache } from "react";
import { Video } from "../../../prisma/generated/prisma";
import { revalidatePath } from "next/cache";
import { getSession } from "../lib/session";

export const AddVote = async (userEmail: string, recipeId: string) => {
  try {
    const result = await getSession();
    if (result.success === false) {
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
        status: 409,
        message: "No user",
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
        message: "you can only vote once",
      };
    }

    // Create new recipe
    const newVote = await prisma.voteOnRecipy.create({
      data: {
        userId: existingUser.id,
        RecipyId: recipeId,
      },
    });

    if (!newVote) {
      return {
        status: 500,
        message: "Failed to vote",
      };
    }

    // Revalidate relevant paths
    // revalidatePath(`/[lang]/recipes`, "page");
    revalidatePath(`/en/Recipes`);
    revalidatePath(`/ar/Recipes`);
    //localhost:3000/en/Recipes/685ef6a82ee1f493bbfa5a20
    http: return {
      status: 201,
      message: "voted successfully",
    };
  } catch (error) {
    console.error("Error in vote:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const AddCommentVote = async (userEmail: string, commentId: string) => {
  try {
    const result = await getSession();
    if (result.success === false) {
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
        status: 409,
        message: "No user",
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
        message: "you can only vote once",
      };
    }

    // Create new recipe
    const newVote = await prisma.voteOnComment.create({
      data: {
        userId: existingUser.id,
        commentId: commentId,
      },
    });

    if (!newVote) {
      return {
        status: 500,
        message: "Failed to vote",
      };
    }

    // Revalidate relevant paths
    // revalidatePath(`/[lang]/recipes`, "page");
    revalidatePath(`/en/Opinion`);
    revalidatePath(`/ar/Opinion`);
    //localhost:3000/en/Recipes/685ef6a82ee1f493bbfa5a20
    http: return {
      status: 201,
      message: "voted successfully",
    };
  } catch (error) {
    console.error("Error in vote:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
