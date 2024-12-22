import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PainPointsSection from '@/components/pain-points/PainPointsSection';
import SolutionSection from '@/components/solution/SolutionSection';
import { Card } from '@/components/ui/card';

const FutureStatus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="mx-auto space-y-8 max-w-7xl">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                TradeWizz Pre-Seed Valuation
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive analysis and future projections
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-violet-600">Current Valuation</p>
              <p className="text-2xl font-bold text-gray-900">$1.91M - $4.43M</p>
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white border shadow-sm">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="problem-solution">Problem & Solution</TabsTrigger>
              <TabsTrigger value="market">Market Opportunity</TabsTrigger>
              <TabsTrigger value="traction">Traction & Validation</TabsTrigger>
              <TabsTrigger value="financials">Financial Projections</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-900">Executive Summary</h2>
                    <p className="text-gray-600">
                      TradeWizz is an AI-powered e-commerce management platform designed for Amazon sellers,
                      with plans to expand to other platforms.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="mb-2 text-sm font-medium text-gray-600">Key Investment Highlights</h3>
                      <ul className="space-y-1 list-disc list-inside text-gray-600">
                        <li>Strong LTV:CAC ratio of 4.73x</li>
                        <li>Low customer acquisition cost of $7.32</li>
                        <li>Innovative AI-driven business model</li>
                        <li>Experienced team in e-commerce and AI</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium text-gray-600">Use of Funds</h3>
                      <ul className="space-y-1 list-disc list-inside text-gray-600">
                        <li>Product development and AI enhancement</li>
                        <li>Market expansion</li>
                        <li>Team growth</li>
                        <li>Marketing and customer acquisition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Problem & Solution Tab */}
            <TabsContent value="problem-solution" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <PainPointsSection />
                <SolutionSection />
              </div>
            </TabsContent>

            {/* Market Opportunity Tab */}
            <TabsContent value="market" className="space-y-6">
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="p-4 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-violet-100">
                      <p className="text-sm font-medium text-violet-600">TAM</p>
                      <p className="text-2xl font-bold text-gray-900">$1T</p>
                      <p className="text-sm text-gray-600">Global E-commerce</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-fuchsia-50 to-white rounded-lg border border-fuchsia-100">
                      <p className="text-sm font-medium text-fuchsia-600">SAM</p>
                      <p className="text-2xl font-bold text-gray-900">$600B</p>
                      <p className="text-sm text-gray-600">Serviceable Market</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
                      <p className="text-sm font-medium text-purple-600">SOM</p>
                      <p className="text-2xl font-bold text-gray-900">$6B</p>
                      <p className="text-sm text-gray-600">Obtainable Market</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Other tabs will be implemented similarly */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FutureStatus; 