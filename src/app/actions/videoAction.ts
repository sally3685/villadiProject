"use server";

import {
  AddVideo,
  deleteVideo,
  updateSocial,
  updateVideo,
} from "../data-access-layer/videoDAL";
import { writeFile } from "fs/promises";
import {
  VideoFormSchema,
  FormVideoState,
  SocailFormSchema,
  FormSocialState,
} from "../lib/definitions";

export async function AddVideoAction(
  state: FormVideoState,
  formData: FormData
): Promise<FormVideoState> {
  try {
    // Validate required fields]
    const requiredFields = [
      "name",
      "embededLink",
      "coverImg",
      "selectedProduct",
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
    const result = VideoFormSchema.safeParse({
      name: formData.get("name"),
      embededLink: formData.get("embededLink"),
      coverImg: formData.get("coverImg"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { ...videoData } = result.data;
    const language = formData.get("language")?.toString() || "en";

    const selectedProduct = formData.get("selectedProduct") as string;

    // Handle image upload if provided

    // Add category to database
    const { status, message } = await AddVideo(
      videoData.name,
      videoData.coverImg,
      videoData.embededLink,
      selectedProduct,
      language
    );

    if (status === 409) {
      return {
        errors: { embededLink: [message ? message : "Failed to create video"] },
      };
    }

    if (status !== 201) {
      return { general: message || "Failed to create video" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddVideoAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function UpdateVideoAction(
  state: FormVideoState,
  formData: FormData
): Promise<FormVideoState> {
  try {
    // Validate required fields
    const requiredFields = [
      "name",
      "embededLink",
      "coverImg",
      "selectedProduct",
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
    const result = VideoFormSchema.safeParse({
      name: formData.get("name"),
      embededLink: formData.get("embededLink"),
      coverImg: formData.get("coverImg"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { ...videoData } = result.data;
    const language = formData.get("language")?.toString() || "en";
    const id = formData.get("id") as string;

    const selectedProduct = formData.get("selectedProduct") as string;
    const { status, message } = await updateVideo({
      id: id,
      name: videoData.name,
      embededLink: videoData.embededLink,
      coverImg: videoData.coverImg,
      productId: selectedProduct,
      lang: language,
    });

    if (status === 404) {
      return {
        errors: { name: [message ? message : "Failed to create video"] },
      };
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
export async function DeleteVideoAction(deleteAll: string, selectedField: any) {
  try {
    // Validate required fields
    const { status } = await deleteVideo(
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

export async function UpdateSocialAction(
  state: FormSocialState,
  formData: FormData
): Promise<FormSocialState> {
  try {
    // Validate required fields
    const requiredFields = ["name", "embededLink", "channelLink"];
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
    const result = SocailFormSchema.safeParse({
      embededLink: formData.get("embededLink"),
      channelLink: formData.get("channelLink"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { ...socialData } = result.data;
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;

    const { status, message } = await updateSocial({
      id: id,
      name: name,
      embededlink: socialData.embededLink,
      channelLink: socialData.channelLink,
    });

    if (status === 404) {
      return {
        errors: {
          embededLink: [message ? message : "Failed to create social"],
        },
      };
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
