import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getBlogs } from "@/lib/api/blogs";

export default async function AdminBlogs() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Blog Management</h1>
          <p className="text-gray-500">Manage and publish blog posts</p>
        </div>
        <Link href="/admin/blogs/new">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Create New Post
          </Button>
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <Link href={`/admin/blogs/${blog.slug}`}>
                    <Button className="text-white" variant="outline">Edit</Button>
                  </Link>
                  <Button variant="destructive">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}