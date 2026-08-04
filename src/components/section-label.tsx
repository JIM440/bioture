import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index?: string;
  label: string;
  light?: boolean;
  className?: string;
};

export function SectionLabel({ label, light = false, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-medium uppercase tracking-[0.15em]",
        light ? "text-white/65" : "text-[#888888]",
        className,
      )}
    >
      {label}
    </p>
  );
}
