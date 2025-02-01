// // import { clerkMiddleware } from "@clerk/nextjs/server";

// // export default clerkMiddleware();

// // export const config = {
// //   matcher: [
// //     // Skip Next.js internals and all static files, unless found in search params
// //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// //     // Always run for API routes
// //     '/(api|trpc)(.*)',
// //   ],
// // };



// import { createMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default createMiddleware({
//   beforeAuth(req) {
//     return NextResponse.next();
//   },
//   afterAuth(auth, req) {
//     return NextResponse.next();
//   },
// });

// export const config = {
//   matcher: ["/((?!_next|.*\\..*).*)"], // Static files ko ignore karne ke liye
// };















import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Static files ignore karne ke liye
};

