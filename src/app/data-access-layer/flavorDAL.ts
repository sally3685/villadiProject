"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Flavor } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";

export const AddFlavor = async (
  name: string,
  primaryImg: string,
  language: string
) => {
  try {
    const result = await getSession();
    if (result.success === false) {
      return {
        status: 500,
        message: "internal server error",
      };
    } else if (result.user?.role !== "Admin") {
      return {
        status: 403,
        message: "Un Authorized to add flavor",
      };
    }
    // Check if flavor with same name already exists
    const existingFlavor = await prisma.flavor.findFirst({
      where: {
        name,
        lang: language,
      },
    });

    if (existingFlavor) {
      return {
        status: 409,
        message: "Flavor with this name already exists",
      };
    }

    // Create new flavor
    const newFlavor = await prisma.flavor.create({
      data: {
        name,
        primaryImg,
        lang: language,
      },
    });

    if (!newFlavor) {
      return {
        status: 500,
        message: "Failed to create flavor",
      };
    }

    // Revalidate relevant paths
    revalidatePath(`/[lang]/flavors`, "page");
    revalidatePath(`/[lang]`, "page");

    return {
      status: 201,
      message: "Flavor created successfully",
    };
  } catch (error) {
    console.error("Error in AddFlavor:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export const getAllFlavor = cache(async (language: string) => {
  try {
    const flavors = await prisma.flavor.findMany({
      where: { lang: language },
      select: {
        name: true,
        id: true,
        primaryImg: true,
      },
    });

    if (!flavors || flavors.length === 0) {
      return {
        status: 404,
        message: "No flavors found",
        flavors: [],
      };
    }

    return {
      status: 200,
      message: "Flavors retrieved successfully",
      flavors,
    };
  } catch (error) {
    console.error("Error in getAllFlavor:", error);
    return {
      status: 500,
      message: "Internal server error",
      flavors: [],
    };
  }
});

export const getAllFlavorsWithoutLang = cache(async () => {
  try {
    const flavors = await prisma.flavor.findMany();

    if (!flavors || flavors.length === 0) {
      return {
        status: 404,
        message: "No flavors found",
        flavors: [],
      };
    }

    return {
      status: 200,
      message: "Flavors retrieved successfully",
      flavors,
    };
  } catch (error) {
    console.error("Error in getAllFlavor:", error);
    return {
      status: 500,
      message: "Internal server error",
      flavors: [],
    };
  }
});
export const updateFlavor = async (flavor: Flavor) => {
  try {
    const result = await getSession();
    if (result.success === false) {
      return {
        status: 500,
        message: "internal server error",
      };
    } else if (result.user?.role !== "Admin") {
      return {
        status: 403,
        message: "Un Authorized to update flavor",
      };
    }
    const existingFlavor = await prisma.flavor.findFirst({
      where: { id: flavor.id },
    });

    if (!existingFlavor) {
      return {
        status: 404,
        message: "No flavor found",
      };
    }

    const item = await prisma.flavor.update({
      where: { id: flavor.id },
      data: {
        lang: flavor.lang,
        name: flavor.name,
        primaryImg: flavor.primaryImg,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Control/Update/Flavor");
    revalidatePath("/ar/Control/Update/Flavor");
    return {
      status: 200,
      message: "Flavor updated successfully",
    };
  } catch (error) {
    console.error("Error in update Flavor:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const deleteFlavor = async (
  deleteAll: boolean,
  flavor: Flavor | null
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
    let item;
    if (deleteAll) {
      item = await prisma.$transaction([
        prisma.video.deleteMany(),
        prisma.product.deleteMany(),
        prisma.voteOnRecipy.deleteMany(),
        prisma.recipy.deleteMany(),
        prisma.flavor.deleteMany(),
      ]);
    } else {
      if (!flavor) {
        return {
          status: 500,
        };
      }
      //complete this to delete one flavor
      const existingFlavor = await prisma.flavor.findFirst({
        where: { id: flavor.id },
      });

      if (!existingFlavor) {
        return {
          status: 404,
        };
      }
      // Get all related data first
      const [products, recipies] = await Promise.all([
        prisma.product.findMany({
          where: { flavorId: flavor.id },
          select: { id: true },
        }),
        prisma.recipy.findMany({
          where: { flavorId: flavor.id },
          select: { id: true },
        }),
      ]);

      const productIds = products.map((p) => p.id);
      const recipyIds = recipies.map((r) => r.id);

      item = await prisma.$transaction([
        // Delete videos for all products with this flavor
        prisma.video.deleteMany({
          where: { productId: { in: productIds } },
        }),
        // Delete all products with this flavor
        prisma.product.deleteMany({
          where: { id: { in: productIds } },
        }),
        // Delete all votes on recipes with this flavor
        prisma.voteOnRecipy.deleteMany({
          where: { RecipyId: { in: recipyIds } },
        }),
        // Delete all recipes with this flavor
        prisma.recipy.deleteMany({
          where: { id: { in: recipyIds } },
        }),
        // Finally delete the flavor itself
        prisma.flavor.delete({
          where: { id: flavor.id },
        }),
      ]);

      if (!item) {
        return {
          status: 500,
        };
      }
    }
    revalidatePath("/en/Control/Delete/Flavor");
    revalidatePath("/ar/Control/Delete/Flavor");
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};
