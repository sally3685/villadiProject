import React from "react";
import Image from "next/image";
export default function ProductImg({
  img,
  flavorImg,
}: {
  img: string;
  flavorImg: string;
}) {
  return (
    <>
      <Image
        src={img ? img : "/villadiLogo.svg"}
        alt="product image"
        className="z-[1] h-[250px] w-[80%] object-contain transition-all duration-75 hover:scale-[1.2]"
        width={200}
        height={200}
      />
      <Image
        src={flavorImg ? flavorImg : "/villadiLogo.svg"}
        alt="flavor image"
        className="absolute top-[10%] left-[6%] z-[0] h-[200px] w-[150px] object-contain sm:left-[11%]"
        width={200}
        height={200}
      />
    </>
  );
}
