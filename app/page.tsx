"use client";
import { text } from "stream/consumers";
import Data from "@/app/data/products.json";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import Card from "@/app/components/Card";

export default function Home() {
  const [productList, setProductList] = useState<Product[]>([]);
  const list = Data as Product[];

  useEffect(() => {
    setProductList(list);
  }, [list]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-my-blue">
      <h1>Catálogo</h1>
      <div className="flex flex-wrap w-full justify-start gap-2 p-3">
        {productList.map((product) => product.price!==undefined && (
          <div key={product._id.$oid} className="w-[300px] min-h-[400px]">
            <Card product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}
