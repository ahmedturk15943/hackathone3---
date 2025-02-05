'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

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

const ProductDetail: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<FoodItem | null>(null);

  const id = params?.id;
//   const paramss = useParams();
// console.log("Params in Vercel:", params);


  // Memoize fetchProductDetail to prevent unnecessary re-creation of the function
  const fetchProductDetail = useCallback(async () => {
    if (!id) return;

    try {
      const query = `
        *[_type == "food" && _id == $id][0] {
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
      const data = await client.fetch(query, { id });
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]); // Use memoized fetchProductDetail function as a dependency

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');

    currentCart.push({
      _id: product!._id,
      name: product!.name,
      price: product!.price,
      imageUrl: product!.imageUrl,
      quantity: 1, 
    });

    localStorage.setItem('Cart', JSON.stringify(currentCart));

    router.push('/Cart');
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-4xl font-bold text-center mt-16 mb-8 text-black">Product Detail</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-8 sm:flex sm:space-y-0 sm:space-x-6">
        {/* Product Image */}
        {product.imageUrl && (
          <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden mb-6 sm:w-1/3">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

        {/* Product Information */}
        <div className="space-y-4 sm:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          <div className="text-lg font-semibold text-green-600">
            ${product.price.toFixed(2)}
            {product.originalPrice > product.price && (
              <span className="text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-amber-500 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all mt-6"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
