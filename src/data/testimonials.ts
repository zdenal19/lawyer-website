export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ing. Petr Dvořák",
    role: "Klient — občanské právo",
    text: "S kanceláří SAK jsme řešili složitý převod nemovitosti včetně věcných břemen. Vše bylo vyřízeno precizně a rychleji, než jsme čekali. Oceňuji zejména důkladnou prověrku právního stavu a profesionální přístup.",
    rating: 5,
  },
  {
    name: "Mgr. Jana Horáková",
    role: "Jednatelka obchodní společnosti",
    text: "Spolupracujeme s advokátní kanceláří SAK na korporačních záležitostech a obchodních smlouvách. Profesionální přístup, rychlé reakce a hluboká znalost obchodního práva. Mohu jen doporučit.",
    rating: 5,
  },
  {
    name: "Tomáš Procházka",
    role: "Klient — trestní právo",
    text: "V obtížné životní situaci mi advokáti z SAK poskytli vynikající obhajobu. Vše mi srozumitelně vysvětlili a jednali vždy v mém nejlepším zájmu. Děkuji za profesionální zastoupení.",
    rating: 5,
  },
  {
    name: "Eva Černá",
    role: "Pronajímatelka bytů v Brně",
    text: "Řešila jsem nájemní spory a potřebovala kvalitní nájemní smlouvy. Advokáti ze SAK mi vše připravili na míru a pomohli vyřešit spor s problémovým nájemníkem mimosoudně a rychle.",
    rating: 4,
  },
  {
    name: "MUDr. Karel Veselý",
    role: "Klient — rodinné právo",
    text: "V citlivé rodinné záležitosti mi kancelář SAK poskytla nejen odbornou, ale i lidskou podporu. Rozvod a vypořádání majetku proběhly díky jejich přístupu s minimálním stresem.",
    rating: 5,
  },
  {
    name: "Ing. Lucie Matoušková",
    role: "Klientka — pracovní právo",
    text: "Řešila jsem neplatné ukončení pracovního poměru. Kancelář SAK mě zastupovala u soudu a podařilo se dosáhnout výborného výsledku. Jednání bylo vždy transparentní a přiměřeně ceněné.",
    rating: 4,
  },
];
