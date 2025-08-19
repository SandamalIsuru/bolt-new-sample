import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'ETH', value: 40, color: '#3B82F6' },
  { name: 'BTC', value: 30, color: '#10B981' },
  { name: 'ADA', value: 20, color: '#F59E0B' },
  { name: 'SOL', value: 10, color: '#EF4444' }
];

export const AssetBreakdownWidget: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">On-Chain Asset Breakdown</h3>
        <button className="text-gray-400 hover:text-white">⚙️</button>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-white text-sm">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};