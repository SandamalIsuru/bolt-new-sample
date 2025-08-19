import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Droplets, 
  ShoppingCart, 
  RotateCcw, 
  FileText, 
  AlertTriangle, 
  Bell, 
  Users, 
  Database,
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { NavigationItem } from '../../types';

interface SidebarProps {
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'overview', label: 'OVERVIEW', icon: 'BarChart3' },
  { id: 'dashboards', label: 'Dashboards', icon: 'BarChart3' },
  { id: 'operations', label: 'OPERATIONS', icon: 'Settings' },
  { 
    id: 'positions', 
    label: 'Positions', 
    icon: 'TrendingUp',
    children: [
      { id: 'position-management', label: 'Position Management', icon: 'TrendingUp' },
      { id: 'position-updates', label: 'Position Updates', icon: 'RotateCcw' },
      { id: 'position-transfers', label: 'Position Transfers', icon: 'RotateCcw' },
      { id: 'depository', label: 'Depository', icon: 'Database' }
    ]
  },
  { id: 'margins', label: 'Margins', icon: 'DollarSign' },
  { id: 'frtb', label: 'FRTB', icon: 'FileText' },
  { id: 'hedging', label: 'Hedging', icon: 'TrendingUp' },
  { id: 'market-data', label: 'Market Data', icon: 'BarChart3' },
  { id: 'liquidity', label: 'Liquidity', icon: 'Droplets' },
  { id: 'order-management', label: 'Order Management', icon: 'ShoppingCart' },
  { id: 'trade-management', label: 'Trade Management', icon: 'RotateCcw' },
  { id: 'settlements', label: 'Settlements', icon: 'FileText' },
  { id: 'error-queue', label: 'Error Queue', icon: 'AlertTriangle' },
  { id: 'approvals', label: 'Approvals', icon: 'FileText', badge: 84 },
  { id: 'scheduler', label: 'Scheduler', icon: 'Settings' },
  { id: 'corporate-actions', label: 'Corporate Actions', icon: 'FileText' },
  { id: 'audit-trail', label: 'Audit Trail', icon: 'FileText' },
  { id: 'reference-data', label: 'Reference Data', icon: 'Database' },
  { id: 'user-management', label: 'User Management', icon: 'Users' },
  { id: 'alerts', label: 'ALERTS', icon: 'AlertTriangle' },
  { id: 'notifications', label: 'Notifications', icon: 'Bell', badge: 182416 }
];

const iconMap: { [key: string]: React.ComponentType<any> } = {
  BarChart3,
  TrendingUp,
  DollarSign,
  Droplets,
  ShoppingCart,
  RotateCcw,
  FileText,
  AlertTriangle,
  Bell,
  Users,
  Database,
  Settings
};

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const [expandedItems, setExpandedItems] = React.useState<string[]>(['positions']);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const Icon = iconMap[item.icon] || BarChart3;
    const isActive = activeItem === item.id;
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        <div
          className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer transition-colors ${
            level === 0 ? 'mx-2' : 'mx-4'
          } ${
            isActive
              ? 'bg-blue-600 text-white rounded-md border-l-4 border-blue-400'
              : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
          } ${level > 0 ? 'text-xs' : ''}`}
          onClick={() => {
            onItemClick(item.id);
            if (hasChildren) {
              toggleExpanded(item.id);
            }
          }}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          <div className="flex items-center">
            <Icon className="w-4 h-4 mr-3" />
            <span className={level === 0 && item.label === item.label.toUpperCase() ? 'font-semibold text-xs tracking-wider' : ''}>{item.label}</span>
            {item.badge && (
              <span className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                {item.badge.toLocaleString()}
              </span>
            )}
          </div>
          {hasChildren && (
            isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children!.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-gray-900 text-white h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-lg font-semibold">BLUESHIFT</span>
        </div>
      </div>
      <nav className="py-4">
        {navigationItems.map(item => renderNavigationItem(item))}
      </nav>
    </div>
  );
};