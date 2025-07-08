"use server";

import {
  AddProduct,
  deleteProduct,
  updateProduct,
} from "../data-access-layer/productDAL";
import { writeFile } from "fs/promises";
import { ProductFormSchema, FormProductState } from "../lib/definitions";

export async function AddProductAction(
  state: FormProductState,
  formData: FormData
): Promise<FormProductState> {
  try {
    // Validate required fields
    const requiredFields = [
      "selectedC",
      "selectedF",
      "backgroundColor",
      "patternColor",
      "img2",
      "img",
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
    const result = ProductFormSchema.safeParse({
      name: formData.get("name"),
      code: formData.get("code"),
      detailes: formData.get("detailes"),
      img: formData.get("img"),
      img2: formData.get("img2"),
      selectedC: formData.get("selectedC"),
      selectedF: formData.get("selectedF"),
      backgroundColor: formData.get("backgroundColor"),
      patternColor: formData.get("patternColor"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { img, img2, ...productData } = result.data;
    const language = formData.get("language")?.toString() || "en";

    // Handle image upload

    // Add product to database
    const { status, message } = await AddProduct(
      productData.name,
      productData.code,
      productData.detailes,
      img,
      img2,
      productData.selectedC,
      productData.selectedF,
      productData.backgroundColor,
      productData.patternColor,
      language
    );

    if (status === 409) {
      return { errors: { code: [message || "Failed to create product"] } };
    }

    if (status !== 201) {
      return { general: message || "Failed to create product" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddProductAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function UpdateProductAction(
  state: FormProductState,
  formData: FormData
): Promise<FormProductState> {
  try {
    // Validate required fields
    const requiredFields = [
      "id",
      "name",
      "code",
      "img",
      "img2",
      "backgroundColor",
      "patternColor",
      "detailes",
      "language",
      "selectedC",
      "selectedF",
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
    const result = ProductFormSchema.safeParse({
      name: formData.get("name"),
      code: formData.get("code"),
      detailes: formData.get("detailes"),
      img: formData.get("img"),
      img2: formData.get("img2"),
      selectedC: formData.get("selectedC"),
      selectedF: formData.get("selectedF"),
      backgroundColor: formData.get("backgroundColor"),
      patternColor: formData.get("patternColor"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { img, img2, ...productData } = result.data;
    const language = formData.get("language")?.toString() || "en";
    const id = formData.get("id") as string;

    // Add category to database
    const { status, message } = await updateProduct({
      id: id,
      name: productData.name,
      code: productData.code,
      detailes: productData.detailes,
      flavorId: productData.selectedF,
      color: productData.backgroundColor,
      p_color: productData.patternColor,
      categoryId: productData.selectedC,
      img: img,
      secondryImg: img2,
      lang: language,
    });

    if (status === 404) {
      return { errors: { code: [message || "Failed to create product"] } };
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

export async function DeleteProductAction(
  deleteAll: string,
  selectedField: any
) {
  try {
    // Validate required fields
    const { status } = await deleteProduct(
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
