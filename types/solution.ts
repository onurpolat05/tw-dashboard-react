import { IconType } from "lucide-react";

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  painPointId: string;
  painPointTitle: string;
}

export interface SolutionSectionProps {
  className?: string;
}

export interface SolutionCardProps extends Solution {
  className?: string;
} 