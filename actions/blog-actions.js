"use server";
import { revalidatePath } from "next/cache";
import Blog from "@/models/Blog";
import dbConnect from "@/lib/db";
import { currentUser } from '@clerk/nextjs/server'
import User from "@/models/User";

export async function createBlog(formData) {
  try {
    await dbConnect();
    
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("Unauthorized access");
    
    // Check for existing slug
    const existingBlog = await Blog.findOne({ slug: formData.slug });
    if (existingBlog) {
      throw new Error("Slug already exists");
    }
    console.log(clerkUser.id);
    const dbUser = await User.findOne({ clerkUserId: 'user_2skNe35HsasByZi9KXpxJQl3ztO' });
    if (!dbUser) {
      throw new Error("User not found in database");
    }

    // Create new blog
    const newBlog = new Blog({
        ...formData,
        author: dbUser._id, // Use MongoDB ObjectId
        excerpt: formData.content.substring(0, 150) + "...", // Auto-generate excerpt
        readTime: `${Math.ceil(formData.content.length / 1000)} min read`, // Calculate read time
        featured: false, // Default value
      });

    await newBlog.save();
    revalidatePath("/admin/blogs");
    
    return { success: true };
  } catch (error) {
    console.error("Blog creation error:", error);
    return { error: error.message };
  }
}