"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

interface FoodItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  available: boolean;
  tags: string[];
  imageUrl: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<FoodItem[]>([]);   

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "food"] {
          _id,
          name,
          description,
          price,
          originalPrice,
          category,                  
          available,
          tags,
          "imageUrl": image.asset->url
        }
      `;

      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-black">
      <h1 className="text-center text-white text-2xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product._id}`} key={product._id}>
            <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all cursor-pointer">
              {product.imageUrl && (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-lg w-full h-40 object-cover"
                />
              )}
              <h3 className="mt-4 text-lg text-white font-semibold">{product.name}</h3>
              <p className="text-white text-sm">{product.description}</p>
              <p className="text-white text-xs">Category: {product.category}</p>
              <p className="mt-2 text-gray-200 font-bold">
                ${product.price.toFixed(2)}
                {product.originalPrice > product.price && (
                  <span className="text-White line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <p className="mt-1 text-sm text-white">
                {product.available ? "Available" : "Out of Stock"}
              </p>
              <div className="mt-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 text-black px-2 py-1 rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>    
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;    

