import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PainPointsSection from '@/components/pain-points/PainPointsSection';
import SolutionSection from '@/components/solution/SolutionSection';
import FeaturesDashboard from '@/components/features/FeaturesDashboard';
import { Card } from '@/components/ui/card';
import { LineChart, Target, TrendingUp, Puzzle, BarChart, Store, Layers, Settings, PieChart, Scale, Trophy, DollarSign, Brain, Rocket, Network, Building2, Blocks, Calendar, Users, Megaphone, ArrowUpRight, AlertTriangle, Sparkles, Box, Package, TrendingDown, Calculator } from 'lucide-react';

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
                <FeaturesDashboard />
              </div>
            </TabsContent>

            {/* Market Opportunity Tab */}
            <TabsContent value="market" className="space-y-6">
              {/* TAM Section */}
              <Card className="p-6">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      Total Addressable Market (TAM): $1 Trillion
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Capturing a Share of the Global E-commerce Market
                    </p>
                    <p className="text-gray-600">
                      The Total Addressable Market (TAM) for TradeWizz represents the entire global e-commerce market, reflecting the vast opportunity for e-commerce enablement solutions.
                    </p>
                  </div>

                  {/* Market Size Metrics */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="p-4 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-violet-100">
                      <p className="text-sm font-medium text-violet-600">TAM</p>
                      <p className="text-2xl font-bold text-[#20152E]">$1T</p>
                      <p className="text-sm text-gray-600">Global E-commerce</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-fuchsia-50 to-white rounded-lg border border-fuchsia-100">
                      <p className="text-sm font-medium text-fuchsia-600">SAM</p>
                      <p className="text-2xl font-bold text-[#20152E]">$600B</p>
                      <p className="text-sm text-gray-600">Serviceable Market</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
                      <p className="text-sm font-medium text-purple-600">SOM</p>
                      <p className="text-2xl font-bold text-[#20152E]">$6B</p>
                      <p className="text-sm text-gray-600">Obtainable Market</p>
                    </div>
                  </div>

                  {/* Market Opportunity Data Points */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Data Point 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <LineChart className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Growth</h3>
                          <p className="text-sm text-gray-600">
                            Global e-commerce sales are projected to reach $6.38 trillion by 2024, highlighting the immense scale of the market.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Target className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Position</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz's AI-powered platform is uniquely positioned to serve a wide range of e-commerce businesses, from individual sellers to large enterprises, operating across various platforms and marketplaces.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Puzzle className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Solution Impact</h3>
                          <p className="text-sm text-gray-600">
                            With a focus on simplifying complex operations, such as product research, inventory management, supplier sourcing, and marketing, TradeWizz addresses key pain points that limit the growth of online businesses, unlocking significant revenue potential.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Projection</h3>
                          <p className="text-sm text-gray-600">
                            The e-commerce SaaS market, a subset of the total e-commerce market, is projected to reach $50 billion by 2030, further emphasizing the demand for comprehensive e-commerce management solutions like TradeWizz.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* SAM Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      Serviceable Available Market (SAM): $600 Billion
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Focusing on the Reachable Segment of the Global E-commerce Market
                    </p>
                    <p className="text-gray-600">
                      The Serviceable Available Market (SAM) represents the portion of the Total Addressable Market (TAM) that TradeWizz can realistically serve with its current product offerings and geographic focus.
                    </p>
                  </div>

                  {/* SAM Data Points */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Data Point 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <BarChart className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Share</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz's SAM is estimated at $600 billion, representing a significant portion of the global e-commerce market.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Store className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Platform Focus</h3>
                          <p className="text-sm text-gray-600">
                            This SAM focuses on e-commerce sellers operating on platforms like Amazon, with a particular emphasis on those engaged in online arbitrage, wholesale, and those looking to leverage our 3PL and Twizz Shop marketplace.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Layers className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Business Models</h3>
                          <p className="text-sm text-gray-600">
                            The SAM considers TradeWizz's current capabilities in serving various business models including private label dropshipping, online/retail arbitrage, and wholesale, with planned expansion into broader e-commerce segments.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Settings className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Core Capabilities</h3>
                          <p className="text-sm text-gray-600">
                            This reachable market is defined by businesses seeking to streamline operations, optimize inventory, automate pricing, and enhance sourcing, all core strengths of the TradeWizz platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* SOM Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      Serviceable Obtainable Market (SOM): $6 Billion
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Realistically Capturing a Portion of the E-commerce SaaS Market
                    </p>
                    <p className="text-gray-600">
                      The Serviceable Obtainable Market (SOM) represents the portion of the SAM that TradeWizz can realistically capture within the next 3-5 years, considering its current resources, competitive landscape, and go-to-market strategy.
                    </p>
                  </div>

                  {/* SOM Data Points */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Data Point 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <PieChart className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Segment</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz's SOM is estimated at $6 billion, representing a focused segment of the e-commerce SaaS market.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Target className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Penetration</h3>
                          <p className="text-sm text-gray-600">
                            This projection is based on capturing 1% of the SAM, aligning with TradeWizz's phased approach to market penetration, starting with Amazon arbitrage sellers and expanding to other business models.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Scale className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Conservative Estimate</h3>
                          <p className="text-sm text-gray-600">
                            The SOM reflects a conservative estimate, accounting for competition, market adoption rates, and the time required to scale operations.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Trophy className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Position</h3>
                          <p className="text-sm text-gray-600">
                            Achieving this SOM will position TradeWizz as a significant player in the e-commerce SaaS space, demonstrating strong traction and revenue generation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* E-commerce SaaS Market Size Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      E-commerce SaaS Market Size: High Growth and Expanding Opportunity
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Demonstrating the Rapidly Growing Market for TradeWizz's Solution
                    </p>
                    <p className="text-gray-600">
                      The E-commerce SaaS market is experiencing substantial growth, driven by the increasing adoption of digital solutions by businesses of all sizes. This section highlights the current market size, growth projections, and key trends shaping the industry.
                    </p>
                  </div>

                  {/* Market Size Data Points */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Data Point 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Current Market Value</h3>
                          <p className="text-sm text-gray-600">
                            The global E-commerce SaaS market was valued at approximately $9.4 billion in 2024.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Growth Projection</h3>
                          <p className="text-sm text-gray-600">
                            The market is projected to reach $29.82 billion by 2032, exhibiting a robust CAGR of 15.52%.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Brain className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">AI Integration</h3>
                          <p className="text-sm text-gray-600">
                            The market is expected to cross $50 billion by 2030, with an increasing need for AI integrations in the sector.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Rocket className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Growth Drivers</h3>
                          <p className="text-sm text-gray-600">
                            Key drivers of this growth include the rising demand for AI-driven personalization, omnichannel retailing, and the need for scalable, cost-effective e-commerce solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Market Growth Rate Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      Market Growth Rate: Sustained Expansion in E-commerce SaaS
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Highlighting the Strong Momentum of E-commerce and SaaS Adoption
                    </p>
                    <p className="text-gray-600">
                      The E-commerce SaaS market is experiencing a period of rapid growth, fueled by increasing digitalization and the adoption of cloud-based solutions. This section highlights the impressive growth rates driving the market forward.
                    </p>
                  </div>

                  {/* Growth Rate Data Points */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Data Point 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">CAGR Growth</h3>
                          <p className="text-sm text-gray-600">
                            The global E-commerce SaaS market is projected to maintain a robust Compound Annual Growth Rate (CAGR) of 15.52% from 2024 to 2032.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <LineChart className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Expansion</h3>
                          <p className="text-sm text-gray-600">
                            This growth trajectory indicates a market size expansion from $9.4 billion in 2024 to $29.82 billion by 2032.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <BarChart className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Optimistic Outlook</h3>
                          <p className="text-sm text-gray-600">
                            In a more optimistic view by other resources, the market could reach $50 billion by 2030.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Brain className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">AI Adoption Impact</h3>
                          <p className="text-sm text-gray-600">
                            Specifically, the adoption of AI-powered solutions within e-commerce is contributing to this growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Key Trends Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      Key Trends: Shaping the Future of E-commerce SaaS
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Highlighting the Major Trends Driving Growth and Innovation in the Market
                    </p>
                    <p className="text-gray-600">
                      The e-commerce SaaS market is constantly evolving, driven by emerging technologies and shifting consumer behavior. This section outlines key trends that present both opportunities and challenges for businesses in this sector.
                    </p>
                  </div>

                  {/* Trends Data Points */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Trend 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Brain className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">AI-Driven Personalization</h3>
                          <p className="text-sm text-gray-600">
                            87% of current AI adopters reporting its use for enhancing customer experience
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Trend 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Network className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Omnichannel Integration</h3>
                          <p className="text-sm text-gray-600">
                            67% of consumers expect consistent experience across touchpoints
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Trend 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Building2 className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Rise of Vertical SaaS</h3>
                          <p className="text-sm text-gray-600">
                            Market projected to reach $157.4 billion by 2025
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Trend 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Blocks className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Low-Code/No-Code Development</h3>
                          <p className="text-sm text-gray-600">
                            Market expected to reach $32 billion by 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Traction & Validation Tab */}
            <TabsContent value="traction" className="space-y-6">
              {/* Test Duration Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      IV. Traction & Validation (MVP Test Results)
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Test Duration: One Year of Focused Market Validation
                    </p>
                    <p className="text-gray-600">
                      TradeWizz's initial market validation was conducted through a comprehensive one-year Minimum Viable Product (MVP) test, providing valuable data and insights into product-market fit and customer behavior.
                    </p>
                  </div>

                  {/* Test Duration Data Points */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Data Point 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Calendar className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Test Period</h3>
                          <p className="text-sm text-gray-600">
                            February 27, 2023 - February 26, 2024 (One Year)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Target className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Focus</h3>
                          <p className="text-sm text-gray-600">
                            Limited release targeting specific e-commerce sellers
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">User Base</h3>
                          <p className="text-sm text-gray-600">
                            41 paying users acquired for metric analysis
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Marketing Campaign</h3>
                          <p className="text-sm text-gray-600">
                            6-month marketing campaign, $300 budget, 82 days runtime
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Total Customers Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-3">
                        <Users className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">41</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Total Customers</h3>
                      <p className="text-lg text-[#20152E]">
                        Early Adoption Demonstrated During MVP Test Phase
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      During the one-year MVP test phase, TradeWizz successfully acquired 41 paying customers, demonstrating initial traction and validating early interest in the platform's core value proposition.
                    </p>
                  </div>

                  {/* Customer Insights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Trophy className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Pre-seed Milestone</h3>
                          <p className="text-sm text-gray-600">
                            41 paying customers represent a significant milestone for the pre-seed stage
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Marketing Success</h3>
                          <p className="text-sm text-gray-600">
                            Users acquired through 82-day marketing campaign with $300 budget
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Brain className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">User Insights</h3>
                          <p className="text-sm text-gray-600">
                            Early adoption provides valuable insights into user behavior and feature usage
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Revenue Per User</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$265.70</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Customer Acquisition Cost</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$7.32</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Trial to Paid Conversion</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">19.51%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Monthly Active Users</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">37</p>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Timeline */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Marketing Campaign Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="space-y-6 pl-8">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Launch</h5>
                          <p className="text-sm text-gray-600">Initial budget allocation and channel setup</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Mid-Campaign Optimization</h5>
                          <p className="text-sm text-gray-600">Channel performance analysis and budget reallocation</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Completion</h5>
                          <p className="text-sm text-gray-600">Final results: 41 customers at $7.32 CAC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Trial to Paid Conversion Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-3">
                        <ArrowUpRight className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">19.51%</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Trial to Paid Conversion</h3>
                      <p className="text-lg text-[#20152E]">
                        Validating User Interest and Product-Market Fit
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      The trial-to-paid conversion rate measures the percentage of free trial users who converted into paying customers during the MVP test phase. This metric demonstrates the effectiveness of the product in meeting user needs and driving conversions.
                    </p>
                  </div>

                  {/* Conversion Insights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <BarChart className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Conversion Achievement</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz achieved a 19.51% trial-to-paid conversion rate during the one-year MVP test.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">User Value</h3>
                          <p className="text-sm text-gray-600">
                            Nearly one in five users who tried the platform's free trial found sufficient value to become paying customers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Performance Indicator</h3>
                          <p className="text-sm text-gray-600">
                            The conversion rate, coupled with the low CAC, suggests a positive initial response to the product's core features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Days to Convert</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">97.88</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Trial Users</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">26</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Converted Users</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">8</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Avg Trial Usage</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">1.88</p>
                      </div>
                    </div>
                  </div>

                  {/* Conversion Timeline */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Conversion Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="space-y-6 pl-8">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Trial Start</h5>
                          <p className="text-sm text-gray-600">User signs up for free trial</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Feature Exploration</h5>
                          <p className="text-sm text-gray-600">Average 1.88 features used during trial</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Conversion Point</h5>
                          <p className="text-sm text-gray-600">Average 97.88 days to conversion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Customer Acquisition Cost (CAC) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-3">
                        <DollarSign className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">$7.32</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Customer Acquisition Cost (CAC)</h3>
                      <p className="text-lg text-[#20152E]">
                        Demonstrating Efficient Marketing Spend During the MVP Test
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Customer Acquisition Cost (CAC) represents the average cost incurred to acquire a single paying customer. During the MVP test phase, TradeWizz achieved a remarkably low CAC, indicating efficient marketing strategies and a strong initial product appeal.
                    </p>
                  </div>

                  {/* CAC Insights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Industry Performance</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz's CAC during the MVP test was $7.32, significantly lower than industry averages
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Marketing Efficiency</h3>
                          <p className="text-sm text-gray-600">
                            Limited marketing budget of $300 over 82-day campaign, resulting in 41 paying customers
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Scale className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">LTV:CAC Ratio</h3>
                          <p className="text-sm text-gray-600">
                            Low CAC coupled with strong LTV:CAC ratio demonstrates effectiveness of targeted marketing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Daily CAC</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$3.66</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Marketing ROI</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">473%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Campaign Duration</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">82 days</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Cost per Lead</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$1.43</p>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Timeline */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Marketing Campaign Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="space-y-6 pl-8">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Launch</h5>
                          <p className="text-sm text-gray-600">Initial budget allocation and channel setup</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Mid-Campaign Optimization</h5>
                          <p className="text-sm text-gray-600">Channel performance analysis and budget reallocation</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Completion</h5>
                          <p className="text-sm text-gray-600">Final results: 41 customers at $7.32 CAC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Lifetime Value (LTV) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-3">
                        <DollarSign className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">$22.59</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Lifetime Value (LTV)</h3>
                      <p className="text-lg text-[#20152E]">
                        Assessing the Average Value Generated per Customer During the MVP Test
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Customer Lifetime Value (LTV) represents the total revenue generated by a customer over their entire relationship with TradeWizz. During the MVP test phase, we achieved an average LTV of $22.59, demonstrating strong monetization potential and customer retention.
                    </p>
                  </div>

                  {/* LTV Insights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Revenue Growth</h3>
                          <p className="text-sm text-gray-600">
                            Average monthly revenue per customer increased by 27% over the test period
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Customer Retention</h3>
                          <p className="text-sm text-gray-600">
                            87% of customers remained active after their first month of paid usage
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Scale className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">LTV:CAC Ratio</h3>
                          <p className="text-sm text-gray-600">
                            Strong LTV:CAC ratio of 3.08:1 indicates healthy unit economics
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Monthly Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$7.53</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Customer Lifespan</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">3 months</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Churn Rate</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">13%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Expansion Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">27%</p>
                      </div>
                    </div>
                  </div>

                  {/* Value Timeline */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Customer Value Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="space-y-6 pl-8">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Initial Purchase</h5>
                          <p className="text-sm text-gray-600">Average first month value: $5.92</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Feature Adoption</h5>
                          <p className="text-sm text-gray-600">Value increases with feature usage: $7.53/month</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Expansion Revenue</h5>
                          <p className="text-sm text-gray-600">27% increase through upgrades and add-ons</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LTV Components Breakdown */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">LTV Components Analysis</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Revenue Streams</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Base Subscription</span>
                            <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Feature Add-ons</span>
                            <span className="text-sm font-medium text-[#4ADE80]">23%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Usage-based Fees</span>
                            <span className="text-sm font-medium text-[#4ADE80]">12%</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Customer Behavior</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Feature Adoption Rate</span>
                            <span className="text-sm font-medium text-[#4ADE80]">78%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Upgrade Rate</span>
                            <span className="text-sm font-medium text-[#4ADE80]">31%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Active Usage Days</span>
                            <span className="text-sm font-medium text-[#4ADE80]">19/month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* LTV:CAC Ratio Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-3">
                        <Scale className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">4.73x</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">LTV:CAC Ratio</h3>
                      <p className="text-lg text-[#20152E]">
                        Demonstrating a Positive Return on Customer Acquisition Investment
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      The LTV:CAC ratio of 4.73x indicates that for every dollar spent on customer acquisition, TradeWizz generates $4.73 in customer lifetime value, demonstrating strong unit economics and efficient marketing spend.
                    </p>
                  </div>

                  {/* LTV:CAC Insights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Healthy Economics</h3>
                          <p className="text-sm text-gray-600">
                            Ratio exceeds industry benchmark of 3:1, indicating strong business model viability
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <ArrowUpRight className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Growth Potential</h3>
                          <p className="text-sm text-gray-600">
                            Strong ratio suggests room for increased marketing investment
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Customer Value</h3>
                          <p className="text-sm text-gray-600">
                            High ratio reflects strong customer retention and monetization
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">ROI Performance</h3>
                          <p className="text-sm text-gray-600">
                            373% return on customer acquisition investment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average LTV</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$22.59</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average CAC</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$7.32</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Payback Period</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">2.1 months</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Margin Contribution</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">79%</p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Analysis */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Unit Economics Analysis</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Revenue Components</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Initial Revenue</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$5.92</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Monthly Growth</span>
                            <span className="text-sm font-medium text-[#4ADE80]">27%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Expansion Revenue</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$1.61/mo</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Cost Structure</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Marketing Cost</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$3.66</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Sales Cost</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$2.23</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Onboarding Cost</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$1.43</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Key Learnings Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Key Learnings: Actionable Insights from the MVP Test
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Leveraging Data to Refine Product and Strategy for Future Growth
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      The one-year MVP test phase provided valuable insights into user behavior, product-market fit, and the effectiveness of early marketing efforts. These learnings are crucial for shaping TradeWizz's future development and go-to-market strategy.
                    </p>
                  </div>

                  {/* Learning Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Learning Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Strong Initial Interest</h3>
                          <p className="text-sm text-gray-600">
                            Achieved 41 paying customers with a 19.51% trial-to-paid conversion rate, indicating strong value proposition resonance with target market.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Efficient Customer Acquisition</h3>
                          <p className="text-sm text-gray-600">
                            Achieved remarkably low CAC of $7.32 through targeted marketing strategies and efficient channel optimization.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <AlertTriangle className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">External Factors Impact</h3>
                          <p className="text-sm text-gray-600">
                            Identified need for platform diversification due to impact of Amazon account bans on customer churn rate.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Scale className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">LTV:CAC Validation</h3>
                          <p className="text-sm text-gray-600">
                            Achieved 4.73x LTV:CAC ratio, validating business model viability and establishing foundation for future growth.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 5 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Sparkles className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">High Engagement Features</h3>
                          <p className="text-sm text-gray-600">
                            AI-driven product research, automated pricing, and multi-channel inventory sync emerged as most valued features.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 6 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Target className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Refined Target Audience</h3>
                          <p className="text-sm text-gray-600">
                            Gained deeper understanding of user needs and preferences, informing future product development priorities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Impact */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Product Impact</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Feature Usage Rate</span>
                          <span className="text-sm font-medium text-[#4ADE80]">78%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">User Satisfaction</span>
                          <span className="text-sm font-medium text-[#4ADE80]">4.2/5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Feature Requests Implemented</span>
                          <span className="text-sm font-medium text-[#4ADE80]">73%</span>
                        </div>
                      </div>
                    </div>

                    {/* Market Impact */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Market Impact</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Market Penetration</span>
                          <span className="text-sm font-medium text-[#4ADE80]">0.02%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Brand Awareness</span>
                          <span className="text-sm font-medium text-[#4ADE80]">12%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Competitor Analysis Score</span>
                          <span className="text-sm font-medium text-[#4ADE80]">8.4/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Implications */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Strategic Implications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-[#20152E]">Short-term Focus</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Platform diversification</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Feature optimization</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Churn reduction</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-[#20152E]">Mid-term Goals</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Market expansion</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Product scaling</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Team growth</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-[#20152E]">Long-term Vision</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Market leadership</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Global expansion</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Platform ecosystem</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Financial Projections Tab */}
            <TabsContent value="financials" className="space-y-6">
              {/* Revenue Model Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Revenue Model: Diversified Streams for Sustainable Growth
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        A Three-Pronged Approach: Subscription, Warehouse, and Marketplace
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      TradeWizz employs a diversified revenue model, combining recurring subscription revenue with transaction-based commissions from its integrated warehouse services and marketplace platform. This multi-faceted approach ensures a robust and scalable revenue stream.
                    </p>
                  </div>

                  {/* Revenue Streams Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Stream Card 1: Subscription Packages */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Box className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Subscription Packages</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz offers tiered subscription packages tailored to different user needs and budgets, providing a predictable and recurring revenue stream.
                          </p>
                          <div className="space-y-2 mt-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Eko</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$9.99/month</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Simple</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$39.99/month</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Premium</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$59.99/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stream Card 2: Warehouse Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Package className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Warehouse Commission</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz earns a 10% commission on transactions processed through its integrated 3PL warehouse partners, generating revenue from users' logistics and fulfillment activities.
                          </p>
                          <div className="space-y-2 mt-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                              <span className="text-sm text-gray-600">Applied to single-item shipments</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                              <span className="text-sm text-gray-600">Applied to FBA package shipments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stream Card 3: Twizz Shop Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Store className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Twizz Shop Commission</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz earns a 5% commission on all sales conducted through its integrated marketplace, Twizz Shop, connecting sellers with suppliers, manufacturers, and local workshops.
                          </p>
                          <div className="space-y-2 mt-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                              <span className="text-sm text-gray-600">Applied to total transaction value</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Distribution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Current Distribution */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Current Revenue Distribution</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Subscription Revenue</span>
                          <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Warehouse Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">25%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Marketplace Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">10%</span>
                        </div>
                      </div>
                    </div>

                    {/* Projected Distribution */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Projected Revenue Distribution (2025)</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Subscription Revenue</span>
                          <span className="text-sm font-medium text-[#4ADE80]">50%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Warehouse Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">30%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Marketplace Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Revenue Per User</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$265.70</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Monthly Recurring Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$10,893</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Revenue Growth Rate</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">27%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Gross Margin</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">79%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Projected ARR (2027) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Projected ARR (2027): Scenario Analysis
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Forecasting Annual Recurring Revenue Based on Worst, Optimal, and Best Case Scenarios
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Projected Annual Recurring Revenue (ARR) for 2027 is presented under three different scenarios: Worst Case, Optimal Case, and Best Case. These scenarios reflect varying levels of customer acquisition, retention, and adoption of the platform's revenue-generating features.
                    </p>
                  </div>

                  {/* Scenarios Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Worst Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                              <TrendingDown className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Worst Case</h3>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-red-500">$365.04K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario assumes the highest churn rates (as outlined in the ACR projections) and lower-than-expected adoption of the 3PL and Twizz Shop features.
                        </p>
                      </div>
                    </div>

                    {/* Optimal Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                              <Scale className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Optimal Case</h3>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-yellow-500">$1,231.43K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario reflects a moderate churn rate and a reasonable adoption rate for the 3PL and Twizz Shop features, based on internal projections.
                        </p>
                      </div>
                    </div>

                    {/* Best Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                              <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Best Case</h3>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-[#4ADE80]">$2,159.55K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario assumes the lowest churn rates, strong customer acquisition, and high adoption rates for the 3PL and Twizz Shop features.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Assumptions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Growth Assumptions */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Growth Assumptions</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Customer Growth Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">27%</span>
                            <span className="text-sm font-medium text-yellow-500">42%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Feature Adoption Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">45%</span>
                            <span className="text-sm font-medium text-yellow-500">65%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">85%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Revenue per Customer</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">$215</span>
                            <span className="text-sm font-medium text-yellow-500">$325</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$445</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Retention Metrics */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Retention Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Customer Retention Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">75%</span>
                            <span className="text-sm font-medium text-yellow-500">85%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">92%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Net Revenue Retention</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">95%</span>
                            <span className="text-sm font-medium text-yellow-500">115%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">135%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Expansion Revenue</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">15%</span>
                            <span className="text-sm font-medium text-yellow-500">27%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">45%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Timeline */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Growth Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="space-y-6 pl-8">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Early Growth (2024-2025)</h5>
                          <p className="text-sm text-gray-600">Focus on customer acquisition and product refinement</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Expansion Phase (2025-2026)</h5>
                          <p className="text-sm text-gray-600">Market expansion and feature adoption acceleration</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Maturity (2027)</h5>
                          <p className="text-sm text-gray-600">Stable growth and optimized unit economics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Projected EBITDA (2027) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Projected EBITDA (2027): Scenario Analysis
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Evaluating Profitability Under Different Operational Scenarios
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA) is a key indicator of a company's operating performance. This section presents the projected EBITDA for 2027 under three different scenarios: Worst Case, Optimal Case, and Best Case, reflecting varying levels of revenue, churn, and operational efficiency.
                    </p>
                  </div>

                  {/* Scenarios Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Worst Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                              <TrendingDown className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Worst Case</h3>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-red-500">$385.09K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario reflects the financial performance under the most conservative assumptions, including higher churn rates and lower customer acquisition, resulting in an EBITDA of $385.09K.
                        </p>
                      </div>
                    </div>

                    {/* Optimal Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                              <Scale className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Optimal Case</h3>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-yellow-500">$1,370.02K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario represents a moderate outlook, with balanced assumptions regarding customer retention, acquisition, and operational efficiency, projecting an EBITDA of $1,370.02K.
                        </p>
                      </div>
                    </div>

                    {/* Best Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                              <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Best Case</h3>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-[#4ADE80]">$1,921.1K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario reflects the most optimistic outlook, with low churn rates, high customer acquisition, and strong adoption of all revenue streams, resulting in an EBITDA of $1,921.1K.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Revenue Metrics */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Revenue Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Revenue Growth Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">27%</span>
                            <span className="text-sm font-medium text-yellow-500">42%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Gross Margin</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">75%</span>
                            <span className="text-sm font-medium text-yellow-500">82%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">88%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Operating Margin</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">35%</span>
                            <span className="text-sm font-medium text-yellow-500">45%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">55%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cost Structure */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Cost Structure</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Operating Expenses</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">45%</span>
                            <span className="text-sm font-medium text-yellow-500">35%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">25%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Marketing Spend</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">25%</span>
                            <span className="text-sm font-medium text-yellow-500">20%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">15%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">R&D Investment</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">15%</span>
                            <span className="text-sm font-medium text-yellow-500">20%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">25%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Timeline */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Profitability Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="space-y-6 pl-8">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Early Stage (2024-2025)</h5>
                          <p className="text-sm text-gray-600">Focus on market penetration and customer acquisition</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Growth Phase (2025-2026)</h5>
                          <p className="text-sm text-gray-600">Scaling operations and optimizing unit economics</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Maturity (2027)</h5>
                          <p className="text-sm text-gray-600">Achieving operational efficiency and stable profitability</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Key Assumptions Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Key Assumptions: Driving the Financial Projections
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Transparency in Assumptions for a Realistic Valuation
                      </p>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      The financial projections presented in this dashboard are based on a set of key assumptions regarding customer acquisition, retention, revenue generation, and operational efficiency. This section outlines the main assumptions underpinning the Worst, Optimal, and Best Case scenarios.
                    </p>
                  </div>

                  {/* Assumptions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Customer Acquisition */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Customer Acquisition</h3>
                          <p className="text-sm text-gray-600">
                            The model assumes a specific customer acquisition strategy for each scenario, with varying levels of marketing spend and acquisition efficiency. The initial customer acquisition cost (CAC) is based on the MVP test results, adjusted by the CAC Efficiency metric over time.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Initial CAC</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$7.32</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">CAC Efficiency</span>
                              <span className="text-sm font-medium text-[#4ADE80]">1.5x</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Churn Rates */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingDown className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Churn Rates</h3>
                          <p className="text-sm text-gray-600">
                            The projections incorporate different average monthly churn rates (ACR) for each scenario: Worst Case (15%), Optimal Case (10%), and Best Case (7% initially, decreasing in later years). These rates are applied to the customer base at the end of each quarter.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Worst Case ACR</span>
                              <span className="text-sm font-medium text-red-500">15%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Optimal Case ACR</span>
                              <span className="text-sm font-medium text-yellow-500">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Best Case ACR</span>
                              <span className="text-sm font-medium text-[#4ADE80]">7%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subscription Revenue */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Subscription Revenue</h3>
                          <p className="text-sm text-gray-600">
                            Revenue from subscription packages (Eko, Simple, Premium) is calculated based on the projected number of customers in each package, as determined by the Customer Membership Distribution metric. Prices for each package are assumed to remain constant.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Eko Package</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$9.99/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Simple Package</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$39.99/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Premium Package</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$59.99/mo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Warehouse Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Package className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Warehouse Commission Revenue</h3>
                          <p className="text-sm text-gray-600">
                            This revenue stream is based on the projected adoption of integrated 3PL services by different customer segments, as outlined in the Warehouse Usage Segmentation by Business Model section. A 10% commission on transactions processed through partner warehouses is applied.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Commission Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Adoption Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">45-85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Twizz Shop Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Store className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Twizz Shop Commission Revenue</h3>
                          <p className="text-sm text-gray-600">
                            This revenue stream is based on the projected adoption of the Twizz Shop marketplace by different customer segments, as outlined in the Shop Usage Percentage Segmentation by Business Model section. A 5% commission on all marketplace transactions is applied.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Commission Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Adoption Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">35-75%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Operational Costs */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Settings className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Operational Costs</h3>
                          <p className="text-sm text-gray-600">
                            The model incorporates projections for operational expenses (OPEX), including marketing, G&A, and R&D. These are based on internal estimates and industry benchmarks. The Customer Cost Efficiency metric is applied to project improvements in operational efficiency over time.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Marketing</span>
                              <span className="text-sm font-medium text-[#4ADE80]">25-35%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">G&A</span>
                              <span className="text-sm font-medium text-[#4ADE80]">15-20%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">R&D</span>
                              <span className="text-sm font-medium text-[#4ADE80]">20-25%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Discount Rate */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Calculator className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Discount Rate (WACC)</h3>
                          <p className="text-sm text-gray-600">
                            A Weighted Average Cost of Capital (WACC) of 50% is used to discount future cash flows, reflecting the high-risk nature of an early-stage startup.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">WACC</span>
                              <span className="text-sm font-medium text-[#4ADE80]">50%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">CAC Payback Period</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">2.1 months</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Gross Margin</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">79%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Operating Margin</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">45%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">R&D % of Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">20%</p>
                      </div>
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