import { CalendarDays } from "lucide-react";

export default function BookingEmbed() {
  return (
    <div className="bg-[#141414] border border-[#1a1a1a] rounded-2xl p-8">
      <div className="text-center mb-8">
        <CalendarDays className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-[#F5F0E8] mb-2">
          Online rezervace konzultace
        </h3>
        <p className="text-gray-400">
          Vyberte si termin, ktery vam vyhovuje
        </p>
      </div>

      <div className="border-2 border-dashed border-[#333] rounded-xl p-12 flex items-center justify-center">
        <p className="text-gray-500 text-center">
          Cal.com widget se zobrazi zde
        </p>
      </div>

      <p className="text-gray-600 text-sm text-center mt-4">
        Po pripojeni Cal.com se zde zobrazi rezervacni kalendar
      </p>
    </div>
  );
}
