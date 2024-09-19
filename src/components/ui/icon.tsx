import { icons } from "lucide-react";

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof icons;
  color: string;
  size: number;
  className?: string;
}) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    return <p>Icon not found</p>;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};
