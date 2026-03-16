"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  calculateFee,
  type ServiceType,
  type Complexity,
  type CalculationResult,
} from "@/lib/calculator";

const serviceOptions: { value: ServiceType; label: string }[] = [
  { value: "prevod", label: "Převod nemovitostí" },
  { value: "developersky", label: "Developerský projekt" },
  { value: "najem", label: "Nájemní vztahy" },
  { value: "zastava", label: "Zástavní právo" },
  { value: "druzstevni", label: "Družstevní byty" },
];

const complexityOptions: { value: Complexity; label: string }[] = [
  { value: "jednoducha", label: "Jednoduchá" },
  { value: "standardni", label: "Standardní" },
  { value: "slozita", label: "Složitá" },
];

const formatCZK = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "CZK",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function formatNumberWithSpaces(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function parseFormattedNumber(value: string): number {
  return parseInt(value.replace(/\s/g, ""), 10) || 0;
}

export default function FeeCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>("prevod");
  const [propertyValue, setPropertyValue] = useState<string>("");
  const [complexity, setComplexity] = useState<Complexity>("standardni");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handlePropertyValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const raw = e.target.value;
    setPropertyValue(formatNumberWithSpaces(raw));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const numericValue = parseFormattedNumber(propertyValue);
    if (numericValue <= 0) return;
    const calcResult = calculateFee(serviceType, numericValue, complexity);
    setResult(calcResult);
  };

  const inputClasses =
    "w-full bg-[#141414] border border-[#333] rounded-lg px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors";
  const labelClasses =
    "block text-sm text-gray-400 uppercase tracking-wider mb-2";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-[#141414] border border-[#1a1a1a] rounded-2xl p-8 space-y-6"
      >
        {/* Typ služby */}
        <div>
          <label htmlFor="serviceType" className={labelClasses}>
            Typ služby
          </label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value as ServiceType)}
            className={inputClasses}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Hodnota nemovitosti */}
        <div>
          <label htmlFor="propertyValue" className={labelClasses}>
            Hodnota nemovitosti v Kč
          </label>
          <input
            id="propertyValue"
            type="text"
            inputMode="numeric"
            value={propertyValue}
            onChange={handlePropertyValueChange}
            placeholder="např. 5 000 000"
            className={inputClasses}
          />
        </div>

        {/* Náročnost */}
        <div>
          <label htmlFor="complexity" className={labelClasses}>
            Náročnost transakce
          </label>
          <select
            id="complexity"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value as Complexity)}
            className={inputClasses}
          >
            {complexityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#C9A84C] hover:bg-[#b8993f] text-[#0A0A0A] font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Spočítat odměnu
        </button>
      </form>

      {/* Výsledek */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="mt-8 bg-[#141414] border border-[#1a1a1a] rounded-2xl p-8 space-y-4"
          >
            <h3 className="font-serif text-xl text-[#F5F0E8] mb-4">
              Orientační kalkulace
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-[#222]">
                <span className="text-gray-400">Základní cena</span>
                <span className="text-[#F5F0E8]">
                  {formatCZK.format(result.basePrice)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#222]">
                <span className="text-gray-400">Koeficient náročnosti</span>
                <span className="text-[#F5F0E8]">
                  {result.complexityMultiplier}&times;
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400 text-lg">Celkem</span>
                <span className="text-[#C9A84C] text-2xl font-bold">
                  {formatCZK.format(result.totalPrice)}
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              {result.note}
            </p>

            {/* Disclaimer */}
            <p className="text-gray-600 text-xs mt-4 italic">
              Kalkulace je pouze orientační a neslouží jako závazná nabídka.
              Konečná cena může být upravena na základě individuální konzultace.
            </p>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#222]">
              <p className="text-gray-400 mb-3">Chcete přesnou nabídku?</p>
              <Link
                href="/kontakt"
                className="inline-block bg-[#C9A84C] hover:bg-[#b8993f] text-[#0A0A0A] font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Kontaktujte nás
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
