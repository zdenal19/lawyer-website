import type { Metadata } from "next";
import Image from "next/image";
import GoldDivider from "@/components/ui/GoldDivider";
import { Users } from "lucide-react";
import { siteConfig, teamCategories } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Náš tým",
  description:
    "Seznamte se s týmem Společné advokátní kanceláře v Brně — advokáti společníci, zaměstnaní advokáti, koncipienti a spolupracující advokáti.",
};

export default function TymPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Náš tým
          </h1>
          <GoldDivider className="my-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Společná advokátní kancelář sdružuje zkušené advokáty, kteří
            poskytují právní služby efektivně a srozumitelně.
          </p>
        </div>

        {/* About the firm */}
        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lighter mb-16">
          <div className="flex items-start gap-4 mb-6">
            <Users size={32} className="text-gold flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-serif text-2xl text-cream mb-3">
                O kanceláři
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Společná advokátní kancelář (SAK) sídlí v centru Brna na
                  adrese {siteConfig.address.street} ({siteConfig.address.building}).
                  Poskytujeme právní služby v 10 oblastech práva s důrazem na
                  srozumitelnost, efektivitu a individuální přístup ke každému
                  klientovi.
                </p>
                <p>
                  Naším cílem je být spolehlivým partnerem pro fyzické i
                  právnické osoby. Věříme, že kvalitní právní služba spočívá
                  nejen ve znalosti zákonů, ale především v porozumění potřebám
                  klienta a schopnosti najít optimální řešení.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team categories */}
        {teamCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-2">
              {category.title}
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.members.map((member) => (
                <div
                  key={member.name}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-dark-lighter border border-dark-lighter group-hover:border-gold/30 transition-all duration-300">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="font-serif text-base md:text-lg text-cream group-hover:text-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
