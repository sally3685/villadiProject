"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Product } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";
import { getAllVideossWithoutLang } from "./videoDAL";
import { deleteUTFiles } from "./uploadthingDAL";

export const AddProduct = async (
  name: string,
  code: string,
  detailes: string,
  img: string,
  secondryImg: string,
  categoryId: string,
  flavorId: string,
  backgroundColor: string,
  patternColor: string,
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
    // Check if product with same code already exists
    const existingProduct = await prisma.product.findFirst({
      where: { code, lang: language },
    });

    if (existingProduct) {
      return {
        status: 409,
        message: "Product with this code already exists",
      };
    }

    // Validate category exists
    const category = await prisma.category.findFirst({
      where: { id: categoryId, lang: language },
    });

    if (!category) {
      return {
        status: 404,
        message: "Category not found",
      };
    }

    // Validate flavor exists
    const flavor = await prisma.flavor.findFirst({
      where: { id: flavorId, lang: language },
    });

    if (!flavor) {
      return {
        status: 404,
        message: "Flavor not found",
      };
    }

    // Create new product
    const newProduct = await prisma.product.create({
      data: {
        name,
        code,
        detailes,
        img,
        secondryImg,
        categoryId,
        flavorId,
        color: backgroundColor,
        p_color: patternColor,
        lang: language,
      },
    });

    if (!newProduct) {
      return {
        status: 500,
        message: "Failed to create product",
      };
    }

    // Revalidate relevant paths
    // revalidatePath(`/[lang]/categories`, "page");
    // revalidatePath(`/[lang]/products`, "page");

    revalidatePath("/en");
    revalidatePath("/ar");
    return {
      status: 201,
      message: "Product created successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const getAllProducts = cache(async (language: string) => {
  try {
    const products = await prisma.product.findMany({
      where: { lang: language },
      select: {
        name: true,
        id: true,
      },
    });

    if (!products || products.length === 0) {
      return {
        status: 404,
        message: "No products found",
        products: [],
      };
    }

    return {
      status: 200,
      message: "Products retrieved successfully",
      products,
    };
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return {
      status: 500,
      message: "Internal server error",
      products: [],
    };
  }
});
export const getProdsWithFlavs = cache(async (lang: string) => {
  try {
    const products = await prisma.product.findMany({
      where: { lang: lang },
      include: {
        flavor: true,
        category: true,
      },
    });

    if (!products || products.length === 0) {
      return {
        status: 404,
        message: "No products found",
        products: [],
      };
    }

    return {
      status: 200,
      message: "Products retrieved successfully",
      products,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
      products: [],
    };
  }
});
export const getAllProductsWithoutLang = cache(async () => {
  try {
    const products = await prisma.product.findMany();

    if (!products || products.length === 0) {
      return {
        status: 404,
        message: "No products found",
        products: [],
      };
    }

    return {
      status: 200,
      message: "Products retrieved successfully",
      products,
    };
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return {
      status: 500,
      message: "Internal server error",
      products: [],
    };
  }
});
export const updateProduct = async (product: Product) => {
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
    const existingProduct = await prisma.product.findFirst({
      where: { id: product.id },
    });

    if (!existingProduct) {
      return {
        status: 404,
        message: "No products found",
      };
    }

    const item = await prisma.product.update({
      where: { id: product.id },
      data: {
        lang: product.lang,
        name: product.name,
        img: product.img,
        secondryImg: product.secondryImg,
        code: product.code,
        detailes: product.detailes,
        color: product.color,
        p_color: product.p_color,
        categoryId: product.categoryId,
        flavorId: product.flavorId,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Control/Update/Product");
    revalidatePath("/ar/Control/Update/Product");
    revalidatePath("/en");
    revalidatePath("/ar");
    return {
      status: 200,
      message: "Product updated successfully",
    };
  } catch (error) {
    console.error("Error in update Product:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const deleteProduct = async (
  deleteAll: boolean,
  product: Product | null
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
      if (resVideos.status === 500 || resProduct.status === 500) {
        return {
          status: 500,
        };
      }
      resVideos.videos.map(async (item) => {
        await deleteUTFiles(item.coverImg.split("/").pop() as string);
      });
      resProduct.products.map(async (item) => {
        await deleteUTFiles(item.img.split("/").pop() as string);
        await deleteUTFiles(item.secondryImg.split("/").pop() as string);
      });
      item = await prisma.$transaction([
        prisma.video.deleteMany(),
        prisma.product.deleteMany(),
      ]);
    } else {
      if (!product) {
        return {
          status: 500,
        };
      }
      const existingProduct = await prisma.product.findFirst({
        where: { id: product.id },
      });

      if (!existingProduct) {
        return {
          status: 404,
        };
      }

      await deleteUTFiles(existingProduct.img.split("/").pop() as string);
      await deleteUTFiles(
        existingProduct.secondryImg.split("/").pop() as string
      );
      const videos = await prisma.video.findMany({
        where: {
          productId: product.id,
        },
      });
      videos.map(async (item) => {
        await deleteUTFiles(item.coverImg.split("/").pop() as string);
      });
      item = await prisma.$transaction([
        prisma.video.deleteMany({ where: { productId: product.id } }),

        prisma.product.delete({ where: { id: product.id } }),
      ]);

      if (!item) {
        return {
          status: 500,
        };
      }
    }
    revalidatePath("/en/Control/Delete/Product");
    revalidatePath("/ar/Control/Delete/Product");
    revalidatePath("/en");
    revalidatePath("/ar");
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};
export const getProdsByCode = cache(async (code: string, lang: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { code: code, lang: lang },
      include: {
        flavor: true,
        category: true,
        videos: true,
      },
    });

    if (!product) {
      return {
        status: 404,
        message: "No products found",
        product: null,
      };
    }

    return {
      status: 200,
      message: "Products retrieved successfully",
      product,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
      product: null,
    };
  }
});

export const getAllProdCats = cache(async (code: string, lang: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { code: code, lang: lang },
    });

    if (!product) {
      return {
        status: 404,
        message: "No products found",
        products: null,
      };
    }
    const cats = await prisma.category.findFirst({
      where: { id: product.categoryId },
      include: {
        products: {
          include: {
            flavor: true,

            category: {
              select: {
                id: true,
                code: true,
                name: true,
              },
            },
          },
        },
      },
    });
    if (!cats) {
      return {
        status: 404,
        message: "No products found",
        products: null,
      };
    }
    return {
      status: 200,
      message: "Products retrieved successfully",
      products: cats.products,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
      products: null,
    };
  }
});
