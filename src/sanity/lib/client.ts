// // import { createClient } from 'next-sanity'

// // import { apiVersion, dataset, projectId } from '../env'

// // export const client = createClient({
// //   projectId,
// //   dataset,
// //   apiVersion,
// //   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// // })










// import { createClient } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
// import { apiVersion, dataset, projectId } from "../env";

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Agar realtime data chahiye to false karein
// });

// // Sanity images ka URL generate karne ka function
// const builder = imageUrlBuilder(client);

// export const urlFor = (source: any) => builder.image(source);









import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "../env";

// Sanity Client setup
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Agar realtime data chahiye to false karein
});

// Sanity image builder setup
const builder = imageUrlBuilder(client);

// Define the type for Sanity's image source
import { Image as SanityImageSource } from '@sanity/types'; 

// Function to generate image URL, specifying the source type
export const urlFor = (source: SanityImageSource) => builder.image(source);
