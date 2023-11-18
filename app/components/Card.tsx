import { Product } from "@/app/types";
import Image from "next/image";
import React from "react";

type PropsCard = {
  product: Product;
};

export default function Card({ product }: PropsCard) {
  return (
    product.price !== undefined && (
      <div className="bg-slate-50 text-black p-5 rounded-md h-[300px]">
        <h1 className="text-xl">{product.title}</h1>
        <Image
          src={product.images.medium.url}
          alt=""
          width={parseInt(product.images.medium.width)}
          height={parseInt(product.images.medium.height)}
        />
        <p className="text-lg font-bold text-blue-500">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    )
  );
}
