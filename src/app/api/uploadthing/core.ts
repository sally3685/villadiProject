import { getSession } from "@/app/lib/session";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req, files }) => {
      // Server-side validation of file types
      for (const file of files) {
        if (file.type !== "image/png") {
          throw new UploadThingError({
            code: "BAD_REQUEST",
            message: "Only PNG images are allowed",
          });
        }
      }

      const auth = await getSession();
      if (auth.status !== 200) {
        throw new UploadThingError({
          code: "BAD_REQUEST",
          message: "failed to get user",
        });
      }

      if (!auth.user) {
        throw new UploadThingError({
          code: "FORBIDDEN",
          message: "you must be signed in to upload images",
        });
      }

      const user = auth.user;
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return {
        name: file.name,
        key: file.key,
        url: file.url,
        uploaderId: metadata.userId,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
