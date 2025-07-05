import Link from "next/link";
import React from "react";
import { LucidePlus, PenBoxIcon, Trash2Icon } from "lucide-react";
import { getDictionary } from "../dictionaries";
const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const LinkStyle =
    'relative rounded-xl flex justify-center items-center flex-auto rounded-xl w-[300px] min-w-[300px] max-w-[300px] h-[250px] bg-white block text-xl sm:text-2xl before:absolute before:content-[""] before:w-3/4 before:h-3/4 before:border before:border-4 before:border-[#7abc43] text-black before:rounded-xl flex flex-col gap-4 ';
  // if (!user || user.success === false) return <>Error</>;
  return (
    // <main className="min-h-screen w-full bg-[#da9a40] relative before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover flex justify-center items-center">
    <main className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[linear-gradient(to_left_bottom,#ffcd00,#0f7a00)] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffffff] p-8">
      <div className="z-[1] w-full px-14 py-48 max-w-7xl h-3/4 relative flex flex-wrap justify-center items-center gap-12">
        <Link
          href={`Control/Add/Catigory`}
          className={`${LinkStyle} before:border-[#7abc43]`}
        >
          {" "}
          <LucidePlus size={50} color="#7abc43" />
          {lang === "en" ? "Add Items" : "إضافة عناصر"}
        </Link>
        <Link
          href={`Control/Update/Catigory`}
          className={`${LinkStyle} before:border-[#7abc43]`}
        >
          {" "}
          <PenBoxIcon size={50} color="#7abc43" />
          {lang === "en" ? "Edit Items" : "تعديل عناصر"}
        </Link>
        <Link
          href={`Control/Delete/Catigory`}
          className={`${LinkStyle} before:border-[#da9040]`}
        >
          {" "}
          <Trash2Icon size={50} color="#da9040" />
          {lang === "en" ? "Delete Items" : "حذف عناصر"}
        </Link>
      </div>
    </main>
  );
};

export default Page;
