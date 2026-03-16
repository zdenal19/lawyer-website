"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navWithoutKontakt = siteConfig.nav.filter((item) => item.href !== "/kontakt");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo / Name */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-sak.svg" alt="SAK logo" width={32} height={28} />
              <span className="font-serif text-xl text-[#C9A84C]">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navWithoutKontakt.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm uppercase tracking-wider transition ${
                    pathname === item.href
                      ? "text-[#C9A84C]"
                      : "text-gray-600 hover:text-[#C9A84C]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-[#C9A84C] text-white text-sm font-semibold uppercase tracking-wider px-5 py-2 rounded-lg hover:bg-[#b8993f] transition-colors"
              >
                Kontakt
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-600 hover:text-[#C9A84C] transition"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Otevřít menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
