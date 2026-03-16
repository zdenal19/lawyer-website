import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import GoldDivider from "@/components/ui/GoldDivider";
import { ArrowLeft, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2: Icons.Building2,
  Heart: Icons.Heart,
  Briefcase: Icons.Briefcase,
  Scale: Icons.Scale,
  Landmark: Icons.Landmark,
  FileWarning: Icons.FileWarning,
  Shield: Icons.Shield,
  GanttChart: Icons.GanttChart,
  FileCheck: Icons.FileCheck,
  BookOpen: Icons.BookOpen,
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/sluzby"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Zpět na služby
        </Link>

        <div className="flex items-center gap-4 mb-6">
          {IconComponent && (
            <div className="p-4 rounded-xl bg-gold/10">
              <IconComponent size={36} className="text-gold" />
            </div>
          )}
          <h1 className="font-serif text-3xl md:text-4xl text-cream">
            {service.title}
          </h1>
        </div>

        <GoldDivider className="my-8 !mx-0 !max-w-none" />

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {service.fullDescription}
          </p>

          <h2 className="font-serif text-2xl text-cream mb-6">
            Co pro vás zajistíme
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-lg bg-dark-lighter"
              >
                <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-dark-lighter border border-dark-lighter rounded-xl p-8 text-center">
            <h3 className="font-serif text-2xl text-cream mb-3">
              Máte zájem o tuto službu?
            </h3>
            <p className="text-gray-400 mb-6">
              Kontaktujte nás pro nezávaznou konzultaci. Rádi vám pomůžeme s vaší
              situací.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-block bg-gold text-dark font-semibold px-8 py-3 rounded-lg hover:bg-gold-dark transition-colors"
              >
                Kontaktovat
              </Link>
              <Link
                href="/kalkulacka"
                className="inline-block border border-gold text-gold px-8 py-3 rounded-lg hover:bg-gold/10 transition-colors"
              >
                Spočítat cenu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
