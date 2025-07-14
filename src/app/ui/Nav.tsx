"use client";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  user:
    | {
        id: string;
        name: string;
        role: string;
        email: string;
      }
    | undefined;
}) {
  const pathname = usePathname();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openNavMenu) return;
    function handleClick(event: any) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setOpenNavMenu(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [openNavMenu]);

  const dropdownLang = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openLanguage) return;
    function handleClick(event: any) {
      if (
        dropdownLang.current &&
        !dropdownLang.current.contains(event.target)
      ) {
        setOpenLanguage(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [openLanguage]);

  const dropdownSign = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openProfileMenu) return;
    function handleClick(event: any) {
      if (
        dropdownSign.current &&
        !dropdownSign.current.contains(event.target)
      ) {
        setOpenProfileMenu(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [openProfileMenu]);

  useEffect(() => {
    setOpenNavMenu(false);
  }, [pathname]);
  return (
    <nav className="fixed top-5 z-[555] w-[95%] rounded-2xl bg-white">
      <div className="mx-auto w-auto max-w-[1435px] px-2 xl:p-2">
        <div className="relative flex h-16 items-center justify-between xl:h-auto">
          <div
            ref={dropdown}
            className="absolute inset-y-0 left-0 flex items-center xl:hidden"
          >
            <button
              //
              type="button"
              onClick={() => {
                setOpenNavMenu(!openNavMenu);
              }}
              className="relative inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
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
                className="hidden h-14 w-auto cursor-pointer sm:block"
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
            <div className="hidden xl:mx-6 xl:flex xl:items-center xl:justify-center">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link
                  href={`/${getLang(pathname)}/Catigories`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.endsWith("Catigories")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                  aria-current="page"
                >
                  {t.nav.tab1}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Products`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.endsWith("Products")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                  aria-current="page"
                >
                  {t.nav.tab7}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Recipes`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.includes("Recipes")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                  aria-current="page"
                >
                  {t.nav.tab8}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Aboutus`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.includes("Aboutus")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                >
                  {t.nav.tab2}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/SuggestAFlavor`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.includes("SuggestAFlavor")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                >
                  {t.nav.tab3}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Opinion`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.includes("Opinion")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                >
                  {t.nav.tab4}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Maps`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.includes("Maps")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                >
                  {t.nav.tab5}
                </Link>
                <Link
                  href={`/${getLang(pathname)}/Videos`}
                  className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                    pathname.includes("Videos")
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  } flex items-center justify-center font-medium transition-all duration-2`}
                >
                  {getLang(pathname) === "en" ? "Videos" : "الفيديوهات"}
                </Link>
                {user?.role === "Admin" ? (
                  <Link
                    href={`/${getLang(pathname)}/Control`}
                    className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                      pathname.includes("Control")
                        ? "bg-black text-white"
                        : "text-black hover:bg-black hover:text-white"
                    } flex items-center justify-center font-medium transition-all duration-2`}
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
            <div ref={dropdownLang} className="relative ml-3">
              <div>
                <button
                  onClick={() => {
                    if (openProfileMenu && openLanguage === false)
                      setOpenProfileMenu(false);
                    setOpenLanguage(!openLanguage);
                  }}
                  type="button"
                  className="relative cursor-pointer rounded-full p-1 text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <LucideGlobe />
                </button>
              </div>
              <div
                className={`absolute ${getLang(pathname) === "en" ? "right-[-27px] sm:right-0" : "right-0 lg:right-[-20px] xl:right-[-75px]"} z-10 mt-2 w-48 origin-top-right rounded-md border-3 border-t-0 border-black bg-white ${
                  openLanguage
                    ? "block scale-100 transform transition duration-100 ease-out"
                    : "hidden scale-95 transform transition duration-75 ease-in"
                } focus:outline-hidden" role="menu py-1 shadow-lg ring-1 ring-black/5`}
                aria-orientation="vertical"
                aria-labelledby="user-lang-button"
              >
                {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}

                <Link
                  href={replaceLangInPath(pathname, "en")}
                  className="block rounded-md px-4 py-2 text-center text-sm text-black transition-all duration-2 hover:bg-black hover:text-white md:text-lg"
                  role="menuitem"
                  onClick={() => {
                    setOpenLanguage(false);
                  }}
                >
                  {t.lang.first}
                </Link>
                <Link
                  href={replaceLangInPath(pathname, "ar")}
                  className="block rounded-md px-4 py-2 text-center text-sm text-black transition-all duration-2 hover:bg-black hover:text-white md:text-lg"
                  role="menuitem"
                  onClick={() => {
                    setOpenLanguage(false);
                  }}
                >
                  {t.lang.second}
                </Link>
              </div>
            </div>

            {user ? (
              <div ref={dropdownSign} className="relative ml-3">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      if (openLanguage && openProfileMenu === false)
                        setOpenLanguage(false);
                      setOpenProfileMenu(!openProfileMenu);
                    }}
                    className="relative flex cursor-pointer rounded-full text-sm text-black transition-all duration-2 hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden md:text-lg"
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
                  className={`absolute z-10 ${getLang(pathname) === "en" ? "right-0" : "lg:-right-[60px] xl:right-[-100px]"} mt-2 w-48 origin-top-right rounded-md border-3 border-t-0 border-black bg-white ${
                    openProfileMenu
                      ? "block scale-100 transform transition duration-100 ease-out"
                      : "hidden scale-95 transform transition duration-75 ease-in"
                  } focus:outline-hidden" role="menu py-1 shadow-lg ring-1 ring-black/5`}
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
                  <p className="block px-4 py-2 text-center text-sm font-bold text-black">
                    {t.lang.hello} {user.name}
                  </p>
                  <p className="block px-4 py-2 text-center text-sm font-bold wrap-break-word text-black">
                    {user.email}
                  </p>
                  <button
                    onClick={LogOut}
                    className="block w-full cursor-pointer rounded-md px-4 py-2 text-center text-sm text-black hover:bg-black hover:text-white"
                  >
                    {t.Logout.title}
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href={`/${getLang(pathname)}/signUp`}
                className={`mx-4 flex items-center justify-center rounded-xl bg-black px-3 py-2 text-sm font-medium text-white transition-all duration-2 hover:bg-white hover:text-black md:text-lg`}
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
        <div className="space-y-1 rounded-b-2xl border-3 border-t-0 border-black bg-white px-2 pt-2 pb-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Image
            width={20}
            height={20}
            className="h-14 w-full cursor-pointer sm:hidden"
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
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("Categories")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
            aria-current="page"
          >
            {t.nav.tab1}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Products`}
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("Products")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
            aria-current="page"
          >
            {t.nav.tab7}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Recipes`}
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("Recipes")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
            aria-current="page"
          >
            {t.nav.tab8}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Aboutus`}
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("Aboutus")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
          >
            {t.nav.tab2}
          </Link>
          <Link
            href={`/${getLang(pathname)}/SuggestAFlavor`}
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("SuggestAFlavor")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
          >
            {t.nav.tab3}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Opinion`}
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("Opinion")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
          >
            {t.nav.tab4}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Maps`}
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("Maps")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
          >
            {t.nav.tab5}
          </Link>
          <Link
            href={`/${getLang(pathname)}/Videos`}
            className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
              pathname.includes("Videos")
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } flex items-center justify-center font-medium transition-all duration-2`}
          >
            {getLang(pathname) === "en" ? "Videos" : "الفيديوهات"}
          </Link>
          {user?.role === "Admin" ? (
            <Link
              href={`/${getLang(pathname)}/Control`}
              className={`block rounded-md px-3 py-2 text-center text-sm md:text-lg ${
                pathname.includes("Controle")
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              } flex items-center justify-center font-medium transition-all duration-2`}
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
