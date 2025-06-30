"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Comment, Flavor } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";

export const AddComment = async (text: string, language: string) => {
  try {
    const result = await getSession();
    if (result.success === false) {
      return {
        status: 500,
        message: "internal server error",
      };
    }
    // Check if flavor with same name already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email: result.user?.email,
      },
    });

    if (!existingUser) {
      return {
        status: 404,
        message: "user with this email not found",
      };
    }

    // Create new flavor
    const newComment = await prisma.comment.create({
      data: {
        userId: existingUser.id,
        text: text,
      },
    });

    if (!newComment) {
      return {
        status: 500,
        message: "Failed to create comment",
      };
    }

    // Revalidate relevant paths
    revalidatePath("/en/Opinion", "page");
    revalidatePath("/ar/Opinion", "page");

    return {
      status: 201,
      message: "comment created successfully",
    };
  } catch (error) {
    console.error("Error in add comment:", error);
    return {
      status: 500,
      message: "Internal server error",
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

    return {
      status: 200,
      message: "comments retrieved successfully",
      comments,
    };
  } catch (error) {
    console.error("Error in getAllcomments:", error);
    return {
      status: 500,
      message: "Internal server error",
      comments: [],
    };
  }
});
export const updateComments = async (
  text: string,
  userId: string,
  id: string
) => {
  try {
    const result = await getSession();
    if (result.success === false) {
      return {
        status: 500,
        message: "internal server error",
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
        message: "user with this email not found",
      };
    }

    if (userId !== existingUser.id) {
      return {
        status: 403,
        message: "Un Authorized to update comment",
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
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Opinion", "page");
    revalidatePath("/ar/Opinion", "page");
    return {
      status: 200,
      message: "comment updated successfully",
    };
  } catch (error) {
    console.error("Error in update comment:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const deleteComment = async (
  deleteAll: boolean,
  comment: Comment | null
) => {
  try {
    const result = await getSession();
    if (result.success === false) {
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
      item = await prisma.comment.deleteMany({
        where: { id: existingUser.id },
      });
    } else {
      if (!comment) {
        return {
          status: 500,
        };
      }
      //complete this to delete one flavor
      const existingcomment = await prisma.comment.findFirst({
        where: { id: comment.id },
      });

      if (!existingcomment) {
        return {
          status: 404,
        };
      }
      // Get all related data first

      item = await prisma.comment.delete({
        where: { id: comment.id },
      });

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
