import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const serviceLinks = [
  { label: "Občanské právo", href: "/sluzby/obcanske-pravo" },
  { label: "Rodinné právo", href: "/sluzby/rodinne-pravo" },
  { label: "Obchodní právo", href: "/sluzby/obchodni-pravo" },
  { label: "Trestní právo", href: "/sluzby/trestni-pravo" },
  { label: "Správní právo", href: "/sluzby/spravni-pravo" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A]" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Description + Social */}
          <div>
            <h3 className="font-serif text-xl text-[#C9A84C] mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C9A84C] transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-lg text-[#F5F0E8] mb-4">Navigace</h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#C9A84C] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-serif text-lg text-[#F5F0E8] mb-4">Služby</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#C9A84C] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif text-lg text-[#F5F0E8] mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C9A84C]" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 hover:text-[#C9A84C] transition"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#C9A84C]" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 hover:text-[#C9A84C] transition"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#C9A84C]" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-[#C9A84C]" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} {siteConfig.name}. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
