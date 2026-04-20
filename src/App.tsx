import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Screen } from './types';
import { Sidebar } from './components/Sidebar';
import { HomeView } from './pages/Home';
import { FormsView } from './pages/Forms';
import { FootballView, BasketballView, CricketView, TableTennisView, BadmintonView, ChessView, VolleyballView, FutsalView } from './pages/Games';
import { ContactView } from './pages/Contact';
import { GalleryView } from './pages/Gallery';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPage = () => {
    switch (screen) {
      case 'home': return <HomeView setScreen={setScreen} />;
      case 'forms': return <FormsView />;
      case 'football': return <FootballView />;
      case 'basketball': return <BasketballView />;
      case 'cricket': return <CricketView />;
      case 'table-tennis': return <TableTennisView />;
      case 'badminton': return <BadmintonView />;
      case 'chess': return <ChessView />;
      case 'volleyball': return <VolleyballView />;
      case 'futsal': return <FutsalView />;
      case 'contact': return <ContactView />;
      case 'gallery': return <GalleryView />;
      default: return <HomeView setScreen={setScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-brand/20">
      <Sidebar 
        currentScreen={screen} 
        setScreen={setScreen} 
        isOpen={isSidebarOpen} 
        toggleClose={() => setIsSidebarOpen(false)} 
      />

      {/* Mobile hamburger only */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-40 lg:hidden bg-white shadow-md rounded-xl p-2.5 border border-outline-variant/10"
      >
        <Menu className="w-5 h-5 text-on-surface" />
      </button>

      <main className="lg:ml-[280px] min-h-screen px-6 lg:px-0 py-10 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={screen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}