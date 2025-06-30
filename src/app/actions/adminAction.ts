"use server";
import { grantAdminP, removeAdminP } from "../data-access-layer/user";
import { FormAdminState } from "../lib/definitions";

export async function AddAdminAction(
  state: FormAdminState,
  formData: FormData
): Promise<FormAdminState> {
  try {
    const userId = formData.get("selectedUser");

    if (!userId || typeof userId !== "string") {
      return {
        general: "Please select a valid user",
        success: false,
      };
    }

    const { status, message } = await grantAdminP(userId);

    if (status !== 200) {
      return {
        general: message || "Failed to promote user to admin",
        success: false,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error in AddAdminAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
export async function removeAdminAction(selectedField: any) {
  try {
    // Validate required fields
    const { status } = await removeAdminP(selectedField);
    if (status !== 200) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
