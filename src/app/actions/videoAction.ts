"use server";

import { redirect } from "next/navigation";
import {
  AddVideo,
  deleteVideo,
  updateSocial,
  updateVideo,
} from "../data-access-layer/videoDAL";
import {
  VideoFormSchema,
  FormVideoState,
  SocailFormSchema,
  FormSocialState,
} from "../lib/definitions";

export async function AddVideoAction(
  state: FormVideoState,
  formData: FormData,
): Promise<FormVideoState> {
  try {
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

    const { status, message } = await AddVideo(
      videoData.name,
      videoData.coverImg,
      videoData.embededLink,
      selectedProduct,
      language,
    );

    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    if (status === 409) {
      return {
        errors: {
          embededLink: [
            message
              ? message
              : "Video with this Link is already existed / يوجد بالفعل فيديو بهذا الرابط",
          ],
        },
      };
    }

    if (status !== 201) {
      return {
        general: message || "Failed to create video / فشل في إنشاء فيديو",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function UpdateVideoAction(
  state: FormVideoState,
  formData: FormData,
): Promise<FormVideoState> {
  try {
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
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }

    // if (status === 404) {
    //   return {
    //     errors: {
    //       name: [
    //         message ? message : "video was not found / لم يتم إيجاد الفيديو ",
    //       ],
    //     },
    //   };
    // }

    if (status !== 200) {
      return {
        general: message || "Failed to update Video / فشل في إنشاء الفيديو",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function DeleteVideoAction(deleteAll: string, selectedField: any) {
  try {
    // Validate required fields
    const { status } = await deleteVideo(
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

export async function UpdateSocialAction(
  state: FormSocialState,
  formData: FormData,
): Promise<FormSocialState> {
  try {
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
    const language = (formData.get("language") as string) || "en";
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }

    // if (status === 404) {
    //   return {
    //     errors: {
    //       embededLink: [
    //         message
    //           ? message
    //           : "Failed to update social / فشل في تحديث روابط التواصل",
    //       ],
    //     },
    //   };
    // }

    if (status !== 200) {
      return {
        general:
          message || "Failed to update social / فشل في تحديث روابط التواصل",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
