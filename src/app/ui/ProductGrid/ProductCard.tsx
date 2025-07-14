// components/ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getContrastColor } from "../../../../helpers/contrastColor";
import { ProductType } from "@/app/[lang]/Catigories/types";
import Light from "../Light";
import ProductImg from "./ProductImg";
interface ProductCardProps {
  product: ProductType;
  lang: string;
  linkText: string;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product, lang, linkText }, ref) => (
    <div
      ref={ref}
      style={{
        background: `radial-gradient(${product.p_color} 40%,${product.color})`,
      }}
      className={`relative mb-[30px] flex h-[300px] w-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white/50 transition-all duration-300 before:absolute before:top-0 before:block before:h-full before:w-full before:bg-white before:mask-[url(/pattern2.svg)] before:mask-[350%,350%] before:mask-center before:content-[''] sm:h-[300px] sm:w-[350px]`}
    >
      <Light />
      <ProductImg img={product.img} flavorImg={product.flavor.primaryImg} />

      <h2
        className={`z-[1] p-2 text-center text-xl font-bold sm:text-2xl`}
        style={{ color: getContrastColor(product.p_color) }}
      >
        {product.name}
      </h2>
      <Link
        className="z-[0] rounded-2xl bg-black px-4 py-3 text-sm text-white sm:text-lg"
        href={`/${lang}/Catigories/Products/${product.code}`}
      >
        {linkText}
      </Link>
    </div>
  ),
);

ProductCard.displayName = "ProductCard";
