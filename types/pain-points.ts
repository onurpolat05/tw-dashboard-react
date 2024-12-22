import { IconType } from "lucide-react";

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  sources: string[];
}

export interface PainPointSectionProps {
  className?: string;
  showSources?: boolean;
}

export interface PainPointCardProps extends PainPoint {
  className?: string;
} 