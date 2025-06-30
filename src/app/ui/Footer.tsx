import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer({ lang }: { lang: string }) {
  return (
    <div className="bg-white h-auto min-h-[400px] w-full p-12 flex flex-col gap-12 ">
      <Image src={"/contactus.png"} width={300} height={250} alt="more"></Image>
      <div className="flex flex-col sm:flex-row gap-5 text-black justify-center items-center">
        {/* <Link href={"/ContactUs"}>contact us</Link> */}
        <Link href={"/ContactUs"}>Contact Us</Link>
        <Link href={"/FAQ"}>FAQ</Link>
        <Link href={"/TermsConditions"}>terms & conditions</Link>
        <Link href={"/PrivacyPolicy"}>privacy & policy</Link>
        <Link href={"/VilladiFoodService"}>villadi food service</Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 text-black justify-center items-center">
        <Image
          src={lang === "en" ? "/villadiLogo.svg" : "villadiLogoAr.svg"}
          width={150}
          height={150}
          alt="logo"
        ></Image>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 text-black justify-center items-center">
        <Link href={"https://www.cellographics.com"}>
          © 2025 CELLO Graphics Company, Amin a karbengan ket naisagana. Maysa a
          paset ti philadelphia-ko
        </Link>
        <Image
          className="absolute hidden md:block right-0 bottom-0"
          src={"/footerimg.png"}
          width={200}
          height={200}
          alt="puffs"
        ></Image>
      </div>
    </div>
  );
}
