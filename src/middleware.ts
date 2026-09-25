import { NextRequest, NextResponse } from "next/server";
import { MENTOR_ENABLED, SERVICES_ENABLED } from "@/lib/features";

// Hide disabled sections (pages, OG images, API routes) behind a 404.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isMentor = pathname.startsWith("/mentor") || pathname.startsWith("/api/mentor-apply");
  const isServices = pathname.startsWith("/services") || pathname.startsWith("/api/services-apply");

  if ((isMentor && !MENTOR_ENABLED) || (isServices && !SERVICES_ENABLED)) {
    return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mentor/:path*", "/services/:path*", "/api/mentor-apply/:path*", "/api/services-apply/:path*"],
};
