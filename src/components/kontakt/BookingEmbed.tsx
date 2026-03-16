import { CalendarDays } from "lucide-react";

export default function BookingEmbed() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8">
      <div className="text-center mb-8">
        <CalendarDays className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-[#0A0A0A] mb-2">
          Online rezervace konzultace
        </h3>
        <p className="text-gray-400">
          Vyberte si termín, který vám vyhovuje
        </p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex items-center justify-center">
        <p className="text-gray-500 text-center">
          Cal.com widget se zobrazí zde
        </p>
      </div>

      <p className="text-gray-600 text-sm text-center mt-4">
        Po připojení Cal.com se zde zobrazí rezervační kalendář
      </p>
    </div>
  );
}
