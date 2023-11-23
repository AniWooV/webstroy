import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import routesParams from "../settings/routes-params.json"

type paramsKey = keyof typeof routesParams

export function middleware(request: NextRequest) {
    const subdomain = request.headers.get("x-forwarded-host")?.split(".")[0] || ""

    const defaultLocale = routesParams[subdomain as paramsKey]["default-locale"]
    const defaultCity = routesParams[subdomain as paramsKey]["default-city"]
    
    return NextResponse.rewrite(new URL(`${request.url}?default-locale=${defaultLocale}&default-city=${defaultCity}`))
}

export const config = {
    matcher: [
        "/",
        "/about",
        "/services",
        "/services/:slug*",
        "/portfolio",
        "/portfolio/:slug*",
        "/contacts"
    ]
}

