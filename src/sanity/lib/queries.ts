import { defineQuery } from "next-sanity";


export const allproducts =defineQuery(`
    *[_type == "chefs"]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url
    }`)

    
    export const fourPro =defineQuery(`
        *[_type == "chefs][0..3]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
        }`)