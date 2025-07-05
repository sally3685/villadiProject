"use client";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { LucideGlobe, UserIcon } from "lucide-react";
import Link from "next/link";
import { LogOut } from "../actions/auth";
import { useRouter } from "next/navigation";
function replaceLangInPath(pathname: string, newLang: string): string {
  const segments = pathname.split("/").filter((segment) => segment !== "");

  if (segments.length > 0 && (segments[0] === "en" || segments[0] === "ar")) {
    segments[0] = newLang;
  } else {
    segments.unshift(newLang);
  }

  return `/${segments.join("/")}`;
}
function getLang(pathname: string) {
  return pathname.includes("/ar") || pathname.includes("/ar/") ? "ar" : "en";
}
export default function Nav({
  t,
  user,
}: {
  t: any;
  user: {
    name: string;
    role: string;
    email: string;
  } | null;
}) {
  const pathname = usePathname();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(false);
  return (
    <nav className="bg-white fixed top-5 z-[3] rounded-2xl  w-[95%]">
      <div className="mx-auto max-w-[1435px] w-auto  px-2  xl:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={() => {
                setOpenNavMenu(!openNavMenu);
              }}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black cursor-pointer hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${!openNavMenu ? "block" : "hidden"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className={`${openNavMenu ? "block size-6" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                width={20}
                height={20}
                className="h-14 w-auto cursor-pointer hidden sm:block"
                onClick={() => {
                  redirect(`/${getLang(pathname)}`);
                }}
                src={
                  getLang(pathname) === "en"
                    ? "/villadiLogo.svg"
                    : "/villadiLogoAr.svg"
                }
                alt="Villadi company"
              />
            </div>
            <div className="hidden xl:mx-6 xl:flex xl:justify-center xl:items-center">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link
                  href={`/${getLang(pathname)}/Catigories`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.endsWith("Catigories")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                  aria-current="page"
                >
                  {t.nav.tab1}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Products`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.endsWith("Products")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                  aria-current="page"
                >
                  {t.nav.tab7}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Recipes`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.includes("Recipes")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                  aria-current="page"
                >
                  {t.nav.tab8}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Aboutus`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.includes("Aboutus")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                >
                  {t.nav.tab2}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/SuggestAFlavor`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.includes("SuggestAFlavor")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                >
                  {t.nav.tab3}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Opinion`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.includes("Opinion")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                >
                  {t.nav.tab4}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Maps`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.includes("Maps")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                >
                  {t.nav.tab5}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Videos`}
                  className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                    pathname.includes("Videos")
                      ? "text-white bg-black"
                      : "text-black hover:text-white hover:bg-black"
                  }  transition-all duration-2 font-medium`}
                >
                  {getLang(pathname) === "en" ? "Videos" : "الفيديوهات"}
                </Link>
                {user?.role === "Admin" ? (
                  <Link
                    href={`/${getLang(pathname)}/Control`}
                    className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                      pathname.includes("Control")
                        ? "text-white bg-black"
                        : "text-black hover:text-white hover:bg-black"
                    }  transition-all duration-2 font-medium`}
                  >
                    {t.nav.tab6}
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 xl:static xl:inset-auto xl:ml-6 xl:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => {
                    if (openProfileMenu && openLanguage === false)
                      setOpenProfileMenu(false);
                    setOpenLanguage(!openLanguage);
                  }}
                  type="button"
                  className="relative rounded-full  p-1 text-black cursor-pointer hover:text-white hover:bg-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <LucideGlobe />
                </button>
              </div>
              <div
                className={`absolute ${getLang(pathname) === "en" ? "right-0" : "-right-[60px]"} z-10 mt-2 w-48 origin-top-right border-3 border-t-0 border-black bg-white  rounded-md ${
                  openLanguage
                    ? "transition ease-out duration-100 transform block scale-100"
                    : "transition ease-in duration-75 transform hidden scale-95"
                } py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                role="menu`}
                aria-orientation="vertical"
                aria-labelledby="user-lang-button"
              >
                {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}

                <Link
                  href={replaceLangInPath(pathname, "en")}
                  className="block rounded-md px-4 py-2 text-sm md:text-lg text-black hover:text-white hover:bg-black transition-all duration-2  text-center"
                  role="menuitem"
                >
                  {t.lang.first}
                </Link>
                <Link
                  href={replaceLangInPath(pathname, "ar")}
                  className="block rounded-md px-4 py-2 text-sm md:text-lg text-center text-black hover:text-white hover:bg-black transition-all duration-2 "
                  role="menuitem"
                >
                  {t.lang.second}
                </Link>
              </div>
            </div>

            {/* <!-- Profile dropdown --> */}
            {user ? (
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      if (openLanguage && openProfileMenu === false)
                        setOpenLanguage(false);
                      setOpenProfileMenu(!openProfileMenu);
                    }}
                    className="relative flex rounded-full cursor-pointer text-sm md:text-lg text-black hover:text-white hover:bg-black transition-all duration-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <UserIcon className="size-8 rounded-full" />
                  </button>
                </div>
                <div
                  className={`absolute  z-10 ${getLang(pathname) === "en" ? "right-0" : "-right-[60px]"} mt-2 w-48 origin-top-right border-3 border-t-0 border-black bg-white  rounded-md  ${
                    openProfileMenu
                      ? "transition ease-out duration-100 transform block scale-100"
                      : "transition ease-in duration-75 transform hidden scale-95"
                  } py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                role="menu`}
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
                  <p className="block px-4 py-2 text-sm text-black font-bold text-center">
                    Hi {user.name}
                  </p>
                  <p className="block px-4 py-2 text-sm text-black font-bold  text-center wrap-break-word">
                    {user.email}
                  </p>
                  <button
                    onClick={LogOut}
                    className="block rounded-md px-4 py-2 text-sm text-black hover:text-white hover:bg-black text-center w-full cursor-pointer"
                  >
                    {t.Logout.title}
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href={`/${getLang(pathname)}/signUp`}
                className={`rounded-xl px-3 py-2 text-sm md:text-lg text-white bg-black transition-all duration-2 font-medium mx-4 hover:bg-white hover:text-black`}
              >
                {t.SignUp.title}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${openNavMenu ? "block" : "hidden"} xl:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3 bg-white rounded-b-2xl border-3 border-black border-t-0">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Image
            width={20}
            height={20}
            className="h-14 w-full cursor-pointer "
            onClick={() => {
              redirect(`/${getLang(pathname)}`);
            }}
            src={
              getLang(pathname) === "en"
                ? "/villadiLogo.svg"
                : "/villadiLogoAr.svg"
            }
            alt="Villadi company"
          />
          <Link
            href={`/${getLang(pathname)}/Catigories`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("Categories")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            }  transition-all duration-2 font-medium`}
            aria-current="page"
          >
            {t.nav.tab1}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Products`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("Products")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            }  transition-all duration-2 font-medium`}
            aria-current="page"
          >
            {t.nav.tab7}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Recipes`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("Recipes")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            }  transition-all duration-2 font-medium`}
            aria-current="page"
          >
            {t.nav.tab8}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Aboutus`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("Aboutus")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            } transition-all duration-2 font-medium `}
          >
            {t.nav.tab2}
          </Link>
          <Link
            href={`/${getLang(pathname)}/SuggestAFlavor`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("SuggestAFlavor")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            } transition-all duration-2 font-medium `}
          >
            {t.nav.tab3}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Opinion`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("Opinion")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            } transition-all duration-2 font-medium`}
          >
            {t.nav.tab4}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Maps`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("Maps")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            } transition-all duration-2 font-medium `}
          >
            {t.nav.tab5}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Videos`}
            className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
              pathname.includes("Videos")
                ? "text-white bg-black"
                : "text-black hover:text-white hover:bg-black"
            } transition-all duration-2 font-medium `}
          >
            {getLang(pathname) === "en" ? "Videos" : "الفيديوهات"}
          </Link>
          {user?.role === "Admin" ? (
            <Link
              href={`/${getLang(pathname)}/Control`}
              className={`block text-center  rounded-md px-3 py-2 text-sm md:text-lg ${
                pathname.includes("Controle")
                  ? "text-white bg-black"
                  : "text-black hover:text-white hover:bg-black"
              } transition-all duration-2 font-medium `}
            >
              {t.nav.tab6}
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
