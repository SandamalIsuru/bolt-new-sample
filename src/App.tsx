import { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { DashboardGrid } from './components/Dashboard/DashboardGrid';

function App() {
  const [currentPage, setCurrentPage] = useState('position-management');

  const handleNavigationClick = (itemId: string) => {
    setCurrentPage(itemId);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar activeItem={currentPage} onItemClick={handleNavigationClick} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentPage={currentPage} />
        <main className="flex-1 overflow-auto">
          <DashboardGrid currentPage={currentPage} />
        </main>
      </div>
    </div>
  );
}

export default App;