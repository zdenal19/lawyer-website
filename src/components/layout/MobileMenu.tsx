"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white/98 flex flex-col md:hidden"
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-[#C9A84C] transition"
              aria-label="Zavřít menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-0">
            {siteConfig.nav.map((item, index) => (
              <div key={item.href} className="w-full flex flex-col items-center">
                {index > 0 && (
                  <div className="w-16 h-px bg-[#C9A84C]/30" />
                )}
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block py-4 text-xl font-serif transition ${
                    pathname === item.href
                      ? "text-[#C9A84C]"
                      : "text-[#0A0A0A] hover:text-[#C9A84C]"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="p-8 text-center space-y-2 text-gray-500 text-sm">
            <a
              href={`tel:${siteConfig.phone}`}
              className="block hover:text-[#C9A84C] transition"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block hover:text-[#C9A84C] transition"
            >
              {siteConfig.email}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
