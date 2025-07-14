"use server";
import { grantAdminP, removeAdminP } from "../data-access-layer/user";
import { FormAdminState } from "../lib/definitions";

export async function AddAdminAction(
  state: FormAdminState,
  formData: FormData,
): Promise<FormAdminState> {
  try {
    const userId = formData.get("selectedUser");

    if (!userId || typeof userId !== "string") {
      return {
        status: 400,
        messageEn: "Please select a valid user 😔",
        messageAr: "الرجاء اختيار مستخدم صحيح 😔",
      };
    }

    const result = await grantAdminP(userId);

    if (result.status !== 200) {
      return {
        status: result.status,
        messageEn: result.messageEn,
        messageAr: result.messageAr,
      };
    }

    return {
      status: 200,
      messageEn: "User promoted to admin successfully ♡",
      messageAr: "تم ترقية المستخدم إلى مدير بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "An unexpected error occurred. Please try again later. 😔",
      messageAr: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقًا. 😔",
    };
  }
}
export async function removeAdminAction(selectedField: any) {
  try {
    const { status } = await removeAdminP(selectedField);
    if (status !== 200) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
