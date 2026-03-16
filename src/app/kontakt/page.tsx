import type { Metadata } from "next";
import ContactForm from "@/components/kontakt/ContactForm";
import BookingEmbed from "@/components/kontakt/BookingEmbed";
import GoldDivider from "@/components/ui/GoldDivider";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone, MapPin, Clock, Building, Printer, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás pro nezávaznou konzultaci. Sídlo v centru Brna, Kobližná 19.",
};

export default function KontaktPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Kontakt
          </h1>
          <GoldDivider className="my-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Neváhejte nás kontaktovat. Rádi vám pomůžeme s vaší situací.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-cream mb-6">
              Napište nám
            </h2>
            <ContactForm />
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-cream mb-6">
              Kontaktní údaje
            </h2>

            {[
              {
                icon: MapPin,
                label: "Adresa",
                value: `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
              },
              {
                icon: Building,
                label: "Budova",
                value: siteConfig.address.building,
              },
              {
                icon: Phone,
                label: "Telefon",
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Printer,
                label: "Fax",
                value: siteConfig.fax,
              },
              {
                icon: Mail,
                label: "E-mail",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: Clock,
                label: "Úřední hodiny",
                value: siteConfig.hours,
              },
              {
                icon: Car,
                label: "Parkování",
                value: siteConfig.parking,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 bg-dark-lighter rounded-lg"
              >
                <item.icon size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-cream hover:text-gold transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-cream">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-dark-lighter h-48 bg-dark-lighter flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-gold mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Mapa se zobrazí zde</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking section */}
        <div className="mt-16">
          <GoldDivider className="my-12" />
          <BookingEmbed />
        </div>
      </div>
    </div>
  );
}
