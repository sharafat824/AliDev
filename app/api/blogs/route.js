import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

// Get all blogs
export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find({})
      .populate('author', 'email role clerkUserId')
      .sort({ publishedAt: -1 });

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" }, 
      { status: 500 }
    );
  }
}

// Create new blog
export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    const newBlog = new Blog({
      ...body,
      author: body.authorId // Should come from authenticated user
    });

    await newBlog.save();
    return NextResponse.json({ blog: newBlog }, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" }, 
      { status: 500 }
    );
  }
}