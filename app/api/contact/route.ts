import { NextResponse } from "next/server";
import { connectToDatabase } from "../db";
import Contact from "@/models/contactForm";
import { sendEmail } from "@/lib/mailtrap";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { name, email, message } = await request.json();
    console.log({ name, email, message });

    const newSubmission = await Contact.create({
      name,
      email,
      message,
    });

    console.log({ newSubmission });

    const mailResponse = await sendEmail({ name, email, message });

    console.log({ mailResponse });

    if (!mailResponse?.success) {
      return NextResponse.json(
        {
          status: "failed",
          message: "Message failed to deliver",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Message delivered successfully",
      },
      { status: 201 }
    );
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
