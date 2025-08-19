import React from 'react';

export const CollateralizationWidget: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg h-full">
      <h3 className="text-lg font-semibold mb-4">Collateralization %</h3>
      <div className="flex items-center justify-center h-32">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#374151"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#10B981"
              strokeWidth="8"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset="251.2"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-green-400">0.00%</span>
          </div>
        </div>
      </div>
    </div>
  );
};