"use client";
import { useForm } from "react-hook-form";
import { createBlog } from "@/actions/blog-actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define form schema
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().url("Invalid URL format").min(1, "Cover image is required"),
  category: z.string().min(1, "Category is required")
});

export function BlogForm({ userId }) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      coverImage: "",
      category: "Technology"
    }
  });

  async function onSubmit(values) {
    try {
      const formData = {
        ...values,
        author: userId,
        excerpt: values.content.substring(0, 150) + '...',
        readTime: `${Math.ceil(values.content.length / 1000)} min read`,
        featured: false
      };

      const result = await createBlog(formData);
      console.log(result);
      if (result?.error) {
        throw new Error(result.error);
      }
      
      toast.success('Blog created successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      toast.error(error.message || 'Failed to create blog');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input className="text-black" 
                  {...field} 
                  placeholder="Enter post title" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Slug Field */}
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input className="text-black"
                  {...field}
                  placeholder="post-slug-here"
                />
              </FormControl>
              <FormDescription>
                This will be used in the URL (lowercase letters, numbers, and hyphens only)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cover Image Field */}
        <FormField
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Image URL</FormLabel>
              <FormControl>
                <Input className="text-black"
                  {...field}
                  placeholder="https://example.com/image.jpg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category Field */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input className="text-black"
                  {...field}
                  placeholder="Technology"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content Field */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[200px] text-black"
                  placeholder="Write your post content here..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit"
          className="w-full sm:w-auto px-8"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">🌀</span>
              Publishing...
            </span>
          ) : (
            "Publish Post"
          )}
        </Button>
      </form>
    </Form>
  );
}