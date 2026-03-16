import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import GoldDivider from "@/components/ui/GoldDivider";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Zpět na blog
        </Link>

        {/* Category badge */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold mb-4">
          {post.category}
        </span>

        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <GoldDivider className="my-8 !mx-0 !max-w-none" />

        {/* Article content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-cream
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-gold prose-a:no-underline hover:prose-a:underline
            prose-strong:text-cream
            prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-dark-lighter rounded-xl p-8 text-center border border-dark-lighter">
          <h3 className="font-serif text-xl text-cream mb-2">
            Potřebujete poradit?
          </h3>
          <p className="text-gray-400 mb-4">
            Kontaktujte nás pro nezávaznou konzultaci k tomuto tématu.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-gold text-dark font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-colors"
          >
            Kontaktovat
          </Link>
        </div>
      </div>
    </div>
  );
}
