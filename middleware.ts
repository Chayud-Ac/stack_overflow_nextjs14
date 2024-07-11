import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);

const publicRoutes = [
  "/",
  "/api/webhook",
  "/question/:id",
  "/tags",
  "/tags/:id",
  "/profile/:id",
  "/community",
  "/jobs",
];

const ignoredRoutes = ["/api/webhook", "/api/chatgpt"];

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  } else if (publicRoutes.includes(req.url)) {
    // Allow access to public routes without protection
    return;
  }
  // Add more logic here if necessary
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
