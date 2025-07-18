import type { Metadata } from "next";
import "../globals.css";
import Nav from "../ui/Nav";
import { getDictionary } from "./dictionaries";
import { getSession } from "../lib/session";
import Footer from "../ui/Footer";
import { ToastContainer } from "react-toastify";
import { Home } from "lucide-react";
export const metadata: Metadata = {
  title: "Villadi co",
  description:
    "Discover Viladi, Syria’s leading snack, chips, and popcorn manufacturer since 1987. Innovative flavors, top-tier quality, and strong local and regional presence.",
  keywords:
    "Viladi, Viladi Company, Syrian chips, Syrian snacks, popcorn, snacks Syria, villa chips, timali corn, tika pop, wholesale snacks, food factories Aleppo",
};
import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "./fonts/taile.ttf",
});
const myFont2 = localFont({
  src: "./fonts/BritishCouncil-Arabic-Regular.ttf",
});

interface LangParams {
  lang: "en" | "ar";
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}
export const dynamicParams = false;
export default async function RootLayout({
  children,
  params,
  modal,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<LangParams>;
  modal: React.ReactNode;
}>) {
  const session = await getSession();
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
      className={lang === "en" ? myFont.className : myFont2.className}
    >
      <link rel="icon" href="/villadiLogo.svg" />
      <body
        className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden`}
      >
        <ToastContainer />
        <Nav t={t} user={session.user}></Nav>
        {modal}
        {children}
        <Link
          href={`/${lang}`}
          className="fixed right-[40px] bottom-[50px] z-[4] flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-black text-sm text-white shadow-[0px_0px_20px_9px] sm:text-lg"
        >
          <Home />
        </Link>
        <Footer t={t} lang={lang}></Footer>
      </body>
    </html>
  );
}
