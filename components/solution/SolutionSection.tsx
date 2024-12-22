import React from 'react';
import { Search, Package2, Link, Globe2, BarChart3, Megaphone } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Solution, SolutionSectionProps } from "@/types/solution";
import SolutionCard from './SolutionCard';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const solutions: Solution[] = [
  {
    id: "research",
    title: "Automated Product Research",
    description: "TradeWizz's AI-powered tools analyze market trends, identify profitable niches, and suggest high-potential products, eliminating hours of manual research.",
    icon: Search,
    painPointId: "research",
    painPointTitle: "Time-Consuming Product Research"
  },
  {
    id: "inventory",
    title: "Streamlined Inventory Management",
    description: "TradeWizz provides real-time inventory tracking across multiple channels, automated reordering, and smart forecasting to prevent stockouts and overstocking.",
    icon: Package2,
    painPointId: "inventory",
    painPointTitle: "Inventory Management Nightmares"
  },
  {
    id: "platform",
    title: "Diversified Platform Strategy",
    description: "TradeWizz enables sellers to expand beyond a single platform, reducing platform dependency and mitigating account suspension risks.",
    icon: Link,
    painPointId: "platform",
    painPointTitle: "Platform Dependency and Account Risks"
  },
  {
    id: "sourcing",
    title: "Trusted Supplier Network",
    description: "TradeWizz connects sellers with a vetted network of reliable suppliers and facilitates direct access to manufacturers, simplifying sourcing and ensuring quality.",
    icon: Globe2,
    painPointId: "sourcing",
    painPointTitle: "Unreliable Sourcing and High MOQs"
  },
  {
    id: "data",
    title: "Actionable Data Insights",
    description: "TradeWizz's AI-driven analytics provides clear, actionable insights into sales, marketing, and operational performance, empowering data-driven decision-making.",
    icon: BarChart3,
    painPointId: "data",
    painPointTitle: "Data Overload"
  },
  {
    id: "marketing",
    title: "Optimized Marketing Campaigns",
    description: "TradeWizz helps sellers target the right audience and optimize ad spend across multiple platforms, maximizing ROI and eliminating wasted budgets.",
    icon: Megaphone,
    painPointId: "marketing",
    painPointTitle: "Wasted Marketing Spend"
  }
];

const SolutionSection: React.FC<SolutionSectionProps> = ({
  className
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <CardHeader className="px-0 pt-0">
        <div className="space-y-4">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              TradeWizz: The AI-Powered E-commerce Growth Platform
            </CardTitle>
            <p className="text-base text-gray-600 mt-2">
              Empowering e-commerce sellers to thrive through intelligent automation and actionable insights
            </p>
          </div>
          <p className="text-sm text-gray-600 italic">
            TradeWizz provides a comprehensive solution for e-commerce businesses, leveraging AI to eliminate inefficiencies, unlock growth opportunities, and simplify complex operations.
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-0 pt-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              {...solution}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionSection; 