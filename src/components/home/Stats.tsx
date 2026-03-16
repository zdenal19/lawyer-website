"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "21", label: "Členů týmu" },
  { value: "1000+", label: "Vyřešených případů" },
  { value: "10", label: "Oblastí práva" },
  { value: "30+", label: "Let praxe" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Stats() {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#C9A84C]/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center px-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              <p className="font-serif text-4xl md:text-5xl text-[#C9A84C] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 font-sans text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
