interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div
      className={`h-px max-w-xs mx-auto ${className}`}
      style={{
        background:
          "linear-gradient(to right, transparent, #C9A84C, transparent)",
      }}
    />
  );
}
