"use server";

import { removeAdminAction } from "./adminAction";
import { DeleteCategoryAction } from "./catigoryAction";
import { DeleteCommentAction } from "./commentAction";
import { DeleteFlavorAction } from "./flavorAction";
import { DeleteMapAction } from "./mapAtion";
import { DeleteProductAction } from "./productAction";
import { DeleteRecipeAction } from "./recipyAction";

export async function DeleteAction(
  state: { success: boolean; message: string } | undefined,
  formData: FormData
): Promise<{ success: boolean; message: string } | undefined> {
  try {
    const type = (await formData.get("type")) as string;
    const deleteAll = (await formData.get("deleteAll")) as string;
    const selectedFeild = (await formData.get("selectedField")) as any;
    console.log(deleteAll, selectedFeild, type);
    if (type === "category") {
      const { success } = await DeleteCategoryAction(
        deleteAll,
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      if (success) {
        return {
          success: true,
          message: "Deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "Deleted failed",
        };
      }
    } else if (type === "product") {
      const { success } = await DeleteProductAction(
        deleteAll,
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      if (success) {
        return {
          success: true,
          message: "Deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "Deleted failed",
        };
      }
    } else if (type === "recipe") {
      const { success } = await DeleteRecipeAction(
        deleteAll,
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      if (success) {
        return {
          success: true,
          message: "Deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "Deleted failed",
        };
      }
    } else if (type === "map") {
      const { success } = await DeleteMapAction(
        deleteAll,
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      if (success) {
        return {
          success: true,
          message: "Deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "Deleted failed",
        };
      }
    } else if (type === "flavor") {
      const { success } = await DeleteFlavorAction(
        deleteAll,
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      console.log(success, "de");
      if (success) {
        return {
          success: true,
          message: "Deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "Deleted failed",
        };
      }
    } else if (type === "video") {
      const { success } = await removeAdminAction(
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      if (success) {
        return {
          success: true,
          message: "Deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "Deleted failed",
        };
      }
    } else if (type === "comment") {
      const { success } = await DeleteCommentAction(
        deleteAll,
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      console.log(success, "sdssssssssssssssssss");
      if (success) {
        return {
          success: true,
          message: "Deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "Deleted failed",
        };
      }
    } else if (type === "admin") {
      const { success } = await removeAdminAction(
        selectedFeild !== "undefined" ? JSON.parse(selectedFeild) : null
      );
      if (success) {
        return {
          success: true,
          message: "admin removed successfully",
        };
      } else {
        return {
          success: false,
          message: "remove failed",
        };
      }
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Deleted failed",
    };
  }
}
