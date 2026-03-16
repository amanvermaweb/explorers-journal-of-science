import { NextResponse } from "next/server";
import { submitContactForm } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const payload = await request.json();
    const result = await submitContactForm(payload);

    return NextResponse.json(
      { message: result.message },
      { status: result.status }
    );
  } catch (error) {
    console.error("Contact API request failed.", error);

    return NextResponse.json(
      { message: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}