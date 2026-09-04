interface TechBadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary" | "neutral";
}

const variantStyles = {
  primary:
    "bg-primary-fixed/60 text-primary border-primary/20",
  secondary:
    "bg-secondary-fixed/50 text-secondary border-secondary/20",
  tertiary:
    "bg-tertiary-fixed/50 text-tertiary border-tertiary/20",
  neutral:
    "bg-surface-container text-on-surface border-surface-dim",
};

export function TechBadge({ label, variant = "neutral" }: TechBadgeProps) {
  return (
    <span
      className={`px-3 py-1 rounded-md text-xs font-medium border ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
