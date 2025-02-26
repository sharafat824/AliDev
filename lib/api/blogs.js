import Blog from '@/models/Blog';
import dbConnect from '@/lib/db';

export async function getBlogs() {
  try {
    await dbConnect();
    const blogs = await Blog.find({})
      .populate('author')
      .sort({ createdAt: -1 })
      .lean();
      
    return blogs.map(blog => ({
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString()
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    await dbConnect();
    const blog = await Blog.findOne({ slug })
      .populate('author')
      .lean();

    if (!blog) return null;

    return {
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString()
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}