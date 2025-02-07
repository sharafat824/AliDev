import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define route matchers
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isUserRoute = createRouteMatcher(["/user(.*)"]);
const isAuthPage = createRouteMatcher(["/sign-in", "/sign-up"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  // If user is signed in, prevent access to sign-in/sign-up pages
  if (userId && isAuthPage(req)) {
    const dashboardUrl = sessionClaims?.role === "Admin" ? "/admin/dashboard" : "/user/dashboard";
    return NextResponse.redirect(new URL(dashboardUrl, req.nextUrl));
  }

  // Allow all public routes
  if (!isAdminRoute(req) && !isUserRoute(req)) {
    return NextResponse.next();
  }

  // If user is not logged in and tries to access a protected route, redirect to login
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  // Redirect non-admins from admin routes
  const userRole = sessionClaims?.publicMetadata?.role || sessionClaims?.role;
  if (isAdminRoute(req) && userRole !== "Admin") {
    return NextResponse.redirect(new URL("/user/dashboard", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
