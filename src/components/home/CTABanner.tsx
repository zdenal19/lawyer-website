import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-[#FAF6EE] overflow-hidden border-y border-[#C9A84C]/10">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#0A0A0A] mb-4">
          Potřebujete právní pomoc?
        </h2>
        <p className="text-gray-500 font-sans text-lg mb-10 max-w-xl mx-auto">
          Neváhejte se ozvat. Rádi s vámi probereme vaši situaci a navrhneme
          optimální řešení.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-[#C9A84C] text-white font-sans font-semibold px-8 py-4 rounded-lg hover:bg-[#b8993f] transition-colors duration-200"
        >
          Kontaktujte nás
        </Link>
      </div>
    </section>
  );
}
