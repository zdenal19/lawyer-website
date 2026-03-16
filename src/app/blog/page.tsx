import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/blog/BlogCard";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Aktuality a odborné články z oblasti práva. Novinky v legislativě, praktické rady a tipy.",
};

const categories = ["Vše", "Novinky", "Rady", "Legislativa"] as const;

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-4">
            Blog & Aktuality
          </h1>
          <GoldDivider className="my-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Odborné články, novinky z legislativy a praktické rady z oblasti
            práva.
          </p>
        </div>

        {/* Category filter - static for now */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-colors ${
                cat === "Vše"
                  ? "bg-gold text-dark font-medium"
                  : "bg-gray-100 text-gray-400 hover:text-gold hover:border-gold/30 border border-transparent"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
