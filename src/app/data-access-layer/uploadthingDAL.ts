"use server";
import { UTApi } from "uploadthing/server";
const utapi = new UTApi();

export const deleteUTFiles = async (files: string) => {
  try {
    const res = await utapi.deleteFiles([files]);
    if (res.deletedCount === 1) return { status: 200 };
    else
      return {
        status: 500,
        message: "failed to delete",
      };
  } catch (error) {
    return {
      status: 500,
      message: "failed to delete",
    };
  }
};
