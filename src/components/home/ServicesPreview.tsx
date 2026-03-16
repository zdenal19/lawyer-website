"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Heart, Briefcase, Scale, Landmark, FileWarning, Shield, GanttChart, FileCheck, BookOpen, LucideIcon } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Heart,
  Briefcase,
  Scale,
  Landmark,
  FileWarning,
  Shield,
  GanttChart,
  FileCheck,
  BookOpen,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ServicesPreview() {
  const previewServices = services.slice(0, 3);

  return (
    <section className="bg-[#F5F0E8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#0A0A0A] mb-4">
            Právní služby
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg">
            Poskytujeme komplexní právní služby v 10 oblastech práva
            efektivně a srozumitelně.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
              >
                {Icon && (
                  <Icon className="text-[#C9A84C] mb-5" size={32} />
                )}
                <h3 className="font-serif text-xl text-[#0A0A0A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/sluzby/${service.slug}`}
                  className="text-[#C9A84C] font-sans text-sm font-medium hover:underline"
                >
                  Zjistit více &rarr;
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* All services link */}
        <div className="text-center">
          <Link
            href="/sluzby"
            className="text-[#C9A84C] font-sans font-medium text-lg hover:underline"
          >
            Všechny služby &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
