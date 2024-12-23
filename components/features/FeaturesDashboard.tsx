import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Search, 
  Package, 
  DollarSign, 
  Truck, 
  Network, 
  Store, 
  Globe, 
  LineChart 
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, description, icon: Icon }) => (
  <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 transition-all duration-200 hover:shadow-md">
    <div className="space-y-4">
      <div className="p-2 bg-violet-100 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-violet-600" />
      </div>
      <div className="space-y-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm font-medium text-violet-600">{subtitle}</p>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  </Card>
);

const features = [
  {
    title: "AI-Driven Product Research",
    subtitle: "Find Winning Products Faster",
    description: "Leverage advanced AI algorithms to identify profitable product opportunities and market trends, eliminating hours of manual research.",
    icon: Search
  },
  {
    title: "Intelligent Inventory Management",
    subtitle: "Optimize Stock Levels",
    description: "Smart inventory forecasting and optimization using machine learning predictions to prevent stockouts and overstocking.",
    icon: Package
  },
  {
    title: "Automated Pricing Optimization",
    subtitle: "Maximize Profit Margins",
    description: "Dynamic pricing strategies powered by real-time market data and competitor analysis for optimal profitability.",
    icon: DollarSign
  },
  {
    title: "Streamlined Supplier Sourcing",
    subtitle: "Efficient Sourcing and Communication",
    description: "Efficient supplier discovery and management platform with integrated communication tools for seamless collaboration.",
    icon: Truck
  },
  {
    title: "Integrated 3PL Network",
    subtitle: "Simplify Fulfillment",
    description: "Seamless integration with third-party logistics providers for optimized fulfillment and reduced operational complexity.",
    icon: Network
  },
  {
    title: "Twizz Shop Marketplace",
    subtitle: "Direct Sourcing and Selling",
    description: "Built-in marketplace for direct product sourcing and supplier connections, eliminating intermediaries.",
    icon: Store
  },
  {
    title: "Cross-Platform Expansion",
    subtitle: "Expand Your Reach",
    description: "Tools for seamless expansion across multiple e-commerce platforms and marketplaces, reducing platform dependency.",
    icon: Globe
  },
  {
    title: "Actionable Data Analytics",
    subtitle: "Data-Driven Decisions",
    description: "Comprehensive analytics dashboard with actionable insights and performance metrics for informed decision-making.",
    icon: LineChart
  }
];

const FeaturesDashboard: React.FC = () => {
  return (
    <Card className="p-8">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            TradeWizz: AI-Powered Features for E-commerce Success
          </h2>
          <p className="text-lg text-gray-600">
            Leveraging AI to automate tasks, unlock insights, and connect with manufacturers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FeaturesDashboard; 