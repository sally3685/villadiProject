import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { controlDictionary } from "./types";
import { deleteUTFiles } from "@/app/data-access-layer/uploadthingDAL";
import { toast } from "react-toastify";

interface ImageData {
  img: string;
  key: string;
  [key: string]: any;
}

const DeleteImg = <T extends ImageData>({
  t,
  formDataf,
  setFormDataf,
  setAction,
  setImgDelete,
  alt,
}: {
  t: controlDictionary;
  setAction: Dispatch<SetStateAction<boolean>>;
  setFormDataf: Dispatch<SetStateAction<T>>;
  formDataf: T;
  setImgDelete: Dispatch<SetStateAction<boolean>>;
  alt: string;
}) => {
  const handleDelete = async () => {
    setAction(true);
    const key = formDataf.img.split("/").pop();
    const res = await deleteUTFiles(key as string);
    if (res.status === 200) {
      t.imageUpload.deleted;
      setFormDataf({ ...formDataf, img: "", key: "" });
      setImgDelete(true);
    } else toast.error(t.imageUpload.failed);
    if (res) setAction(false);
  };

  return (
    <div className="col-span-full flex flex-col gap-2">
      <p className="text:sm font-semibold lg:text-lg">
        {t.imageUpload.instruction}
      </p>
      <p className="text:xs lg:text-sm">{t.imageUpload.warning}</p>
      <Image
        src={formDataf.img}
        width={500}
        height={200}
        alt={alt}
        className="h-[200px] cursor-pointer object-contain"
        onClick={handleDelete}
      ></Image>
    </div>
  );
};

export default DeleteImg;
