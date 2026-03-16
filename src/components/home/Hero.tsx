"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Geometric pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Label */}
        <motion.p
          className="text-[#C9A84C] text-sm uppercase tracking-widest font-sans mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Advokátní kancelář
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-16 h-px bg-[#C9A84C] mx-auto mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        />

        {/* Main heading */}
        <motion.h1
          className="font-serif text-5xl md:text-7xl leading-tight mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <span className="text-[#0A0A0A]">Právní služby</span>
          <br />
          <span className="text-[#C9A84C]">efektivně a srozumitelně</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-500 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Tradiční brněnská advokátní kancelář. Spojujeme právní erudici
          s individuálním přístupem ke každému případu.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <Link
            href="/kontakt"
            className="inline-block bg-[#C9A84C] text-white font-sans font-semibold px-8 py-4 rounded-lg hover:bg-[#b8993f] transition-colors duration-200"
          >
            Nezávazná konzultace
          </Link>
          <Link
            href="/sluzby"
            className="inline-block border border-[#C9A84C] text-[#C9A84C] font-sans font-semibold px-8 py-4 rounded-lg hover:bg-[#C9A84C]/10 transition-colors duration-200"
          >
            Naše služby
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#C9A84C] w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
