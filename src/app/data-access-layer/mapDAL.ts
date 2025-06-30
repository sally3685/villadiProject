"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Map } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";

export const AddMap = async (
  name: string,
  details: string,
  img: string,
  top: string[],
  left: string[],
  language: string
) => {
  try {
    const result = await getSession();
    if (result.success === false) {
      return {
        status: 500,
      };
    } else if (result.user?.role !== "Admin") {
      return {
        status: 403,
      };
    }
    // Validate flavor exists
    const map = await prisma.map.findFirst({
      where: { name: name, lang: language },
    });

    if (map) {
      return {
        status: 404,
        message: "map not found for the selected language",
      };
    }

    // Create new recipe
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
        message: "Failed to create recipe",
      };
    }

    // Revalidate relevant paths
    // revalidatePath(`/[lang]/recipes`, "page");
    // revalidatePath(`/[lang]/flavors`, "page");

    return {
      status: 201,
      message: "Map created successfully",
    };
  } catch (error) {
    console.error("Error in AddMap:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const getAllMapWithoutLang = cache(async () => {
  try {
    const maps = await prisma.map.findMany();

    if (!maps || maps.length === 0) {
      return {
        status: 404,
        message: "No maps found",
        maps: [],
      };
    }

    return {
      status: 200,
      message: "maps retrieved successfully",
      maps,
    };
  } catch (error) {
    console.error("Error in getAllmaps:", error);
    return {
      status: 500,
      message: "Internal server error",
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
        message: "No maps found",
        maps: [],
      };
    }

    return {
      status: 200,
      message: "maps retrieved successfully",
      maps,
    };
  } catch (error) {
    console.error("Error in getAllmaps:", error);
    return {
      status: 500,
      message: "Internal server error",
      maps: [],
    };
  }
});
export const updateMap = async (map: Map) => {
  try {
    const result = await getSession();
    if (result.success === false) {
      return {
        status: 500,
      };
    } else if (result.user?.role !== "Admin") {
      return {
        status: 403,
      };
    }
    const existingMap = await prisma.map.findFirst({
      where: { id: map.id },
    });

    if (!existingMap) {
      return {
        status: 404,
        message: "No Maps found",
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
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Control/Update/Map");
    revalidatePath("/ar/Control/Update/Map");
    return {
      status: 200,
      message: "Map updated successfully",
    };
  } catch (error) {
    console.error("Error in update Map:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const deleteMap = async (deleteAll: boolean, map: Map | null) => {
  try {
    const result = await getSession();
    if (result.success === false) {
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
