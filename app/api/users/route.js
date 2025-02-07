// app/api/users/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db'; // Import database connection utility
import User from '@/models/User'; // Import the User model

// Handling GET requests to /api/users
export async function GET() {
  try {
    // Establish the DB connection
    await dbConnect();

    // Fetch all users from the database
    const users = await User.find({role:"USER"}); // This should now work

    return NextResponse.json({ users });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// Handling POST requests to /api/users
export async function POST(req) {
  try {
    const body = await req.json();

    // Establish the DB connection
    await dbConnect();

    // Create a new user in the database
    const newUser = new User({
      clerkUserId: body.clerkUserId,
      email: body.email,
      role: body.role || "USER", // Default to 'USER' if no role is provided
    });

    // Save the new user to the database
    await newUser.save();

    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
