import React from 'react';
import { User, Settings, RefreshCw, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold capitalize">{currentPage.replace('-', ' ')}</span>
        {currentPage === 'position-management' && (
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <Settings className="w-4 h-4" />
            <span>Position Management</span>
            <X className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm">
          <span>Real-Time Updates: Off</span>
          <RefreshCw className="w-4 h-4 cursor-pointer hover:text-blue-400" />
        </div>
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5" />
          <span className="text-sm">User Profiles</span>
          <span className="text-sm">isuru</span>
        </div>
      </div>
    </div>
  );
};