import React from 'react';
import MRRDashboard from '@/components/MrrDashboard';

const MRRDashboardPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">MRR Analytics Dashboard</h1>
      <MRRDashboard />
    </div>
  );
};

export default MRRDashboardPage; 