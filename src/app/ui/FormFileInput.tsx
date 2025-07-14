"use client";
import { UploadDropzone } from "./uploadthing";
import Image from "next/image";
import { deleteUTFiles } from "../data-access-layer/uploadthingDAL";
import { controlDictionary } from "./ControlForms/types";

interface FormFileInputProps {
  label: string;
  imgName: string;
  onAction: (value: boolean) => void;
  setFormDataf: (value: any) => void;
  formDataf: any;
  error?: string | undefined;
  t: controlDictionary;
  tempLang?: string | null;
  toast: any;
  alt: string;
  className?: any;
}

export const FormFileInput = ({
  label,
  imgName,
  setFormDataf,
  formDataf,
  onAction,
  error,
  t,
  toast,
  alt,
  className,
}: FormFileInputProps) => {
  return (
    <div className={`col-span-full`}>
      <label className="block text-sm font-medium text-black lg:text-lg">
        {label}
      </label>
      <div
        className={`mt-2 flex flex-col justify-center rounded-lg border border-dashed ${
          error ? "border-red-500" : "border-gray-900/25"
        } px-6 py-10`}
      >
        {imgName && (
          <div className={`flex w-full flex-col gap-2 ${className}`}>
            <p className="text:sm font-semibold lg:text-lg">
              {t.imageUpload.instruction}
            </p>
            <p className="text:xs lg:text-sm">{t.imageUpload.warning}</p>
            <Image
              src={imgName}
              width={500}
              height={200}
              alt={alt}
              className="h-[200px] cursor-pointer object-contain"
              onClick={async () => {
                onAction(true);
                const res = await deleteUTFiles(formDataf.key);
                if (res.status === 200) {
                  toast.success(t.imageUpload.deleted);
                  setFormDataf({ ...formDataf, img: "", key: "" });
                } else toast.error(t.imageUpload.failed);
                if (res) onAction(false);
              }}
            ></Image>
          </div>
        )}
        {imgName === "" && (
          <div className={`flex w-full flex-col gap-2`}>
            <p className="text:xs lg:text-sm">{t.imageUpload.validate}</p>
            <UploadDropzone
              endpoint="imageUploader"
              appearance={{
                uploadIcon: "size-[50px] text-[#9ca2b0]",
                button:
                  "group relative mt-4 flex h-10 w-36 items-center justify-center overflow-hidden rounded-md border-none text-base text-white after:absolute after:left-0 after:h-full after:w-[var(--progress-width)] after:bg-blue-600 after:transition-[width] after:duration-500 after:content-[''] focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 disabled:pointer-events-none data-[state=disabled]:cursor-not-allowed data-[state=readying]:cursor-not-allowed data-[state=disabled]:bg-blue-400 data-[state=ready]:bg-blue-600 data-[state=readying]:bg-blue-400 data-[state=uploading]:bg-blue-400 bg-[#7abc43] p-3",
              }}
              onClientUploadComplete={(res) => {
                const file = res[0];
                setFormDataf({
                  ...formDataf,
                  img: file.ufsUrl,
                  key: file.key,
                });
                onAction(false);
                toast.success(t.imageUpload.uploaded);
              }}
              onUploadBegin={() => {
                onAction(true);
              }}
              onUploadError={(error: Error) => {
                toast.error(error.message);
              }}
            />
          </div>
        )}
        {error && <p className="mt-3 text-sm/6 text-red-600">{error}</p>}
      </div>
    </div>
  );
};
