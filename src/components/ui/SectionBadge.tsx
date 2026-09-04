interface SectionBadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary" | "neutral";
}

const variantStyles = {
  primary:
    "bg-primary-fixed/50 border-primary/20 text-primary",
  secondary:
    "bg-secondary-fixed/50 border-secondary/20 text-secondary",
  tertiary:
    "bg-tertiary-fixed/50 border-tertiary/20 text-tertiary",
  neutral:
    "bg-surface-container-high border-surface-dim text-on-surface-variant",
};

export function SectionBadge({
  label,
  variant = "primary",
}: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border font-headline text-xs font-semibold mb-3 ${variantStyles[variant]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      <span>{label}</span>
    </div>
  );
}
