import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import GoldDivider from "@/components/ui/GoldDivider";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Právní služby v 10 oblastech práva — občanské, obchodní, trestní, rodinné, pracovní právo a další. SAK Brno.",
};

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

export default function SluzbyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Právní služby
          </h1>
          <GoldDivider className="my-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Komplexní právní služby v 10 oblastech práva s důrazem na
            srozumitelnost, efektivitu a ochranu vašich zájmů.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/sluzby/${service.slug}`}
                className="group block bg-dark-lighter border border-dark-lighter rounded-xl p-8 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {IconComponent && (
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gold/10">
                      <IconComponent size={28} className="text-gold" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="font-serif text-xl text-cream group-hover:text-gold transition-colors mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="text-gray-500 text-sm flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Zjistit více →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
