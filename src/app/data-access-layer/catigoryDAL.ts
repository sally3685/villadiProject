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
          "You should be Admin to add a category 😔 / يجب أن تكون مشرف حتى تستطيع إضافة صنف 😔 ",
      };
    }
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
            ? "Category with this code already exists / هذا الكود عائد لصنف موجود مسبقا"
            : "Category with this name already exists / هذا الاسم عائد لصنف موجود مسبقا",
      };
    }

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
        message: "Failed to create category / فشل إضافة صنف ",
      };
    }

    revalidatePath(`/${language}/Categories`, "page");
    revalidatePath(`/${language}`, "page");
    revalidatePath(`/${language}/Control/Add/Catigory`, "page");
    revalidatePath(`/${language}/Control/Update/Catigory`, "page");
    revalidatePath(`/${language}/Control/Delete/Catigory`, "page");

    return {
      status: 201,
      message: "Category created successfully ♡ / تم إنشاء الصنف بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const updateCategory = async (category: Category) => {
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
          "You should be Admin to update a category 😔 / يجب أن تكون مشرف حتى تستطيع تعديل صنف 😔 ",
      };
    }
    const existingCategory = await prisma.category.findFirst({
      where: { id: category.id },
    });

    if (!existingCategory) {
      return {
        status: 404,
        message:
          "Category not found, choose the category again to update / لم يتم إيجاد الصنف أعد اختيار الصنف للتعديل",
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
        message: "Failed to update category / فشل تعديل الصنف ",
      };
    }
    revalidatePath(`/en/Categories`, "page");
    revalidatePath(`/ar`, "page");
    revalidatePath("/en/Control/Update/Catigory");
    revalidatePath("/ar/Control/Update/Catigory");
    revalidatePath("/ar/Control/Delete/Catigory");
    return {
      status: 200,
      message: "Category updated successfully ♡ / تم تعديل الصنف بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const getAllCategoriesWithoutLang = cache(async () => {
  try {
    const items = await prisma.category.findMany();

    if (!items || items.length === 0) {
      return {
        status: 404,
        messageEn: "No categories found 😔",
        messageAr: "لم يتم إيجاد أي صنف 😔",
        categories: [],
      };
    }

    return {
      status: 200,
      messageEn: "Categories retrieved successfully ♡",
      messageAr: "تم إحضار الأصناف بنجاح ♡",
      categories: items,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
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
        messageEn: "No categories found 😔",
        messageAr: "لم يتم إيجاد أي صنف 😔",
        categories: [],
      };
    }

    return {
      status: 200,
      messageEn: "Categories retrieved successfully ♡",
      messageAr: "تم إحضار الأصناف بنجاح ♡",
      categories: items,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      categories: [],
    };
  }
});
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
          messageEn: "No categories found 😔",
          messageAr: "لم يتم إيجاد أي صنف 😔",
          categories: null,
        };
      }

      return {
        status: 200,
        messageEn: "Categories retrieved successfully ♡",
        messageAr: "تم إحضار الأصناف بنجاح ♡",
        categories: items,
      };
    } catch (error) {
      return {
        status: 500,
        messageEn: "Internal server error 😔",
        messageAr: "خطأ في المخدم الدخلي 😔",
        categories: null,
      };
    }
  },
);

export const deleteCategory = async (
  deleteAll: boolean,
  category: Category | null,
) => {
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
      revalidatePath(`/en/Categories`, "page");
      revalidatePath(`/ar`, "page");
      revalidatePath("/en/Control/Update/Catigory");
      revalidatePath("/ar/Control/Update/Catigory");
      revalidatePath("/ar/Control/Delete/Catigory");
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
    revalidatePath(`/en/Categories`, "page");
    revalidatePath(`/ar`, "page");
    revalidatePath("/en/Control/Update/Catigory");
    revalidatePath("/ar/Control/Update/Catigory");
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
