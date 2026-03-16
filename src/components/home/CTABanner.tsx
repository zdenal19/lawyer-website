import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="relative py-20 bg-[#0A0A0A] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(10,10,10,0) 50%, rgba(201,168,76,0.05) 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-4">
          Potřebujete právní pomoc?
        </h2>
        <p className="text-gray-400 font-sans text-lg mb-10 max-w-xl mx-auto">
          Neváhejte se ozvat. Rádi s vámi probereme vaši situaci a navrhneme
          optimální řešení.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-[#C9A84C] text-[#0A0A0A] font-sans font-semibold px-8 py-4 rounded-lg hover:bg-[#b8993f] transition-colors duration-200"
        >
          Kontaktujte nás
        </Link>
      </div>
    </section>
  );
}
