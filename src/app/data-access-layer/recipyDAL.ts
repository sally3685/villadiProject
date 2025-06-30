"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Recipy } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";

export const AddRecipe = async (
  name: string,
  details: string,
  flavorId: string,
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
    const flavor = await prisma.flavor.findFirst({
      where: { id: flavorId, lang: language },
    });

    if (!flavor) {
      return {
        status: 404,
        message: "Flavor not found for the selected language",
      };
    }

    // Check if recipe with same name already exists
    const existingRecipe = await prisma.recipy.findFirst({
      where: {
        name,
        lang: language,
        flavorId,
      },
    });

    if (existingRecipe) {
      return {
        status: 409,
        message: "Recipe with this name already exists for the selected flavor",
      };
    }

    // Create new recipe
    const newRecipe = await prisma.recipy.create({
      data: {
        name,
        detailes: details,
        flavorId,
        lang: language,
      },
    });

    if (!newRecipe) {
      return {
        status: 500,
        message: "Failed to create recipe",
      };
    }

    // Revalidate relevant paths
    revalidatePath(`/[lang]/recipes`, "page");
    revalidatePath(`/[lang]/flavors`, "page");

    return {
      status: 201,
      message: "Recipe created successfully",
    };
  } catch (error) {
    console.error("Error in AddRecipe:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const getAllRecipiesWithoutLang = cache(async () => {
  try {
    const recipies = await prisma.recipy.findMany();

    if (!recipies || recipies.length === 0) {
      return {
        status: 404,
        message: "No recipies found",
        recipies: [],
      };
    }

    return {
      status: 200,
      message: "recipies retrieved successfully",
      recipies,
    };
  } catch (error) {
    console.error("Error in getAllrecipies:", error);
    return {
      status: 500,
      message: "Internal server error",
      recipies: [],
    };
  }
});
export const getAllRecipies = cache(async (lang: string) => {
  try {
    const recipies = await prisma.recipy.findMany({
      where: { lang: lang },
      include: {
        flavor: true,
        _count: {
          select: {
            votes: true,
          },
        },
      },
    });

    if (!recipies || recipies.length === 0) {
      return {
        status: 404,
        message: "No recipies found",
        recipies: [],
      };
    }

    return {
      status: 200,
      message: "recipies retrieved successfully",
      recipies,
    };
  } catch (error) {
    console.error("Error in getAllrecipies:", error);
    return {
      status: 500,
      message: "Internal server error",
      recipies: [],
    };
  }
});
export const getAllRecipyById = cache(async (id: string) => {
  try {
    const recipie = await prisma.recipy.findFirst({
      where: { id: id },
      include: {
        flavor: true,
        _count: {
          select: {
            votes: true,
          },
        },
      },
    });

    if (!recipie) {
      return {
        status: 404,
        message: "No recipies found",
        recipie: null,
      };
    }

    return {
      status: 200,
      message: "recipies retrieved successfully",
      recipie,
    };
  } catch (error) {
    console.error("Error in getAllrecipies:", error);
    return {
      status: 500,
      message: "Internal server error",
      recipie: null,
    };
  }
});
export const updateRecipe = async (recipe: Recipy) => {
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
    const existingRecipe = await prisma.recipy.findFirst({
      where: { id: recipe.id },
    });

    if (!existingRecipe) {
      return {
        status: 404,
        message: "No products found",
      };
    }

    const item = await prisma.recipy.update({
      where: { id: recipe.id },
      data: {
        lang: recipe.lang,
        name: recipe.name,
        detailes: recipe.detailes,
        flavorId: recipe.flavorId,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Control/Update/Recipy");
    revalidatePath("/ar/Control/Update/Recipy");
    return {
      status: 200,
      message: "Recipe updated successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const deleteRecipe = async (deleteAll: boolean, recipe: Recipy) => {
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
        prisma.voteOnRecipy.deleteMany(),
        prisma.recipy.deleteMany(),
      ]);
    } else {
      if (!recipe) {
        return {
          status: 500,
        };
      }
      const existingRecipe = await prisma.recipy.findFirst({
        where: { id: recipe.id },
      });

      if (!existingRecipe) {
        return {
          status: 404,
        };
      }
      let item;

      item = await prisma.$transaction([
        prisma.voteOnRecipy.deleteMany({ where: { RecipyId: recipe.id } }),

        prisma.recipy.delete({ where: { id: recipe.id } }),
      ]);

      if (!item) {
        return {
          status: 500,
        };
      }
    }
    revalidatePath("/en/Control/Delete/Recipy");
    revalidatePath("/ar/Control/Delete/Recipy");
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};
