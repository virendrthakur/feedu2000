import userModel from "@/app/model/user";
import { dbConnect } from "@/app/lib/db";

export async function POST(request) {
  await dbConnect(); // <-- ye line fix hai

  const { message } = await request.json();

  try {
    const newMessage = new userModel({ message });
    await newMessage.save();

    return Response.json({
      success: true,
      message: "message saved successfully"
    });
  } catch (error) {
    console.error("API error:", error); // helpful for debugging

    return Response.json(
      {
        success: false,
        message: "An error occurred",
      },
      { status: 500 } // status alag se pass karo
    );
  }
}
