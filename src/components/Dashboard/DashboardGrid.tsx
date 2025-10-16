import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider, Layout, Layouts } from 'react-grid-layout';
import { CollateralizationWidget } from '../Widgets/CollateralizationWidget';
import { LendingValuesWidget } from '../Widgets/LendingValuesWidget';
import { PositionsTableWidget } from '../Widgets/PositionsTableWidget';
import { AssetBreakdownWidget } from '../Widgets/AssetBreakdownWidget';
import { RewardsFeesWidget } from '../Widgets/RewardsFeesWidget';
import { UserRoleManager } from '../UserRole/UserRoleManager';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DashboardGridProps {
  currentPage: string;
}

export const DashboardGrid: React.FC<DashboardGridProps> = ({ currentPage }) => {
  const [layouts, setLayouts] = useState<Layouts>({});

  const getDefaultLayout = (page: string): Layout[] => {
    const widgets = getWidgetsForPage(page);
    return widgets.map(widget => ({
      i: widget.i,
      x: widget.x,
      y: widget.y,
      w: widget.w,
      h: widget.h,
      minW: widget.minW || 2,
      minH: widget.minH || 2,
      maxW: widget.maxW,
      maxH: widget.maxH
    }));
  };

  useEffect(() => {
    const defaultLayout = getDefaultLayout(currentPage);
    setLayouts(prevLayouts => ({
      ...prevLayouts,
      lg: defaultLayout
    }));
  }, [currentPage]);

  const getWidgetsForPage = (page: string) => {
    switch (page) {
      case 'position-management':
        return [
          { i: 'collateralization', component: <CollateralizationWidget />, x: 0, y: 0, w: 3, h: 2, minW: 2, minH: 2 },
          { i: 'lending-1', component: <LendingValuesWidget title="Net Lending Values per Asset" />, x: 3, y: 0, w: 3, h: 2, minW: 2, minH: 2 },
          { i: 'lending-2', component: <LendingValuesWidget title="Net Lending Values per Asset" />, x: 6, y: 0, w: 3, h: 2, minW: 2, minH: 2 },
          { i: 'lending-3', component: <LendingValuesWidget title="Net Lending Values per Asset - Maturities (USD)" />, x: 9, y: 0, w: 3, h: 2, minW: 2, minH: 2 },
          { i: 'positions-table', component: <PositionsTableWidget />, x: 0, y: 2, w: 12, h: 4, minW: 6, minH: 3 },
          { i: 'asset-breakdown', component: <AssetBreakdownWidget />, x: 0, y: 6, w: 6, h: 3, minW: 3, minH: 2 },
          { i: 'rewards-fees', component: <RewardsFeesWidget />, x: 6, y: 6, w: 6, h: 3, minW: 3, minH: 2 }
        ];
      case 'dashboards':
        return [
          { i: 'asset-breakdown', component: <AssetBreakdownWidget />, x: 0, y: 0, w: 6, h: 4, minW: 3, minH: 2 },
          { i: 'rewards-fees', component: <RewardsFeesWidget />, x: 6, y: 0, w: 6, h: 4, minW: 3, minH: 2 },
          { i: 'collateralization', component: <CollateralizationWidget />, x: 0, y: 4, w: 4, h: 3, minW: 2, minH: 2 },
          { i: 'lending-1', component: <LendingValuesWidget title="Market Overview" />, x: 4, y: 4, w: 4, h: 3, minW: 2, minH: 2 },
          { i: 'lending-2', component: <LendingValuesWidget title="Portfolio Summary" />, x: 8, y: 4, w: 4, h: 3, minW: 2, minH: 2 }
        ];
      case 'user-management':
        return [
          { i: 'user-role-manager', component: <UserRoleManager />, x: 0, y: 0, w: 12, h: 8, minW: 8, minH: 6 }
        ];
      default:
        return [
          { i: 'welcome', component: (
            <div className="bg-gray-800 text-white p-6 rounded-lg h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to {page.replace('-', ' ').toUpperCase()}</h2>
                <p className="text-gray-400">Select a different page to see specific widgets</p>
              </div>
            </div>
          ), x: 0, y: 0, w: 12, h: 4, minW: 6, minH: 2 }
        ];
    }
  };

  const widgets = getWidgetsForPage(currentPage);

  const onLayoutChange = (layout: Layout[], allLayouts: Layouts) => {
    setLayouts(allLayouts);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        isDraggable={true}
        isResizable={true}
        compactType="vertical"
        preventCollision={false}
        margin={[16, 16]}
        containerPadding={[0, 0]}
        useCSSTransforms={true}
      >
        {widgets.map((widget) => (
          <div key={widget.i}>
            {widget.component}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};