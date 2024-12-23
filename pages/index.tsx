import React from 'react';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
          TradeWizz Dashboard
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Current Status Card */}
          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleNavigate('/mrr-dashboard')}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === 'Enter' && handleNavigate('/mrr-dashboard')}
          >
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Current Status</h2>
              <p className="text-gray-600">
                View current MRR analytics and performance metrics
              </p>
            </div>
          </Card>

          {/* Future Status Card */}
          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleNavigate('/future-status')}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === 'Enter' && handleNavigate('/future-status')}
          >
            <div className="space-y-4">
              <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Future Status</h2>
              <p className="text-gray-600">
                Explore future projections and valuation analysis
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 