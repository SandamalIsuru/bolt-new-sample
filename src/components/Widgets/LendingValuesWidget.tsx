import React from 'react';

interface LendingValuesWidgetProps {
  title: string;
}

export const LendingValuesWidget: React.FC<LendingValuesWidgetProps> = ({ title }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg h-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex items-center justify-center h-32">
        <span className="text-gray-400 text-lg">No data</span>
      </div>
    </div>
  );
};