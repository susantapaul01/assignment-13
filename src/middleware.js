// Auth login || logout
// cookie verify
// ========================

import { NextResponse } from "next/server";

// request header
// response header

export function middleware(req, res) {
    if(req.nextUrl.pathname.startsWith('/api/profile')) {
        const requestHeaders = new Headers(req.headers)
        const token = requestHeaders.get('token');
        if(token==="ABC-123-XYZ") {
            requestHeaders.set('user_id', '0105');
            requestHeaders.set('user_email', 'abc@gmail.com');
            return NextResponse.next({
                request: {headers: requestHeaders}
            });
        }
        else {
            return NextResponse.json({}, {status: 401})
        }
    }
}