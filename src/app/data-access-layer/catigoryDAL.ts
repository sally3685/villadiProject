"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Category } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";
import { getAllVideossWithoutLang } from "./videoDAL";
import { getAllProductsWithoutLang } from "./productDAL";
import { deleteUTFiles } from "./uploadthingDAL";

export const AddCategory = async (
  name: string,
  code: string,
  detailes: string,
  img: string,
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
        message: "Un Authorized to add category",
      };
    }
    // Check if category with same code already exists
    const existingCategory = await prisma.category.findFirst({
      where: {
        OR: [
          { code, lang: language },
          { name, lang: language },
        ],
      },
    });

    if (existingCategory) {
      return {
        status: 409,
        message:
          existingCategory.code === code
            ? "Category with this code already exists"
            : "Category with this name already exists",
      };
    }

    // Create new category
    const newCategory = await prisma.category.create({
      data: {
        name,
        code,
        detailes,
        img,
        lang: language,
      },
    });

    if (!newCategory) {
      return {
        status: 500,
        message: "Failed to create category",
      };
    }

    // Revalidate relevant paths
    revalidatePath(`/${language}/Categories`, "page");
    revalidatePath(`/${language}`, "page");

    return {
      status: 201,
      message: "Category created successfully",
    };
  } catch (error) {
    console.error("Error in AddCategory:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export const getAllCategoriesWithoutLang = cache(async () => {
  try {
    const items = await prisma.category.findMany();

    if (!items || items.length === 0) {
      return {
        status: 404,
        message: "No categories found",
        categories: [],
      };
    }

    return {
      status: 200,
      message: "Categories retrieved successfully",
      categories: items,
    };
  } catch (error) {
    console.error("Error in getAllCategory:", error);
    return {
      status: 500,
      message: "Internal server error",
      categories: [],
    };
  }
});

export const getAllCategory = cache(async (language: string) => {
  try {
    const items = await prisma.category.findMany({
      where: { lang: language },
      select: {
        name: true,
        code: true,
        id: true,
        img: true,
      },
    });

    if (!items || items.length === 0) {
      return {
        status: 404,
        message: "No categories found",
        categories: [],
      };
    }

    return {
      status: 200,
      message: "Categories retrieved successfully",
      categories: items,
    };
  } catch (error) {
    console.error("Error in getAllCategory:", error);
    return {
      status: 500,
      message: "Internal server error",
      categories: [],
    };
  }
});
export const updateCategory = async (category: Category) => {
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
    const existingCategory = await prisma.category.findFirst({
      where: { id: category.id },
    });

    if (!existingCategory) {
      return {
        status: 404,
        message: "No categories found",
      };
    }
    const item = await prisma.category.update({
      where: { id: category.id },
      data: {
        lang: category.lang,
        name: category.name,
        img: category.img,
        code: category.code,
        detailes: category.detailes,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Control/Update/Catigory");
    revalidatePath("/ar/Control/Update/Catigory");
    return {
      status: 200,
      message: "Category updated successfully",
    };
  } catch (error) {
    console.error("Error in update category:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const deleteCategory = async (
  deleteAll: boolean,
  category: Category | null
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
      const resVideos = await getAllVideossWithoutLang();
      const resProduct = await getAllProductsWithoutLang();
      const resCat = await getAllCategoriesWithoutLang();
      if (resVideos.status === 500 || resProduct.status === 500)
        return {
          status: 500,
        };
      resVideos.videos.map(async (item) => {
        await deleteUTFiles(item.coverImg.split("/").pop() as string);
      });
      resProduct.products.map(async (item) => {
        await deleteUTFiles(item.img.split("/").pop() as string);
        await deleteUTFiles(item.secondryImg.split("/").pop() as string);
      });
      resCat.categories.map(async (item) => {
        await deleteUTFiles(item.img.split("/").pop() as string);
      });
      item = await prisma.$transaction([
        prisma.video.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
      ]);
    } else {
      if (!category) {
        return {
          status: 500,
        };
      }

      const existingCategory = await prisma.category.findFirst({
        where: { id: category.id },
      });

      if (!existingCategory) {
        return {
          status: 404,
        };
      }

      await deleteUTFiles(existingCategory.img.split("/").pop() as string);
      const products = await prisma.product.findMany({
        where: { categoryId: category.id },
        include: {
          videos: true,
        },
      });

      products.map(async (item) => {
        await deleteUTFiles(item.img.split("/").pop() as string);
        await deleteUTFiles(item.secondryImg.split("/").pop() as string);
        item.videos.map(async (item1) => {
          await deleteUTFiles(item1.coverImg.split("/").pop() as string);
        });
      });
      const productIds = products.map((p) => p.id);

      item = await prisma.$transaction([
        prisma.video.deleteMany({ where: { productId: { in: productIds } } }),

        prisma.product.deleteMany({ where: { categoryId: category.id } }),

        prisma.category.delete({ where: { id: category.id } }),
      ]);

      if (!item) {
        return {
          status: 500,
        };
      }
    }
    revalidatePath("/en/Control/Delete/Catigory");
    revalidatePath("/ar/Control/Delete/Catigory");
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};

export const getAllCodeCategory = cache(
  async (language: string, code: string) => {
    try {
      const items = await prisma.category.findFirst({
        where: { lang: language, code: code },
        include: {
          products: {
            include: {
              flavor: {
                select: {
                  primaryImg: true,
                },
              },
            },
          },
        },
      });

      if (!items) {
        return {
          status: 404,
          message: "No categories found",
          categories: null,
        };
      }

      return {
        status: 200,
        message: "Categories retrieved successfully",
        categories: items,
      };
    } catch (error) {
      console.error("Error in getAllCategory:", error);
      return {
        status: 500,
        message: "Internal server error",
        categories: null,
      };
    }
  }
);
