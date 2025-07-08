"use server";

import {
  AddCategory,
  deleteCategory,
  updateCategory,
} from "../data-access-layer/catigoryDAL";
import { writeFile } from "fs/promises";
import { CategoryFormSchema, FormCategoryState } from "../lib/definitions";

export async function AddCategoryAction(
  state: FormCategoryState,
  formData: FormData
): Promise<FormCategoryState> {
  try {
    // Validate required fields
    const requiredFields = ["name", "code", "img"];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return {
          errors: {
            [field]: ["This field is required"],
          },
        };
      }
    }

    // Parse and validate form data
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
    const language = formData.get("language")?.toString() || "en";

    // Add category to database
    const { status, message } = await AddCategory(
      categoryData.name,
      categoryData.code,
      categoryData.detailes,
      categoryData.img,
      language
    );

    if (status === 409) {
      return { errors: { code: [message] } };
    }

    if (status !== 201) {
      return { general: message || "Failed to create category" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddCategoryAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function UpdateCategoryAction(
  state: FormCategoryState,
  formData: FormData
): Promise<FormCategoryState> {
  try {
    // Validate required fields
    const requiredFields = [
      "id",
      "name",
      "code",
      "img",
      "detailes",
      "language",
    ];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return {
          errors: {
            [field]: ["This field is required"],
          },
        };
      }
    }

    // Parse and validate form data
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

    // Handle image upload if provided

    // Add category to database
    const { status, message } = await updateCategory({
      id: id,
      name: categoryData.name,
      code: categoryData.code,
      detailes: categoryData.detailes,
      img: categoryData.img,
      lang: language,
    });

    if (status === 409) {
      return { errors: { code: [message] } };
    }

    if (status !== 200) {
      return { general: message || "Failed to create category" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddCategoryAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}

export async function DeleteCategoryAction(
  deleteAll: string,
  selectedField: any
) {
  try {
    // Validate required fields
    const { status } = await deleteCategory(
      deleteAll === "on" ? true : false,
      selectedField
    );
    if (status !== 200) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
