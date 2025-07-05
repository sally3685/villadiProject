import SideLinks from "@/app/ui/SideLinks";
import { getDictionary } from "../../dictionaries";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default async function ControlLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <main className="relative min-h-screen w-full bg-white flex items-end pt-[100px]">
      <ToastContainer />
      <div className=" min-h-screen w-full flex flex-col-reverse lg:flex-row  relative">
        <aside className="fixed h-auto bottom-0 lg:relative z-[2] lg:w-[250px] lg:h-auto w-full bg-white">
          <SideLinks t={t} lang={lang}></SideLinks>
        </aside>
        <section
          className={` min-h-dvh w-full ${
            lang === "en"
              ? " lg:rounded-l-2xl lg:rounded-t-none "
              : "lg:rounded-r-2xl lg:rounded-t-none"
          } rounded-t-2xl flex justify-center items-center flex-col max-w-8xl  before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:top-0 before:block before:mask-[url(/pattern.svg)] before:mask-center before:mask-cover bg-[#7abc43] relative`}
        >
          {children}
        </section>
      </div>
    </main>
  );
}
