"server only";
import prisma from "../lib/db";
import { cache } from "react";
import { social, Video } from "../../../prisma/generated/prisma";
import { revalidatePath } from "next/cache";
import { getSession } from "../lib/session";
import { deleteUTFiles } from "./uploadthingDAL";

export const AddVideo = async (
  name: string,
  coverImg: string,
  embededLink: string,
  selectedProduct: string,
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
          "You should be Admin to add a video 😔 / يجب أن تكون مشرف حتى تستطيع إضافة فيديو 😔 ",
      };
    }
    const existingVideo = await prisma.video.findFirst({
      where: {
        embededLink: embededLink,
      },
    });
    if (existingVideo) {
      return {
        status: 409,
        message:
          "Video with this embeded linke already exists for the selected video / يوجد بالفعل فيديو بنفس الرابط المضمن ",
      };
    }

    const newVideo = await prisma.video.create({
      data: {
        lang: language,
        embededLink: embededLink,
        name: name,
        productId: selectedProduct,
        coverImg: coverImg,
      },
    });

    if (!newVideo) {
      return {
        status: 500,
        message: "Failed to create video / فشل في إنشاء الفيديو",
      };
    }

    revalidatePath(`/en/Videos`, "page");
    revalidatePath(`/ar/Videos`, "page");

    return {
      status: 201,
      message: "Video created successfully ♡ / تم إنشاء الفيديو بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};

export const getAllVideossWithoutLang = cache(async () => {
  try {
    const videos = await prisma.video.findMany();

    if (!videos || videos.length === 0) {
      return {
        status: 404,
        messageEn: "No videos found 😔",
        messageAr: "لم يتم إيجاد أي فيديو 😔",
        videos: [],
      };
    }

    return {
      status: 200,
      messageEn: "Videos retrieved successfully ♡",
      messageAr: "تم إحضار الفيديوهات بنجاح ♡",
      videos,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      videos: [],
    };
  }
});
export const getAllVideosWithProd = cache(async (lang: string) => {
  try {
    const videos = await prisma.video.findMany({
      where: { lang: lang },
      include: {
        product: {
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

    if (!videos || videos.length === 0) {
      return {
        status: 404,
        messageEn: "No videos found 😔",
        messageAr: "لم يتم إيجاد أي فيديو 😔",
        videos: [],
      };
    }

    return {
      status: 200,
      messageEn: "Videos retrieved successfully ♡",
      messageAr: "تم إحضار الفيديوهات بنجاح ♡",
      videos,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      videos: [],
    };
  }
});
export const updateVideo = async (video: Video) => {
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
          "You should be Admin to update a video 😔 / يجب أن تكون مشرف حتى تستطيع تعديل فيديو 😔 ",
      };
    }
    const existingVideo = await prisma.video.findFirst({
      where: { id: video.id },
    });
    if (!existingVideo) {
      return {
        status: 404,
        message:
          "Video not found choose the video again  / لم يتم إيجاد الفيديو اختر الفيديو مجددا",
      };
    }

    const item = await prisma.video.update({
      where: { id: video.id },
      data: {
        lang: video.lang,
        name: video.name,
        embededLink: video.embededLink,
        productId: video.productId,
        coverImg: video.coverImg,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "Failed to update video / فشل في تعديل الفيديو",
      };
    }
    revalidatePath("/en/Control/Update/Video");
    revalidatePath("/ar/Control/Update/Video");
    revalidatePath("/en/Videos");
    revalidatePath("/ar/Videos");
    return {
      status: 200,
      message: "Video updated successfully ♡ / تم تعديل الفيديو بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const updateSocial = async (itemSocial: social) => {
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
          "You should be Admin to update a social link 😔 / يجب أن تكون مشرف حتى تستطيع تعديل رابط قناة تواصل 😔 ",
      };
    }
    const existingSocial = await prisma.social.findFirst({
      where: { id: itemSocial.id },
    });
    if (!existingSocial) {
      return {
        status: 404,
        message:
          "Social link not found choose the social again / لم يتم إيجاد رابط قناة التواصل اختر التطبيق مجددا",
      };
    }

    const item = await prisma.social.update({
      where: { id: itemSocial.id },
      data: {
        name: itemSocial.name,
        embededlink: itemSocial.embededlink,
        channelLink: itemSocial.channelLink,
      },
    });

    if (!item) {
      return {
        status: 500,
        message: "Failed to update social link / فشل في تعديل رابط الفيديو",
      };
    }
    revalidatePath("/en/Control/Update/Social");
    revalidatePath("/ar/Control/Update/Social");
    return {
      status: 200,
      message:
        "Social link updated successfully ♡ / تم تعديل روابط التواصل الاجتماعي بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
};
export const deleteVideo = async (deleteAll: boolean, video: Video | null) => {
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
      const videoss = await getAllVideossWithoutLang();
      videoss.videos.map(async (item) => {
        await deleteUTFiles(item.coverImg);
      });
      item = await prisma.video.deleteMany();
    } else {
      if (!video) {
        return {
          status: 500,
        };
      }
      const existingVideo = await prisma.video.findFirst({
        where: { id: video.id },
      });

      if (!existingVideo) {
        return {
          status: 404,
        };
      }
      const res = await deleteUTFiles(existingVideo.coverImg);
      item = await prisma.$transaction([
        prisma.video.delete({
          where: { id: video.id },
        }),
      ]);

      if (!item) {
        return {
          status: 500,
        };
      }
    }
    revalidatePath("/en/Control/Delete/Video");
    revalidatePath("/ar/Control/Delete/Video");
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};

export const getAllSocialWithoutLang = cache(async () => {
  try {
    const socials = await prisma.social.findMany();

    if (!socials || socials.length === 0) {
      return {
        status: 404,
        messageEn: "No socials found 😔",
        messageAr: "لم يتم إيجاد رابط تواصل 😔",
        socials: [],
      };
    }

    return {
      status: 200,
      messageEn: "Sicials retrieved successfully ♡",
      messageAr: "تم إحضار روابط التواصل الاجتماعي بنجاح ♡",
      socials,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في المخدم الدخلي 😔",
      socials: [],
    };
  }
});
