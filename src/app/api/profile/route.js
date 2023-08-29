import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export async function GET(req, res) {
    const headersList = headers();
    const user_id = headersList.get('user_id');
    const user_email = headersList.get('user_email');
    return NextResponse.json({
        msg: "I am GET",
        user_id: user_id,
        user_email: user_email,
    })
}