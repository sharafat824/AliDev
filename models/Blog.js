import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  featured: { type: Boolean, default: false },
  category: { type: String, required: true },
  coverImage: { type: String, required: true },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  readTime: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);