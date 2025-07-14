"use server";
import { redirect } from "next/navigation";
import {
  AddRecipe,
  deleteRecipe,
  updateRecipe,
} from "../data-access-layer/recipyDAL";
import { RecipeFormSchema, FormRecipeState } from "../lib/definitions";

export async function AddRecipeAction(
  state: FormRecipeState,
  formData: FormData,
): Promise<FormRecipeState> {
  try {
    const result = RecipeFormSchema.safeParse({
      name: formData.get("name"),
      details: formData.get("details"),
      selectedF: formData.get("selectedF"),
      code: formData.get("code"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { name, details, selectedF, code } = result.data;
    const language = (formData.get("language") as string) || "en";
    const { status, message } = await AddRecipe(
      name,
      code,
      details,
      selectedF,
      language,
    );
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    if (status === 404) {
      return {
        errors: {
          selectedF: [
            message ? message : "flavor not found / لم يتم إيجاد النكهة",
          ],
        },
      };
    }
    if (status === 409) {
      return {
        errors: {
          name: [
            message
              ? message
              : "Recipy with this code already entered / يوجد بالفعل وصفة بهذا الكود",
          ],
        },
      };
    }

    if (status !== 201) {
      return {
        general: message || "Failed to create recipe / فشل في إنشاء الوصفة",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function UpdateRecipeAction(
  state: FormRecipeState,
  formData: FormData,
): Promise<FormRecipeState> {
  try {
    const result = RecipeFormSchema.safeParse({
      name: formData.get("name"),
      details: formData.get("detailes"),
      selectedF: formData.get("selectedF"),
      code: formData.get("code"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { ...recipeData } = result.data;
    const language = formData.get("language")?.toString() || "en";
    const id = formData.get("id") as string;

    const { status, message } = await updateRecipe({
      id: id,
      name: recipeData.name,
      detailes: recipeData.details,
      flavorId: recipeData.selectedF,
      lang: language,
      code: recipeData.code,
    });
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    // if (status === 404) {
    //   return {
    //     errors: {
    //       name: [
    //         message ? message : "recipy was not found / لم يتم إيجاد الوصفة ",
    //       ],
    //     },
    //   };
    // }

    if (status !== 200) {
      return {
        general: message || "Failed to update Recipe / فشل في إنشاء الوصفة",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function DeleteRecipeAction(
  deleteAll: string,
  selectedField: any,
) {
  try {
    const { status } = await deleteRecipe(
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
