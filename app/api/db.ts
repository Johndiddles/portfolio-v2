import mongoose from "mongoose";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;
  console.log({ MONGODB_URI });

  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  try {
    await mongoose.connect(MONGODB_URI);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log({ error });
    throw new Error(error);
  }
}
