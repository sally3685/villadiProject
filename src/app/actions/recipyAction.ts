"use server";
import {
  AddRecipe,
  deleteRecipe,
  updateRecipe,
} from "../data-access-layer/recipyDAL";
import { RecipeFormSchema, FormRecipeState } from "../lib/definitions";

export async function AddRecipeAction(
  state: FormRecipeState,
  formData: FormData
): Promise<FormRecipeState> {
  try {
    // Validate required fields
    const requiredFields = ["name", "details", "selectedF", "code"];
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
    // Add recipe to database
    const { status, message } = await AddRecipe(
      name,
      code,
      details,
      selectedF,
      language
    );
    if (status === 404) {
      return {
        errors: {
          selectedF: [message ? message : "flavor not found"],
        },
      };
    }
    if (status === 409) {
      return {
        errors: {
          name: [message ? message : "Recipy with this code already entered"],
        },
      };
    }
    if (status === 403) {
      return {
        errors: {
          name: [message ? message : "Un authorized"],
        },
      };
    }

    if (status !== 201) {
      return { general: message || "Failed to create recipe" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddRecipeAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function UpdateRecipeAction(
  state: FormRecipeState,
  formData: FormData
): Promise<FormRecipeState> {
  try {
    // Validate required fields
    const requiredFields = ["id", "name", "detailes", "language", "selectedF"];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        console.log(field, "lknlknl");
        return {
          errors: {
            [field]: ["This field is required"],
          },
        };
      }
    }

    // Parse and validate form data
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

    if (status === 404) {
      return { errors: { name: [message ? message : "recipy was not found"] } };
    }

    if (status !== 200) {
      return { general: message || "Failed to create Recipe" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddRecipeAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function DeleteRecipeAction(
  deleteAll: string,
  selectedField: any
) {
  try {
    // Validate required fields
    const { status } = await deleteRecipe(
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
