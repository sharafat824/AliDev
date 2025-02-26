import { BlogForm } from "../../_components/BlogForm";
import { currentUser } from '@clerk/nextjs/server'
export default async function NewBlogPage() {
 const user = await currentUser();
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Create New Blog Post</h1>
          <p className="text-gray-500">Fill in the details below to publish a new post</p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <BlogForm userId={user.id} />
      </div>
    </div>
  );
}