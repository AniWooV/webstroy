import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import routesParams from "../settings/routes-params.json"

type paramsKey = keyof typeof routesParams

export function middleware(request: NextRequest) {
    let subdomain = request.headers.get("x-forwarded-host")?.split(".")[0] || ""

    console.log(request.headers.get("x-forwarded-host"));
    

    if (subdomain === "localhost:3000") {
        subdomain = ""
    }

    const defaultLang = routesParams[subdomain as paramsKey]["default-lang"] ? `default-lang=${routesParams[subdomain as paramsKey]["default-lang"]}` : ""
    const defaultCity = routesParams[subdomain as paramsKey]["default-city"] ? `default-city=${routesParams[subdomain as paramsKey]["default-city"].url}` : ""
    
    return NextResponse.rewrite(new URL(`${request.url}?${defaultLang}&${defaultCity}`))
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

