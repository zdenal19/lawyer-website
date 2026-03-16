export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "obcanske-pravo",
    title: "Občanské právo",
    shortDescription:
      "Nemovitosti, byty, nájmy, věcná břemena, zástavy, zajištění závazků, dědictví a ochrana osobnosti.",
    fullDescription:
      "Poskytujeme komplexní právní služby v oblasti občanského práva. Zastupujeme klienty v transakcích a řízeních s nemovitostmi, řešíme bytové záležitosti a nájemní vztahy, zajišťujeme majetková práva včetně věcných břemen a zástavních práv. Zabýváme se rovněž dědickým právem, restitucemi, ochranou osobnosti a duševním vlastnictvím.",
    icon: "Building2",
    features: [
      "Transakce a řízení s nemovitostmi",
      "Bytové záležitosti a nájemní vztahy",
      "Věcná břemena, zástavy a zajištění závazků",
      "Dědická práva a restituce",
      "Ochrana osobnosti a duševní vlastnictví",
    ],
  },
  {
    slug: "obchodni-pravo",
    title: "Obchodní právo",
    shortDescription:
      "Obchodní závazkové vztahy, smlouvy s mezinárodním prvkem, franšíza, cenné papíry.",
    fullDescription:
      "Poskytujeme právní služby v celém spektru obchodního práva. Připravujeme a revidujeme obchodní smlouvy včetně smluv s mezinárodním prvkem, zastupujeme klienty v obchodních sporech, poradíme s převody a nájmy podniků, franšízou a problematikou cenných papírů a nekalé soutěže.",
    icon: "Scale",
    features: [
      "Obchodní závazkové vztahy a jejich zajištění",
      "Obchodní smlouvy s mezinárodním prvkem",
      "Převody a nájmy podniku",
      "Franšíza a obchodní řetězce",
      "Cenné papíry a nekalá soutěž",
    ],
  },
  {
    slug: "trestni-pravo",
    title: "Trestní právo",
    shortDescription:
      "Obhajoby ve všech trestních věcech a stádiích trestního řízení.",
    fullDescription:
      "Poskytujeme obhajobu ve všech trestních věcech a ve všech stádiích trestního řízení. Využíváme řádné i mimořádné opravné prostředky a zastupujeme klienty v řízeních o náhradu škody způsobené státem při výkonu veřejné moci.",
    icon: "Shield",
    features: [
      "Obhajoba ve všech stádiích trestního řízení",
      "Řádné i mimořádné opravné prostředky",
      "Zastupování proti státu — náhrada škody",
      "Přípravné řízení a vyšetřování",
    ],
  },
  {
    slug: "korporacni-pravo",
    title: "Korporační právo",
    shortDescription:
      "Zakládání a přeměny obchodních společností, koncernové právo, likvidace.",
    fullDescription:
      "Zajišťujeme kompletní právní servis pro obchodní společnosti od jejich založení přes změny v průběhu existence až po likvidaci. Pomáháme s přeměnami společností, řešíme koncernové vztahy a zastupujeme klienty ve věcech obchodního rejstříku.",
    icon: "Landmark",
    features: [
      "Zakládání obchodních společností",
      "Změny a přeměny obchodních společností",
      "Koncernové právo",
      "Obchodní rejstřík",
      "Likvidace společností",
    ],
  },
  {
    slug: "rodinne-pravo",
    title: "Rodinné právo",
    shortDescription:
      "Rozvody manželství, vztahy mezi rodiči a dětmi, výživné, manželské a předmanželské smlouvy.",
    fullDescription:
      "Citlivě a profesionálně řešíme záležitosti rodinného práva. Zastupujeme klienty v rozvodových řízeních, ve sporech o svěření dětí do péče a úpravě styku, při stanovení výživného i při vypořádání společného jmění manželů. Připravujeme manželské a předmanželské smlouvy na míru.",
    icon: "Heart",
    features: [
      "Rozvody manželství",
      "Vztahy mezi rodiči a dětmi, péče o nezletilé",
      "Výživné a jeho úprava",
      "Vypořádání společného jmění manželů",
      "Manželské a předmanželské smlouvy",
    ],
  },
  {
    slug: "pracovni-pravo",
    title: "Pracovní právo",
    shortDescription:
      "Vztahy z pracovního poměru, nároky z neplatného skončení, odpovědnost za škodu.",
    fullDescription:
      "Pomáháme zaměstnancům i zaměstnavatelům orientovat se v pracovněprávních vztazích. Řešíme nároky z neplatného skončení pracovního poměru, připravujeme pracovní smlouvy a dohody, zastupujeme klienty ve sporech o náhradu škody v pracovněprávních vztazích.",
    icon: "Briefcase",
    features: [
      "Pracovní smlouvy a jejich ukončení",
      "Nároky z neplatného skončení pracovního poměru",
      "Odpovědnost za škodu v pracovněprávních vztazích",
      "Zastoupení v pracovněprávních sporech",
    ],
  },
  {
    slug: "spravni-pravo",
    title: "Správní právo",
    shortDescription:
      "Katastr nemovitostí, stavební právo, přestupky, správní soudnictví.",
    fullDescription:
      "Zastupujeme klienty v celé šíři správního práva. Řešíme veškerou agendu katastru nemovitostí, stavební právo, přestupky a správní řízení. Zastupujeme klienty ve správním soudnictví včetně řízení před Nejvyšším správním soudem.",
    icon: "GanttChart",
    features: [
      "Katastr nemovitostí — veškerá agenda",
      "Stavební právo",
      "Přestupky a správní řízení",
      "Zastupování ve správním soudnictví",
    ],
  },
  {
    slug: "insolvencni-pravo",
    title: "Insolvenční právo",
    shortDescription:
      "Správa majetkové podstaty, zastupování insolvenčních správců, insolvenční návrhy.",
    fullDescription:
      "Máme bohaté zkušenosti v oblasti insolvenčního práva. Sepisujeme insolvenční návrhy, zastupujeme věřitele i dlužníky v insolvenčním řízení, spolupracujeme s insolvenčními správci při správě majetkové podstaty a řešíme spory vyvolané insolvencí.",
    icon: "FileWarning",
    features: [
      "Sepisy insolvenčních návrhů",
      "Správa majetkové podstaty",
      "Zastupování insolvenčních správců",
      "Spory vyvolané insolvencí",
    ],
  },
  {
    slug: "verejne-zakazky",
    title: "Veřejné zakázky",
    shortDescription:
      "Konzultace a sepisy listin pro zadavatele i uchazeče, zastoupení před ÚOHS.",
    fullDescription:
      "Poskytujeme právní služby v oblasti veřejných zakázek jak zadavatelům, tak uchazečům. Připravujeme zadávací dokumentace, kontrolujeme nabídky, sepisujeme námitky a zastupujeme klienty před Úřadem pro ochranu hospodářské soutěže.",
    icon: "FileCheck",
    features: [
      "Konzultace a sepisy listin pro zadavatele",
      "Právní podpora pro uchazeče",
      "Zastoupení před ÚOHS",
      "Příprava zadávacích dokumentací",
    ],
  },
  {
    slug: "ustavni-pravo",
    title: "Ústavní právo",
    shortDescription:
      "Sepisování ústavních stížností v civilních i trestních věcech, zastupování před Ústavním soudem.",
    fullDescription:
      "Sepisujeme ústavní stížnosti v civilních i trestních věcech a zastupujeme klienty před Ústavním soudem České republiky. Pomáháme klientům, kteří se domáhají ochrany svých základních práv a svobod.",
    icon: "BookOpen",
    features: [
      "Sepisování ústavních stížností",
      "Zastupování před Ústavním soudem",
      "Ochrana základních práv a svobod",
    ],
  },
];
