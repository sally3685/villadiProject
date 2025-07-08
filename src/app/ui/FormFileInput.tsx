"use client";
import { UploadDropzone } from "./uploadthing";
import Image from "next/image";
import { deleteUTFiles } from "../data-access-layer/uploadthingDAL";

interface FormFileInputProps {
  label: string;
  imgName: string;
  onAction: (value: boolean) => void;
  setFormDataf: (value: any) => void;
  formDataf: any;
  error?: string[] | undefined;
  lang?: string;
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
  lang,
  toast,
  alt,
  className,
}: FormFileInputProps) => {
  return (
    <div className={`col-span-full `}>
      <label className="block text-sm lg:text-lg font-medium text-black">
        {label}
      </label>
      <div
        className={`mt-2 flex justify-center flex-col rounded-lg border border-dashed ${
          error ? "border-red-500" : "border-gray-900/25"
        } px-6 py-10`}
      >
        {imgName && (
          <div className={`flex flex-col gap-2 w-full ${className}`}>
            <p className="text:sm lg:text-lg font-semibold">
              {lang === "en"
                ? "click on the image to delete and reupload"
                : "اضغط على الصورة لحذفها وإعادة الادخال"}
            </p>
            <p className="text:xs lg:text-sm ">
              {lang === "en"
                ? "if image is not here it is a network error . you can still click and delete it "
                : "اذا لم تظهر الصورة فهي مشكلة بالانترنت لازال بامكانك الضغط لحذفها"}
            </p>
            <Image
              src={imgName}
              width={500}
              height={200}
              alt={alt}
              className="object-contain cursor-pointer h-[200px]"
              onClick={async () => {
                onAction(true);
                const res = await deleteUTFiles(formDataf.key);
                if (res.status === 200) {
                  toast.success(
                    lang === "en" ? "image deleted" : "تم حذف الصورة"
                  );
                  setFormDataf({ ...formDataf, img: "", key: "" });
                } else
                  toast.error(lang === "en" ? "deletion failed" : "فشل الحذف");
                if (res) onAction(false);
              }}
            ></Image>
          </div>
        )}
        {imgName === "" && (
          <div className={`flex flex-col gap-2 w-full `}>
            <p className="text:xs lg:text-sm ">
              {lang === "en"
                ? "image must be png ,has no background and max size of 4MB "
                : "يحب أن تكون الصورة بصيغة png وبحجم أقصاه 4MB"}
            </p>
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
  // <div className={`col-span-full ${className}`}>
  //   <label
  //     htmlFor={id}
  //     className="block text-sm lg:text-lg font-medium text-black"
  //   >
  //     {label}
  //   </label>
  //   <div
  //     className={`mt-2 flex justify-center rounded-lg border border-dashed ${
  //       error ? "border-red-500" : "border-gray-900/25"
  //     } px-6 py-10`}
  //   >
  //     <div className="text-center">
  //       <svg
  //         className="mx-auto size-12 text-gray-300"
  //         viewBox="0 0 24 24"
  //         fill="currentColor"
  //       >
  //         <path
  //           fillRule="evenodd"
  //           d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //       <div className="mt-4 flex text-sm/6 text-gray-600">
  //         <label
  //           htmlFor={id}
  //           className="relative text-center w-full cursor-pointer rounded-md bg-white font-semibold text-[#7abc43] focus-within:ring-2 focus-within:ring-[#7abc43] focus-within:ring-offset-2 focus-within:outline-hidden hover:text-[#7abc43]"
  //         >
  //           <span>{addText}</span>
  //           <input
  //             id={id}
  //             name={id}
  //             type="file"
  //             className="w-full h-full sr-only"
  //             required={required}
  //             onChange={(e) =>
  //               onChange(e.target.value.replace(/^.*[\\\/]/, ""))
  //             }
  //           />
  //           {showLanguageInput && (
  //             <input
  //               id="language"
  //               name="language"
  //               type="text"
  //               hidden
  //               value={tempLang ? tempLang : lang}
  //               onChange={() => {
  //                 if (tempLang) return tempLang;
  //                 else return lang;
  //               }}
  //             />
  //           )}
  //         </label>
  //       </div>
  //       <p className="text-xs/5 text-gray-600">
  //         <span className="text-xs/5 text-[#7abc43]">{selectedText}</span>
  //         {value.replace("\\", "/").split("/")}
  //       </p>
  //       <p className="text-xs/5 text-gray-600">{detailsText}</p>
  //     </div>
  //   </div>
  //   {error && <p className="mt-3 text-sm/6 text-red-600">{error}</p>}
  // </div>
};
