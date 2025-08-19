import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'ETH', rewards: 200000, fees: 150000 },
  { name: 'SOL', rewards: 250000, fees: 180000 }
];

export const RewardsFeesWidget: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Rewards and Fees</h3>
        <button className="text-gray-400 hover:text-white">⚙️</button>
      </div>
      <div className="mb-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">LAST TRADE</span>
          <span className="text-lg font-bold">0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">TREND</span>
          <span className="text-red-400">↓ 0%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">PREVIOUS CLOSING</span>
          <span className="text-lg font-bold">0.00</span>
        </div>
      </div>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Bar dataKey="rewards" fill="#10B981" />
            <Bar dataKey="fees" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
          <span className="text-xs">Rewards</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
          <span className="text-xs">Fees</span>
        </div>
      </div>
    </div>
  );
};