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
    subtitle: "Solves: Time-Consuming Product Research",
    description: "TradeWizz's AI-powered tools analyze market trends, identify profitable niches, and suggest high-potential products, eliminating hours of manual research.",
    icon: Search,
    painPointId: "research"
  },
  {
    id: "inventory",
    title: "Streamlined Inventory Management",
    subtitle: "Solves: Inventory Management Nightmares",
    description: "TradeWizz provides real-time inventory tracking across multiple channels, automated reordering, and smart forecasting to prevent stockouts and overstocking.",
    icon: Package2,
    painPointId: "inventory"
  },
  {
    id: "platform",
    title: "Diversified Platform Strategy",
    subtitle: "Solves: Platform Dependency and Account Risks",
    description: "TradeWizz enables sellers to expand beyond a single platform, reducing platform dependency and mitigating account suspension risks.",
    icon: Link,
    painPointId: "platform"
  },
  {
    id: "sourcing",
    title: "Trusted Supplier Network",
    subtitle: "Solves: Unreliable Sourcing and High MOQs",
    description: "TradeWizz connects sellers with a vetted network of reliable suppliers and facilitates direct access to manufacturers, simplifying sourcing and ensuring quality.",
    icon: Globe2,
    painPointId: "sourcing"
  },
  {
    id: "data",
    title: "Actionable Data Insights",
    subtitle: "Solves: Data Overload",
    description: "TradeWizz's AI-driven analytics provides clear, actionable insights into sales, marketing, and operational performance, empowering data-driven decision-making.",
    icon: BarChart3,
    painPointId: "data"
  },
  {
    id: "marketing",
    title: "Optimized Marketing Campaigns",
    subtitle: "Solves: Wasted Marketing Spend",
    description: "TradeWizz helps sellers target the right audience and optimize ad spend across multiple platforms, maximizing ROI and eliminating wasted budgets.",
    icon: Megaphone,
    painPointId: "marketing"
  }
];

const SolutionSection: React.FC<SolutionSectionProps> = ({
  className
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <CardHeader className="px-0 pt-0">
        <div className="space-y-3">
          <CardTitle className="text-2xl font-bold text-gray-900">
            TradeWizz: The AI-Powered E-commerce Growth Platform
          </CardTitle>
          <p className="text-lg text-gray-600">
            Empowering e-commerce sellers to thrive through intelligent automation and actionable insights
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-0 pt-4">
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