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
    const existingVideo = await prisma.video.findFirst({
      where: {
        embededLink: embededLink,
      },
    });
    if (existingVideo) {
      return {
        status: 409,
        message:
          "Video with this embeded linke already exists for the selected video",
      };
    }

    // Create new recipe
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
        message: "Failed to create video",
      };
    }

    // Revalidate relevant paths
    // revalidatePath(`/[lang]/recipes`, "page");
    // revalidatePath(`/[lang]/flavors`, "page");

    return {
      status: 201,
      message: "Video created successfully",
    };
  } catch (error) {
    console.error("Error in AddVideo:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export const getAllVideossWithoutLang = cache(async () => {
  try {
    const videos = await prisma.video.findMany();

    if (!videos || videos.length === 0) {
      return {
        status: 404,
        message: "No videos found",
        videos: [],
      };
    }

    return {
      status: 200,
      message: "videos retrieved successfully",
      videos,
    };
  } catch (error) {
    console.error("Error in getAllvideos:", error);
    return {
      status: 500,
      message: "Internal server error",
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
        message: "No videos found",
        videos: [],
      };
    }

    return {
      status: 200,
      message: "videos retrieved successfully",
      videos,
    };
  } catch (error) {
    console.error("Error in getAllvideos:", error);
    return {
      status: 500,
      message: "Internal server error",
      videos: [],
    };
  }
});
export const updateVideo = async (video: Video) => {
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
    const existingVideo = await prisma.video.findFirst({
      where: { id: video.id },
    });
    if (!existingVideo) {
      return {
        status: 404,
        message: "No videos found",
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
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Control/Update/Video");
    revalidatePath("/ar/Control/Update/Video");
    return {
      status: 200,
      message: "Video updated successfully",
    };
  } catch (error) {
    console.error("Error in update Video:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const updateSocial = async (itemSocial: social) => {
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
    const existingSocial = await prisma.social.findFirst({
      where: { id: itemSocial.id },
    });
    if (!existingSocial) {
      return {
        status: 404,
        message: "No social found",
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
        message: "couldnt update",
      };
    }
    revalidatePath("/en/Control/Update/Social");
    revalidatePath("/ar/Control/Update/Social");
    return {
      status: 200,
      message: "Social updated successfully",
    };
  } catch (error) {
    console.error("Error in update Social:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const deleteVideo = async (deleteAll: boolean, video: Video | null) => {
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
      const videoss = await getAllVideossWithoutLang();
      if (videoss.status !== 200)
        return {
          status: 500,
        };
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
        message: "No socials found",
        socials: [],
      };
    }

    return {
      status: 200,
      message: "socials retrieved successfully",
      socials,
    };
  } catch (error) {
    console.error("Error in getAllsocials:", error);
    return {
      status: 500,
      message: "Internal server error",
      socials: [],
    };
  }
});
