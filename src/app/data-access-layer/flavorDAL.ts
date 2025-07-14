"server only";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { cache } from "react";
import { Flavor } from "../../../prisma/generated/prisma";
import { getSession } from "../lib/session";
import { getAllVideossWithoutLang } from "./videoDAL";
import { getAllProductsWithoutLang } from "./productDAL";
import { deleteUTFiles } from "./uploadthingDAL";

export const AddFlavor = async (
  name: string,
  primaryImg: string,
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
          "You should be Admin to add a flavor 😔 / يجب أن تكون مشرف حتى تستطيع إضافة نكهة 😔 ",
      };
    }
    const existingFlavor = await prisma.flavor.findFirst({
      where: {
        name,
        lang: language,
      },
    });

    if (existingFlavor) {
      return {
        status: 409,
        message:
          "Flavor with this name already exists / يوجد بالفعل نكهة بهذا الاسم ",
      };
    }

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
        message: "Failed to create flavor / فشل إضافة نكهة",
      };
    }

    revalidatePath(`/en/flavors`, "page");
    revalidatePath(`/ar/flavors`, "page");

    return {
      status: 201,
      message: "Flavor created successfully ♡ / تم إنشاء النكهة بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const updateFlavor = async (flavor: Flavor) => {
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
          "You should be Admin to update a flavor 😔 / يجب أن تكون مشرف حتى تستطيع تعديل النكهة 😔 ",
      };
    }
    const existingFlavor = await prisma.flavor.findFirst({
      where: { id: flavor.id },
    });

    if (!existingFlavor) {
      return {
        status: 404,
        message:
          "flavor Not found choose the flavor again / لم يتم إيجاد النكهة اختر النكهة مجددا",
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
        message: "Failed to update flavor / فشل في تعديل النكهة",
      };
    }
    revalidatePath("/en/Control/Update/Flavor");
    revalidatePath("/ar/Control/Update/Flavor");
    return {
      status: 200,
      message: "Flavor updated successfully ♡ / تم تعديل النكهة بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
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
        messageEn: "No flavors found 😔",
        messageAr: "لم يتم إيجاد أي نكهة 😔",
        flavors: [],
      };
    }

    return {
      status: 200,

      messageEn: "Flavors retrieved successfully ♡",
      messageAr: "تم إحضار النكهات بنجاح ♡",
      flavors,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
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
        messageEn: "No flavors found 😔",
        messageAr: "لم يتم إيجاد أي نكهة 😔",
        flavors: [],
      };
    }

    return {
      status: 200,
      messageEn: "Flavors retrieved successfully ♡",
      messageAr: "تم إحضار النكهات بنجاح ♡",
      flavors,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      flavors: [],
    };
  }
});

export const deleteFlavor = async (
  deleteAll: boolean,
  flavor: Flavor | null,
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
      const resFlav = await getAllFlavorsWithoutLang();
      if (
        resVideos.status === 500 ||
        resProduct.status === 500 ||
        resFlav.status === 500
      )
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
      resFlav.flavors.map(async (item) => {
        await deleteUTFiles(item.primaryImg.split("/").pop() as string);
      });
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
      const existingFlavor = await prisma.flavor.findFirst({
        where: { id: flavor.id },
      });

      if (!existingFlavor) {
        return {
          status: 404,
        };
      }
      await deleteUTFiles(
        existingFlavor?.primaryImg.split("/").pop() as string,
      );
      const [products, recipies] = await Promise.all([
        prisma.product.findMany({
          where: { flavorId: flavor.id },
          include: {
            videos: true,
          },
        }),
        prisma.recipy.findMany({
          where: { flavorId: flavor.id },
          select: { id: true },
        }),
      ]);

      products.map(async (item) => {
        await deleteUTFiles(item.img.split("/").pop() as string);
        await deleteUTFiles(item.secondryImg.split("/").pop() as string);
      });
      const productIds = products.map((p) => p.id);
      const recipyIds = recipies.map((r) => r.id);
      const videos = await prisma.video.findMany({
        where: {
          productId: { in: productIds },
        },
      });
      videos.map(async (item) => {
        await deleteUTFiles(item.coverImg.split("/").pop() as string);
      });
      item = await prisma.$transaction([
        prisma.video.deleteMany({
          where: { productId: { in: productIds } },
        }),
        prisma.product.deleteMany({
          where: { id: { in: productIds } },
        }),
        prisma.voteOnRecipy.deleteMany({
          where: { RecipyId: { in: recipyIds } },
        }),
        prisma.recipy.deleteMany({
          where: { id: { in: recipyIds } },
        }),
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
