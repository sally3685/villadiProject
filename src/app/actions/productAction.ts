"use server";

import { redirect } from "next/navigation";
import {
  AddProduct,
  deleteProduct,
  updateProduct,
} from "../data-access-layer/productDAL";
import { ProductFormSchema, FormProductState } from "../lib/definitions";

export async function AddProductAction(
  state: FormProductState,
  formData: FormData,
): Promise<FormProductState> {
  try {
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
      language,
    );
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    if (status === 409) {
      return {
        errors: {
          code: [message || "Failed to create product / فشل في إنشاء منتج"],
        },
      };
    }

    if (status !== 201) {
      return {
        general: message || "Failed to create product / فشل في إنشاء منتج",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function UpdateProductAction(
  state: FormProductState,
  formData: FormData,
): Promise<FormProductState> {
  try {
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

    // if (status === 404) {
    //   return {
    //     errors: {
    //       code: [message || "Failed to update product / فشل في تعديل منتج"],
    //     },
    //   };
    // }

    if (status !== 200) {
      return {
        general: message || "Failed to update product / فشل في تعديل منتج",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}

export async function DeleteProductAction(
  deleteAll: string,
  selectedField: any,
) {
  try {
    // Validate required fields
    const { status } = await deleteProduct(
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
