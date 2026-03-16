interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = "",
  dark = true,
  id,
}: SectionProps) {
  const colorStyles = dark
    ? "bg-[#0A0A0A] text-white"
    : "bg-[#F5F0E8] text-[#0A0A0A]";

  return (
    <section id={id} className={`${colorStyles} py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
