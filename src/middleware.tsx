import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: "/admin/:path*",
};

export default function middleware(request: NextRequest) {
    const token = request.cookies.get("token")
    if (token) {
        return NextResponse.next()
    }
    const url = new URL(request.url)
    url.pathname = "/"

    return NextResponse.redirect(url.toString())
}
