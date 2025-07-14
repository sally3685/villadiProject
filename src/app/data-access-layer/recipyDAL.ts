"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Recipy } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";

export const AddRecipe = async (
  name: string,
  code: string,
  details: string,
  flavorId: string,
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
          "You should be Admin to add a recipe 😔 / يجب أن تكون مشرف حتى تستطيع إضافة وصفة 😔 ",
      };
    }
    const flavor = await prisma.flavor.findFirst({
      where: { id: flavorId, lang: language },
    });

    if (!flavor) {
      return {
        status: 404,
        message:
          "Flavor not found for the selected language / لم يتم إيجاد النكهة بهذه اللغة",
      };
    }

    const existingRecipe = await prisma.recipy.findFirst({
      where: {
        code,
        lang: language,
      },
    });

    if (existingRecipe) {
      return {
        status: 409,
        message:
          "Recipe with this name already exists for the selected flavor / يوجد بالفعل وصفة بهذا الاسم لهذه النكهة",
      };
    }

    const newRecipe = await prisma.recipy.create({
      data: {
        name,
        code,
        detailes: details,
        flavorId,
        lang: language,
      },
    });

    if (!newRecipe) {
      return {
        status: 500,
        message: "Failed to create recipe / فشل في إنشاء وصفة",
      };
    }

    revalidatePath(`/en/Recipes`, "page");
    revalidatePath(`/ar/Recipes`, "page");

    return {
      status: 201,
      message: "Recipe created successfully ♡ / تم إنشاء الوصفة بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const getAllRecipiesWithoutLang = cache(async () => {
  try {
    const recipies = await prisma.recipy.findMany();

    if (!recipies || recipies.length === 0) {
      return {
        status: 404,
        messageEn: "No recipes found 😔",
        messageAr: "لم يتم إيجاد أي وصفة 😔",
        recipies: [],
      };
    }

    return {
      status: 200,
      messageEn: "Recipes retrieved successfully ♡",
      messageAr: "تم إحضار الوصفات بنجاح ♡",
      recipies,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
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
        messageEn: "No recipes found 😔",
        messageAr: "لم يتم إيجاد أي وصفة 😔",
        recipies: [],
      };
    }

    return {
      status: 200,
      messageEn: "Recipes retrieved successfully ♡",
      messageAr: "تم إحضار الوصفات بنجاح ♡",
      recipies,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      recipies: [],
    };
  }
});
export const getAllRecipyById = cache(async (code: string, lang: string) => {
  try {
    const recipie = await prisma.recipy.findFirst({
      where: { code: code, lang: lang },
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
        messageEn: "recipe not found 😔",
        messageAr: "لم يتم إيجاد الوصفة 😔",
        recipie: null,
      };
    }

    return {
      status: 200,
      messageEn: "Recipe retrieved successfully ♡",
      messageAr: "تم إحضار الوصفة بنجاح ♡",
      recipie,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      recipie: null,
    };
  }
});
export const updateRecipe = async (recipe: Recipy) => {
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
          "You should be Admin to add a recipe 😔 / يجب أن تكون مشرف حتى تستطيع إضافة وصفة 😔 ",
      };
    }
    const existingRecipe = await prisma.recipy.findFirst({
      where: { id: recipe.id },
    });

    if (!existingRecipe) {
      return {
        status: 404,
        message:
          "recipe Not found choose the recipe again / لم يتم إيجاد الوصفة اختر الوصفة مجددا",
      };
    }

    const item = await prisma.recipy.update({
      where: { id: recipe.id },
      data: {
        lang: recipe.lang,
        name: recipe.name,
        detailes: recipe.detailes,
        flavorId: recipe.flavorId,
        code: recipe.code,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "Failed to update recipe / فشل في تعديل الوصفة",
      };
    }
    revalidatePath("/en/Control/Update/Recipy");
    revalidatePath("/ar/Control/Update/Recipy");
    return {
      status: 200,
      message: "Recipe updated successfully ♡ / تم تعديل الوصفة بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const deleteRecipe = async (deleteAll: boolean, recipe: Recipy) => {
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
