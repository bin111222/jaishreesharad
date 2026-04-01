import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const ACCESS_COOKIE = "payment_access";

export async function GET() {
  const store = await cookies();
  const isAuthorized = store.get(ACCESS_COOKIE)?.value === "granted";
  return NextResponse.json({ authorized: isAuthorized });
}

export async function POST(request: Request) {
  const { password } = await request.json();
  const expectedPassword = process.env.PAYMENT_PAGE_PASSWORD;

  if (!expectedPassword) {
    return NextResponse.json(
      { authorized: false, error: "Payment page password is not configured." },
      { status: 500 }
    );
  }

  if (password !== expectedPassword) {
    return NextResponse.json({ authorized: false, error: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ authorized: true });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: "granted",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/payment",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
