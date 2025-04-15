import { type NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongoose';
import { User } from '@/lib/models/user';
import crypto from 'node:crypto';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    // Parse request body
    const { name, email, password, phone } = await req.json();

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: 'Please provide name, email, and password' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create new user
    const user = new User({
      name,
      email: email.toLowerCase(),
      phone
    });

    // Set password using the model's method
    user.setPassword(password);

    // Save user to database
    await user.save();

    // Remove sensitive fields from response
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt
    };

    return NextResponse.json(
      { success: true, user: userResponse },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to register user' },
      { status: 500 }
    );
  }
}
