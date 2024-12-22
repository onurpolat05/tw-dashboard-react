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
    description: "Sellers waste countless hours on manual research, hindering their ability to scale.",
    icon: Search,
    sources: ["Jungle Scout Report 2024"]
  },
  {
    id: "inventory",
    title: "Inventory Inefficiencies",
    description: "Juggling multiple sales channels leads to costly stockouts, overstocking, and lost sales.",
    icon: Package2,
    sources: ["Jungle Scout Report 2024", "Internal Analysis"]
  },
  {
    id: "platform",
    title: "Platform Dependency Risks",
    description: "Over-reliance on a single platform like Amazon exposes sellers to account suspensions and policy changes.",
    icon: Link,
    sources: ["TradeWizz MVP Test Data"]
  },
  {
    id: "sourcing",
    title: "Unreliable Sourcing",
    description: "Finding trustworthy suppliers, negotiating favorable terms and dealing with high minimum order quantities (MOQs) is a major challenge.",
    icon: Globe2,
    sources: ["Internal Analysis", "Market Research"]
  },
  {
    id: "data",
    title: "Data Overload",
    description: "Sellers struggle to analyze vast amounts of data, leading to missed opportunities and poor decision-making.",
    icon: BarChart3,
    sources: ["Jungle Scout Report 2024", "Internal Analysis"]
  },
  {
    id: "marketing",
    title: "Wasted Marketing Spend",
    description: "Reaching the right audience and optimizing ad spend is complex, resulting in wasted budgets and low ROI.",
    icon: Megaphone,
    sources: ["Market Research", "Customer Feedback"]
  }
];

const PainPointsSection: React.FC<PainPointSectionProps> = ({
  className,
  showSources = true
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <CardHeader className="px-0 pt-0">
        <div className="space-y-4">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              E-commerce Sellers Losing Profits to Inefficiencies
            </CardTitle>
            <p className="text-base text-gray-600 mt-2">
              Key challenges stopping e-commerce businesses from scaling
            </p>
          </div>
          <p className="text-sm text-gray-600 italic">
            These challenges create a significant bottleneck for e-commerce businesses, 
            hindering their growth and reducing profitability in today's competitive market.
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-0 pt-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {painPoints.map((painPoint) => (
            <PainPointCard
              key={painPoint.id}
              {...painPoint}
              sources={showSources ? painPoint.sources : []}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PainPointsSection; 