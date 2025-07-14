"use server";

import {
  AddCategory,
  deleteCategory,
  updateCategory,
} from "../data-access-layer/catigoryDAL";
import { CategoryFormSchema, FormCategoryState } from "../lib/definitions";
import { redirect } from "next/navigation";

export async function AddCategoryAction(
  state: FormCategoryState,
  formData: FormData,
): Promise<FormCategoryState> {
  try {
    const language = formData.get("language")?.toString() || "en";

    const result = CategoryFormSchema.safeParse({
      name: formData.get("name"),
      code: formData.get("code"),
      detailes: formData.get("detailes"),
      img: formData.get("img") as string,
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { ...categoryData } = result.data;

    const { status, message } = await AddCategory(
      categoryData.name,
      categoryData.code,
      categoryData.detailes,
      categoryData.img,
      language,
    );

    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    if (status === 409) {
      return { errors: { code: [message] } };
    }

    if (status !== 201) {
      return {
        general: message || "Failed to create category / فشل إضافة صنف ",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function UpdateCategoryAction(
  state: FormCategoryState,
  formData: FormData,
): Promise<FormCategoryState> {
  try {
    const result = CategoryFormSchema.safeParse({
      name: formData.get("name"),
      code: formData.get("code"),
      detailes: formData.get("detailes"),
      img: formData.get("img"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { ...categoryData } = result.data;
    const language = formData.get("language")?.toString() || "en";
    const id = formData.get("id") as string;

    const { status, message } = await updateCategory({
      id: id,
      name: categoryData.name,
      code: categoryData.code,
      detailes: categoryData.detailes,
      img: categoryData.img,
      lang: language,
    });

    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }

    if (status !== 200) {
      return {
        general: message
          ? message
          : "Failed to update category / فشل تعديل الصنف ",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}

export async function DeleteCategoryAction(
  deleteAll: string,
  selectedField: any,
) {
  try {
    const { status } = await deleteCategory(
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
