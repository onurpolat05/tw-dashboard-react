import React from 'react';
import { Search, Package2, Link, Globe2, BarChart3, Megaphone } from 'lucide-react';
import { cn } from "@/lib/utils";
import { PainPointSectionProps, PainPoint } from "@/types/pain-points";
import PainPointCard from './PainPointCard';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const painPoints: PainPoint[] = [
  {
    id: "research",
    title: "Time-Consuming Product Research",
    subtitle: "Manual Guesswork",
    description: "Sellers waste countless hours on manual research, hindering their ability to scale and find winning products.",
    icon: Search
  },
  {
    id: "inventory",
    title: "Inventory Management Nightmares",
    subtitle: "Stockouts & Overstocking",
    description: "Juggling multiple sales channels leads to costly stockouts, overstocking, and lost sales opportunities.",
    icon: Package2
  },
  {
    id: "platform",
    title: "Platform Dependency Risks",
    subtitle: "Single Point of Failure",
    description: "Over-reliance on a single platform exposes sellers to account suspensions and policy changes.",
    icon: Link
  },
  {
    id: "sourcing",
    title: "Unreliable Sourcing and High MOQs",
    subtitle: "Difficult & Time-Consuming",
    description: "Finding trustworthy suppliers and negotiating favorable terms is a major challenge for sellers.",
    icon: Globe2
  },
  {
    id: "data",
    title: "Data Overload",
    subtitle: "Missed Opportunities",
    description: "Sellers struggle to analyze vast amounts of data, leading to missed opportunities and poor decisions.",
    icon: BarChart3
  },
  {
    id: "marketing",
    title: "Wasted Marketing Spend",
    subtitle: "Low ROI",
    description: "Reaching the right audience and optimizing ad spend is complex, resulting in wasted budgets.",
    icon: Megaphone
  }
];

const PainPointsSection: React.FC<PainPointSectionProps> = ({
  className,
  showSources = false
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <CardHeader className="px-0 pt-0">
        <div className="space-y-3">
          <CardTitle className="text-2xl font-bold text-gray-900">
            E-commerce Sellers Losing Profits to Inefficiencies
          </CardTitle>
          <p className="text-lg text-gray-600">
            Key challenges stopping e-commerce businesses from scaling and reducing profitability
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-0 pt-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {painPoints.map((painPoint) => (
            <PainPointCard
              key={painPoint.id}
              {...painPoint}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PainPointsSection; 