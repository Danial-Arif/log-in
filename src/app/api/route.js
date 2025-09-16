import Connect from "@/lib/database";
import User from "@/lib/User";

export async function POST(req) {
  await Connect();

  try {
    const {email,password} = await req.json(); // ✅ Correct way in app router
    const newUser = await User.create({email,password});

    return new Response(
      JSON.stringify({ success: true, user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
