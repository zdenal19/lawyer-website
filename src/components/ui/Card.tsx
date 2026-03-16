interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  const baseStyles =
    "bg-[#0A0A0A] border border-[#1a1a1a] rounded-xl p-6 transition-all duration-300 ease-in-out";
  const hoverStyles = hover
    ? "hover:border-[#C9A84C]/50 hover:shadow-[0_0_15px_rgba(201,168,76,0.1)] hover:-translate-y-[2px]"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
