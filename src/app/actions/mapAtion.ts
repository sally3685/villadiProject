"use server";

import {
  MapFormSchema,
  FormMapState,
  MapLSchema,
  MapTSchema,
} from "../lib/definitions";
import { AddMap, deleteMap, updateMap } from "../data-access-layer/mapDAL";
import { redirect } from "next/navigation";

export async function AddMapAction(
  state: FormMapState,
  formData: FormData,
): Promise<FormMapState> {
  try {
    const result = MapFormSchema.safeParse({
      name: formData.get("name"),
      details: formData.get("details"),
      img: formData.get("img"),
    });
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const LArray = formData.getAll("left");
    let resultL;
    for (let i = 0; i < LArray.length; i++) {
      resultL = MapLSchema.safeParse({
        left: LArray[i],
      });
      if (!resultL.success) {
        return {
          errors: resultL.error.flatten().fieldErrors,
        };
      }
    }
    const TArray = formData.getAll("top");
    let resultT;
    for (let i = 0; i < TArray.length; i++) {
      resultT = MapTSchema.safeParse({
        top: TArray[i],
      });
      if (!resultT.success) {
        return {
          errors: resultT.error.flatten().fieldErrors,
        };
      }
    }

    const language = formData.get("language")?.toString() || "en";
    const { ...MapData } = result.data;
    const { status, message } = await AddMap(
      MapData.name,
      MapData.details,
      MapData.img,
      formData.getAll("top") as string[],
      formData.getAll("left") as string[],
      language,
    );
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    if (status === 409) {
      return {
        errors: {
          name: [message || "Failed to create Map / فشل في إضافة نكهة"],
        },
      };
    }

    if (status !== 201) {
      return { general: message || "Failed to create Map / فشل في إضافة نكهة" };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}

export async function UpdateMapAction(
  state: FormMapState,
  formData: FormData,
): Promise<FormMapState> {
  try {
    const result = MapFormSchema.safeParse({
      name: formData.get("name"),
      details: formData.get("details"),
      img: formData.get("img"),
    });
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const LArray = formData.getAll("left");
    let resultL;
    for (let i = 0; i < LArray.length; i++) {
      resultL = MapLSchema.safeParse({
        left: LArray[i],
      });
      if (!resultL.success) {
        return {
          errors: resultL.error.flatten().fieldErrors,
        };
      }
    }
    const TArray = formData.getAll("top");
    let resultT;
    for (let i = 0; i < TArray.length; i++) {
      resultT = MapTSchema.safeParse({
        top: TArray[i],
      });
      if (!resultT.success) {
        return {
          errors: resultT.error.flatten().fieldErrors,
        };
      }
    }
    const language = formData.get("language")?.toString() || "en";

    const { ...MapData } = result.data;

    const id = formData.get("id") as string;

    const { status, message } = await updateMap({
      id: id,
      name: MapData.name,
      details: MapData.details,
      left: formData.getAll("left") as string[],
      top: formData.getAll("top") as string[],
      img: MapData.img,
      lang: language,
    });
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    // if (status === 404) {
    //   return {
    //     errors: {
    //       name: [message || "Failed to create Map / فشل في إنشاء الخريطة"],
    //     },
    //   };
    // }

    if (status !== 200) {
      return {
        general: message || "Failed to create Map / فشل في إنشاء الخريطة",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}

export async function DeleteMapAction(deleteAll: string, selectedField: any) {
  try {
    // Validate required fields
    const { status } = await deleteMap(
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
