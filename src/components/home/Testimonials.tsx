"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Testimonials() {
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="bg-[#FAFAF8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#0A0A0A] mb-4">
            Co říkají naši klienti
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-xl shadow-sm relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              <Quote size={32} className="text-[#C9A84C]/15 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className={
                      starIndex < testimonial.rating
                        ? "fill-[#C9A84C] text-[#C9A84C]"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-sans italic text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#0A0A0A] font-sans">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm font-sans">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
