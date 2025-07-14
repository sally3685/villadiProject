"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Map } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";
import { deleteUTFiles } from "./uploadthingDAL";

export const AddMap = async (
  name: string,
  details: string,
  img: string,
  top: string[],
  left: string[],
  language: string,
) => {
  try {
    const session = await getSession();
    if (session.status !== 200) {
      return {
        status: session.status,
        message: session.messageEn + " / " + session.messageAr,
      };
    } else if (session.user?.role !== "Admin") {
      return {
        status: 403,
        message:
          "You should be Admin to add a map 😔 / يجب أن تكون مشرف حتى تستطيع إضافة خريطة 😔 ",
      };
    }
    const map = await prisma.map.findFirst({
      where: { name: name, lang: language },
    });

    if (map) {
      return {
        status: 409,
        message:
          "Map with this name already exists / يوجد بالفعل خريطة بهذا الاسم ",
      };
    }

    const newMap = await prisma.map.create({
      data: {
        name,
        details: details,
        img: img,
        top: top,
        left: left,
        lang: language,
      },
    });

    if (!newMap) {
      return {
        status: 500,
        message: "Failed to create a map / فشل إضافة خريطة",
      };
    }
    revalidatePath(`/en/Maps`, "page");
    revalidatePath(`/ar/Maps`, "page");

    return {
      status: 201,
      message: "Map created successfully ♡ / تم إنشاء الخريطة بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const getAllMapWithoutLang = cache(async () => {
  try {
    const maps = await prisma.map.findMany();

    if (!maps || maps.length === 0) {
      return {
        status: 404,
        messageEn: "No maps found 😔",
        messageAr: "لم يتم إيجاد أي خريطة 😔",
        maps: [],
      };
    }

    return {
      status: 200,
      messageEn: "Maps retrieved successfully ♡",
      messageAr: "تم إحضار الخرائط بنجاح ♡",
      maps,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      maps: [],
    };
  }
});
export const getAllMaps = cache(async (lang: string) => {
  try {
    const maps = await prisma.map.findMany({ where: { lang: lang } });

    if (!maps || maps.length === 0) {
      return {
        status: 404,
        messageEn: "No maps found 😔",
        messageAr: "لم يتم إيجاد أي خريطة 😔",
        maps: [],
      };
    }

    return {
      status: 200,
      messageEn: "Maps retrieved successfully ♡",
      messageAr: "تم إحضار الخرائط بنجاح ♡",
      maps,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      maps: [],
    };
  }
});
export const updateMap = async (map: Map) => {
  try {
    const session = await getSession();
    if (session.status !== 200) {
      return {
        status: session.status,
        message: session.messageEn + " / " + session.messageAr,
      };
    } else if (session.user?.role !== "Admin") {
      return {
        status: 403,
        message:
          "You should be Admin to update a map 😔 / يجب أن تكون مشرف حتى تستطيع تعديل خريطة 😔 ",
      };
    }
    const existingMap = await prisma.map.findFirst({
      where: { id: map.id },
    });

    if (!existingMap) {
      return {
        status: 404,
        message:
          "map Not found choose the map again / لم يتم إيجاد الخريطة أعد اختيار الخريطة",
      };
    }

    const item = await prisma.map.update({
      where: { id: map.id },
      data: {
        name: map.name,
        details: map.details,
        img: map.img,
        top: map.top,
        left: map.left,
        lang: map.lang,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "Failed to update map / فشل في تعديل الخريطة",
      };
    }
    revalidatePath("/en/Control/Update/Map");
    revalidatePath("/ar/Control/Update/Map");
    return {
      status: 200,
      message: "Map updated successfully ♡ / تم تعديل الخريطة بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const deleteMap = async (deleteAll: boolean, map: Map | null) => {
  try {
    const result = await getSession();
    if (result.status !== 200) {
      return {
        status: 500,
      };
    } else if (result.user?.role !== "Admin") {
      return {
        status: 403,
      };
    }
    let item;
    if (deleteAll) {
      const maps = await getAllMapWithoutLang();

      maps.maps.map(async (item) => {
        await deleteUTFiles(item.img);
      });
      item = await prisma.map.deleteMany();
    } else {
      if (!map) {
        return {
          status: 500,
        };
      }
      const existingMap = await prisma.map.findFirst({
        where: { id: map.id },
      });

      if (!existingMap) {
        return {
          status: 404,
        };
      }
      let item;

      await deleteUTFiles(existingMap.img);
      item = await prisma.map.delete({ where: { id: map.id } });

      if (!item) {
        return {
          status: 500,
        };
      }
    }

    revalidatePath("/en/Control/Delete/Map");
    revalidatePath("/ar/Control/Delete/Map");
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};
