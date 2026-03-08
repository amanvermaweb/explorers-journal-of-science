import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/newsletter";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { email = "" } = await request.json();
    const result = await subscribeToNewsletter(email);

    return NextResponse.json(
      { message: result.message },
      { status: result.status }
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to process your subscription right now." },
      { status: 500 }
    );
  }
}