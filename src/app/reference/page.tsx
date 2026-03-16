import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import GoldDivider from "@/components/ui/GoldDivider";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Reference a hodnocení klientů. Přečtěte si, co říkají klienti o našich právních službách.",
};

export default function ReferencePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Reference
          </h1>
          <GoldDivider className="my-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Přečtěte si, co o spolupráci říkají naši klienti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-xl p-8 border border-dark-lighter relative"
            >
              <Quote
                size={32}
                className="text-gold/20 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "text-gold fill-gold"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div>
                <p className="text-cream font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
