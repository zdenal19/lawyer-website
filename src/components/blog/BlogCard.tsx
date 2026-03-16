import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-[#141414] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#C9A84C]/30 transition-colors h-full flex flex-col p-6">
        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-block text-[#C9A84C] text-xs font-medium bg-[#C9A84C]/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors mb-3">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-500 text-xs mt-auto pt-4 border-t border-[#222]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
      </article>
    </Link>
  );
}
