import type { Metadata } from "next";
import FeeCalculator from "@/components/kalkulacka/FeeCalculator";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Kalkulačka odměn",
  description:
    "Orientační kalkulačka advokátních odměn. Spočítejte si přibližnou cenu právních služeb.",
};

export default function KalkulackaPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Kalkulačka odměn
          </h1>
          <GoldDivider className="my-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Spočítejte si orientační cenu právních služeb. Výsledná částka je
            pouze informativní — přesnou nabídku obdržíte po konzultaci.
          </p>
        </div>

        <FeeCalculator />
      </div>
    </div>
  );
}
