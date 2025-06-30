"use server";

import {
  AddProduct,
  deleteProduct,
  updateProduct,
} from "../data-access-layer/productDAL";
import { writeFile } from "fs/promises";
import { FormCommentState, CommentFormSchema } from "../lib/definitions";
import {
  AddComment,
  deleteComment,
  updateComments,
} from "../data-access-layer/commentDAL";

export async function AddCommentAction(
  state: FormCommentState,
  formData: FormData
): Promise<FormCommentState> {
  try {
    // Validate required fields
    const requiredFields = ["text"];
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
    const result = CommentFormSchema.safeParse({
      text: formData.get("text"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { text } = result.data;
    const language = formData.get("language")?.toString() || "en";

    // Handle image upload

    // Add product to database
    const { status, message } = await AddComment(text, language);

    if (status !== 201) {
      return { general: message || "Failed to create comment" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddCommentAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function UpdateCommentAction(
  state: FormCommentState,
  formData: FormData
): Promise<FormCommentState> {
  try {
    // Validate required fields
    const requiredFields = ["text"];
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
    const result = CommentFormSchema.safeParse({
      text: formData.get("text"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { text } = result.data;
    const language = formData.get("language")?.toString() || "en";
    const userId = formData.get("userId")?.toString()!;
    const id = formData.get("id")?.toString()!;
    // Handle image upload

    // Add product to database
    const { status, message } = await updateComments(text, userId, id);

    if (status !== 200) {
      return { general: message || "Failed to create comment" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddCommentAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
// export async function UpdateCommentAction(
//   state: FormCommentState,
//   formData: FormData
// ): Promise<FormCommentState> {
//   try {
//     // Validate required fields
//  const requiredFields = ["text","userId","id"];
//     for (const field of requiredFields) {
//       if (!formData.get(field)) {
//         return {
//           errors: {
//             [field]: ["This field is required"],
//           },
//         };
//       }
//     }

//     // Parse and validate form data
//     const result = CommentFormSchema.safeParse({
//       name: formData.get("text"),
//     });

//     if (!result.success) {
//       return {
//         errors: result.error.flatten().fieldErrors,
//       };
//     }

//     const { text } = result.data;
//     const language = formData.get("language")?.toString() || "en";

//     // Add category to database
//     const { status, message } = await updateComments({
//       id: id,
//       name: productData.name,
//       code: productData.code,
//       detailes: productData.detailes,
//       flavorId: productData.selectedF,
//       color: productData.backgroundColor,
//       p_color: productData.patternColor,
//       categoryId: productData.selectedC,
//       img: primaryImageName,
//       secondryImg: secondaryImageName,
//       lang: language,
//     });

//     if (status === 404) {
//       return { errors: { code: [message] } };
//     }

//     if (status !== 200) {
//       return { general: message || "Failed to create category" };
//     }

//     return { success: true };
//   } catch (error) {
//     console.error("Error in AddCategoryAction:", error);
//     return {
//       general: "An unexpected error occurred. Please try again later.",
//     };
//   }
// }

// export async function DeleteProductAction(
//   deleteAll: string,
//   selectedField: any
// ) {
//   try {
//     // Validate required fields
//     const { status } = await deleteProduct(
//       deleteAll === "on" ? true : false,
//       selectedField
//     );
//     if (status !== 200) {
//       return { success: false };
//     }

//     return { success: true };
//   } catch (error) {
//     return { success: false };
//   }
// }

export async function DeleteCommentAction(
  deleteAll: string,
  selectedField: any
) {
  try {
    // Validate required fields
    const { status } = await deleteComment(
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
