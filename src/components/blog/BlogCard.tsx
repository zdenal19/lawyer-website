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
      <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#C9A84C]/30 hover:shadow-md transition-all duration-300 h-full flex flex-col">
        {/* Gold gradient strip */}
        <div className="h-1 bg-gradient-to-r from-[#C9A84C]/40 via-[#C9A84C] to-[#C9A84C]/40" />

        <div className="p-6 flex flex-col flex-1">
          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-block text-[#C9A84C] text-xs font-medium bg-[#C9A84C]/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl text-[#0A0A0A] group-hover:text-[#C9A84C] transition-colors mb-3">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-500 text-xs mt-auto pt-4 border-t border-gray-200">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
