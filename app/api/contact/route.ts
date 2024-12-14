import { NextResponse } from "next/server";
import { connectToDatabase } from "../db";
import Contact from "@/models/contactForm";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const payload = await request.json();
    console.log({ payload });

    const newSubmission = await Contact.create({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });

    console.log({ newSubmission });

    return NextResponse.json({
      status: "success",
      message: "Message delivered successfully",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log({ error });

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: any) => err.message
      );

      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationErrors,
        },
        { status: 400 }
      );
    }

    console.error("Contact form submission error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
