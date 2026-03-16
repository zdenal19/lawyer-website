export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Novinky" | "Rady" | "Legislativa";
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "novela-katastralniho-zakona-2026",
    title: "Novela katastrálního zákona 2026: Co se mění?",
    excerpt:
      "Přehled nejdůležitějších změn v katastrálním zákoně, které vstoupily v platnost od ledna 2026 a ovlivňují převody nemovitostí.",
    content: `
      <p>Od 1. ledna 2026 vstoupila v platnost významná novela katastrálního zákona, která přináší řadu změn pro vlastníky nemovitostí i právní profesionály. V tomto článku shrnujeme ty nejpodstatnější.</p>

      <p><strong>Elektronické podání návrhů na vklad</strong></p>
      <p>Jednou z nejvýznamnějších změn je zavedení plně elektronického podání návrhů na vklad vlastnického práva. Nově je možné veškeré dokumenty podat prostřednictvím datové schránky bez nutnosti fyzické návštěvy katastrálního úřadu. Tato změna výrazně zrychluje celý proces a snižuje administrativní zátěž.</p>

      <p><strong>Zkrácení lhůt</strong></p>
      <p>Novela zkracuje lhůtu pro rozhodnutí o vkladu z dosavadních 30 dnů na 20 pracovních dnů. V případě elektronického podání s ověřenými podpisy se lhůta dále zkracuje na 15 pracovních dnů.</p>

      <p><strong>Ochrana vlastníků</strong></p>
      <p>Zákon nově zavádí povinné notifikace vlastníkům o jakémkoliv návrhu na změnu zápisu v katastru nemovitostí. Vlastník bude automaticky informován prostřednictvím datové schránky nebo e-mailu o každém podaném návrhu týkajícím se jeho nemovitosti.</p>

      <p>Pokud máte dotazy k tomu, jak se tyto změny dotknou vaší plánované transakce, neváhejte mě kontaktovat.</p>
    `,
    category: "Legislativa",
    date: "2026-02-15",
    readTime: "5 min",
  },
  {
    slug: "na-co-si-dat-pozor-pri-koupi-bytu",
    title: "Na co si dát pozor při koupi bytu?",
    excerpt:
      "Praktický průvodce pro kupující. Přečtěte si, jaké kroky nepodcenit a jak se vyhnout nejčastějším chybám při koupi nemovitosti.",
    content: `
      <p>Koupě bytu je pro většinu lidí jedním z největších finančních rozhodnutí v životě. Aby vše proběhlo hladce, je důležité postupovat obezřetně a na nic nezapomenout.</p>

      <p><strong>1. Prověřte právní stav nemovitosti</strong></p>
      <p>Před podpisem jakékoliv smlouvy si nechte provést právní prověrku (due diligence) nemovitosti. Zkontrolujte výpis z katastru nemovitostí – zejména vlastnické vztahy, věcná břemena, zástavní práva a případné poznámky o probíhajících řízeních.</p>

      <p><strong>2. Pozor na rezervační smlouvu</strong></p>
      <p>Rezervační smlouva od realitní kanceláře nemusí vždy chránit vaše zájmy. Nechte si ji vždy zkontrolovat právníkem. Zvláštní pozornost věnujte podmínkám vrácení rezervačního poplatku.</p>

      <p><strong>3. Kupní smlouva musí být precizní</strong></p>
      <p>Kupní smlouva by měla obsahovat přesnou identifikaci nemovitosti, kupní cenu, způsob úhrady, termín předání a podmínky odstoupení. Nikdy nepodepisujte smlouvu, které plně nerozumíte.</p>

      <p><strong>4. Využijte advokátní úschovu</strong></p>
      <p>Pro bezpečné předání kupní ceny doporučuji využít advokátní úschovu. Peníze jsou uloženy na zvláštním účtu a prodávajícímu jsou vyplaceny až po zápisu vlastnického práva v katastru.</p>

      <p><strong>5. Nezapomeňte na daňové povinnosti</strong></p>
      <p>Informujte se o daňových povinnostech spojených s koupí nemovitosti. Od roku 2021 sice kupující neplatí daň z nabytí nemovitých věcí, ale mohou existovat jiné daňové dopady.</p>
    `,
    category: "Rady",
    date: "2026-01-20",
    readTime: "7 min",
  },
  {
    slug: "prevod-druzstevniho-bytu-do-osobniho-vlastnictvi",
    title: "Jak převést družstevní byt do osobního vlastnictví",
    excerpt:
      "Kompletní průvodce procesem převodu družstevního bytu do osobního vlastnictví. Jaké jsou podmínky, postup a náklady.",
    content: `
      <p>Převod družstevního bytu do osobního vlastnictví je proces, který vyžaduje součinnost bytového družstva i samotného člena. V tomto článku vám přiblížím, jak celý proces probíhá.</p>

      <p><strong>Podmínky převodu</strong></p>
      <p>Základní podmínkou je, aby bytové družstvo rozhodlo o převodu bytů do vlastnictví členů. Toto rozhodnutí přijímá členská schůze družstva. Člen družstva musí mít splacený členský vklad a nesmí mít vůči družstvu žádné dluhy.</p>

      <p><strong>Prohlášení vlastníka</strong></p>
      <p>Družstvo musí vypracovat prohlášení vlastníka budovy, kterým se vymezují jednotlivé bytové jednotky a společné části domu. Tento dokument je základem pro vznik vlastnického práva k jednotlivým bytům.</p>

      <p><strong>Smlouva o převodu</strong></p>
      <p>Mezi družstvem a členem se uzavírá smlouva o převodu bytové jednotky do vlastnictví. Smlouva musí splňovat veškeré zákonné náležitosti a podpisy musí být úředně ověřeny.</p>

      <p><strong>Náklady</strong></p>
      <p>Náklady na převod zahrnují správní poplatek za vklad do katastru nemovitostí, případné náklady na geometrický plán a odměnu právního zástupce. Celkové náklady se obvykle pohybují v řádu tisíců až nižších desetitisíců korun.</p>

      <p>Pokud zvažujete převod družstevního bytu, rád vám s celým procesem pomohu od začátku do konce.</p>
    `,
    category: "Rady",
    date: "2025-12-05",
    readTime: "6 min",
  },
  {
    slug: "zmeny-v-najemnim-bydleni-2026",
    title: "Změny v nájemním bydlení pro rok 2026",
    excerpt:
      "Přehled legislativních změn, které se dotýkají pronajímatelů i nájemců bytů. Co nového přináší novelizace občanského zákoníku.",
    content: `
      <p>Rok 2026 přináší několik důležitých změn v oblasti nájemního bydlení. Ať už jste pronajímatel nebo nájemce, je dobré vědět, co se mění.</p>

      <p><strong>Nová pravidla pro kauci</strong></p>
      <p>Novela občanského zákoníku upřesňuje pravidla pro nakládání s jistotou (kaucí). Pronajímatel je nově povinen uložit kauci na samostatný účet a nájemci na požádání doložit, kde jsou prostředky uloženy. Maximální výše kauce zůstává na trojnásobku měsíčního nájemného.</p>

      <p><strong>Elektronická komunikace</strong></p>
      <p>Nově je výslovně umožněno doručovat výpovědi z nájmu elektronicky, pokud s tím obě strany souhlasí a je zajištěno potvrzení o doručení. Tato změna reflektuje moderní způsoby komunikace.</p>

      <p><strong>Energetická náročnost</strong></p>
      <p>Pronajímatelé mají nově povinnost poskytnout nájemci průkaz energetické náročnosti budovy ještě před uzavřením nájemní smlouvy. Nesplnění této povinnosti může být důvodem pro snížení nájemného.</p>

      <p><strong>Ochrana nájemců</strong></p>
      <p>Zákon posiluje ochranu nájemců v případě změny vlastníka nemovitosti. Nový vlastník je nově vázán podmínkami stávající nájemní smlouvy po dobu nejméně dvou let od nabytí vlastnictví.</p>

      <p>Doporučuji všem pronajímatelům i nájemcům zrevidovat stávající smlouvy a přizpůsobit je novým požadavkům. V případě potřeby jsem vám k dispozici.</p>
    `,
    category: "Novinky",
    date: "2026-03-01",
    readTime: "4 min",
  },
];
