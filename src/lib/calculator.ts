export type ServiceType =
  | "prevod"
  | "developersky"
  | "najem"
  | "zastava"
  | "druzstevni";

export type Complexity = "jednoducha" | "standardni" | "slozita";

export interface CalculationResult {
  basePrice: number;
  complexityMultiplier: number;
  totalPrice: number;
  note: string;
}

const SERVICE_RATES: Record<
  ServiceType,
  { rate: number; minFee: number; label: string }
> = {
  prevod: {
    rate: 0.01,
    minFee: 8000,
    label: "Převod nemovitosti",
  },
  developersky: {
    rate: 0.02,
    minFee: 15000,
    label: "Developerský projekt",
  },
  najem: {
    rate: 0.03,
    minFee: 5000,
    label: "Nájemní vztahy",
  },
  zastava: {
    rate: 0.01,
    minFee: 6000,
    label: "Zástavní právo",
  },
  druzstevni: {
    rate: 0.012,
    minFee: 7000,
    label: "Družstevní byt",
  },
};

const COMPLEXITY_MULTIPLIERS: Record<Complexity, number> = {
  jednoducha: 0.8,
  standardni: 1.0,
  slozita: 1.5,
};

const COMPLEXITY_LABELS: Record<Complexity, string> = {
  jednoducha: "jednoduchá",
  standardni: "standardní",
  slozita: "složitá",
};

const MIN_FEE = 5000;

export function calculateFee(
  serviceType: ServiceType,
  propertyValue: number,
  complexity: Complexity
): CalculationResult {
  const service = SERVICE_RATES[serviceType];
  const complexityMultiplier = COMPLEXITY_MULTIPLIERS[complexity];

  let basePrice = Math.round(propertyValue * service.rate);

  if (basePrice < service.minFee) {
    basePrice = service.minFee;
  }

  let totalPrice = Math.round(basePrice * complexityMultiplier);

  if (totalPrice < MIN_FEE) {
    totalPrice = MIN_FEE;
  }

  const note =
    `Orientační cena za službu "${service.label}" ` +
    `při hodnotě nemovitosti ${propertyValue.toLocaleString("cs-CZ")} Kč ` +
    `a ${COMPLEXITY_LABELS[complexity]} náročnosti transakce. ` +
    `Základní sazba ${(service.rate * 100).toFixed(1)} % z hodnoty nemovitosti ` +
    `(min. ${service.minFee.toLocaleString("cs-CZ")} Kč), ` +
    `koeficient náročnosti ${complexityMultiplier}×. ` +
    `Konečná cena se může lišit po individuální konzultaci.`;

  return {
    basePrice,
    complexityMultiplier,
    totalPrice,
    note,
  };
}
