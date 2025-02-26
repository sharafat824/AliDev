import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const blog = await Blog.findOne({ slug: params.slug })
      .populate('author', 'email role clerkUserId');

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" }, 
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("❌ Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" }, 
      { status: 500 }
    );
  }
}